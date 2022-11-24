import{P as m,t as D,V as j,w as K,a as d}from"./use-outside-click.05e09a47.js";import{K as O,P as G}from"./label.6703e288.js";import{P as R,S as B}from"./description.363cd376.js";import{b as F}from"./use-resolve-button-type.525f8011.js";import{f as A,a as E}from"./use-event-listener.e89fd11f.js";import{d as H,p as I}from"./use-controllable.24eb19a9.js";import{M as f,d as h,O as L,Q as M,j as i,N as c,F as N}from"./app.c1af1f95.js";let v=Symbol("GroupContext"),X=f({name:"SwitchGroup",props:{as:{type:[Object,String],default:"template"}},setup(l,{slots:u,attrs:o}){let a=h(null),s=O({name:"SwitchLabel",props:{onClick(){!a.value||(a.value.click(),a.value.focus({preventScroll:!0}))}}}),t=R({name:"SwitchDescription"});return L(v,{switchRef:a,labelledby:s,describedby:t}),()=>m({theirProps:l,ourProps:{},slot:{},slots:u,attrs:o,name:"SwitchGroup"})}}),Y=f({name:"Switch",emits:{"update:modelValue":l=>!0},props:{as:{type:[Object,String],default:"button"},modelValue:{type:Boolean,default:void 0},defaultChecked:{type:Boolean,default:!1},name:{type:String,optional:!0},value:{type:String,optional:!0}},inheritAttrs:!1,setup(l,{emit:u,attrs:o,slots:a,expose:s}){let t=M(v,null),b=`headlessui-switch-${D()}`,[r,y]=H(i(()=>l.modelValue),e=>u("update:modelValue",e),i(()=>l.defaultChecked));function p(){y(!r.value)}let S=h(null),n=t===null?S:t.switchRef,k=F(i(()=>({as:l.as,type:o.type})),n);s({el:n,$el:n});function w(e){e.preventDefault(),p()}function P(e){e.key===d.Space?(e.preventDefault(),p()):e.key===d.Enter&&I(e.currentTarget)}function $(e){e.preventDefault()}return()=>{let{name:e,value:C,...g}=l,x={checked:r.value},V={id:b,ref:n,role:"switch",type:k.value,tabIndex:0,"aria-checked":r.value,"aria-labelledby":t==null?void 0:t.labelledby.value,"aria-describedby":t==null?void 0:t.describedby.value,onClick:w,onKeyup:P,onKeypress:$};return c(N,[e!=null&&r.value!=null?c(A,j({features:E.Hidden,as:"input",type:"checkbox",hidden:!0,readOnly:!0,checked:r.value,name:e,value:C})):null,m({ourProps:V,theirProps:{...o,...K(g,["modelValue","defaultChecked"])},slot:x,attrs:o,slots:a,name:"Switch"})])}}}),Z=G,_=B;export{Y as l,Z as n,_ as r,X as t};
