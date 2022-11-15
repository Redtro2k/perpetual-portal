import{u as f,c as d,w as a,C as x,o as p,a as l,b as t,g as e,n,m as b,_ as h,f as v,i as c}from"./app.d6fd6ef0.js";import{_ as y}from"./UserLayout.cf4779a3.js";import{Z as V,e as $,t as w,a as C,_ as k,Y as M}from"./FormDescription.6a96f0c9.js";import{_ as N}from"./FormInput.4f925074.js";import{_ as j}from"./ValidationErrors.0b35cf52.js";import{_ as S}from"./SimpleCustom.543c427c.js";import{_ as B}from"./FormSlot.50e12b38.js";import{_ as F}from"./Button.6d30971e.js";import{r as T}from"./PlusIcon.8ea89f14.js";import"./SearchIcon.ef60ed6c.js";import"./popover.11880e8a.js";import"./use-outside-click.4ced2ae8.js";import"./use-resolve-button-type.ddd396ff.js";import"./use-event-listener.daba031f.js";import"./menu.57fea4d8.js";import"./calculate-active-index.804d077d.js";import"./HomeIcon.c44d3662.js";import"./form.c56a6aaf.js";const U={class:"max-w-7xl mx-auto pb-10 lg:py-12 lg:px-8"},A={class:"lg:grid lg:grid-cols-12 lg:gap-x-5"},E={class:"py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3"},Q={class:"space-y-1"},z=c(" Creating Modules "),D={class:"space-y-6 sm:px-6 lg:px-0 lg:col-span-9"},G={class:"mt-6 grid grid-cols-4 gap-4"},O={class:"mt-4"},Y=l("label",{for:"first-name",class:"block text-sm font-medium text-gray-700"},"Description",-1),Z=c(" Create "),me={__name:"AdminAddModules",props:{selected:Object},setup(u){const s=f({name:"",grading:"",description:"",subject_id:u.selected.id}),_=[{id:1,name:"prelim"},{id:2,name:"midterm"},{id:3,name:"prefinal"},{id:4,name:"final"}];let r=()=>{s.post(route("modules.store"),{preserveState:!0,onFinish:()=>s.reset("name","description","grading")})};return(m,i)=>{const g=x("QuillEditor");return p(),d(y,{title:"Modules","no-content":"",showSideNav:!1},{content:a(()=>[l("main",U,[l("div",A,[t(e(M),null,{default:a(()=>[l("aside",E,[l("nav",Q,[t(e(V),null,{default:a(()=>[t(e($),{as:"template"},{default:a(({selected:o})=>[l("button",{class:n([o?"bg-gray-50 text-jvdgreen hover:bg-white":"text-gray-900 hover:text-gray-900 hover:bg-gray-50","group rounded-md px-3 py-2 flex items-center text-sm font-medium"])},[t(e(T),{class:n([o?"text-jvgreen":"text-gray-400 group-hover:text-gray-500","flex-shrink-0 -ml-1 mr-3 h-6 w-6"])},null,8,["class"]),z],2)]),_:1})]),_:1})])]),l("div",D,[t(e(w),null,{default:a(()=>[t(e(C),null,{default:a(()=>[l("form",{onSubmit:i[3]||(i[3]=b((...o)=>e(r)&&e(r)(...o),["prevent"]))},[t(k,{title:"Creating Modules",description:"fill up all of validation to proceed the next step",haveFooter:""},{main:a(()=>[t(j,{class:"mb-4 pt-8"}),m.$page.props.flash.success?(p(),d(h,{key:0,class:"mb-4 mt-8",label:m.$page.props.flash.success},null,8,["label"])):v("",!0),l("div",G,[t(N,{label:"Title",modelValue:e(s).name,"onUpdate:modelValue":i[0]||(i[0]=o=>e(s).name=o)},null,8,["modelValue"]),t(B,{label:"Grading"},{main:a(()=>[t(S,{options:_,modelValue:e(s).grading,"onUpdate:modelValue":i[1]||(i[1]=o=>e(s).grading=o)},null,8,["modelValue"])]),_:1})]),l("div",O,[Y,t(g,{content:e(s).description,"onUpdate:content":i[2]||(i[2]=o=>e(s).description=o),contentType:"html",placeholder:"description about School",toolbar:"essential",theme:"snow"},null,8,["content"])])]),footer:a(()=>[t(F,{class:n(["ml-4",{"opacity-25":e(s).processing}]),disabled:e(s).processing},{default:a(()=>[Z]),_:1},8,["class","disabled"])]),_:1})],32)]),_:1})]),_:1})])]),_:1})])])]),_:1})}}};export{me as default};