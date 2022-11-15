import{o,c as u,b as c,e as l,h as r,a as s,t as m,w as d,g as p,L as h,f as w,j as C,d as N,F as v,i as y,U as O,n as b,a1 as L}from"./app.c0b37285.js";import{a as z}from"./UserLayout.e8ce5739.js";import{r as V}from"./PlusIcon.e28acf43.js";import{r as E}from"./ChevronDownIcon.5e11f067.js";import"./popover.3642bdb1.js";import"./use-outside-click.0afa5db2.js";import"./use-resolve-button-type.3cfc88d2.js";import"./use-event-listener.60acb20e.js";import"./menu.cc44a716.js";import"./calculate-active-index.804d077d.js";function A(a,f){return o(),u("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[c("path",{"fill-rule":"evenodd",d:"M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z","clip-rule":"evenodd"})])}function M(a,f){return o(),u("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[c("path",{"fill-rule":"evenodd",d:"M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z","clip-rule":"evenodd"})])}const T={class:"text-center"},D={class:"mt-2 text-sm font-medium text-gray-900"},F={class:"mt-1 text-sm text-gray-500"},P={class:"mt-6"},U={__name:"Simple",props:{withLink:{type:Boolean,default:()=>!1},label:String,description:String},setup(a){return(f,i)=>(o(),l("div",T,[c(r(A),{class:"mx-auto h-12 w-12 text-gray-400"}),s("h3",D,m(a.label),1),s("p",F,m(a.description),1),s("div",P,[a.withLink?(o(),u(r(h),{key:0,type:"button",class:"inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:d(()=>[c(r(V),{class:"-ml-1 mr-2 h-5 w-5","aria-hidden":"true"}),p(" New Project ")]),_:1})):w("",!0)])]))}},H={class:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"},I={class:"mt-8 flex flex-col"},R={class:"-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8"},W={class:"inline-block min-w-full py-2 align-middle md:px-6 lg:px-8"},q={class:"overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg"},G={key:0,class:"min-w-full divide-y divide-gray-300"},J={class:"bg-gray-50"},K=["onClick"],Q={key:0,scope:"col",class:"relative py-3.5 pl-3 pr-4 sm:pr-6"},X={class:"sr-only"},Y={class:"divide-y divide-gray-200 bg-white"},Z={class:"relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"},ee={class:"flex space-x-2"},te={class:"sr-only"},se={class:"sr-only"},oe={key:1},fe={__name:"WithSortHeading",props:{routes:String,viewable:{type:Boolean,default:()=>!1},viewlink:String,items:Object,sort:String,notSortable:Array,unselectable_table:{type:Boolean,default:()=>!0}},emits:["toggle"],setup(a,{emit:f}){const i=a,$=t=>t.charAt(0).toUpperCase()+t.slice(1),g=C(()=>{let t=i.items[0];return t?Object.getOwnPropertyNames(t):!1}),_=N(),S=t=>{f("toggle",_.value=_.value===t?`-${t}`:t)},k=t=>{let j=i.notSortable.findIndex(e=>e===t);return i.notSortable[j]},B=t=>t.length==0?"none":t;return(t,j)=>(o(),u(L,null,{fallback:d(()=>[c(z)]),default:d(()=>[s("div",H,[s("div",I,[s("div",R,[s("div",W,[s("div",q,[r(g)?(o(),l("table",G,[s("thead",J,[s("tr",null,[(o(!0),l(v,null,y(r(g),(e,x)=>(o(),l("th",{key:x,scope:"col",class:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900"},[s("span",{onClick:n=>e!=k(e)?S(e):null,class:"group inline-flex"},[p(m($(e))+" ",1),(o(),u(O(_.value===`-${e}`?r(M):r(E)),{class:b([e!=k(e)?"cursor-pointer":"hidden","invisible ml-2 h-5 w-5 flex-none rounded text-gray-400 group-hover:visible group-focus:visible"]),"aria-hidden":"true"},null,8,["class"]))],8,K)]))),128)),i.unselectable_table?(o(),l("th",Q,[s("span",X,[c(r(h),null,{default:d(()=>[p("Edit")]),_:1})])])):w("",!0)])]),s("tbody",Y,[(o(!0),l(v,null,y(a.items,(e,x)=>(o(),l("tr",{key:x},[(o(!0),l(v,null,y(Object.keys(r(g)),n=>(o(),l("td",{key:n,class:b(["whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-600",n==0?"sm:pl-6 font-semibold text-gray-700":""])},[(o(),u(O(Object.keys(e)[n]==="image"?"img":"span"),{src:Object.keys(e)[n]==="image"?Object.values(e)[n]:null,class:b(Object.keys(e)[n]==="image"?"h-10 w-10 rounded-full":null)},{default:d(()=>[p(m(Object.keys(e)[n]==="image"?null:`${B(Object.values(e)[n])}`),1)]),_:2},1032,["src","class"]))],2))),128)),s("td",Z,[s("div",ee,[c(r(h),{href:t.route(i.routes,{show_user:Object.values(e)[0]}),class:"text-indigo-600 hover:text-indigo-900","preserve-state":""},{default:d(()=>[p("Edit"),s("span",te,", "+m(Object.values(e)[0]),1)]),_:2},1032,["href"]),i.viewable?(o(),u(r(h),{key:0,href:t.route(i.viewlink,Object.values(e)[0]),class:"text-indigo-600 hover:text-indigo-900"},{default:d(()=>[p("View "),s("span",se,", "+m(Object.values(e)[0]),1)]),_:2},1032,["href"])):w("",!0)])])]))),128))])])):(o(),l("span",oe,[c(U,{class:"p-2 bg-gray-50",label:"No Records",description:"There's not found in our database..."})]))])])])])])]),_:1}))}};export{fe as default};
