import{e as F,T as A,F as N,M as $,o as f,c as L,u as j,l as k,P as M,t as w,p as B,R as D,a as p,w as K}from"./use-outside-click.4ced2ae8.js";import{x as U,a as g}from"./calculate-active-index.804d077d.js";import{P as O,M as P,d as S,j as x,O as V,p as E,q as W,Q as _,U as h}from"./app.d6fd6ef0.js";import{b as q}from"./use-resolve-button-type.ddd396ff.js";function Q({container:n,accept:m,walk:I,enabled:d}){O(()=>{let e=n.value;if(!e||d!==void 0&&!d.value)return;let c=F(n);if(!c)return;let o=Object.assign(r=>m(r),{acceptNode:m}),v=c.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,o,!1);for(;v.nextNode();)I(v.currentNode)})}var H=(n=>(n[n.Open=0]="Open",n[n.Closed=1]="Closed",n))(H||{}),J=(n=>(n[n.Pointer=0]="Pointer",n[n.Other=1]="Other",n))(J||{});function z(n){requestAnimationFrame(()=>requestAnimationFrame(n))}let C=Symbol("MenuContext");function y(n){let m=_(C,null);if(m===null){let I=new Error(`<${n} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(I,y),I}return m}let ee=P({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup(n,{slots:m,attrs:I}){let d=S(1),e=S(null),c=S(null),o=S([]),v=S(""),r=S(null),b=S(1);function s(u=a=>a){let a=r.value!==null?o.value[r.value]:null,l=K(u(o.value.slice()),R=>f(R.dataRef.domRef)),i=a?l.indexOf(a):null;return i===-1&&(i=null),{items:l,activeItemIndex:i}}let t={menuState:d,buttonRef:e,itemsRef:c,items:o,searchQuery:v,activeItemIndex:r,activationTrigger:b,closeMenu:()=>{d.value=1,r.value=null},openMenu:()=>d.value=0,goToItem(u,a,l){let i=s(),R=U(u===g.Specific?{focus:g.Specific,id:a}:{focus:u},{resolveItems:()=>i.items,resolveActiveIndex:()=>i.activeItemIndex,resolveId:T=>T.id,resolveDisabled:T=>T.dataRef.disabled});v.value="",r.value=R,b.value=l!=null?l:1,o.value=i.items},search(u){let a=v.value!==""?0:1;v.value+=u.toLowerCase();let l=(r.value!==null?o.value.slice(r.value+a).concat(o.value.slice(0,r.value+a)):o.value).find(R=>R.dataRef.textValue.startsWith(v.value)&&!R.dataRef.disabled),i=l?o.value.indexOf(l):-1;i===-1||i===r.value||(r.value=i,b.value=1)},clearSearch(){v.value=""},registerItem(u,a){let l=s(i=>[...i,{id:u,dataRef:a}]);o.value=l.items,r.value=l.activeItemIndex,b.value=1},unregisterItem(u){let a=s(l=>{let i=l.findIndex(R=>R.id===u);return i!==-1&&l.splice(i,1),l});o.value=a.items,r.value=a.activeItemIndex,b.value=1}};return A([e,c],(u,a)=>{var l;t.closeMenu(),N(a,$.Loose)||(u.preventDefault(),(l=f(e))==null||l.focus())},x(()=>d.value===0)),V(C,t),L(x(()=>j(d.value,{[0]:k.Open,[1]:k.Closed}))),()=>{let u={open:d.value===0};return M({ourProps:{},theirProps:n,slot:u,slots:m,attrs:I,name:"Menu"})}}}),te=P({name:"MenuButton",props:{disabled:{type:Boolean,default:!1},as:{type:[Object,String],default:"button"}},setup(n,{attrs:m,slots:I,expose:d}){let e=y("MenuButton"),c=`headlessui-menu-button-${w()}`;d({el:e.buttonRef,$el:e.buttonRef});function o(s){switch(s.key){case p.Space:case p.Enter:case p.ArrowDown:s.preventDefault(),s.stopPropagation(),e.openMenu(),h(()=>{var t;(t=f(e.itemsRef))==null||t.focus({preventScroll:!0}),e.goToItem(g.First)});break;case p.ArrowUp:s.preventDefault(),s.stopPropagation(),e.openMenu(),h(()=>{var t;(t=f(e.itemsRef))==null||t.focus({preventScroll:!0}),e.goToItem(g.Last)});break}}function v(s){switch(s.key){case p.Space:s.preventDefault();break}}function r(s){n.disabled||(e.menuState.value===0?(e.closeMenu(),h(()=>{var t;return(t=f(e.buttonRef))==null?void 0:t.focus({preventScroll:!0})})):(s.preventDefault(),e.openMenu(),z(()=>{var t;return(t=f(e.itemsRef))==null?void 0:t.focus({preventScroll:!0})})))}let b=q(x(()=>({as:n.as,type:m.type})),e.buttonRef);return()=>{var s;let t={open:e.menuState.value===0},u={ref:e.buttonRef,id:c,type:b.value,"aria-haspopup":!0,"aria-controls":(s=f(e.itemsRef))==null?void 0:s.id,"aria-expanded":n.disabled?void 0:e.menuState.value===0,onKeydown:o,onKeyup:v,onClick:r};return M({ourProps:u,theirProps:n,slot:t,attrs:m,slots:I,name:"MenuButton"})}}}),ae=P({name:"MenuItems",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0}},setup(n,{attrs:m,slots:I,expose:d}){let e=y("MenuItems"),c=`headlessui-menu-items-${w()}`,o=S(null);d({el:e.itemsRef,$el:e.itemsRef}),Q({container:x(()=>f(e.itemsRef)),enabled:x(()=>e.menuState.value===0),accept(t){return t.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:t.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(t){t.setAttribute("role","none")}});function v(t){var u;switch(o.value&&clearTimeout(o.value),t.key){case p.Space:if(e.searchQuery.value!=="")return t.preventDefault(),t.stopPropagation(),e.search(t.key);case p.Enter:if(t.preventDefault(),t.stopPropagation(),e.activeItemIndex.value!==null){let a=e.items.value[e.activeItemIndex.value];(u=f(a.dataRef.domRef))==null||u.click()}e.closeMenu(),h(()=>{var a;return(a=f(e.buttonRef))==null?void 0:a.focus({preventScroll:!0})});break;case p.ArrowDown:return t.preventDefault(),t.stopPropagation(),e.goToItem(g.Next);case p.ArrowUp:return t.preventDefault(),t.stopPropagation(),e.goToItem(g.Previous);case p.Home:case p.PageUp:return t.preventDefault(),t.stopPropagation(),e.goToItem(g.First);case p.End:case p.PageDown:return t.preventDefault(),t.stopPropagation(),e.goToItem(g.Last);case p.Escape:t.preventDefault(),t.stopPropagation(),e.closeMenu(),h(()=>{var a;return(a=f(e.buttonRef))==null?void 0:a.focus({preventScroll:!0})});break;case p.Tab:t.preventDefault(),t.stopPropagation();break;default:t.key.length===1&&(e.search(t.key),o.value=setTimeout(()=>e.clearSearch(),350));break}}function r(t){switch(t.key){case p.Space:t.preventDefault();break}}let b=B(),s=x(()=>b!==null?b.value===k.Open:e.menuState.value===0);return()=>{var t,u;let a={open:e.menuState.value===0},l={"aria-activedescendant":e.activeItemIndex.value===null||(t=e.items.value[e.activeItemIndex.value])==null?void 0:t.id,"aria-labelledby":(u=f(e.buttonRef))==null?void 0:u.id,id:c,onKeydown:v,onKeyup:r,role:"menu",tabIndex:0,ref:e.itemsRef};return M({ourProps:l,theirProps:n,slot:a,attrs:m,slots:I,features:D.RenderStrategy|D.Static,visible:s.value,name:"MenuItems"})}}}),ne=P({name:"MenuItem",props:{as:{type:[Object,String],default:"template"},disabled:{type:Boolean,default:!1}},setup(n,{slots:m,attrs:I,expose:d}){let e=y("MenuItem"),c=`headlessui-menu-item-${w()}`,o=S(null);d({el:o,$el:o});let v=x(()=>e.activeItemIndex.value!==null?e.items.value[e.activeItemIndex.value].id===c:!1),r=x(()=>({disabled:n.disabled,textValue:"",domRef:o}));E(()=>{var a,l;let i=(l=(a=f(o))==null?void 0:a.textContent)==null?void 0:l.toLowerCase().trim();i!==void 0&&(r.value.textValue=i)}),E(()=>e.registerItem(c,r)),W(()=>e.unregisterItem(c)),O(()=>{e.menuState.value===0&&(!v.value||e.activationTrigger.value!==0&&h(()=>{var a,l;return(l=(a=f(o))==null?void 0:a.scrollIntoView)==null?void 0:l.call(a,{block:"nearest"})}))});function b(a){if(n.disabled)return a.preventDefault();e.closeMenu(),h(()=>{var l;return(l=f(e.buttonRef))==null?void 0:l.focus({preventScroll:!0})})}function s(){if(n.disabled)return e.goToItem(g.Nothing);e.goToItem(g.Specific,c)}function t(){n.disabled||v.value||e.goToItem(g.Specific,c,0)}function u(){n.disabled||!v.value||e.goToItem(g.Nothing)}return()=>{let{disabled:a}=n,l={active:v.value,disabled:a};return M({ourProps:{id:c,ref:o,role:"menuitem",tabIndex:a===!0?void 0:-1,"aria-disabled":a===!0?!0:void 0,onClick:b,onFocus:s,onPointermove:t,onMousemove:t,onPointerleave:u,onMouseleave:u},theirProps:n,slot:l,attrs:I,slots:m,name:"MenuItem"})}}});export{Q as a,ee as f,te as m,ae as p,ne as v};