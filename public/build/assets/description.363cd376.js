import{t as v,P as g}from"./use-outside-click.05e09a47.js";import{d as l,O as h,j,M as b,p as O,q as P,h as D,Q as x}from"./app.c1af1f95.js";let p=Symbol("DescriptionContext");function M(){let t=x(p,null);if(t===null)throw new Error("Missing parent");return t}function y({slot:t=l({}),name:o="Description",props:i={}}={}){let e=l([]);function n(r){return e.value.push(r),()=>{let s=e.value.indexOf(r);s!==-1&&e.value.splice(s,1)}}return h(p,{register:n,slot:t,name:o,props:i}),j(()=>e.value.length>0?e.value.join(" "):void 0)}let C=b({name:"Description",props:{as:{type:[Object,String],default:"p"}},setup(t,{attrs:o,slots:i}){let e=M(),n=`headlessui-description-${v()}`;return O(()=>P(e.register(n))),()=>{let{name:r="Description",slot:s=l({}),props:a={}}=e,u=t,c={...Object.entries(a).reduce((d,[m,f])=>Object.assign(d,{[m]:D(f)}),{}),id:n};return g({ourProps:c,theirProps:u,slot:s.value,attrs:o,slots:i,name:r})}}});export{y as P,C as S};
