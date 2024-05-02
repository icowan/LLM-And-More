import{c as T,as as S,V as v,_ as I,J as C}from"./index-2a19813c.js";import{I as M,d as B,T as Y}from"./favicon-d1311c7f.js";import{V as b}from"./VTextarea-4601df95.js";import{d as V,c as u,k as l,Z as p,j as o,m as _,n as i,f as D,as as q,aB as z,W as n,l as x,$ as y,a0 as c,Y as E}from"./utils-7cd8a09b.js";var N=T("send","IconSend",[["path",{d:"M10 14l11 -11",key:"svg-0"}],["path",{d:"M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5",key:"svg-1"}]]);const A={class:"d-flex align-center pa-2"},U=V({__name:"SendMsg",props:{modelValue:{default:""},sendLoading:{type:Boolean,default:!1}},emits:["update:modelValue","submit","clear"],setup(m,{emit:e}){const r=m,a=e,t=S(r,"modelValue",a),s=u(()=>r.sendLoading||!t.value||t.value.trim()===""),f=d=>{d.key==="Enter"&&!d.shiftKey&&(d.preventDefault(),h())},h=()=>{s.value||a("submit")},k=()=>{a("clear")};return(d,g)=>(l(),p("div",A,[o(v,{icon:"",flat:"",onClick:k},{default:_(()=>[o(i(M),{"stroke-width":"1.5",size:20,class:"text-error"})]),_:1}),o(b,{variant:"solo","hide-details":"",modelValue:i(t),"onUpdate:modelValue":g[0]||(g[0]=w=>D(t)?t.value=w:null),color:"primary",class:"shadow-none",density:"compact",placeholder:"在此处键入用户查询（按 Shift + Enter 生成新行）","no-resize":"",onKeypress:f,"auto-grow":"",rows:1,"max-rows":4},null,8,["modelValue"]),o(v,{icon:"",variant:"text",onClick:h,class:"text-medium-emphasis",disabled:s.value},{default:_(()=>[o(i(N),{size:20})]),_:1},8,["disabled"])]))}});const W=I(U,[["__scopeId","data-v-0e7857d8"]]),$=["src"],j={key:1,class:"message-avatar__text"},H={class:"overflow-hidden"},K=V({__name:"index",props:{chatItem:{default:()=>({})}},setup(m){const e=m,r=q(),a=u(()=>{const s=r.userInfo.username;return s?s[0].toUpperCase():"Y"}),t=u(()=>z.dateFormat(e.chatItem.createdAt,"YYYY-MM-DD HH:mm:ss"));return(s,f)=>(l(),p("div",{class:c([{"flex-row-reverse":e.chatItem.msgType==="question"},"pa-5 d-flex w-100 overflow-hidden"])},[n("div",{class:c(["d-flex align-center justify-center flex-shrink-0 align-self-start",e.chatItem.msgType==="question"?"ml-2":"mr-2"])},[e.chatItem.msgType==="answer"?(l(),x(C,{key:0},{default:_(()=>[n("img",{class:"rounded-circle",src:i(B),alt:"avatar",width:"40"},null,8,$)]),_:1})):(l(),p("div",j,y(a.value),1))],2),n("div",H,[n("p",{class:c(["message-content__time",{"text-right":e.chatItem.msgType==="question"}])},y(t.value),3),n("div",{class:c(["d-flex mt-2",{"flex-row-reverse":e.chatItem.msgType==="question"}])},[e.chatItem.contentType==="text"?(l(),x(Y,{key:0,text:e.chatItem.content,"msg-type":e.chatItem.msgType,loading:e.chatItem.loading},null,8,["text","msg-type","loading"])):E("",!0)],2)])],2))}});const Z=I(K,[["__scopeId","data-v-36997323"]]);export{Z as M,W as S};
