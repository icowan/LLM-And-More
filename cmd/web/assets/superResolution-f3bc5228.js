import{_ as Q}from"./BaseBreadcrumb.vue_vue_type_style_index_0_lang-ba201875.js";import{_ as I}from"./UiParentCard.vue_vue_type_script_setup_true_lang-26d4ddeb.js";import{d as E,x,r as d,c as j,U as c,k as b,l as P,m as t,j as e,Y as T,Z as R,W as p,$ as B,_ as y,F as $,av as D,al as A,am as O,ac as J,o as Y,n as Z}from"./utils-1d42a8ce.js";import{_ as G}from"./PreviewImage.vue_vue_type_script_setup_true_lang-1db092bb.js";import{V as v}from"./VCol-8f634d17.js";import{M as H,V as L,_ as K,J as F}from"./index-19641142.js";import{V as X}from"./VForm-5ef8cb3b.js";import{V as ee}from"./VFileInput-49a8031d.js";import{V as te}from"./VSlider-114f7742.js";import{V as ae}from"./VCheckbox-c6dd6a86.js";import{V as W}from"./VRow-344d3b15.js";import{C as le}from"./ChipBoolean-e53781c5.js";const S=g=>(A("data-v-8505c93e"),g=g(),O(),g),oe=S(()=>p("label",{class:"required"},"上传图像",-1)),ne=S(()=>p("label",{class:"required"},"模型",-1)),re={class:"text-center",style:{width:"28px"}},se=S(()=>p("label",null,"降噪强度",-1)),de=S(()=>p("label",null,"面部增强",-1)),ie=E({__name:"CreateSuperPane",emits:["submit"],setup(g,{expose:w,emit:U}){const k=U,i=x({operateType:"add"}),u=d(),f=d(),a=x({file:[],modelName:null,denoiseStrength:0,faceEnhance:!1}),_=d(!1),m=d(""),h=d(""),V=j({get(){return i.operateType==="edit"?h.value:a.file&&a.file.length>0?URL.createObjectURL(a.file[0]):""},set(r){h.value=r}}),C=async()=>{let{valid:r}=await f.value.validate();if(r){a.modelName!=="realesr-general-x4v3"&&(a.denoiseStrength=0),_.value=!0;const[o,s]=await D.upload({url:"/esrgan/image",data:a});s&&(m.value=s.data.s3Url,k("submit")),_.value=!1}};return w({show({title:r,operateType:o,infos:s}){u.value.show({title:r,width:"1000px",hasSubmitBtn:!1}),i.operateType=o,i.operateType==="add"?(a.file=[],a.modelName="",a.denoiseStrength=0,a.faceEnhance=!1,m.value=""):(h.value=s.inputS3Url,m.value=s.outputS3Url)}}),(r,o)=>{const s=c("Select"),N=c("Pane");return b(),P(N,{ref_key:"refPane",ref:u},{default:t(()=>[e(W,null,{default:t(()=>[e(v,{cols:"12",md:"6"},{default:t(()=>[e(I,{title:"输入"},{default:t(()=>[V.value?(b(),P(H,{key:0,src:V.value,height:"250px",alt:"previewImageUrl",cover:"",class:"rounded-md align-end text-right mb-5"},null,8,["src"])):T("",!0),i.operateType==="add"?(b(),R($,{key:1},[e(X,{ref_key:"refForm",ref:f,class:"my-form"},{default:t(()=>[e(ee,{modelValue:a.file,"onUpdate:modelValue":o[0]||(o[0]=l=>a.file=l),"prepend-icon":null,accept:"image/*",label:"请上传图片","hide-details":"auto",variant:"outlined",rules:[l=>l.length>0||"请上传图片"]},{prepend:t(()=>[oe]),_:1},8,["modelValue","rules"]),e(s,{placeholder:"请选择模型",mapDictionary:{code:"esrgan_model_type"},modelValue:a.modelName,"onUpdate:modelValue":o[1]||(o[1]=l=>a.modelName=l),rules:[l=>!!l||"请选择模型"],defaultFirst:""},{prepend:t(()=>[ne]),_:1},8,["modelValue","rules"]),a.modelName==="realesr-general-x4v3"?(b(),P(te,{key:0,modelValue:a.denoiseStrength,"onUpdate:modelValue":o[2]||(o[2]=l=>a.denoiseStrength=l),color:"primary",max:1,min:0,step:.1,"hide-details":"auto","thumb-label":""},{append:t(()=>[p("div",re,B(a.denoiseStrength),1)]),prepend:t(()=>[se]),_:1},8,["modelValue"])):T("",!0),e(ae,{modelValue:a.faceEnhance,"onUpdate:modelValue":o[3]||(o[3]=l=>a.faceEnhance=l),color:"primary"},{prepend:t(()=>[de]),_:1},8,["modelValue"])]),_:1},512),e(L,{color:"primary",block:"",size:"large",flat:"",loading:_.value,onClick:C},{default:t(()=>[y("开始生成")]),_:1},8,["loading"])],64)):T("",!0)]),_:1})]),_:1}),e(v,{cols:"12",md:"6"},{default:t(()=>[e(I,{title:"输出"},{default:t(()=>[e(G,{loading:_.value,url:m.value,height:"250px"},null,8,["loading","url"])]),_:1})]),_:1})]),_:1})]),_:1},512)}}});const ue=K(ie,[["__scopeId","data-v-8505c93e"]]),me=["src"],ce=["src"],Ue=E({__name:"superResolution",setup(g){const{getLabels:w}=J(),U=d({title:"超分列表"}),k=d([{text:"图像服务",disabled:!1,href:"#"},{text:"超分列表",disabled:!0,href:"#"}]),i=x({modelType:"esrgan",modelName:null}),u=x({list:[],total:0}),f=d(),a=d(),_=r=>{let o=[];return o.push({text:"查看",color:"info",click(){C(r)}}),o},m=async(r={})=>{const[o,s]=await D.get({url:"/esrgan/list",showLoading:a.value.el,data:{...i,...r}});s?(u.list=s.list||[],u.total=s.total):(u.list=[],u.total=0)},h=()=>{a.value.query({page:1})},V=()=>{f.value.show({title:"创建超分",operateType:"add"})},C=r=>{f.value.show({title:"查看",infos:r,operateType:"edit"})};return Y(()=>{m()}),(r,o)=>{const s=c("Select"),N=c("ButtonsInForm"),l=c("el-table-column"),q=c("ButtonsInTable"),z=c("TableWithPager");return b(),R($,null,[e(Q,{title:U.value.title,breadcrumbs:k.value},null,8,["title","breadcrumbs"]),e(I,null,{default:t(()=>[e(W,null,{default:t(()=>[e(v,{cols:"12",lg:"3",md:"4",sm:"6"},{default:t(()=>[e(s,{modelValue:i.modelName,"onUpdate:modelValue":o[0]||(o[0]=n=>i.modelName=n),mapDictionary:{code:"esrgan_model_type"},label:"请选择模型","hide-details":"",onChange:h},null,8,["modelValue"])]),_:1}),e(v,{cols:"12",lg:"3",md:"4",sm:"6"},{default:t(()=>[e(N,null,{default:t(()=>[e(L,{color:"primary",onClick:V},{default:t(()=>[y("创建超分")]),_:1})]),_:1})]),_:1}),e(v,{cols:"12"},{default:t(()=>[e(z,{onQuery:m,ref_key:"tableWithPagerRef",ref:a,infos:u},{default:t(()=>[e(l,{label:"原图","min-width":"150px"},{default:t(({row:n})=>[e(F,{size:"80",rounded:"md"},{default:t(()=>[p("img",{src:n.inputS3Url,alt:"原图",height:"80"},null,8,me)]),_:2},1024)]),_:1}),e(l,{label:"超分后","min-width":"150px"},{default:t(({row:n})=>[e(F,{size:"80",rounded:"md"},{default:t(()=>[p("img",{src:n.outputS3Url,alt:"超分后",height:"80"},null,8,ce)]),_:2},1024)]),_:1}),e(l,{label:"超分模型","min-width":"160px"},{default:t(({row:n})=>[y(B(Z(w)([["esrgan_model_type",n.modelName]])),1)]),_:1}),e(l,{label:"是否面部增强","min-width":"120px"},{default:t(({row:n})=>[e(le,{modelValue:n.faceEnhance,"onUpdate:modelValue":M=>n.faceEnhance=M},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(l,{label:"降噪强度","min-width":"100px"},{default:t(({row:n})=>[y(B(n.modelName==="realesr-general-x4v3"?n.denoiseStrength:"-"),1)]),_:1}),e(l,{label:"操作人",prop:"operatorEmail","min-width":"150px","show-overflow-tooltip":""}),e(l,{label:"操作",width:"80px",fixed:"right"},{default:t(({row:n})=>[e(q,{buttons:_(n),onlyOne:""},null,8,["buttons"])]),_:1})]),_:1},8,["infos"])]),_:1})]),_:1})]),_:1}),e(ue,{ref_key:"createSuperPaneRef",ref:f,onSubmit:h},null,512)],64)}}});export{Ue as default};