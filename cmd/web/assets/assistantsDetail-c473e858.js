import{C as te}from"./CreateAssistantPane-826b1b71.js";import{_ as ae}from"./NavBack.vue_vue_type_script_setup_true_lang-edfc09c4.js";import{d as W,k as F,l as K,m as t,j as e,_ as a,$ as d,n as R,aB as M,al as oe,am as se,W as u,ac as q,x as B,r as v,o as Y,U as V,aA as H,av as $,au as N,Z as E,F as j,at as le}from"./utils-1e76329d.js";import{_ as Q}from"./UiParentCard.vue_vue_type_script_setup_true_lang-df0964eb.js";import{_ as U}from"./UiChildCard.vue_vue_type_script_setup_true_lang-1862e430.js";import{_ as Z}from"./ConfirmByInput.vue_vue_type_style_index_0_lang-d77b4736.js";import{ae as P,_ as ne,a5 as z,V as A}from"./index-9385247e.js";import{V as _}from"./VCol-1b05b78c.js";import{V as L}from"./VRow-7ad57f36.js";import{V as re,a as ie,b as de,c as ue}from"./VWindowItem-8754cd69.js";import"./ModelSelect.vue_vue_type_script_setup_true_lang-de688e9f.js";import"./CustomUpload-379f6f9f.js";import"./IconPlus-8bf4c8bf.js";import"./VTextarea-afb7bb72.js";import"./VForm-acd39db9.js";import"./Confirm-f04a0e9f.js";const S=b=>(oe("data-v-f38990e4"),b=b(),se(),b),ce=S(()=>u("label",null,"创建人",-1)),me=S(()=>u("label",null,"模型",-1)),_e=S(()=>u("label",null,"创建时间",-1)),pe=S(()=>u("label",null,"更新时间",-1)),fe=S(()=>u("label",null,"备注",-1)),he=W({__name:"DetailBaseInfo",props:{info:{default:()=>({})}},setup(b){const r=b;return(D,w)=>(F(),K(L,{class:"my-form waterfall"},{default:t(()=>[e(_,{xs:"12",sm:"6",md:"4",lg:"3"},{default:t(()=>[e(P,{"hide-details":""},{prepend:t(()=>[ce]),default:t(()=>[a(" "+d(r.info.operator),1)]),_:1})]),_:1}),e(_,{xs:"12",sm:"6",md:"4",lg:"3"},{default:t(()=>[e(P,{"hide-details":""},{prepend:t(()=>[me]),default:t(()=>[a(" "+d(r.info.modelName),1)]),_:1})]),_:1}),e(_,{xs:"12",sm:"6",md:"4",lg:"3"},{default:t(()=>[e(P,{"hide-details":""},{prepend:t(()=>[_e]),default:t(()=>[a(" "+d(R(M).dateFormat(r.info.createdAt,"YYYY-MM-DD HH:mm:ss")),1)]),_:1})]),_:1}),e(_,{xs:"12",sm:"6",md:"4",lg:"3"},{default:t(()=>[e(P,{"hide-details":""},{prepend:t(()=>[pe]),default:t(()=>[a(" "+d(R(M).dateFormat(r.info.updatedAt,"YYYY-MM-DD HH:mm:ss")),1)]),_:1})]),_:1}),e(_,{xs:"12",sm:"6",md:"4",lg:"3"},{default:t(()=>[e(P,{"hide-details":""},{prepend:t(()=>[fe]),default:t(()=>[a(" "+d(r.info.remark),1)]),_:1})]),_:1})]),_:1}))}});const be=ne(he,[["__scopeId","data-v-f38990e4"]]),we=W({__name:"ToolsList",emits:["selected"],setup(b,{emit:r}){const D=r,{getLabels:w,loadDictTree:y}=q();y(["assistant_tool_type"]);const l=B({name:""}),s=B({list:[],total:0}),c=v(),p=async(g={})=>{const[f,o]=await $.get({url:"/tools/list",showLoading:c.value.el,data:{...l,...g}});o?(s.list=o.list||[],s.total=o.total):(s.list=[],s.total=0)},m=()=>{c.value.query({page:1})},I=g=>{D("selected",g)};return Y(()=>{p()}),(g,f)=>{const o=V("el-table-column"),n=V("TableWithPager");return F(),K(L,{class:"my-0"},{default:t(()=>[e(_,{cols:"12",lg:"3",md:"4",sm:"6"},{default:t(()=>[e(z,{modelValue:l.name,"onUpdate:modelValue":f[0]||(f[0]=T=>l.name=T),label:"请输入工具名称","hide-details":"",clearable:"",onKeyup:H(m,["enter"]),"onClick:clear":m},null,8,["modelValue","onKeyup"])]),_:1}),e(_,{cols:"12"},{default:t(()=>[e(n,{onQuery:p,ref_key:"tableWithPagerRef",ref:c,"row-class-name":"cursor-pointer",infos:s,height:"400px",onRowClick:I},{default:t(()=>[e(o,{label:"工具ID",prop:"toolId","min-width":"220px"}),e(o,{label:"工具名称",prop:"name","min-width":"200px","show-overflow-tooltip":""}),e(o,{label:"工具描述",prop:"description","min-width":"300px","show-overflow-tooltip":""}),e(o,{label:"工具类型",width:"100px"},{default:t(({row:T})=>[a(d(R(w)([["assistant_tool_type",T.toolType]])),1)]),_:1})]),_:1},8,["infos"])]),_:1})]),_:1})}}}),ye={class:"text-primary font-weight-black"},ge=u("br",null,null,-1),xe=W({__name:"ToolsTableInfo",setup(b){const{getLabels:r,loadDictTree:D}=q();D(["assistant_tool_type"]);const w=N(),{assistantId:y}=w.query,l=B({name:""}),s=B({list:[],total:0}),c=v(),p=v(),m=B({name:"",toolId:""}),I=v(),g=i=>{let x=[];return x.push({text:"删除",color:"error",click(){f(i)}}),x},f=i=>{m.toolId=i.toolId,m.name=i.name,p.value.show({width:"450px",confirmText:m.name})},o=async(i={})=>{const[x,h]=await $.delete({...i,showSuccess:!0,url:`/assistants/${y}/tools/${m.toolId}`});h&&(p.value.hide(),n())},n=async(i={})=>{const[x,h]=await $.get({url:`/assistants/${y}/tools`,showLoading:c.value.el,data:{...l,...i}});h?(s.list=h.list||[],s.total=h.total):(s.list=[],s.total=0)},T=()=>{c.value.query({page:1})},G=()=>{I.value.show({showActions:!1})},J=async i=>{const[x,h]=await $.post({showSuccess:!0,url:`/assistants/${y}/tools`,data:{toolId:i.toolId}});h&&(I.value.hide(),n())};return Y(()=>{n()}),(i,x)=>{const h=V("ButtonsInForm"),k=V("el-table-column"),O=V("ButtonsInTable"),X=V("TableWithPager"),ee=V("Dialog");return F(),E(j,null,[e(L,null,{default:t(()=>[e(_,{cols:"12",lg:"3",md:"4",sm:"6"},{default:t(()=>[e(z,{modelValue:l.name,"onUpdate:modelValue":x[0]||(x[0]=C=>l.name=C),label:"请输入工具名称","hide-details":"",clearable:"",onKeyup:H(T,["enter"]),"onClick:clear":T},null,8,["modelValue","onKeyup"])]),_:1}),e(_,{cols:"12",lg:"3",md:"4",sm:"6"},{default:t(()=>[e(h,null,{default:t(()=>[e(A,{color:"primary",onClick:G},{default:t(()=>[a("添加工具")]),_:1})]),_:1})]),_:1}),e(_,{cols:"12"},{default:t(()=>[e(X,{onQuery:n,ref_key:"tableWithPagerRef",ref:c,infos:s},{default:t(()=>[e(k,{label:"工具ID",prop:"toolId","min-width":"220px"}),e(k,{label:"工具名称",prop:"name","min-width":"200px","show-overflow-tooltip":""}),e(k,{label:"工具描述",prop:"description","min-width":"300px","show-overflow-tooltip":""}),e(k,{label:"工具类型",width:"100px"},{default:t(({row:C})=>[a(d(R(r)([["assistant_tool_type",C.toolType]])),1)]),_:1}),e(k,{label:"备注",prop:"remark","min-width":"200px"}),e(k,{label:"操作",width:"80px",fixed:"right"},{default:t(({row:C})=>[e(O,{buttons:g(C),"only-one":""},null,8,["buttons"])]),_:1})]),_:1},8,["infos"])]),_:1})]),_:1}),e(Z,{ref_key:"refConfirmDelete",ref:p,onSubmit:o},{text:t(()=>[a(" 您将要删除 "),u("span",ye,d(m.name),1),a(" 工具"),ge,a(" 确定要继续吗？ ")]),_:1},512),e(ee,{ref_key:"refDialogTools",ref:I,persistent:"","max-width":"1200px","retain-focus":!1},{title:t(()=>[a(" 选择工具 ")]),default:t(()=>[e(we,{onSelected:J})]),_:1},512)],64)}}}),ve=["textContent"],Ie={class:"text-primary font-weight-black"},Ve=u("br",null,null,-1),Ue=W({__name:"assistantsDetail",setup(b){const r=N(),D=le(),{assistantId:w}=r.query,y=v(),l=v({}),s=v(""),c=v(),p=async()=>{let[f,o]=await $.get({showLoading:!0,url:`/assistants/${w}`});o&&(l.value=o)},m=()=>{D.push(`/ai-assistant/assistants/playground?assistantId=${w}`)},I=async(f={})=>{const[o,n]=await $.post({...f,showSuccess:!0,url:`/assistants/${w}/publish`});n&&c.value.hide()},g=()=>{y.value.show({title:"编辑助手",infos:l.value,operateType:"edit"})};return Y(()=>{p()}),(f,o)=>(F(),E(j,null,[e(ae,{backUrl:"/ai-assistant/assistants/list"},{default:t(()=>[a("助手详情")]),_:1}),e(Q,{class:"mt-4"},{header:t(()=>[a(" 名称："+d(l.value.name),1)]),action:t(()=>[u("div",null,[e(A,{class:"ml-4",color:"primary",onClick:m},{default:t(()=>[a("去试试")]),_:1}),e(A,{class:"ml-4",color:"primary",onClick:g},{default:t(()=>[a("编辑")]),_:1})])]),default:t(()=>[e(be,{info:l.value},null,8,["info"])]),_:1}),e(Q,{class:"mt-5"},{header:t(()=>[e(re,{modelValue:s.value,"onUpdate:modelValue":o[0]||(o[0]=n=>s.value=n),"align-tabs":"start",color:"primary"},{default:t(()=>[e(ie,{value:1},{default:t(()=>[a("指令描述")]),_:1})]),_:1},8,["modelValue"])]),default:t(()=>[e(de,{modelValue:s.value,"onUpdate:modelValue":o[1]||(o[1]=n=>s.value=n)},{default:t(()=>[e(ue,{value:1},{default:t(()=>[e(U,{title:"指令描述"},{default:t(()=>[u("div",{class:"whitespace-pre-wrap",textContent:d(l.value.instructions)},null,8,ve)]),_:1}),e(U,{class:"mt-4",title:"工具集"},{default:t(()=>[e(xe)]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(Z,{ref_key:"refConfirmPublish",ref:c,onSubmit:I},{text:t(()=>[a(" 您将要发布 "),u("span",Ie,d(l.value.name),1),a(" 助手"),Ve,a(" 确定要继续吗？ ")]),_:1},512),e(te,{ref_key:"createAssistantPaneRef",ref:y,onSubmit:p},null,512)],64))}});export{Ue as default};