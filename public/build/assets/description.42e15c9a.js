import{t as v,P as g}from"./use-outside-click.4ced2ae8.js";import{d as l,O as j,j as b,M as h,p as O,q as P,g as D,Q as x}from"./app.d6fd6ef0.js";let p=Symbol("DescriptionContext");function M(){let t=x(p,null);if(t===null)throw new Error("Missing parent");return t}function y({slot:t=l({}),name:o="Description",props:i={}}={}){let e=l([]);function n(r){return e.value.push(r),()=>{let s=e.value.indexOf(r);s!==-1&&e.value.splice(s,1)}}return j(p,{register:n,slot:t,name:o,props:i}),b(()=>e.value.length>0?e.value.join(" "):void 0)}let C=h({name:"Description",props:{as:{type:[Object,String],default:"p"}},setup(t,{attrs:o,slots:i}){let e=M(),n=`headlessui-description-${v()}`;return O(()=>P(e.register(n))),()=>{let{name:r="Description",slot:s=l({}),props:a={}}=e,u=t,c={...Object.entries(a).reduce((d,[m,f])=>Object.assign(d,{[m]:D(f)}),{}),id:n};return g({ourProps:c,theirProps:u,slot:s.value,attrs:o,slots:i,name:r})}}});export{y as P,C as S};
