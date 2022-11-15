import{o as oe,c as le,b as ne,M,d as w,j as k,O as V,P as _,N as C,F as J,Q as q}from"./app.d6fd6ef0.js";import{t as D,e as H,o as l,c as ae,u as j,l as K,T as re,F as ue,M as se,P as L,p as Q,R as N,b as F,L as I,a as B,d as ie}from"./use-outside-click.4ced2ae8.js";import{b as pe}from"./use-resolve-button-type.ddd396ff.js";import{r as ve,n as Z,m as A,p as R,d as x}from"./use-event-listener.daba031f.js";function Se(u,P){return oe(),le("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},[ne("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4 6h16M4 12h16M4 18h16"})])}var ce=(u=>(u[u.Open=0]="Open",u[u.Closed=1]="Closed",u))(ce||{});let U=Symbol("PopoverContext");function W(u){let P=q(U,null);if(P===null){let y=new Error(`<${u} /> is missing a parent <${fe.name} /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(y,W),y}return P}let X=Symbol("PopoverGroupContext");function Y(){return q(X,null)}let ee=Symbol("PopoverPanelContext");function de(){return q(ee,null)}let fe=M({name:"Popover",props:{as:{type:[Object,String],default:"div"}},setup(u,{slots:P,attrs:y,expose:$}){var t;let e=`headlessui-popover-button-${D()}`,g=`headlessui-popover-panel-${D()}`,c=w(null);$({el:c,$el:c});let d=w(1),v=w(null),h=w(null),m=w(null),i=w(null),S=k(()=>H(c)),O=k(()=>{if(!l(v)||!l(i))return!1;for(let n of document.querySelectorAll("body > *"))if(Number(n==null?void 0:n.contains(l(v)))^Number(n==null?void 0:n.contains(l(i))))return!0;return!1}),f={popoverState:d,buttonId:e,panelId:g,panel:i,button:v,isPortalled:O,beforePanelSentinel:h,afterPanelSentinel:m,togglePopover(){d.value=j(d.value,{[0]:1,[1]:0})},closePopover(){d.value!==1&&(d.value=1)},close(n){f.closePopover();let p=(()=>n?n instanceof HTMLElement?n:n.value instanceof HTMLElement?l(n):l(f.button):l(f.button))();p==null||p.focus()}};V(U,f),ae(k(()=>j(d.value,{[0]:K.Open,[1]:K.Closed})));let s={buttonId:e,panelId:g,close(){f.closePopover()}},o=Y(),a=o==null?void 0:o.registerPopover;function b(){var n,p,r,E;return(E=o==null?void 0:o.isFocusWithinPopoverGroup())!=null?E:((n=S.value)==null?void 0:n.activeElement)&&(((p=l(v))==null?void 0:p.contains(S.value.activeElement))||((r=l(i))==null?void 0:r.contains(S.value.activeElement)))}return _(()=>a==null?void 0:a(s)),ve((t=S.value)==null?void 0:t.defaultView,"focus",n=>{var p,r;d.value===0&&(b()||!v||!i||(p=l(f.beforePanelSentinel))!=null&&p.contains(n.target)||(r=l(f.afterPanelSentinel))!=null&&r.contains(n.target)||f.closePopover())},!0),re([v,i],(n,p)=>{var r;f.closePopover(),ue(p,se.Loose)||(n.preventDefault(),(r=l(v))==null||r.focus())},k(()=>d.value===0)),()=>{let n={open:d.value===0,close:f.close};return L({theirProps:u,ourProps:{ref:c},slot:n,slots:P,attrs:y,name:"Popover"})}}}),ge=M({name:"PopoverButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(u,{attrs:P,slots:y,expose:$}){let t=W("PopoverButton"),e=k(()=>H(t.button));$({el:t.button,$el:t.button});let g=Y(),c=g==null?void 0:g.closeOthers,d=de(),v=d===null?!1:d===t.panelId,h=w(null),m=`headlessui-focus-sentinel-${D()}`;v||_(()=>{t.button.value=h.value});let i=pe(k(()=>({as:u.as,type:P.type})),h);function S(o){var a,b,n,p,r;if(v){if(t.popoverState.value===1)return;switch(o.key){case B.Space:case B.Enter:o.preventDefault(),(b=(a=o.target).click)==null||b.call(a),t.closePopover(),(n=l(t.button))==null||n.focus();break}}else switch(o.key){case B.Space:case B.Enter:o.preventDefault(),o.stopPropagation(),t.popoverState.value===1&&(c==null||c(t.buttonId)),t.togglePopover();break;case B.Escape:if(t.popoverState.value!==0)return c==null?void 0:c(t.buttonId);if(!l(t.button)||((p=e.value)==null?void 0:p.activeElement)&&!((r=l(t.button))!=null&&r.contains(e.value.activeElement)))return;o.preventDefault(),o.stopPropagation(),t.closePopover();break}}function O(o){v||o.key===B.Space&&o.preventDefault()}function f(o){var a,b;u.disabled||(v?(t.closePopover(),(a=l(t.button))==null||a.focus()):(o.preventDefault(),o.stopPropagation(),t.popoverState.value===1&&(c==null||c(t.buttonId)),t.togglePopover(),(b=l(t.button))==null||b.focus()))}function s(o){o.preventDefault(),o.stopPropagation()}return()=>{let o=t.popoverState.value===0,a={open:o},b=v?{ref:h,type:i.value,onKeydown:S,onClick:f}:{ref:h,id:t.buttonId,type:i.value,"aria-expanded":u.disabled?void 0:t.popoverState.value===0,"aria-controls":l(t.panel)?t.panelId:void 0,disabled:u.disabled?!0:void 0,onKeydown:S,onKeyup:O,onClick:f,onMousedown:s},n=Z();function p(){let r=l(t.panel);if(!r)return;function E(){j(n.value,{[x.Forwards]:()=>F(r,I.First),[x.Backwards]:()=>F(r,I.Last)})}E()}return C(J,[L({ourProps:b,theirProps:{...P,...u},slot:a,attrs:P,slots:y,name:"PopoverButton"}),o&&!v&&t.isPortalled.value&&C(A,{id:m,features:R.Focusable,as:"button",type:"button",onFocus:p})])}}});M({name:"PopoverOverlay",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0}},setup(u,{attrs:P,slots:y}){let $=W("PopoverOverlay"),t=`headlessui-popover-overlay-${D()}`,e=Q(),g=k(()=>e!==null?e.value===K.Open:$.popoverState.value===0);function c(){$.closePopover()}return()=>{let d={open:$.popoverState.value===0};return L({ourProps:{id:t,"aria-hidden":!0,onClick:c},theirProps:u,slot:d,attrs:P,slots:y,features:N.RenderStrategy|N.Static,visible:g.value,name:"PopoverOverlay"})}}});let he=M({name:"PopoverPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},focus:{type:Boolean,default:!1}},inheritAttrs:!1,setup(u,{attrs:P,slots:y,expose:$}){let{focus:t}=u,e=W("PopoverPanel"),g=k(()=>H(e.panel)),c=`headlessui-focus-sentinel-before-${D()}`,d=`headlessui-focus-sentinel-after-${D()}`;$({el:e.panel,$el:e.panel}),V(ee,e.panelId),_(()=>{var s,o;if(!t||e.popoverState.value!==0||!e.panel)return;let a=(s=g.value)==null?void 0:s.activeElement;(o=l(e.panel))!=null&&o.contains(a)||F(l(e.panel),I.First)});let v=Q(),h=k(()=>v!==null?v.value===K.Open:e.popoverState.value===0);function m(s){var o,a;switch(s.key){case B.Escape:if(e.popoverState.value!==0||!l(e.panel)||g.value&&!((o=l(e.panel))!=null&&o.contains(g.value.activeElement)))return;s.preventDefault(),s.stopPropagation(),e.closePopover(),(a=l(e.button))==null||a.focus();break}}function i(s){var o,a,b,n,p;let r=s.relatedTarget;!r||!l(e.panel)||(o=l(e.panel))!=null&&o.contains(r)||(e.closePopover(),(((b=(a=l(e.beforePanelSentinel))==null?void 0:a.contains)==null?void 0:b.call(a,r))||((p=(n=l(e.afterPanelSentinel))==null?void 0:n.contains)==null?void 0:p.call(n,r)))&&r.focus({preventScroll:!0}))}let S=Z();function O(){let s=l(e.panel);if(!s)return;function o(){j(S.value,{[x.Forwards]:()=>{F(s,I.Next)},[x.Backwards]:()=>{var a;(a=l(e.button))==null||a.focus({preventScroll:!0})}})}o()}function f(){let s=l(e.panel);if(!s)return;function o(){j(S.value,{[x.Forwards]:()=>{var a,b;let n=l(e.button),p=l(e.panel);if(!n)return;let r=ie(),E=r.indexOf(n),te=r.slice(0,E+1),T=[...r.slice(E+1),...te];for(let G of T.slice())if(((b=(a=G==null?void 0:G.id)==null?void 0:a.startsWith)==null?void 0:b.call(a,"headlessui-focus-sentinel-"))||(p==null?void 0:p.contains(G))){let z=T.indexOf(G);z!==-1&&T.splice(z,1)}F(T,I.First,!1)},[x.Backwards]:()=>F(s,I.Previous)})}o()}return()=>{let s={open:e.popoverState.value===0,close:e.close},o={ref:e.panel,id:e.panelId,onKeydown:m,onFocusout:t&&e.popoverState.value===0?i:void 0,tabIndex:-1};return L({ourProps:o,theirProps:{...P,...u},attrs:P,slot:s,slots:{...y,default:(...a)=>{var b;return[C(J,[h.value&&e.isPortalled.value&&C(A,{id:c,ref:e.beforePanelSentinel,features:R.Focusable,as:"button",type:"button",onFocus:O}),(b=y.default)==null?void 0:b.call(y,...a),h.value&&e.isPortalled.value&&C(A,{id:d,ref:e.afterPanelSentinel,features:R.Focusable,as:"button",type:"button",onFocus:f})])]}},features:N.RenderStrategy|N.Static,visible:h.value,name:"PopoverPanel"})}}}),$e=M({name:"PopoverGroup",props:{as:{type:[Object,String],default:"div"}},setup(u,{attrs:P,slots:y,expose:$}){let t=w(null),e=w([]),g=k(()=>H(t));$({el:t,$el:t});function c(m){let i=e.value.indexOf(m);i!==-1&&e.value.splice(i,1)}function d(m){return e.value.push(m),()=>{c(m)}}function v(){var m;let i=g.value;if(!i)return!1;let S=i.activeElement;return(m=l(t))!=null&&m.contains(S)?!0:e.value.some(O=>{var f,s;return((f=i.getElementById(O.buttonId))==null?void 0:f.contains(S))||((s=i.getElementById(O.panelId))==null?void 0:s.contains(S))})}function h(m){for(let i of e.value)i.buttonId!==m&&i.close()}return V(X,{registerPopover:d,unregisterPopover:c,isFocusWithinPopoverGroup:v,closeOthers:h}),()=>L({ourProps:{ref:t},theirProps:u,slot:{},attrs:P,slots:y,name:"PopoverGroup"})}});export{$e as H,he as L,ge as k,Se as r,fe as v};
