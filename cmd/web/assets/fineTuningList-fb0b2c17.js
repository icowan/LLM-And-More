import{d as te,x as $,r as m,o as ie,U as v,S as be,k as I,l as q,m as t,j as e,_ as s,$ as x,n as F,aB as Y,Q as he,Z as N,av as L,z as ge,V as ye,W as u,aE as xe,al as ve,am as Ve,c as ae,Y as ee,a0 as ke,at as Se,aA as Te,F as oe}from"./utils-5a8267ef.js";import{_ as Ie}from"./BaseBreadcrumb.vue_vue_type_style_index_0_lang-cf0aeddf.js";import{_ as ne}from"./UiParentCard.vue_vue_type_script_setup_true_lang-3c4d2264.js";import{A as ue}from"./AlertBlock-cd292a0b.js";import{_ as we}from"./ConfirmByInput.vue_vue_type_style_index_0_lang-0f40bd3c.js";import{_ as Ce}from"./ConfirmByClick.vue_vue_type_style_index_0_lang-e4b43f61.js";import{C as Pe}from"./ChipBoolean-d32c0096.js";import{_ as P}from"./Explain.vue_vue_type_style_index_0_lang-5ba40fa4.js";import{_ as Me}from"./UploadFile.vue_vue_type_script_setup_true_lang-6c5ac9a3.js";import{V as E}from"./VCol-9b7c01c8.js";import{V as de}from"./VRow-522ff18f.js";import{c as Ue,ae as se,e as De,V as ce,a5 as M,_ as me}from"./index-bdfe8eaa.js";import{V as $e}from"./VTextarea-e29a39b5.js";import{V as Be,a as Re,b as Ee,c as Le}from"./VExpansionPanel-e3d4823f.js";import{V as qe}from"./VCheckbox-a964a375.js";import{V as Ae}from"./VForm-d4c8b802.js";import{_ as Fe}from"./TaskOverview.vue_vue_type_script_setup_true_lang-57b49908.js";import{t as re}from"./map-85567e30.js";import{_ as Ne}from"./DialogLog.vue_vue_type_style_index_0_lang-05451b0f.js";import{I as ze}from"./IconTerminal2-210c96bf.js";import{I as We}from"./IconLoader-578d8366.js";import{I as Qe}from"./IconCircleCheckFilled-149437c6.js";import"./IconInfoCircle-2525280f.js";import"./VAlert-6bf79ec1.js";import"./Confirm-f9ddfe55.js";import"./VFileInput-ae8a1d17.js";import"./TextLog-eed03216.js";var Ye=Ue("alarm","IconAlarm",[["path",{d:"M12 13m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0",key:"svg-0"}],["path",{d:"M12 10l0 3l2 0",key:"svg-1"}],["path",{d:"M7 4l-2.75 2",key:"svg-2"}],["path",{d:"M17 4l2.75 2",key:"svg-3"}]]);const Je=te({__name:"FileList",props:{purpose:{default:""}},emits:["selected"],setup(w,{emit:B}){const V=w,U=B,l=$({list:[],total:0}),p=m(),_=m(!1),h=async(S={})=>{const[T,g]=await L.get({url:"/files",showLoading:p.value.el,data:{purpose:V.purpose,...S}});g?(l.list=g.list||[],l.total=g.total):(l.list=[],l.total=0)},k=()=>{p.value.query({page:1})},C=S=>{_.value||U("selected",S)};return ie(()=>{h()}),(S,T)=>{const g=v("el-table-column"),b=v("TableWithPager"),D=be("copy");return I(),q(de,{class:"my-0"},{default:t(()=>[e(E,{cols:"12",lg:"3",md:"4",sm:"6"},{default:t(()=>[e(Me,{"show-loading":"",label:"上传微调文件",purpose:S.purpose,"onUpload:success":k,onLoading:T[0]||(T[0]=f=>_.value=f)},null,8,["purpose"])]),_:1}),e(E,{cols:"12"},{default:t(()=>[e(b,{onQuery:h,ref_key:"tableWithPagerRef",ref:p,"row-class-name":"cursor-pointer",infos:l,height:"400px",onRowClick:C},{default:t(()=>[e(g,{label:"文件名",prop:"filename","min-width":"250px"}),e(g,{label:"文件大小",width:"150px"},{default:t(({row:f})=>[s(x(F(Y).getFileSize(f.size)),1)]),_:1}),e(g,{label:"文件地址",prop:"s3Url","min-width":"400px"},{default:t(({row:f})=>[he((I(),N("span",null,[s(x(f.s3Url),1)])),[[D,f.s3Url]])]),_:1})]),_:1},8,["infos"])]),_:1})]),_:1})}}}),z=w=>(ve("data-v-5f83b49b"),w=w(),Ve(),w),je={class:"orangeTxt"},Ge={class:"mx-auto mt-3",style:{width:"540px"}},Oe=z(()=>u("label",{class:"required"},"应用场景",-1)),He=z(()=>u("label",{class:"required"},"微调文件",-1)),Ke={class:"required"},Ze=z(()=>u("label",{class:"required"},"训练轮次",-1)),Xe=z(()=>u("label",null,"备注",-1)),et=z(()=>u("label",null,"Lora ",-1)),tt={class:"required"},lt={class:"required"},at={class:"required"},ot={class:"required"},nt={class:"required"},st={class:"required"},rt=te({__name:"createTaskPane",emits:["submit"],setup(w,{expose:B,emit:V}){const U=$({operateType:"add"}),l=$({scenario:"general",fileId:"",baseModel:null,trainEpoch:1,suffix:"",remark:"",trainBatchSize:8,evalBatchSize:32,accumulationSteps:1,procPerNode:2,learningRate:2e-5,modelMaxLength:2048,lora:!1}),p=$({estimateTime:"",readyOnly:!0}),_=m(null),h=V,k=/^\+?[1-9][0-9]*$/,C=m(),S=m(),T=m(),g=m(),b=$({scenario:[a=>!!a||"请选择应用场景"],fileId:[a=>!!a||"请选择微调文件"],baseModel:[a=>!!a||"请选择基础模型"],trainEpoch:[a=>f(a,1,512,"请输入训练轮次",!0)],trainBatchSize:[a=>f(a,1,512,"请输入训练批次",!0)],evalBatchSize:[a=>f(a,1,32,"请输入评估批次",!0)],accumulationSteps:[a=>f(a,1,32,"请输入梯度累加步数",!0)],procPerNode:[a=>f(a,1,16,"请输入GPU数量",!0)],learningRate:[a=>f(a,1e-6,1,"请输入学习率")],modelMaxLength:[a=>f(a,1,5e5,"请输入模型最大长度",!0)]}),D=m("");ge(p);const f=(a,o,n,d,c=!1)=>a!==""?a<o?`下限 ${o}`:a>n?`上限 ${n}`:c&&k.test(a)!=!0?"请输入正整数":!0:d;((a,o=300)=>{let n=null;return o==null?m(a):xe((d,c)=>({get(){return d(),a},set(i){n!=null&&(clearTimeout(n),n=null),n=setTimeout(()=>{a=i,c()},o)}}))})(l.trainEpoch);const W=()=>{T.value.show({showActions:!1})},R=a=>{T.value.hide(),_.value=a,l.fileId=a.fileId,A()},J=()=>{_.value=null,l.fileId=""},j=async(a={})=>{const[o,n]=await L.post({...a,showSuccess:!0,url:"/finetuning",data:l});n&&(C.value.hide(),h("submit"))},G=async(a={})=>{const[o,n]=await L.post({...a,showSuccess:!1,url:"/api/finetuning/estimate",data:l});n&&(p.estimateTime=n.time?n.time:"")},O=async(a={})=>{},A=()=>{l.baseModel&&l.fileId.length>0&&l.procPerNode>0&&k.test(String(l.trainEpoch))!=!1&&l.trainEpoch>0&&k.test(String(l.procPerNode))!=!1&&G()},Q=a=>{const o=g.value.$el;a.some(d=>o.querySelector(`#${d.id}`))&&(D.value="advancedSetting")},H=({valid:a,errors:o,showLoading:n})=>{a?U.operateType=="add"?j({showLoading:n}):O({showLoading:n}):Q(o)};return B({show({title:a,operateType:o}){C.value.show({title:a,refForm:S}),U.operateType=o,o=="add"&&(l.scenario="general",_.value=null,l.baseModel=null,l.fileId="",l.remark="",l.suffix="",p.estimateTime="")}}),(a,o)=>{const n=v("Select"),d=v("Dialog"),c=v("Pane");return I(),q(c,{ref_key:"refPane",ref:C,onSubmit:H},ye({default:t(()=>[u("div",Ge,[e(ue,{class:"mb-6"},{default:t(()=>[s("微调模型的时间可能会很长，微调完成之后会邮件通知您！")]),_:1}),e(Ae,{ref_key:"refForm",ref:S,class:"my-form"},{default:t(()=>[e(n,{placeholder:"请选择应用场景",rules:b.scenario,mapDictionary:{code:"textannotation_type"},modelValue:l.scenario,"onUpdate:modelValue":o[0]||(o[0]=i=>l.scenario=i)},{prepend:t(()=>[Oe]),_:1},8,["rules","modelValue"]),e(se,{rules:b.fileId,modelValue:l.fileId,"onUpdate:modelValue":o[1]||(o[1]=i=>l.fileId=i),"hide-details":"auto"},{prepend:t(()=>[He]),default:t(()=>[_.value?(I(),q(De,{key:0,closable:"",color:"info","onClick:close":J},{default:t(()=>[s(x(_.value.filename),1)]),_:1})):(I(),q(ce,{key:1,color:"info",variant:"outlined",onClick:W},{default:t(()=>[s("选择文件")]),_:1}))]),_:1},8,["rules","modelValue"]),e(n,{placeholder:"请选择基础模型",rules:b.baseModel,modelValue:l.baseModel,"onUpdate:modelValue":o[2]||(o[2]=i=>l.baseModel=i),mapAPI:{url:"/finetuning/base/model"},"hide-details":"auto",onChange:A},{prepend:t(()=>[u("label",Ke,[s("基础模型"),e(P,null,{default:t(()=>[s("基于基础模型进行微调")]),_:1})])]),_:1},8,["rules","modelValue"]),e(M,{type:"number",placeholder:"上限512","hide-details":"auto",rules:b.trainEpoch,modelValue:l.trainEpoch,"onUpdate:modelValue":o[3]||(o[3]=i=>l.trainEpoch=i),modelModifiers:{number:!0},onInput:A},{prepend:t(()=>[Ze]),_:1},8,["rules","modelValue"]),e(M,{type:"text",placeholder:"请输入微调后模型名称的后缀","hide-details":"auto",clearable:"",modelValue:l.suffix,"onUpdate:modelValue":o[4]||(o[4]=i=>l.suffix=i)},{prepend:t(()=>[u("label",null,[s("后缀 "),e(P,null,{default:t(()=>[s("微调后模型名称的后缀，通常微调名称为 ft::{模型}:{渠道}:-{随机}:{后缀}")]),_:1})])]),_:1},8,["modelValue"]),e($e,{modelValue:l.remark,"onUpdate:modelValue":o[5]||(o[5]=i=>l.remark=i),modelModifiers:{trim:!0},placeholder:"请输入你微调模型的备注",clearable:""},{prepend:t(()=>[Xe]),_:1},8,["modelValue"]),e(se,null,{default:t(()=>[e(Be,{ref_key:"refSettingExpansion",ref:g,modelValue:D.value,"onUpdate:modelValue":o[13]||(o[13]=i=>D.value=i)},{default:t(()=>[e(Re,{value:"advancedSetting",elevation:"10"},{default:t(()=>[e(Ee,{class:"text-h6"},{default:t(()=>[s("高级设置")]),_:1}),e(Le,{class:"mt-4",eager:""},{default:t(()=>[e(qe,{label:"启用Lora",modelValue:l.lora,"onUpdate:modelValue":o[6]||(o[6]=i=>l.lora=i)},{prepend:t(()=>[et]),_:1},8,["modelValue"]),e(M,{type:"number",placeholder:"请输入训练批次",rules:b.trainBatchSize,modelValue:l.trainBatchSize,"onUpdate:modelValue":o[7]||(o[7]=i=>l.trainBatchSize=i),modelModifiers:{number:!0}},{prepend:t(()=>[u("label",tt,[s("训练批次 "),e(P,null,{default:t(()=>[s("即一次训练所抓取的数据样本数量")]),_:1})])]),_:1},8,["rules","modelValue"]),e(M,{type:"number",placeholder:"请输入评估批次",rules:b.evalBatchSize,modelValue:l.evalBatchSize,"onUpdate:modelValue":o[8]||(o[8]=i=>l.evalBatchSize=i),modelModifiers:{number:!0}},{prepend:t(()=>[u("label",lt,[s("评估批次 "),e(P,null,{default:t(()=>[s("用于评估的每个 GPU/TPU 核心/CPU 的批量大小")]),_:1})])]),_:1},8,["rules","modelValue"]),e(M,{type:"number",placeholder:"请输入梯度累加步数",rules:b.accumulationSteps,modelValue:l.accumulationSteps,"onUpdate:modelValue":o[9]||(o[9]=i=>l.accumulationSteps=i),modelModifiers:{number:!0}},{prepend:t(()=>[u("label",at,[s("梯度累加步数 "),e(P,null,{default:t(()=>[s("在执行向后/更新传递之前累积梯度的更新步骤数")]),_:1})])]),_:1},8,["rules","modelValue"]),e(M,{type:"number",placeholder:"请输入使用GPU数量",rules:b.procPerNode,modelValue:l.procPerNode,"onUpdate:modelValue":o[10]||(o[10]=i=>l.procPerNode=i),modelModifiers:{number:!0},onInput:A},{prepend:t(()=>[u("label",ot,[s("使用GPU数量 "),e(P,null,{default:t(()=>[s("使用GPU数量")]),_:1})])]),_:1},8,["rules","modelValue"]),e(M,{type:"number",placeholder:"请输入学习率",rules:b.learningRate,modelValue:l.learningRate,"onUpdate:modelValue":o[11]||(o[11]=i=>l.learningRate=i),modelModifiers:{number:!0},step:1e-5},{prepend:t(()=>[u("label",nt,[s("学习率 "),e(P,null,{default:t(()=>[s("AdamW 优化器的初始学习率")]),_:1})])]),_:1},8,["rules","modelValue"]),e(M,{type:"number",placeholder:"请输入模型最大长度",rules:b.modelMaxLength,modelValue:l.modelMaxLength,"onUpdate:modelValue":o[12]||(o[12]=i=>l.modelMaxLength=i),modelModifiers:{number:!0}},{prepend:t(()=>[u("label",st,[s("模型最大长度 "),e(P,null,{default:t(()=>[s("模型支持的最大上下文长度")]),_:1})])]),_:1},8,["rules","modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},512)]),e(d,{ref_key:"refDialogUpload",ref:T,attach:"",persistent:"","max-width":"1200px","retain-focus":!1},{title:t(()=>[s(" 选择文件 ")]),default:t(()=>[e(Je,{onSelected:R,purpose:"fine-tune"})]),_:1},512)]),_:2},[p.estimateTime?{name:"txtLeft",fn:t(()=>[u("p",je,[s(" 预计训练时间："),u("span",null,x(p.estimateTime),1)])]),key:"0"}:void 0]),1536)}}});const it=me(rt,[["__scopeId","data-v-5f83b49b"]]),ut={class:"tooltip-error-message"},dt=te({__name:"TableTrainStatus",props:{item:{default:()=>({})}},emits:["open:log"],setup(w,{emit:B}){const V=w,U=B,l=ae(()=>{var h;return(h=re[V.item.trainStatus])==null?void 0:h.text}),p=ae(()=>{var h;return[(h=re[V.item.trainStatus])==null?void 0:h.textColor,"d-flex","justify-center","align-center"]}),_=()=>{U("open:log")};return(h,k)=>(I(),N("div",{class:ke(p.value)},[u("span",null,x(l.value),1),["running","success"].includes(V.item.trainStatus)?(I(),N("div",{key:0,class:"link ml-1",onClick:_},"(日志)")):ee("",!0),V.item.trainStatus==="failed"&&V.item.errorMessage?(I(),q(P,{key:1,class:"ml-1"},{default:t(()=>[u("div",ut,x(V.item.errorMessage),1)]),_:1})):ee("",!0)],2))}});const ct=me(dt,[["__scopeId","data-v-297d4594"]]),mt=["onClick"],pt=u("span",{class:"text-primary"},"取消",-1),ft=u("br",null,null,-1),_t={class:"text-primary font-weight-black"},bt=u("br",null,null,-1),Qt={__name:"fineTuningList",setup(w){const B=[{statusText:"等待中",valueText:"个任务",key:"waitingJobCount",color:"warning",bgColor:"lightwarning",icon:We},{statusText:"已完成",valueText:"个微调任务",key:"successJobCount",color:"success",bgColor:"lightsuccess",icon:Qe},{statusText:"总微调时间",valueText:"",key:"totalDurationCount",color:"secondary",bgColor:"lightprimary",icon:Ye}],V=Se(),U=m({title:"微调任务"}),l=m([{text:"模型微调",disabled:!1,href:"#"},{text:"微调任务",disabled:!0,href:"#"}]),p=$({fineTunedModel:"",trainStatus:null}),_=$({list:[],total:0}),h=m(),k=m(),C=m(),S=m(),T=$({currentJobId:""}),g=m(),b=m(""),D=m(""),f=m(),le=n=>{let d=[];const c=n.trainStatus;return d.push({text:"查看",click(){Q(n)}}),c==="running"||c==="waiting"?d.push({text:"取消",color:"error",click(){O(n)}}):(c==="failed"||c==="cancel")&&d.push({text:"删除",color:"error",click(){H(n)}}),d},W=async(n={})=>{const[d,c]=await L.get({url:"/finetuning",showLoading:k.value.el,data:{...p,...n}});c?(_.list=c.list||[],_.total=c.total):(_.list=[],_.total=0),f.value.start()},R=()=>{k.value.query({page:1})},J=()=>{k.value.query()},j=async({jobId:n})=>{D.value=n,C.value.show()},G=async()=>{let[n,d]=await L.get({url:`/api/finetuning/${D.value}`});d&&C.value.setContent(d.trainLog)},O=n=>{T.currentJobId=n.jobId,S.value.show({width:"450px",confirmText:T.currentJobId})},A=async(n={})=>{const[d,c]=await L.delete({...n,showSuccess:!0,url:`/finetuning/${T.currentJobId}/cancel`});c&&(S.value.hide(),k.value.query())},Q=({jobId:n})=>{V.push(`/model/fine-tuning/detail?jobId=${n}`)},H=n=>{b.value=n.jobId,g.value.show({width:"400px"})},a=async(n={})=>{const[d,c]=await L.delete({...n,showSuccess:!0,url:`/api/finetuning/${b.value}`});c&&(g.value.hide(),R())},o=()=>{h.value.show({title:"创建微调任务",operateType:"add"})};return ie(()=>{W()}),(n,d)=>{const c=v("Select"),i=v("refresh-button"),pe=v("ButtonsInForm"),K=v("el-tooltip"),y=v("el-table-column"),Z=v("router-link"),fe=v("ButtonsInTable"),_e=v("TableWithPager");return I(),N(oe,null,[e(Ie,{title:U.value.title,breadcrumbs:l.value},null,8,["title","breadcrumbs"]),e(ne,{class:"mb-3"},{default:t(()=>[e(Fe,{config:B,"request-url":"/finetuning/dashboard"})]),_:1}),e(ne,null,{default:t(()=>[e(de,null,{default:t(()=>[e(E,{cols:"12",lg:"3",md:"4",sm:"6"},{default:t(()=>[e(M,{density:"compact",modelValue:p.fineTunedModel,"onUpdate:modelValue":d[0]||(d[0]=r=>p.fineTunedModel=r),label:"请输入关键字","hide-details":"",clearable:"",variant:"outlined",onKeyup:Te(R,["enter"]),"onClick:clear":R},null,8,["modelValue","onKeyup"])]),_:1}),e(E,{cols:"12",lg:"3",md:"4",sm:"6"},{default:t(()=>[e(c,{onChange:R,label:"请选择状态",mapDictionary:{code:"local_trainStatus"},modelValue:p.trainStatus,"onUpdate:modelValue":d[1]||(d[1]=r=>p.trainStatus=r)},null,8,["modelValue"])]),_:1}),e(E,{cols:"12",lg:"3",md:"4",sm:"6"},{default:t(()=>[e(pe,null,{default:t(()=>[e(ce,{color:"primary",onClick:o},{default:t(()=>[s("创建微调任务")]),_:1}),e(i,{ref_key:"refreshButtonRef",ref:f,onRefresh:J},null,512)]),_:1})]),_:1}),e(E,{cols:"12"},{default:t(()=>[e(ue,null,{default:t(()=>[s(" GPU资源紧张，暂时只支持同时进行一个微调任务！ ")]),_:1})]),_:1}),e(E,{cols:"12"},{default:t(()=>[e(_e,{onQuery:W,ref_key:"tableWithPagerRef",ref:k,infos:_},{default:t(()=>[e(y,{label:"任务ID",width:"180px"},{default:t(({row:r})=>[e(K,{content:"查看详情",placement:"top"},{default:t(()=>[u("span",{class:"link",onClick:X=>Q(r)},x(r.jobId),9,mt)]),_:2},1024)]),_:1}),e(y,{label:"基础模型",width:"120px"},{default:t(({row:r})=>[e(K,{effect:"dark",content:"进入聊天操场",placement:"top"},{default:t(()=>[e(Z,{class:"link",to:{path:"/model/chat-playground",query:{modelName:r.baseModel}}},{default:t(()=>[s(x(r.baseModel),1)]),_:2},1032,["to"])]),_:2},1024)]),_:1}),e(y,{label:"训练轮次",prop:"trainEpoch","min-width":"90px"}),e(y,{label:"Lora"},{default:t(({row:r})=>[e(Pe,{modelValue:r.lora,"onUpdate:modelValue":X=>r.lora=X},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(y,{label:"训练状态","min-width":"150px"},{default:t(({row:r})=>[e(ct,{item:r,"onOpen:log":X=>j(r)},null,8,["item","onOpen:log"])]),_:1}),e(y,{label:"webshell","min-width":"90px"},{default:t(({row:r})=>[r.trainStatus==="running"?(I(),q(K,{key:0,content:"进入终端",placement:"top"},{default:t(()=>[e(Z,{class:"link",to:{path:"/model/terminal",query:{resourceType:"ft-job",serviceName:r.fineTunedModel}},target:"_blank"},{default:t(()=>[e(F(ze),{class:"align-top",size:20})]),_:2},1032,["to"])]),_:2},1024)):ee("",!0)]),_:1}),e(y,{label:"训练时长",prop:"trainDuration","min-width":"120px"}),e(y,{label:"训练进度","min-width":"90px"},{default:t(({row:r})=>[u("span",null,x(F(Y).toPercent(r.process,2)),1)]),_:1}),e(y,{label:"模型名称",width:"110px"},{default:t(({row:r})=>[r.trainStatus==="success"?(I(),q(Z,{key:0,class:"link",to:{path:"/model/model-list",query:{modelName:r.fineTunedModel}}},{default:t(()=>[s(x(r.fineTunedModel),1)]),_:2},1032,["to"])):(I(),N(oe,{key:1},[s(" -- ")],64))]),_:1}),e(y,{label:"备注","min-width":"200px","show-overflow-tooltip":""},{default:t(({row:r})=>[s(x(r.remark),1)]),_:1}),e(y,{label:"完成时间","min-width":"160px"},{default:t(({row:r})=>[s(x(r.finishedAt?F(Y).dateFormat(r.finishedAt,"YYYY-MM-DD HH:mm:ss"):"--"),1)]),_:1}),e(y,{label:"创建时间","min-width":"160px"},{default:t(({row:r})=>[s(x(F(Y).dateFormat(r.createdAt,"YYYY-MM-DD HH:mm:ss")),1)]),_:1}),e(y,{label:"操作人",prop:"trainPublisher","min-width":"150px","show-overflow-tooltip":""}),e(y,{label:"操作","min-width":"120px",fixed:"right"},{default:t(({row:r})=>[e(fe,{buttons:le(r)},null,8,["buttons"])]),_:1})]),_:1},8,["infos"])]),_:1})]),_:1})]),_:1}),e(Ne,{ref_key:"refDialogLog",ref:C,interval:20,onRefresh:G},null,512),e(we,{ref_key:"refConfirmAbort",ref:S,onSubmit:A},{text:t(()=>[s(" 此操作将会"),pt,s("正在进行的训练任务"),ft,s(" 任务ID："),u("span",_t,x(T.currentJobId),1),bt,s(" 你还要继续吗？ ")]),_:1},512),e(Ce,{ref_key:"refConfirmDelete",ref:g,onSubmit:a},{text:t(()=>[s("确定删除此任务？")]),_:1},512),e(it,{ref_key:"createTaskPaneRef",ref:h,onSubmit:R},null,512)],64)}}};export{Qt as default};