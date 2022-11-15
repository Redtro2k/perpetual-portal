import{u as V,c,w as r,C as _,o as l,a as e,b as o,g as s,n as d,m as N,e as u,f as g,F as y,h as M,t as f,v as S,B as $,i as v}from"./app.d6fd6ef0.js";import{_ as B}from"./UserLayout.cf4779a3.js";import{Z as L,e as j,t as C,a as F,_ as T,Y as A}from"./FormDescription.6a96f0c9.js";import{_ as h}from"./SimpleCustom.543c427c.js";import{_ as D}from"./FormSlot.50e12b38.js";import{_ as H}from"./Button.6d30971e.js";import{_ as Y}from"./ValidationErrors.0b35cf52.js";import{r as U}from"./CollectionIcon.a2d1f4c1.js";import"./SearchIcon.ef60ed6c.js";import"./popover.11880e8a.js";import"./use-outside-click.4ced2ae8.js";import"./use-resolve-button-type.ddd396ff.js";import"./use-event-listener.daba031f.js";import"./menu.57fea4d8.js";import"./calculate-active-index.804d077d.js";import"./HomeIcon.c44d3662.js";import"./form.c56a6aaf.js";const W={class:"max-w-7xl mx-auto pb-10 lg:py-12 lg:px-8"},z={class:"lg:grid lg:grid-cols-12 lg:gap-x-5"},E={class:"py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3"},O={class:"space-y-1"},R=v(" List Subjects "),Z={class:"space-y-6 sm:px-6 lg:px-0 lg:col-span-9"},q={class:"mt-6 grid grid-cols-4 gap-6 pb-4"},G=["innerHTML"],I=["innerHTML"],J={class:"border-t border-b border-gray-200"},K=e("legend",{class:"sr-only"},"Notifications",-1),P={class:"relative flex items-start py-4"},Q={class:"min-w-0 flex-1 text-sm"},X={for:"comments",class:"font-medium text-gray-700"},ee={id:"comments-description",class:"text-gray-500"},se={class:"ml-3 flex items-center h-5"},te=["id","name","value"],ae=v("Migrate"),be={__name:"SyncingAY",props:{academic_year:Object},setup(n){const a=V({from_ay:"",to_ay:"",selected:[]}),x=[{title:"Section",description:"copying all year level or section on previous academic where you selected.",value:"section"},{title:"Student",description:"copying all student on previous academic where you selected.",value:"student"}];let m=()=>{a.post(route("sync-ay.store"),{preserveScroll:!0})};return(p,i)=>{const b=_("with-dismiss"),w=_("WithDashBorder");return l(),c(B,{title:"Year Level","no-content":"",showSideNav:!1},{content:r(()=>[e("main",W,[e("div",z,[o(s(A),{vertical:""},{default:r(()=>[e("aside",E,[e("nav",O,[o(s(L),null,{default:r(()=>[o(s(j),{as:"template"},{default:r(({selected:t})=>[e("button",{class:d([t?"bg-gray-50 text-jvdgreen hover:bg-white":"text-gray-900 hover:text-gray-900 hover:bg-gray-50","group rounded-md px-3 py-2 flex items-center text-sm font-medium"])},[o(s(U),{class:d([t?"text-jvgreen":"text-gray-400 group-hover:text-gray-500","flex-shrink-0 -ml-1 mr-3 h-6 w-6"])},null,8,["class"]),R],2)]),_:1})]),_:1})])]),e("div",Z,[o(s(C),null,{default:r(()=>[o(s(F),null,{default:r(()=>[e("form",{onSubmit:i[3]||(i[3]=N((...t)=>s(m)&&s(m)(...t),["prevent"]))},[o(T,{title:"Migrating Records",description:"these are all of the records for Academic year, set up a migrating records",haveFooter:""},{main:r(()=>[n.academic_year.length!=0?(l(),u(y,{key:0},[o(Y,{class:"mb-4 pt-8"}),p.$page.props.flash.success?(l(),c(b,{key:0,label:p.$page.props.flash.success},null,8,["label"])):g("",!0),o(D,{label:"From Academic Year"},{main:r(()=>[e("div",q,[e("div",null,[o(h,{options:n.academic_year,modelValue:s(a).from_ay,"onUpdate:modelValue":i[0]||(i[0]=t=>s(a).from_ay=t),placeholder:"From academic year"},null,8,["options","modelValue"]),e("span",{class:"pl-2 text-sm",innerHTML:s(a).from_ay?Number(s(a).from_ay)+1:""},null,8,G)]),e("div",null,[o(h,{options:n.academic_year,modelValue:s(a).to_ay,"onUpdate:modelValue":i[1]||(i[1]=t=>s(a).to_ay=t),placeholder:"To academic year"},null,8,["options","modelValue"]),e("span",{class:"pl-2 text-sm",innerHTML:s(a).to_ay?Number(s(a).to_ay)+1:""},null,8,I)])])]),_:1}),e("fieldset",J,[K,(l(),u(y,null,M(x,t=>e("div",{class:"divide-y divide-gray-200",key:t},[e("div",P,[e("div",Q,[e("label",X,f(t.title),1),e("p",ee,f(t.description),1)]),e("div",se,[S(e("input",{type:"checkbox","onUpdate:modelValue":i[2]||(i[2]=k=>s(a).selected=k),id:t.value,name:t.value,value:t.value,class:"focus:ring-jvgreen h-4 w-4 text-jvdgreen border-gray-300 rounded"},null,8,te),[[$,s(a).selected]])])])])),64))])],64)):(l(),c(w,{key:1,label:"No Academic year"}))]),footer:r(()=>[n.academic_year.length!=0?(l(),c(H,{key:0,class:d(["ml-4",{"opacity-25":s(a).processing}]),disabled:s(a).processing},{default:r(()=>[ae]),_:1},8,["class","disabled"])):g("",!0)]),_:1})],32)]),_:1})]),_:1})])]),_:1})])])]),_:1})}}};export{be as default};