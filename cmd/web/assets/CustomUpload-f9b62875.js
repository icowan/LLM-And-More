import{d as v,r as n,k as d,Z as p,L as C,X as h,Y as k,W as S,F as U,a2 as u,b9 as B}from"./utils-5e900427.js";import{_ as b}from"./index-81f01cfc.js";const w=["accept"],$=v({__name:"CustomUpload",props:{limit:{default:1},fileSize:{default:2},fileType:{default:()=>[]},isSuffixValid:{type:Boolean,default:!1},autoUpload:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1}},emits:["before-upload","after-upload","upload-success"],setup(f,{expose:c,emit:m}){const a=f,r=m,o=n(!1),s=n(),i=()=>{a.disabled||s.value.click()},_=e=>{const l=e.target.files[0];l&&y(l)},y=async e=>{s.value.value=null;let t=e.type;if(a.isSuffixValid&&(t=`.${e.name.split(".").pop().toLowerCase()}`),!a.fileType.includes(t)){u.warning("上传文件不符合所需的格式！");return}if(e.size/1024/1024>a.fileSize){u.warning(`上传文件大小不能超过 ${a.fileSize}M！`);return}if(r("before-upload",e),!a.autoUpload)return;o.value=!0;const[l,g]=await B.upload({url:"/files",data:{file:e}});o.value=!1,r("after-upload",{err:l,res:g})};return c({handleSelectFile:i}),(e,t)=>(d(),p(U,null,[e.$slots.trigger?(d(),p("a",C({key:0,href:"javascript: void(0)",onClick:i},e.$attrs),[h(e.$slots,"trigger",{loading:o.value},void 0,!0)],16)):k("",!0),S("input",{ref_key:"refUpload",ref:s,accept:e.fileType.join(","),class:"hide",type:"file",onChange:_},null,40,w)],64))}});const V=b($,[["__scopeId","data-v-e7e2105d"]]);export{V as C};