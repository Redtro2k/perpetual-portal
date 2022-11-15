import{o as z,c as J,b as Q,M as H,d as x,j as $,O as U,C as X,P as D,F as Z,R as Y}from"./app.0e63341f.js";import{t as j,m as K,o as l,E as ee,c as ue,u as L,l as T,y as se,h as ie,F as pe,P as R,p as te,R as A,b as B,M as C,w as ve,a as I}from"./use-outside-click.6198e42d.js";import{b as ce}from"./use-resolve-button-type.7da8ea66.js";import{E as de,n as oe,f as W,a as q,d as M}from"./use-event-listener.c8226f41.js";function Se(u,c){return z(),J("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},[Q("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4 6h16M4 12h16M4 18h16"})])}function we(u,c){return z(),J("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},[Q("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"})])}function ke(u,c){return z(),J("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},[Q("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})])}var fe=(u=>(u[u.Open=0]="Open",u[u.Closed=1]="Closed",u))(fe||{});let le=Symbol("PopoverContext");function N(u){let c=Y(le,null);if(c===null){let m=new Error(`<${u} /> is missing a parent <${be.name} /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(m,N),m}return c}let ne=Symbol("PopoverGroupContext");function ae(){return Y(ne,null)}let re=Symbol("PopoverPanelContext");function Pe(){return Y(re,null)}let be=H({name:"Popover",props:{as:{type:[Object,String],default:"div"}},setup(u,{slots:c,attrs:m,expose:w}){var t;let e=`headlessui-popover-button-${j()}`,y=`headlessui-popover-panel-${j()}`,d=x(null);w({el:d,$el:d});let f=x(1),v=x(null),S=x(null),h=x(null),s=x(null),g=$(()=>K(d)),E=$(()=>{var a,i;if(!l(v)||!l(s))return!1;for(let G of document.querySelectorAll("body > *"))if(Number(G==null?void 0:G.contains(l(v)))^Number(G==null?void 0:G.contains(l(s))))return!0;let n=ee(),k=n.indexOf(l(v)),V=(k+n.length-1)%n.length,F=(k+1)%n.length,O=n[V],_=n[F];return!((a=l(s))!=null&&a.contains(O))&&!((i=l(s))!=null&&i.contains(_))}),P={popoverState:f,buttonId:e,panelId:y,panel:s,button:v,isPortalled:E,beforePanelSentinel:S,afterPanelSentinel:h,togglePopover(){f.value=L(f.value,{[0]:1,[1]:0})},closePopover(){f.value!==1&&(f.value=1)},close(a){P.closePopover();let i=(()=>a?a instanceof HTMLElement?a:a.value instanceof HTMLElement?l(a):l(P.button):l(P.button))();i==null||i.focus()}};U(le,P),ue($(()=>L(f.value,{[0]:T.Open,[1]:T.Closed})));let p={buttonId:e,panelId:y,close(){P.closePopover()}},o=ae(),r=o==null?void 0:o.registerPopover;function b(){var a,i,n,k;return(k=o==null?void 0:o.isFocusWithinPopoverGroup())!=null?k:((a=g.value)==null?void 0:a.activeElement)&&(((i=l(v))==null?void 0:i.contains(g.value.activeElement))||((n=l(s))==null?void 0:n.contains(g.value.activeElement)))}return X(()=>r==null?void 0:r(p)),de((t=g.value)==null?void 0:t.defaultView,"focus",a=>{var i,n;f.value===0&&(b()||!v||!s||(i=l(P.beforePanelSentinel))!=null&&i.contains(a.target)||(n=l(P.afterPanelSentinel))!=null&&n.contains(a.target)||P.closePopover())},!0),se([v,s],(a,i)=>{var n;P.closePopover(),ie(i,pe.Loose)||(a.preventDefault(),(n=l(v))==null||n.focus())},$(()=>f.value===0)),()=>{let a={open:f.value===0,close:P.close};return R({theirProps:u,ourProps:{ref:d},slot:a,slots:c,attrs:m,name:"Popover"})}}}),$e=H({name:"PopoverButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(u,{attrs:c,slots:m,expose:w}){let t=N("PopoverButton"),e=$(()=>K(t.button));w({el:t.button,$el:t.button});let y=ae(),d=y==null?void 0:y.closeOthers,f=Pe(),v=f===null?!1:f===t.panelId,S=x(null),h=`headlessui-focus-sentinel-${j()}`;v||X(()=>{t.button.value=S.value});let s=ce($(()=>({as:u.as,type:c.type})),S);function g(o){var r,b,a,i,n;if(v){if(t.popoverState.value===1)return;switch(o.key){case I.Space:case I.Enter:o.preventDefault(),(b=(r=o.target).click)==null||b.call(r),t.closePopover(),(a=l(t.button))==null||a.focus();break}}else switch(o.key){case I.Space:case I.Enter:o.preventDefault(),o.stopPropagation(),t.popoverState.value===1&&(d==null||d(t.buttonId)),t.togglePopover();break;case I.Escape:if(t.popoverState.value!==0)return d==null?void 0:d(t.buttonId);if(!l(t.button)||((i=e.value)==null?void 0:i.activeElement)&&!((n=l(t.button))!=null&&n.contains(e.value.activeElement)))return;o.preventDefault(),o.stopPropagation(),t.closePopover();break}}function E(o){v||o.key===I.Space&&o.preventDefault()}function P(o){var r,b;u.disabled||(v?(t.closePopover(),(r=l(t.button))==null||r.focus()):(o.preventDefault(),o.stopPropagation(),t.popoverState.value===1&&(d==null||d(t.buttonId)),t.togglePopover(),(b=l(t.button))==null||b.focus()))}function p(o){o.preventDefault(),o.stopPropagation()}return()=>{let o=t.popoverState.value===0,r={open:o},b=v?{ref:S,type:s.value,onKeydown:g,onClick:P}:{ref:S,id:t.buttonId,type:s.value,"aria-expanded":u.disabled?void 0:t.popoverState.value===0,"aria-controls":l(t.panel)?t.panelId:void 0,disabled:u.disabled?!0:void 0,onKeydown:g,onKeyup:E,onClick:P,onMousedown:p},a=oe();function i(){let n=l(t.panel);if(!n)return;function k(){L(a.value,{[M.Forwards]:()=>B(n,C.First),[M.Backwards]:()=>B(n,C.Last)})}k()}return D(Z,[R({ourProps:b,theirProps:{...c,...u},slot:r,attrs:c,slots:m,name:"PopoverButton"}),o&&!v&&t.isPortalled.value&&D(W,{id:h,features:q.Focusable,as:"button",type:"button",onFocus:i})])}}});H({name:"PopoverOverlay",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0}},setup(u,{attrs:c,slots:m}){let w=N("PopoverOverlay"),t=`headlessui-popover-overlay-${j()}`,e=te(),y=$(()=>e!==null?e.value===T.Open:w.popoverState.value===0);function d(){w.closePopover()}return()=>{let f={open:w.popoverState.value===0};return R({ourProps:{id:t,"aria-hidden":!0,onClick:d},theirProps:u,slot:f,attrs:c,slots:m,features:A.RenderStrategy|A.Static,visible:y.value,name:"PopoverOverlay"})}}});let xe=H({name:"PopoverPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},focus:{type:Boolean,default:!1}},inheritAttrs:!1,setup(u,{attrs:c,slots:m,expose:w}){let{focus:t}=u,e=N("PopoverPanel"),y=$(()=>K(e.panel)),d=`headlessui-focus-sentinel-before-${j()}`,f=`headlessui-focus-sentinel-after-${j()}`;w({el:e.panel,$el:e.panel}),U(re,e.panelId),X(()=>{var p,o;if(!t||e.popoverState.value!==0||!e.panel)return;let r=(p=y.value)==null?void 0:p.activeElement;(o=l(e.panel))!=null&&o.contains(r)||B(l(e.panel),C.First)});let v=te(),S=$(()=>v!==null?v.value===T.Open:e.popoverState.value===0);function h(p){var o,r;switch(p.key){case I.Escape:if(e.popoverState.value!==0||!l(e.panel)||y.value&&!((o=l(e.panel))!=null&&o.contains(y.value.activeElement)))return;p.preventDefault(),p.stopPropagation(),e.closePopover(),(r=l(e.button))==null||r.focus();break}}function s(p){var o,r,b,a,i;let n=p.relatedTarget;!n||!l(e.panel)||(o=l(e.panel))!=null&&o.contains(n)||(e.closePopover(),(((b=(r=l(e.beforePanelSentinel))==null?void 0:r.contains)==null?void 0:b.call(r,n))||((i=(a=l(e.afterPanelSentinel))==null?void 0:a.contains)==null?void 0:i.call(a,n)))&&n.focus({preventScroll:!0}))}let g=oe();function E(){let p=l(e.panel);if(!p)return;function o(){L(g.value,{[M.Forwards]:()=>{B(p,C.Next)},[M.Backwards]:()=>{var r;(r=l(e.button))==null||r.focus({preventScroll:!0})}})}o()}function P(){let p=l(e.panel);if(!p)return;function o(){L(g.value,{[M.Forwards]:()=>{var r,b;let a=l(e.button),i=l(e.panel);if(!a)return;let n=ee(),k=n.indexOf(a),V=n.slice(0,k+1),F=[...n.slice(k+1),...V];for(let O of F.slice())if(((b=(r=O==null?void 0:O.id)==null?void 0:r.startsWith)==null?void 0:b.call(r,"headlessui-focus-sentinel-"))||(i==null?void 0:i.contains(O))){let _=F.indexOf(O);_!==-1&&F.splice(_,1)}B(F,C.First,!1)},[M.Backwards]:()=>B(p,C.Previous)})}o()}return()=>{let p={open:e.popoverState.value===0,close:e.close},o={ref:e.panel,id:e.panelId,onKeydown:h,onFocusout:t&&e.popoverState.value===0?s:void 0,tabIndex:-1};return R({ourProps:o,theirProps:{...c,...ve(u,["focus"])},attrs:c,slot:p,slots:{...m,default:(...r)=>{var b;return[D(Z,[S.value&&e.isPortalled.value&&D(W,{id:d,ref:e.beforePanelSentinel,features:q.Focusable,as:"button",type:"button",onFocus:E}),(b=m.default)==null?void 0:b.call(m,...r),S.value&&e.isPortalled.value&&D(W,{id:f,ref:e.afterPanelSentinel,features:q.Focusable,as:"button",type:"button",onFocus:P})])]}},features:A.RenderStrategy|A.Static,visible:S.value,name:"PopoverPanel"})}}}),Ee=H({name:"PopoverGroup",props:{as:{type:[Object,String],default:"div"}},setup(u,{attrs:c,slots:m,expose:w}){let t=x(null),e=x([]),y=$(()=>K(t));w({el:t,$el:t});function d(h){let s=e.value.indexOf(h);s!==-1&&e.value.splice(s,1)}function f(h){return e.value.push(h),()=>{d(h)}}function v(){var h;let s=y.value;if(!s)return!1;let g=s.activeElement;return(h=l(t))!=null&&h.contains(g)?!0:e.value.some(E=>{var P,p;return((P=s.getElementById(E.buttonId))==null?void 0:P.contains(g))||((p=s.getElementById(E.panelId))==null?void 0:p.contains(g))})}function S(h){for(let s of e.value)s.buttonId!==h&&s.close()}return U(ne,{registerPopover:f,unregisterPopover:d,isFocusWithinPopoverGroup:v,closeOthers:S}),()=>R({ourProps:{ref:t},theirProps:u,slot:{},attrs:c,slots:m,name:"PopoverGroup"})}});export{Ee as H,xe as L,Se as a,ke as b,be as c,$e as k,we as r};
