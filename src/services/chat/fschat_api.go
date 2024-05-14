package chat

import (
	"context"
	"fmt"
	"github.com/lithammer/shortuuid/v4"
	"github.com/pkg/errors"
	"github.com/pkoukk/tiktoken-go"
	"github.com/sashabaranov/go-openai"
	"reflect"
	"strings"
	"time"
)

type fsChatApiClient struct {
	options  *CreationOptions
	template Templates
}

func (s *fsChatApiClient) Completion(ctx context.Context, req openai.CompletionRequest) (res openai.CompletionResponse, err error) {
	streamResp, err := s.ChatCompletionStream(ctx, openai.ChatCompletionRequest{})
	if err != nil {
		err = errors.WithMessage(err, "failed to generate stream")
		return
	}
	var content CompletionStreamResponse
	for {
		rs, ok := <-streamResp
		if !ok {
			break
		}
		content = rs
	}
	res = openai.CompletionResponse{
		Usage: content.Usage,
		Choices: []openai.CompletionChoice{
			{
				FinishReason: string(content.Choices[0].FinishReason),
				Text:         content.Choices[0].Delta.Content,
			},
		},
	}
	return
}

func (s *fsChatApiClient) ChatCompletion(ctx context.Context, req openai.ChatCompletionRequest) (res CompletionResponse, err error) {
	streamResp, err := s.ChatCompletionStream(ctx, req)
	if err != nil {
		err = errors.WithMessage(err, "failed to generate stream")
		return
	}
	var content CompletionStreamResponse
	for {
		rs, ok := <-streamResp
		if !ok {
			break
		}
		if len(rs.Choices) > 0 && rs.Choices[0].Delta.Content != "" {
			content = rs
		}
	}
	res = CompletionResponse{
		Usage: openai.Usage{
			PromptTokens:     content.Usage.PromptTokens,
			CompletionTokens: content.Usage.CompletionTokens,
			TotalTokens:      content.Usage.TotalTokens,
		},
		ChatCompletionResponse: openai.ChatCompletionResponse{
			ID:      fmt.Sprintf("cmpl-%s", shortuuid.New()),
			Object:  "chat.completion",
			Created: time.Now().UnixMilli(),
			Model:   req.Model,
			Choices: []openai.ChatCompletionChoice{
				{
					FinishReason: content.Choices[0].FinishReason,
					Message: openai.ChatCompletionMessage{
						Role:    "assistant",
						Content: content.Choices[0].Delta.Content,
					},
				},
			},
		},
	}
	return
}

func (s *fsChatApiClient) ChatCompletionStream(ctx context.Context, req openai.ChatCompletionRequest) (stream <-chan CompletionStreamResponse, err error) {
	models, err := s.options.workerSvc.ListModels(ctx)
	if err != nil {
		err = errors.WithMessage(err, "failed to list models")
		return
	}
	var exists bool
	for _, model := range models {
		if model.ID == req.Model {
			exists = true
			break
		}
	}
	if !exists {
		err = errors.New("model not found")
		return
	}
	workerAddress, err := s.options.workerSvc.GetWorkerAddress(ctx, req.Model)
	if err != nil {
		err = errors.WithMessage(err, "failed to get worker address")
		return
	}
	var maxTokens int
	//prompts := s.processInput(req.Model, req.Messages)
	//for _, prompt := range prompts {
	//	maxTokens, err = s.options.workerSvc.WorkerCheckLength(ctx, workerAddress, req.Model, req.MaxTokens, prompt)
	//	if err != nil {
	//		err = errors.WithMessage(err, "failed to check length")
	//		_ = level.Warn(logger).Log("msg", "failed to check length", "err", err)
	//		return res, err
	//	}
	//}
	//_ = level.Info(logger).Log("msg", "max tokens", "maxTokens", maxTokens)
	if maxTokens != 0 && maxTokens < req.MaxTokens {
		req.MaxTokens = maxTokens
	}
	if req.MaxTokens == 0 {
		req.MaxTokens = 2048
	}

	dot := make(chan CompletionStreamResponse)
	genParams, err := s.genParams(ctx, req, workerAddress)
	if err != nil {
		err = errors.WithMessage(err, "failed to get gen params")
		return
	}
	streamResp, err := s.options.workerSvc.WorkerGenerateStream(ctx, workerAddress, genParams)
	if err != nil {
		err = errors.WithMessage(err, "failed to generate stream")
		return
	}

	go func() {
		now := time.Now().UnixMilli()
		defer close(dot)
		streamId := fmt.Sprintf("cmpl-%s", shortuuid.New())
		for {
			content, ok := <-streamResp
			if !ok {
				break
			}
			if content.ErrorCode != 0 {
				err = errors.New(content.Text)
				return
			}
			text := content.Text
			var previousText string
			// 替换所有的Unicode替代字符\ufffd为空字符串
			decodedUnicode := strings.Replace(text, "\ufffd", "", -1)

			// 获取新的字符串，它是当前文本去掉与之前文本相同部分后的结果
			deltaText := decodedUnicode
			if len(previousText) < len(decodedUnicode) {
				deltaText = decodedUnicode[len(previousText):]
			}

			// 更新previous_text变量为当前文本，但只在当前文本的长度大于previous_text的长度时
			if len(decodedUnicode) > len(previousText) {
				previousText = decodedUnicode
			}

			dot <- CompletionStreamResponse{
				Usage: struct {
					PromptTokens     int `json:"prompt_tokens"`
					CompletionTokens int `json:"completion_tokens"`
					TotalTokens      int `json:"total_tokens"`
				}{PromptTokens: content.Usage.PromptTokens, CompletionTokens: content.Usage.CompletionTokens, TotalTokens: content.Usage.TotalTokens},
				ChatCompletionStreamResponse: openai.ChatCompletionStreamResponse{
					ID:      streamId,
					Object:  "chat.completion.chunk",
					Created: now,
					Model:   req.Model,
					Choices: []openai.ChatCompletionStreamChoice{
						{
							FinishReason: openai.FinishReason(content.FinishReason),
							Delta: openai.ChatCompletionStreamChoiceDelta{
								Content: deltaText,
								Role:    "assistant",
							},
						},
					},
				},
			}
		}
	}()

	return dot, nil
}

func (s *fsChatApiClient) Models(ctx context.Context) (res []openai.Model, err error) {
	models, err := s.options.workerSvc.ListModels(ctx)
	if err != nil {
		err = errors.WithMessage(err, "failed to list models")
		return nil, err
	}
	for _, model := range models {
		res = append(res, openai.Model{
			ID:   model.ID,
			Root: model.Root,
		})
	}
	return
}

func (s *fsChatApiClient) Embeddings(ctx context.Context, req openai.EmbeddingRequest) (res openai.EmbeddingResponse, err error) {
	//TODO implement me
	panic("implement me")
}

func NewFsChatApi(opts ...CreationOption) Service {
	options := &CreationOptions{
		endpoints: []Endpoint{
			{
				Host:     "http://localhost:8000/v1",
				Token:    "",
				Platform: "localai",
			},
		},
	}
	for _, opt := range opts {
		opt(options)
	}
	tp := NewTemplates()
	return &fsChatApiClient{
		options:  options,
		template: register(tp),
	}
}

func register(tp Templates) Templates {
	tp.Register(context.Background(), "llama-3", Conversation{
		StopStr:        []string{"<|eot_id|>"},
		Sep:            "",
		Sep2:           "",
		StopTokenIds:   []int{128001, 128009},
		Name:           "llama-3",
		SepStyle:       int(LLAMA3),
		Roles:          []string{"user", "assistant"},
		SystemTemplate: "<|start_header_id|>system<|end_header_id|>\n\n{system_message}<|eot_id|>",
		SystemMessage:  "You are a helpful assistant.",
	})
	tp.Register(context.Background(), "qwen", Conversation{
		SystemMessage:  "You are a helpful assistant.",
		SystemTemplate: "<|im_start|>system\n{system_message}",
		StopTokenIds:   []int{151643, 151644, 151645},
		Name:           "qwen",
		SepStyle:       int(CHATML),
		Sep:            "<|im_end|>",
		Roles:          []string{"<|im_start|>user", "<|im_start|>assistant"},
		StopStr:        []string{"<|endoftext|>"},
	})
	tp.Register(context.Background(), "chatglm3", Conversation{
		SystemMessage:  "You are a helpful assistant.",
		SystemTemplate: "<|system|>\n{system_message}",
		StopTokenIds:   []int{64795, 64797, 2},
		Name:           "chatglm3",
		SepStyle:       int(CHATGLM3),
		Sep:            "",
		Roles:          []string{"<|user|>", "<|assistant|>"},
		StopStr:        []string{"<|observation|>", "<|user|>", "</s>"},
	})
	tp.Register(context.Background(), "openbuddy-llama3", Conversation{
		SystemMessage:  "<|role|>system<|says|>You(assistant) are a helpful, respectful and honest INTP-T AI Assistant named Buddy. You are talking to a human(user).\nAlways answer as helpfully and logically as possible, while being safe. Your answers should not include any harmful, political, religious, unethical, racist, sexist, toxic, dangerous, or illegal content. Please ensure that your responses are socially unbiased and positive in nature.\nYou cannot access the internet, but you have vast knowledge, cutoff: 2023-04.\nYou are trained by OpenBuddy team, (https://openbuddy.ai, https://github.com/OpenBuddy/OpenBuddy), not related to GPT or OpenAI.<|end|>\n<|role|>user<|says|>History input 1<|end|>\n<|role|>assistant<|says|>History output 1<|end|>\n<|role|>user<|says|>History input 2<|end|>\n<|role|>assistant<|says|>History output 2<|end|>\n<|role|>user<|says|>Current input<|end|>\n<|role|>assistant<|says|>",
		SystemTemplate: "",
		StopTokenIds:   []int{},
		Name:           "openbuddy-llama3",
		SepStyle:       int(OPENBUDDY_LLAMA3),
		Sep:            "\n",
		Roles:          []string{"user", "assistant"},
		StopStr:        nil,
	})
	tp.Register(context.Background(), "baichuan2", Conversation{
		StopTokenIds: []int{},
		Name:         "baichuan2",
		SepStyle:     int(NO_COLON_SINGLE),
		Sep:          "",
		Roles:        []string{"<reserved_106>", "<reserved_107>"},
		StopStr:      nil,
	})
	return tp
}

func (s *fsChatApiClient) genParams(ctx context.Context, req openai.ChatCompletionRequest, workerAddress string) (params GenerateStreamParams, err error) {

	conv, ok := s.template.GetByModelName(ctx, req.Model)
	if !ok {
		err = errors.New("failed to get conv template")
		return
	}

	for _, v := range req.Messages {
		if v.Role == "system" {
			conv.SetSystemMessage(v.Content)
		} else if v.Role == "user" {
			if v.MultiContent != nil {
				var textList []string
				for _, item := range v.MultiContent {
					if item.Type == openai.ChatMessagePartTypeImageURL {
						if item.ImageURL != nil {
							conv.AppendMessage(conv.Roles[0], ImagePlaceholderStr+item.ImageURL.URL)
						}
					} else {
						textList = append(textList, item.Text)
					}
				}
				text := strings.Join(textList, "\n")
				conv.AppendMessage(conv.Roles[0], text)
			} else {
				conv.AppendMessage(conv.Roles[0], v.Content)
			}
		} else if v.Role == "assistant" {
			conv.AppendMessage(conv.Roles[1], v.Content)
		}
	}
	conv.AppendMessage(conv.Roles[1], "")

	//convTemplate, err := s.options.workerSvc.WorkerGetConvTemplate(ctx, workerAddress, req.Model)
	//if err != nil {
	//	err = errors.WithMessage(err, "failed to get conv template")
	//	return
	//}
	prompt := conv.GetPrompt()

	if req.Stop == nil && conv.StopStr != nil {
		req.Stop = append(req.Stop, conv.StopStr...)
	}

	genParams := GenerateStreamParams{
		Model:            req.Model,
		Prompt:           prompt,
		Temperature:      req.Temperature,
		TopP:             req.TopP,
		TopK:             -1,
		PresencePenalty:  req.PresencePenalty,
		FrequencyPenalty: req.FrequencyPenalty,
		MaxNewTokens:     req.MaxTokens,
		StopTokenIds:     conv.StopTokenIds,
		Stop:             req.Stop,
		Echo:             false,
	}
	if req.N > 0 {
		genParams.N = &req.N
	}
	if req.LogProbs {
		logProbs := true
		genParams.Logprobs = &logProbs
	}

	return genParams, nil
}

func (s *fsChatApiClient) processInput(modelName string, inp any) (newInp []string) {
	fmt.Println(reflect.TypeOf(inp))
	if reflect.TypeOf(inp).Name() == "string" {
		newInp = []string{inp.(string)}
	} else if reflect.TypeOf(inp).Name() == "[]any" {
		fastInp := inp.([]any)
		if reflect.TypeOf(fastInp[0]).Name() == "int" {
			decoding, err := tiktoken.EncodingForModel(modelName)
			if err != nil {
				model := "cl100k_base"
				decoding, err = tiktoken.GetEncoding(model)
			}
			newInp = []string{decoding.Decode(inp.([]int))}
		} else if reflect.TypeOf(fastInp[0]).Name() == "[]int" {
			decoding, err := tiktoken.EncodingForModel(modelName)
			if err != nil {
				model := "cl100k_base"
				decoding, err = tiktoken.GetEncoding(model)
			}
			for _, text := range inp.([][]int) {
				newInp = append(newInp, decoding.Decode(text))
			}
		}
	}
	return
}
