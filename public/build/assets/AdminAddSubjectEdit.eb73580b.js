import{u as v,j as b,c as p,w as a,o as _,a as s,b as e,g as t,n as l,D as y,m as j,_ as w,f as $,i as r}from"./app.d6fd6ef0.js";import{_ as S}from"./UserLayout.cf4779a3.js";import{Z as N,e as g,t as k,a as u,_ as f,Y as A}from"./FormDescription.6a96f0c9.js";import{_ as V}from"./Button.6d30971e.js";import{_ as B}from"./ValidationErrors.0b35cf52.js";import{r as C}from"./CollectionIcon.d19cc3c9.js";import{r as F}from"./PlusIcon.8ea89f14.js";import"./SearchIcon.ef60ed6c.js";import"./popover.11880e8a.js";import"./use-outside-click.4ced2ae8.js";import"./use-resolve-button-type.ddd396ff.js";import"./use-event-listener.daba031f.js";import"./menu.57fea4d8.js";import"./calculate-active-index.804d077d.js";import"./HomeIcon.c44d3662.js";const L={class:"max-w-7xl mx-auto pb-10 lg:py-12 lg:px-8"},Y={class:"lg:grid lg:grid-cols-12 lg:gap-x-5"},z={class:"py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3"},D={class:"space-y-1"},E=r(" List Subjects "),M=r(" Add Subjects "),O={class:"space-y-6 sm:px-6 lg:px-0 lg:col-span-9"},R={class:"px-4 sm:px-6 lg:px-8"},T={class:"mt-8 flex flex-col"},Z={class:"-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8"},q={class:"inline-block min-w-full py-2 align-middle md:px-6 lg:px-8"},G=s("div",{class:"mt-6 grid grid-cols-4 gap-6 h-48"},null,-1),H=r("Add"),ie={__name:"AdminAddSubjectEdit",props:{subjects:Object,selected_year_level:String},setup(x){const i=x,c=v({title:""});let n=()=>{};const h=b(()=>`${i.selected_year_level}'s Subjects'`);return(m,d)=>(_(),p(S,{title:"Year Level","no-content":"",showSideNav:!1},{content:a(()=>[s("main",L,[s("div",Y,[e(t(A),{vertical:""},{default:a(()=>[s("aside",z,[s("nav",D,[e(t(N),null,{default:a(()=>[e(t(g),{as:"template"},{default:a(({selected:o})=>[s("button",{class:l([o?"bg-gray-50 text-jvdgreen hover:bg-white":"text-gray-900 hover:text-gray-900 hover:bg-gray-50","group rounded-md px-3 py-2 flex items-center text-sm font-medium"])},[e(t(C),{class:l([o?"text-jvgreen":"text-gray-400 group-hover:text-gray-500","flex-shrink-0 -ml-1 mr-3 h-6 w-6"])},null,8,["class"]),E],2)]),_:1}),e(t(g),{as:"template"},{default:a(({selected:o})=>[s("button",{class:l([o?"bg-gray-50 text-jvdgreen hover:bg-white":"text-gray-900 hover:text-gray-900 hover:bg-gray-50","group rounded-md px-3 py-2 flex items-center text-sm font-medium"])},[e(t(F),{class:l([o?"text-jvgreen":"text-gray-400 group-hover:text-gray-500","flex-shrink-0 -ml-1 mr-3 h-6 w-6"])},null,8,["class"]),M],2)]),_:1})]),_:1})])]),s("div",O,[e(t(k),null,{default:a(()=>[e(t(u),null,{default:a(()=>[e(f,{title:`${t(h)}`,description:"all of the table section display all of the record Subjects that admins added...",havFooter:!1},{main:a(()=>[s("div",R,[s("div",T,[s("div",Z,[s("div",q,[e(y,{items:i.subjects,dash_error:"No Record, Add New Subject"},null,8,["items"])])])])])]),_:1},8,["title"])]),_:1}),e(t(u),null,{default:a(()=>[s("form",{onSubmit:d[0]||(d[0]=j((...o)=>t(n)&&t(n)(...o),["prevent"]))},[e(f,{title:"Year Level",description:"create a year level ...",haveFooter:""},{main:a(()=>[e(B,{class:"mb-4 pt-8"}),m.$page.props.flash.success?(_(),p(w,{key:0,class:"mb-4 mt-8",label:m.$page.props.flash.success},null,8,["label"])):$("",!0),G]),footer:a(()=>[e(V,{class:l(["ml-4",{"opacity-25":t(c).processing}]),disabled:t(c).processing},{default:a(()=>[H]),_:1},8,["class","disabled"])]),_:1})],32)]),_:1})]),_:1})])]),_:1})])])]),_:1}))}};export{ie as default};
