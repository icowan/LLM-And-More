import{r as _,i as A,z as w,x as S,U,k as h,l as $,m as a,j as e,_ as m,n as t,c as j,W as N,Z as B,$ as z,Y as E,X as G,ac as H,au as O,D as Q,o as W,S as X,Q as T,a3 as Y,L as Z,F as J,av as K,a8 as P,a1 as ee}from"./utils-77c08ab5.js";import{_ as ae}from"./BaseBreadcrumb.vue_vue_type_style_index_0_lang-e0949a2f.js";import{_ as D}from"./UiParentCard.vue_vue_type_script_setup_true_lang-6167d1cf.js";import{_ as te}from"./UiChildCard.vue_vue_type_script_setup_true_lang-3e799269.js";import{_ as le}from"./Explain.vue_vue_type_style_index_0_lang-18bfa29b.js";import{S as se}from"./SpeakerSelector-2eebd7db.js";import{V as C}from"./VRow-4651af54.js";import{V as u}from"./VCol-09692465.js";import{a4 as k,ae as oe,a5 as R,_ as re,O as ie,ag as ne}from"./index-733db90d.js";import{V as I}from"./VForm-88c73c89.js";import{V as de}from"./VTextarea-9873bc54.js";import{V as ue}from"./VSlider-fda49ad1.js";import{_ as me}from"./AiAudio.vue_vue_type_style_index_0_lang-c13157f3.js";import"./IconInfoCircle-d5deafef.js";import"./IconCircleCheckFilled-dfdb4048.js";const pe={__name:"Left",setup(F,{expose:b}){const v=_(),g=_(),i=A("provideSynthesisVoice"),{formData:n}=w(i),d=S({selectedSpeaker:{}}),r=S({provider:[o=>!!o||"请选择供应"],lang:[o=>!!o||"请选择语言"],speakName:[o=>!!o||"请选择发声人"]}),f=()=>{g.value.reload({lang:n.value.lang,provider:n.value.provider})};return b({validate(){return v.value.validate()}}),(o,l)=>{const p=U("Select");return h(),$(I,{ref_key:"refForm",ref:v,class:"my-form"},{default:a(()=>[e(C,null,{default:a(()=>[e(u,{cols:"12"},{default:a(()=>[e(k,{class:"mb-2"},{default:a(()=>[m("供应")]),_:1}),e(p,{mapDictionary:{code:"speak_provider"},placeholder:"请选择供应",modelValue:t(n).provider,"onUpdate:modelValue":l[0]||(l[0]=s=>t(n).provider=s),onChange:f},null,8,["modelValue"])]),_:1}),e(u,{cols:"12"},{default:a(()=>[e(k,{class:"mb-2"},{default:a(()=>[m("语言")]),_:1}),e(p,{mapDictionary:{code:"speak_lang"},placeholder:"请选择语言",modelValue:t(n).lang,"onUpdate:modelValue":l[1]||(l[1]=s=>t(n).lang=s),infos:t(i).selectedLanguage,"onUpdate:infos":l[2]||(l[2]=s=>t(i).selectedLanguage=s),onChange:f},null,8,["modelValue","infos"])]),_:1}),e(u,{cols:"12"},{default:a(()=>[e(k,{class:"mb-2 required"},{default:a(()=>[m("请选择需要合成的发声人")]),_:1}),e(oe,{rules:r.speakName,modelValue:t(n).speakName,"onUpdate:modelValue":l[5]||(l[5]=s=>t(n).speakName=s)},{default:a(()=>[e(se,{ref_key:"refSpeakerSelector",ref:g,modelValue:t(n).speakName,"onUpdate:modelValue":l[3]||(l[3]=s=>t(n).speakName=s),infos:d.selectedSpeaker,"onUpdate:infos":l[4]||(l[4]=s=>d.selectedSpeaker=s)},null,8,["modelValue","infos"])]),_:1},8,["rules","modelValue"])]),_:1})]),_:1})]),_:1},512)}}},ce={key:0,class:"text-primary font-weight-bold"},fe={style:{width:"300px"}},_e={__name:"Right",setup(F,{expose:b}){const v=_(),g=A("provideSynthesisVoice"),{formData:i}=w(g),n=S({speedConfig:{min:.5,max:2,step:.1}}),{speedConfig:d}=w(n),r=S({title:[o=>!!o||"请输入标题"],text:[o=>!!o||"请输入语音播放文本"],speed:[o=>{if(o){let{min:l,max:p}=n.speedConfig;return o<l?"语速不能低于"+l+"倍":o>p?"语速不能高于"+p+"倍":!0}else return"请设置语速"}]}),f=j(()=>{let{label:o}=g.selectedLanguage;return o?o.trim().replace(/([^(（]+)(.*)$/,"$1"):""});return b({validate(){return v.value.validate()}}),(o,l)=>{const p=U("Select");return h(),$(I,{ref_key:"refForm",ref:v,class:"my-form"},{default:a(()=>[e(C,null,{default:a(()=>[e(u,{cols:"12"},{default:a(()=>[e(k,{class:"mb-2 required"},{default:a(()=>[m("标题"),e(le,{class:"ml-2"},{default:a(()=>[m("用于列表展示和搜索，能够快速了解基本信息")]),_:1})]),_:1}),e(R,{density:"compact",variant:"outlined",placeholder:"请输入标题","hide-details":"auto",rules:r.title,modelValue:t(i).title,"onUpdate:modelValue":l[0]||(l[0]=s=>t(i).title=s),modelModifiers:{trim:!0},clearable:""},null,8,["rules","modelValue"])]),_:1}),e(u,{cols:"12"},{default:a(()=>[e(k,{class:"mb-2 required",style:{"white-space":"inherit"}},{default:a(()=>[N("div",null,[m(" 请输入"),f.value?(h(),B("span",ce,"「 "+z(f.value)+" 」",1)):E("",!0),m("语音播放文本，文本内容小于200个字(包括标点符号)。 ")])]),_:1}),e(de,{modelValue:t(i).text,"onUpdate:modelValue":l[1]||(l[1]=s=>t(i).text=s),modelModifiers:{trim:!0},rules:r.text,placeholder:"语音播放文本",counter:"",rows:"5",maxlength:"200"},null,8,["modelValue","rules"])]),_:1}),e(u,{cols:"12"},{default:a(()=>[e(k,{class:"mb-2"},{default:a(()=>[m("语气")]),_:1}),e(p,{mapDictionary:{code:"speak_tone"},placeholder:"请选择语气",modelValue:t(i).tone,"onUpdate:modelValue":l[2]||(l[2]=s=>t(i).tone=s)},null,8,["modelValue"])]),_:1}),e(u,{cols:"12"},{default:a(()=>[e(k,{class:"mb-2 required"},{default:a(()=>[m("语速")]),_:1}),N("div",fe,[e(ue,{density:"compact",modelValue:t(i).speed,"onUpdate:modelValue":l[4]||(l[4]=s=>t(i).speed=s),color:"primary",max:t(d).max,min:t(d).min,step:t(d).step,"thumb-label":"",rules:r.speed,"hide-details":"auto"},{append:a(()=>[e(R,{modelValue:t(i).speed,"onUpdate:modelValue":l[3]||(l[3]=s=>t(i).speed=s),modelModifiers:{number:!0},type:"number",density:"compact",max:t(d).max,min:t(d).min,step:t(d).step,style:{width:"80px"}},null,8,["modelValue","max","min","step"])]),_:1},8,["modelValue","max","min","step","rules"])])]),_:1}),G(o.$slots,"default")]),_:3})]),_:3},512)}}};const ve={class:"hv-center py-3"},ge={__name:"synthesisVoice",setup(F){const{mappings:b,loadDictTree:v}=H(),g=O(),i=_(),n=_(),d=_(),r=S({style:{showPreview:!1,loadingPreview:!1},formData:{provider:"",lang:"",speakName:"",text:"",title:"",speed:1,tone:null},selectedLanguage:{label:"",value:""},selectedSpeaker:{speakName:"",speakCname:"",headImg:"",speakDemo:"",gender:"",ageGroup:"",subTitle:""},selectedDigitalHuman:{name:"",cname:"",cover:"",video:""},audioInfo:{src:"",gender:"",type:"complex"}}),{style:f,formData:o,selectedSpeaker:l}=w(r);Q("provideSynthesisVoice",r);const p=_({title:"声文模块"}),s=_([{text:"声音列表",disabled:!1,href:"#"},{text:"声音合成",disabled:!0,href:"#"}]),M=c=>{r.style.loadingPreview=!0,r.style.showPreview=!0,setTimeout(()=>{ne.scrollTo(d.value.$el,500),P.assign(r.audioInfo,{src:c.s3Url,gender:c.gender})},100),setTimeout(()=>{r.style.loadingPreview=!1},500)},q=async()=>{const{valid:c}=await i.value.validate(),{valid:x}=await n.value.validate();if(c&&x){const[V,y]=await K.post({showLoading:"btn#btnSubmit",showSuccess:!0,url:"/api/voice/tts",data:P.omit(r.formData,["provider","lang"])});y?M(y):r.style.showPreview=!1}else{let V="请处理页面标错的地方后，再尝试提交";ee.warning(V)}};return W(async()=>{var y,L;await v(["speak_provider","speak_lang"]);let{provider:c,lang:x,speakName:V}=g.query;c&&((y=b.speak_provider)!=null&&y[c])&&(r.formData.provider=c),x&&((L=b.speak_lang)!=null&&L[x])&&(r.formData.lang=x),V&&(r.formData.speakName=V)}),(c,x)=>{const V=U("AiBtn"),y=X("loading");return h(),B(J,null,[e(ae,{title:p.value.title,breadcrumbs:s.value},null,8,["title","breadcrumbs"]),e(C,null,{default:a(()=>[e(u,{cols:"12",md:"6"},{default:a(()=>[e(D,null,{default:a(()=>[e(pe,{ref_key:"refFormLeft",ref:i},null,512)]),_:1})]),_:1}),e(u,{cols:"12",md:"6"},{default:a(()=>[e(D,null,{default:a(()=>[e(_e,{ref_key:"refFormRight",ref:n},{default:a(()=>[e(u,{cols:"12",class:"mt-4"},{default:a(()=>[N("div",ve,[e(V,{id:"btnSubmit",color:"secondary",width:"200",height:"48",size:"large",onClick:q},{default:a(()=>[m("开始合成")]),_:1})])]),_:1})]),_:1},512)]),_:1})]),_:1}),e(ie,null,{default:a(()=>[T(e(u,{cols:"12"},{default:a(()=>[e(D,null,{default:a(()=>[e(u,{cols:"12",class:"pt-10"},{default:a(()=>[T((h(),$(te,{title:"合成音频"},{default:a(()=>[e(me,Z({...r.audioInfo},{ref_key:"refAiAudio",ref:d}),null,16)]),_:1})),[[y,t(f).loadingPreview]])]),_:1})]),_:1})]),_:1},512),[[Y,t(f).showPreview]])]),_:1})]),_:1})],64)}}},Te=re(ge,[["__scopeId","data-v-b79e1c18"]]);export{Te as default};
