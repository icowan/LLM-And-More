import{d as i,au as d,x as _,D as f,ay as v,U as C,k as s,l as a,m as g,az as h,n as T,O as P}from"./utils-7cd8a09b.js";import{a3 as c}from"./index-2a19813c.js";const w=i({__name:"AspectPage",setup(x){const r=d(),t=_({scrollTop:{},methods:{refreshListPage(){}}});f("provideAspectPage",t);const l=e=>e.matched[e.matched.length-1].components.default.__name,p=e=>(r.meta.aspectPageInclude||[]).includes(e);return v((e,m,n)=>{let o=l(m),u=l(e);p(o)&&(t.scrollTop[o]=c(document).scrollTop()),p(u)?c(document).scrollTop(t.scrollTop[u]||"0"):c(document).scrollTop(0),n()}),(e,m)=>{const n=C("router-view");return s(),a(n,null,{default:g(({Component:o})=>[(s(),a(h,{include:T(r).meta.aspectPageInclude||[]},[(s(),a(P(o)))],1032,["include"]))]),_:1})}}});export{w as default};
