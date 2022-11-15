import{e as W,P as T,H as U,o as B,b as ae,L as J,g as Oe,u as D,p as Se,l as q,t as N,T as ke,R as ne,a as xe,h as je,O as C,c as He,N as qe}from"./use-outside-click.4ced2ae8.js";import{n as Ne,m as re,p as oe,r as Te,d as he}from"./use-event-listener.daba031f.js";import{M as E,d as c,j as h,N as y,F as Ie,p as S,l as _,P as $,O,Q as L,q as z,z as Me,a4 as Ue,U as We}from"./app.d6fd6ef0.js";import{P as ze,S as mt}from"./description.42e15c9a.js";var Ee=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(Ee||{});let M=Object.assign(E({name:"FocusTrap",props:{as:{type:[Object,String],default:"div"},initialFocus:{type:Object,default:null},features:{type:Number,default:30},containers:{type:Object,default:c(new Set)}},inheritAttrs:!1,setup(e,{attrs:t,slots:n,expose:a}){let o=c(null);a({el:o,$el:o});let l=h(()=>W(o));Ge({ownerDocument:l},h(()=>Boolean(e.features&16)));let r=Ve({ownerDocument:l,container:o,initialFocus:h(()=>e.initialFocus)},h(()=>Boolean(e.features&2)));Qe({ownerDocument:l,container:o,containers:e.containers,previousActiveElement:r},h(()=>Boolean(e.features&8)));let i=Ne();function u(){let s=B(o);!s||D(i.value,{[he.Forwards]:()=>ae(s,J.First),[he.Backwards]:()=>ae(s,J.Last)})}return()=>{let s={},m={ref:o},{features:f,initialFocus:k,containers:F,...b}=e;return y(Ie,[Boolean(f&4)&&y(re,{as:"button",type:"button",onFocus:u,features:oe.Focusable}),T({ourProps:m,theirProps:{...t,...b},slot:s,attrs:t,slots:n,name:"FocusTrap"}),Boolean(f&4)&&y(re,{as:"button",type:"button",onFocus:u,features:oe.Focusable})])}}}),{features:Ee});function Ge({ownerDocument:e},t){let n=c(null),a={value:!1};S(()=>{_(t,(o,l)=>{var r;o!==l&&(!t.value||(a.value=!0,n.value||(n.value=(r=e.value)==null?void 0:r.activeElement)))},{immediate:!0}),_(t,(o,l,r)=>{o!==l&&(!t.value||r(()=>{a.value!==!1&&(a.value=!1,U(n.value),n.value=null)}))},{immediate:!0})})}function Ve({ownerDocument:e,container:t,initialFocus:n},a){let o=c(null);return S(()=>{_([t,n,a],(l,r)=>{if(l.every((u,s)=>(r==null?void 0:r[s])===u)||!a.value)return;let i=B(t);!i||requestAnimationFrame(()=>{var u,s;let m=B(n),f=(u=e.value)==null?void 0:u.activeElement;if(m){if(m===f){o.value=f;return}}else if(i.contains(f)){o.value=f;return}m?U(m):ae(i,J.First|J.NoScroll)===Oe.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),o.value=(s=e.value)==null?void 0:s.activeElement})},{immediate:!0,flush:"post"})}),o}function Qe({ownerDocument:e,container:t,containers:n,previousActiveElement:a},o){var l;Te((l=e.value)==null?void 0:l.defaultView,"focus",r=>{if(!o.value)return;let i=new Set(n==null?void 0:n.value);i.add(t);let u=a.value;if(!u)return;let s=r.target;s&&s instanceof HTMLElement?Ye(i,s)?(a.value=s,U(s)):(r.preventDefault(),r.stopPropagation(),U(u)):U(a.value)},!0)}function Ye(e,t){var n;for(let a of e)if((n=a.value)!=null&&n.contains(t))return!0;return!1}let be="body > *",H=new Set,A=new Map;function ye(e){e.setAttribute("aria-hidden","true"),e.inert=!0}function we(e){let t=A.get(e);!t||(t["aria-hidden"]===null?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden",t["aria-hidden"]),e.inert=t.inert)}function Je(e,t=c(!0)){$(n=>{if(!t.value||!e.value)return;let a=e.value,o=W(a);if(o){H.add(a);for(let l of A.keys())l.contains(a)&&(we(l),A.delete(l));o.querySelectorAll(be).forEach(l=>{if(l instanceof HTMLElement){for(let r of H)if(l.contains(r))return;H.size===1&&(A.set(l,{"aria-hidden":l.getAttribute("aria-hidden"),inert:l.inert}),ye(l))}}),n(()=>{if(H.delete(a),H.size>0)o.querySelectorAll(be).forEach(l=>{if(l instanceof HTMLElement&&!A.has(l)){for(let r of H)if(l.contains(r))return;A.set(l,{"aria-hidden":l.getAttribute("aria-hidden"),inert:l.inert}),ye(l)}});else for(let l of A.keys())we(l),A.delete(l)})}})}let Pe=Symbol("ForcePortalRootContext");function _e(){return L(Pe,!1)}let ie=E({name:"ForcePortalRoot",props:{as:{type:[Object,String],default:"template"},force:{type:Boolean,default:!1}},setup(e,{slots:t,attrs:n}){return O(Pe,e.force),()=>{let{force:a,...o}=e;return T({theirProps:o,ourProps:{},slot:{},slots:t,attrs:n,name:"ForcePortalRoot"})}}});function Ke(e){let t=W(e);if(!t){if(e===null)return null;throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`)}let n=t.getElementById("headlessui-portal-root");if(n)return n;let a=t.createElement("div");return a.setAttribute("id","headlessui-portal-root"),t.body.appendChild(a)}let Ae=E({name:"Portal",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:t,attrs:n}){let a=c(null),o=h(()=>W(a)),l=_e(),r=L(De,null),i=c(l===!0||r==null?Ke(a.value):r.resolveTarget());return $(()=>{l||r!=null&&(i.value=r.resolveTarget())}),z(()=>{var u,s;let m=(u=o.value)==null?void 0:u.getElementById("headlessui-portal-root");!m||i.value===m&&i.value.children.length<=0&&((s=i.value.parentElement)==null||s.removeChild(i.value))}),()=>{if(i.value===null)return null;let u={ref:a,"data-headlessui-portal":""};return y(Me,{to:i.value},T({ourProps:u,theirProps:e,slot:{},attrs:n,slots:t,name:"Portal"}))}}}),De=Symbol("PortalGroupContext"),Xe=E({name:"PortalGroup",props:{as:{type:[Object,String],default:"template"},target:{type:Object,default:null}},setup(e,{attrs:t,slots:n}){let a=Ue({resolveTarget(){return e.target}});return O(De,a),()=>{let{target:o,...l}=e;return T({theirProps:l,ourProps:{},slot:{},attrs:t,slots:n,name:"PortalGroup"})}}}),$e=Symbol("StackContext");var ue=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(ue||{});function Ze(){return L($e,()=>{})}function et({type:e,element:t,onUpdate:n}){let a=Ze();function o(...l){n==null||n(...l),a(...l)}S(()=>{o(0,e,t),z(()=>{o(1,e,t)})}),O($e,o)}var tt=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(tt||{});let se=Symbol("DialogContext");function G(e){let t=L(se,null);if(t===null){let n=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,G),n}return t}let Q="DC8F892D-2EBD-447C-A4C8-A03058436FF4",gt=E({name:"Dialog",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},open:{type:[Boolean,String],default:Q},initialFocus:{type:Object,default:null}},emits:{close:e=>!0},setup(e,{emit:t,attrs:n,slots:a,expose:o}){var l;let r=c(!1);S(()=>{r.value=!0});let i=c(0),u=Se(),s=h(()=>e.open===Q&&u!==null?D(u.value,{[q.Open]:!0,[q.Closed]:!1}):e.open),m=c(new Set),f=c(null),k=c(null),F=h(()=>W(f));if(o({el:f,$el:f}),!(e.open!==Q||u!==null))throw new Error("You forgot to provide an `open` prop to the `Dialog`.");if(typeof s.value!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${s.value===Q?void 0:e.open}`);let b=h(()=>r.value&&s.value?0:1),I=h(()=>b.value===0),x=h(()=>i.value>1),X=L(se,null)!==null,Z=h(()=>x.value?"parent":"leaf");Je(f,h(()=>x.value?I.value:!1)),et({type:"Dialog",element:f,onUpdate:(v,p,g)=>{if(p==="Dialog")return D(v,{[ue.Add](){m.value.add(g),i.value+=1},[ue.Remove](){m.value.delete(g),i.value-=1}})}});let V=ze({name:"DialogDescription",slot:h(()=>({open:s.value}))}),ee=`headlessui-dialog-${N()}`,j=c(null),P={titleId:j,panelRef:c(null),dialogState:b,setTitleId(v){j.value!==v&&(j.value=v)},close(){t("close",!1)}};return O(se,P),ke(()=>{var v,p,g;return[...Array.from((p=(v=F.value)==null?void 0:v.querySelectorAll("body > *, [data-headlessui-portal]"))!=null?p:[]).filter(d=>!(!(d instanceof HTMLElement)||d.contains(B(k))||P.panelRef.value&&d.contains(P.panelRef.value))),(g=P.panelRef.value)!=null?g:f.value]},(v,p)=>{P.close(),We(()=>p==null?void 0:p.focus())},h(()=>b.value===0&&!x.value)),Te((l=F.value)==null?void 0:l.defaultView,"keydown",v=>{v.defaultPrevented||v.key===xe.Escape&&b.value===0&&(x.value||(v.preventDefault(),v.stopPropagation(),P.close()))}),$(v=>{var p;if(b.value!==0||X)return;let g=F.value;if(!g)return;let d=g==null?void 0:g.documentElement,w=(p=g.defaultView)!=null?p:window,ve=d.style.overflow,ce=d.style.paddingRight,te=w.innerWidth-d.clientWidth;if(d.style.overflow="hidden",te>0){let me=d.clientWidth-d.offsetWidth,ge=te-me;d.style.paddingRight=`${ge}px`}v(()=>{d.style.overflow=ve,d.style.paddingRight=ce})}),$(v=>{if(b.value!==0)return;let p=B(f);if(!p)return;let g=new IntersectionObserver(d=>{for(let w of d)w.boundingClientRect.x===0&&w.boundingClientRect.y===0&&w.boundingClientRect.width===0&&w.boundingClientRect.height===0&&P.close()});g.observe(p),v(()=>g.disconnect())}),()=>{let v={...n,ref:f,id:ee,role:"dialog","aria-modal":b.value===0?!0:void 0,"aria-labelledby":j.value,"aria-describedby":V.value},{open:p,initialFocus:g,...d}=e,w={open:b.value===0};return y(ie,{force:!0},()=>[y(Ae,()=>y(Xe,{target:f.value},()=>y(ie,{force:!1},()=>y(M,{initialFocus:g,containers:m,features:I.value?D(Z.value,{parent:M.features.RestoreFocus,leaf:M.features.All&~M.features.FocusLock}):M.features.None},()=>T({ourProps:v,theirProps:d,slot:w,attrs:n,slots:a,visible:b.value===0,features:ne.RenderStrategy|ne.Static,name:"Dialog"}))))),y(re,{features:oe.Hidden,ref:k})])}}}),ht=E({name:"DialogOverlay",props:{as:{type:[Object,String],default:"div"}},setup(e,{attrs:t,slots:n}){let a=G("DialogOverlay"),o=`headlessui-dialog-overlay-${N()}`;function l(r){r.target===r.currentTarget&&(r.preventDefault(),r.stopPropagation(),a.close())}return()=>T({ourProps:{id:o,"aria-hidden":!0,onClick:l},theirProps:e,slot:{open:a.dialogState.value===0},attrs:t,slots:n,name:"DialogOverlay"})}});E({name:"DialogBackdrop",props:{as:{type:[Object,String],default:"div"}},inheritAttrs:!1,setup(e,{attrs:t,slots:n,expose:a}){let o=G("DialogBackdrop"),l=`headlessui-dialog-backdrop-${N()}`,r=c(null);return a({el:r,$el:r}),S(()=>{if(o.panelRef.value===null)throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.")}),()=>{let i=e,u={id:l,ref:r,"aria-hidden":!0};return y(ie,{force:!0},()=>y(Ae,()=>T({ourProps:u,theirProps:{...t,...i},slot:{open:o.dialogState.value===0},attrs:t,slots:n,name:"DialogBackdrop"})))}}});E({name:"DialogPanel",props:{as:{type:[Object,String],default:"div"}},setup(e,{attrs:t,slots:n,expose:a}){let o=G("DialogPanel"),l=`headlessui-dialog-panel-${N()}`;a({el:o.panelRef,$el:o.panelRef});function r(i){i.stopPropagation()}return()=>{let i={id:l,ref:o.panelRef,onClick:r};return T({ourProps:i,theirProps:e,slot:{open:o.dialogState.value===0},attrs:t,slots:n,name:"DialogPanel"})}}});let bt=E({name:"DialogTitle",props:{as:{type:[Object,String],default:"h2"}},setup(e,{attrs:t,slots:n}){let a=G("DialogTitle"),o=`headlessui-dialog-title-${N()}`;return S(()=>{a.setTitleId(o),z(()=>a.setTitleId(null))}),()=>T({ourProps:{id:o},theirProps:e,slot:{open:a.dialogState.value===0},attrs:t,slots:n,name:"DialogTitle"})}});function lt(e){let t={called:!1};return(...n)=>{if(!t.called)return t.called=!0,e(...n)}}function Le(){let e=[],t=[],n={enqueue(a){t.push(a)},requestAnimationFrame(...a){let o=requestAnimationFrame(...a);n.add(()=>cancelAnimationFrame(o))},nextFrame(...a){n.requestAnimationFrame(()=>{n.requestAnimationFrame(...a)})},setTimeout(...a){let o=setTimeout(...a);n.add(()=>clearTimeout(o))},add(a){e.push(a)},dispose(){for(let a of e.splice(0))a()},async workQueue(){for(let a of t.splice(0))await a()}};return n}function le(e,...t){e&&t.length>0&&e.classList.add(...t)}function Y(e,...t){e&&t.length>0&&e.classList.remove(...t)}var de=(e=>(e.Finished="finished",e.Cancelled="cancelled",e))(de||{});function at(e,t){let n=Le();if(!e)return n.dispose;let{transitionDuration:a,transitionDelay:o}=getComputedStyle(e),[l,r]=[a,o].map(i=>{let[u=0]=i.split(",").filter(Boolean).map(s=>s.includes("ms")?parseFloat(s):parseFloat(s)*1e3).sort((s,m)=>m-s);return u});return l!==0?n.setTimeout(()=>t("finished"),l+r):t("finished"),n.add(()=>t("cancelled")),n.dispose}function Fe(e,t,n,a,o,l){let r=Le(),i=l!==void 0?lt(l):()=>{};return Y(e,...o),le(e,...t,...n),r.nextFrame(()=>{Y(e,...n),le(e,...a),r.add(at(e,u=>(Y(e,...a,...t),le(e,...o),i(u))))}),r.add(()=>Y(e,...t,...n,...a,...o)),r.add(()=>i("cancelled")),r.dispose}function R(e=""){return e.split(" ").filter(t=>t.trim().length>1)}let fe=Symbol("TransitionContext");var nt=(e=>(e.Visible="visible",e.Hidden="hidden",e))(nt||{});function rt(){return L(fe,null)!==null}function ot(){let e=L(fe,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}function it(){let e=L(pe,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}let pe=Symbol("NestingContext");function K(e){return"children"in e?K(e.children):e.value.filter(({state:t})=>t==="visible").length>0}function Re(e){let t=c([]),n=c(!1);S(()=>n.value=!0),z(()=>n.value=!1);function a(l,r=C.Hidden){let i=t.value.findIndex(({id:u})=>u===l);i!==-1&&(D(r,{[C.Unmount](){t.value.splice(i,1)},[C.Hidden](){t.value[i].state="hidden"}}),!K(t)&&n.value&&(e==null||e()))}function o(l){let r=t.value.find(({id:i})=>i===l);return r?r.state!=="visible"&&(r.state="visible"):t.value.push({id:l,state:"visible"}),()=>a(l,C.Unmount)}return{children:t,register:o,unregister:a}}let Ce=ne.RenderStrategy,ut=E({props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:n,slots:a,expose:o}){if(!rt()&&je())return()=>y(dt,{...e,onBeforeEnter:()=>t("beforeEnter"),onAfterEnter:()=>t("afterEnter"),onBeforeLeave:()=>t("beforeLeave"),onAfterLeave:()=>t("afterLeave")},a);let l=c(null),r=c("visible"),i=h(()=>e.unmount?C.Unmount:C.Hidden);o({el:l,$el:l});let{show:u,appear:s}=ot(),{register:m,unregister:f}=it(),k={value:!0},F=N(),b={value:!1},I=Re(()=>{b.value||(r.value="hidden",f(F),t("afterLeave"))});S(()=>{let p=m(F);z(p)}),$(()=>{if(i.value===C.Hidden&&!!F){if(u&&r.value!=="visible"){r.value="visible";return}D(r.value,{hidden:()=>f(F),visible:()=>m(F)})}});let x=R(e.enter),X=R(e.enterFrom),Z=R(e.enterTo),V=R(e.entered),ee=R(e.leave),j=R(e.leaveFrom),P=R(e.leaveTo);S(()=>{$(()=>{if(r.value==="visible"){let p=B(l);if(p instanceof Comment&&p.data==="")throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}})});function v(p){let g=k.value&&!s.value,d=B(l);!d||!(d instanceof HTMLElement)||g||(b.value=!0,u.value&&t("beforeEnter"),u.value||t("beforeLeave"),p(u.value?Fe(d,x,X,Z,V,w=>{b.value=!1,w===de.Finished&&t("afterEnter")}):Fe(d,ee,j,P,V,w=>{b.value=!1,w===de.Finished&&(K(I)||(r.value="hidden",f(F),t("afterLeave")))})))}return S(()=>{_([u],(p,g,d)=>{v(d),k.value=!1},{immediate:!0})}),O(pe,I),He(h(()=>D(r.value,{visible:q.Open,hidden:q.Closed}))),()=>{let{appear:p,show:g,enter:d,enterFrom:w,enterTo:ve,entered:ce,leave:te,leaveFrom:me,leaveTo:ge,...Be}=e;return T({theirProps:Be,ourProps:{ref:l},slot:{},slots:a,attrs:n,features:Ce,visible:r.value==="visible",name:"TransitionChild"})}}}),st=ut,dt=E({inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:n,slots:a}){let o=Se(),l=h(()=>e.show===null&&o!==null?D(o.value,{[q.Open]:!0,[q.Closed]:!1}):e.show);$(()=>{if(![!0,!1].includes(l.value))throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.')});let r=c(l.value?"visible":"hidden"),i=Re(()=>{r.value="hidden"}),u=c(!0),s={show:l,appear:h(()=>e.appear||!u.value)};return S(()=>{$(()=>{u.value=!1,l.value?r.value="visible":K(i)||(r.value="hidden")})}),O(pe,i),O(fe,s),()=>{let m=qe(e,["show","appear","unmount","onBeforeEnter","onBeforeLeave","onAfterEnter","onAfterLeave"]),f={unmount:e.unmount};return T({ourProps:{...f,as:"template"},theirProps:{},slot:{},slots:{...a,default:()=>[y(st,{onBeforeEnter:()=>t("beforeEnter"),onAfterEnter:()=>t("afterEnter"),onBeforeLeave:()=>t("beforeLeave"),onAfterLeave:()=>t("afterLeave"),...n,...f,...m},a.default)]},attrs:{},features:Ce,visible:r.value==="visible",name:"Transition"})}}});export{gt as A,ht as H,bt as W,dt as f,ut as o};
