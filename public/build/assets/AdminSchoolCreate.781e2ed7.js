import{d as p,u as k,j as v,P as U,c as h,w as $,C as b,o as x,a as e,v as N,x as F,g as s,b as a,_ as j,f as B,m as I,$ as R,a0 as E}from"./app.d6fd6ef0.js";import{_ as A}from"./UserLayout.cf4779a3.js";import{_ as D}from"./WithList.b4a25fec.js";import{_}from"./InputText.67225ac7.js";import{_ as y}from"./SimpleCustom.543c427c.js";import{p as V}from"./index.8ca1eca9.js";import{_ as M}from"./_plugin-vue_export-helper.cdc0426e.js";import"./SearchIcon.ef60ed6c.js";import"./popover.11880e8a.js";import"./use-outside-click.4ced2ae8.js";import"./use-resolve-button-type.ddd396ff.js";import"./use-event-listener.daba031f.js";import"./menu.57fea4d8.js";import"./calculate-active-index.804d077d.js";import"./HomeIcon.c44d3662.js";import"./form.c56a6aaf.js";const r=d=>(R("data-v-f5373b4e"),d=d(),E(),d),O={class:"max-w-xl mx-auto pt-2 pb-8 lg:pb-16 bg-white overflow-hidden shadow sm:rounded-lg"},Q={class:"px-4 py-5 sm:p-6"},T=r(()=>e("div",{class:"space-y-6 py-2"},[e("div",null,[e("h1",{class:"text-lg leading-6 font-bold text-gray-900"},"School Create"),e("p",{class:"mt-1 text-sm text-gray-500"}," Let's get started by filling in the information below to create School. ")])],-1)),L={class:"mt-1"},q=r(()=>e("label",{class:"block text-sm font-medium text-gray-700"},"Name",-1)),z=r(()=>e("label",{class:"block text-sm font-medium text-gray-700"}," Description ",-1)),G={class:"mt-1"},H={class:"mt-1"},J={class:"mt-1"},K={class:"mt-1"},W=r(()=>e("label",{class:"block text-sm font-medium text-gray-700"},"address",-1)),X={class:"mt-1"},Y=r(()=>e("label",{class:"block text-sm font-medium text-gray-700"}," Upload Images ",-1)),Z={class:"mt-1"},ee=r(()=>e("label",{class:"block text-sm font-medium text-gray-700"},"Phone Number / Contact Number",-1)),oe={class:"flex justify-end pt-8"},te=["disabled"],se={__name:"AdminSchoolCreate",setup(d){const c=p(),m=p(),u=p(),t=k({name:null,description:null,region:null,province:null,address:null,contact:null,image:[]}),f=v(()=>V.regions.map(function(n){return delete Object.assign(n,{id:n.reg_code}).reg_code,n})),w=v(()=>{const n=typeof m.value>"u"?"01":m.value;return V.getProvincesByRegion(n).map(function(o){return delete Object.assign(o,{id:o.prov_code}).prov_code,o})}),S=f.value;U(()=>{var o;var n=(o=S.find(i=>i.name===c.value))==null?void 0:o.id;m.value=n,t.region=c.value,t.province=u.value});const C=n=>{let o=n.target.files;for(let i=0;i<o.length;i++)t.image.push(o[i])};let g=()=>{t.post(route("school.store"),{_method:"PUT",preserveScroll:!0,forceFormData:!0})};return(n,o)=>{const i=b("QuillEditor"),P=b("FilePond");return x(),h(A,{title:"Create School",showSideNav:!1},{content:$(()=>[e("main",O,[N(a(D,{labels:s(t).errors},null,8,["labels"]),[[F,s(t).hasErrors]]),n.$page.props.flash.success?(x(),h(j,{key:0,label:n.$page.props.flash.success},null,8,["label"])):B("",!0),e("div",Q,[T,e("form",{class:"space-y-4",onSubmit:o[6]||(o[6]=I((...l)=>s(g)&&s(g)(...l),["prevent"]))},[e("div",null,[e("div",L,[q,a(_,{modelValue:s(t).name,"onUpdate:modelValue":o[0]||(o[0]=l=>s(t).name=l)},null,8,["modelValue"])])]),e("div",null,[z,e("div",G,[a(i,{content:s(t).description,"onUpdate:content":o[1]||(o[1]=l=>s(t).description=l),contentType:"html",placeholder:"description about School",toolbar:"essential",theme:"snow"},null,8,["content"])])]),e("div",null,[e("div",H,[a(y,{label:"Region",modelValue:c.value,"onUpdate:modelValue":o[2]||(o[2]=l=>c.value=l),options:s(f)},null,8,["modelValue","options"]),a(y,{label:"Province",modelValue:u.value,"onUpdate:modelValue":o[3]||(o[3]=l=>u.value=l),options:s(w)},null,8,["modelValue","options"])])]),e("div",J,[e("div",K,[W,a(_,{modelValue:s(t).address,"onUpdate:modelValue":o[4]||(o[4]=l=>s(t).address=l)},null,8,["modelValue"])])]),e("div",null,[e("div",X,[Y,a(P,{ref:"file",onChange:C,accept:"image/png, image/jpeg, image/gif"},null,512)])]),e("div",null,[e("div",Z,[ee,a(_,{placeholder:"Phone number",modelValue:s(t).contact,"onUpdate:modelValue":o[5]||(o[5]=l=>s(t).contact=l)},null,8,["modelValue"])])]),e("div",oe,[e("button",{type:"submit",class:"ml-3 inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-jvgreen hover:bg-jvdgreen focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-jvgreen",disabled:s(t).processing}," Create School ",8,te)])],32)])])]),_:1})}}},xe=M(se,[["__scopeId","data-v-f5373b4e"]]);export{xe as default};
