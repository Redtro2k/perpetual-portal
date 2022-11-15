import{d as p,u as P,j as h,C as U,c as b,w as N,o as x,a as e,v as $,x as F,h as s,b as a,f as E,m as I,D as y,E as B,G as D}from"./app.0e63341f.js";import{_ as R}from"./UserLayout.a5e33d00.js";import{_ as A}from"./WithList.9dfa0a26.js";import{_ as j}from"./WithDismiss.05f0d893.js";import{_}from"./InputText.03efc35a.js";import{_ as V}from"./SimpleCustom.85fee8b4.js";import{_ as O}from"./_plugin-vue_export-helper.cdc0426e.js";import"./popover.821e8577.js";import"./use-outside-click.6198e42d.js";import"./use-resolve-button-type.7da8ea66.js";import"./use-event-listener.c8226f41.js";import"./menu.ba59a855.js";import"./calculate-active-index.804d077d.js";const r=d=>(B("data-v-654e5540"),d=d(),D(),d),Q={class:"max-w-xl mx-auto pt-2 pb-8 lg:pb-16 bg-white overflow-hidden shadow sm:rounded-lg"},T={class:"px-4 py-5 sm:p-6"},q=r(()=>e("div",{class:"space-y-6 py-2"},[e("div",null,[e("h1",{class:"text-lg leading-6 font-bold text-gray-900"},"School Create"),e("p",{class:"mt-1 text-sm text-gray-500"}," Let's get started by filling in the information below to create School. ")])],-1)),G={class:"mt-1"},L=r(()=>e("label",{class:"block text-sm font-medium text-gray-700"},"Name",-1)),M=r(()=>e("label",{class:"block text-sm font-medium text-gray-700"}," Description ",-1)),z={class:"mt-1"},H={class:"mt-1"},J={class:"mt-1"},K={class:"mt-1"},W=r(()=>e("label",{class:"block text-sm font-medium text-gray-700"},"address",-1)),X={class:"mt-1"},Y=r(()=>e("label",{class:"block text-sm font-medium text-gray-700"}," Upload Images ",-1)),Z={class:"mt-1"},ee=r(()=>e("label",{class:"block text-sm font-medium text-gray-700"},"Phone Number / Contact Number",-1)),oe={class:"flex justify-end pt-8"},te=["disabled"],se={__name:"AdminSchoolCreate",setup(d){var f=require("phil-reg-prov-mun-brgy");const c=p(),m=p(),u=p(),t=P({name:null,description:null,region:null,province:null,address:null,contact:null,image:[]}),g=h(()=>f.regions.map(function(n){return delete Object.assign(n,{id:n.reg_code}).reg_code,n})),w=h(()=>{const n=typeof m.value>"u"?"01":m.value;return f.getProvincesByRegion(n).map(function(o){return delete Object.assign(o,{id:o.prov_code}).prov_code,o})}),S=g.value;U(()=>{var o;var n=(o=S.find(i=>i.name===c.value))==null?void 0:o.id;m.value=n,t.region=c.value,t.province=u.value});const C=n=>{let o=n.target.files;for(let i=0;i<o.length;i++)t.image.push(o[i])};let v=()=>{t.post(route("school.store"),{_method:"PUT",preserveScroll:!0,forceFormData:!0})};return(n,o)=>{const i=y("QuillEditor"),k=y("FilePond");return x(),b(R,{title:"Create School",showSideNav:!1},{content:N(()=>[e("main",Q,[$(a(A,{labels:s(t).errors},null,8,["labels"]),[[F,s(t).hasErrors]]),n.$page.props.flash.success?(x(),b(j,{key:0,label:n.$page.props.flash.success},null,8,["label"])):E("",!0),e("div",T,[q,e("form",{class:"space-y-4",onSubmit:o[6]||(o[6]=I((...l)=>s(v)&&s(v)(...l),["prevent"]))},[e("div",null,[e("div",G,[L,a(_,{modelValue:s(t).name,"onUpdate:modelValue":o[0]||(o[0]=l=>s(t).name=l)},null,8,["modelValue"])])]),e("div",null,[M,e("div",z,[a(i,{content:s(t).description,"onUpdate:content":o[1]||(o[1]=l=>s(t).description=l),contentType:"html",placeholder:"description about School",toolbar:"essential",theme:"snow"},null,8,["content"])])]),e("div",null,[e("div",H,[a(V,{label:"Region",modelValue:c.value,"onUpdate:modelValue":o[2]||(o[2]=l=>c.value=l),options:s(g)},null,8,["modelValue","options"]),a(V,{label:"Province",modelValue:u.value,"onUpdate:modelValue":o[3]||(o[3]=l=>u.value=l),options:s(w)},null,8,["modelValue","options"])])]),e("div",J,[e("div",K,[W,a(_,{modelValue:s(t).address,"onUpdate:modelValue":o[4]||(o[4]=l=>s(t).address=l)},null,8,["modelValue"])])]),e("div",null,[e("div",X,[Y,a(k,{ref:"file",onChange:C,accept:"image/png, image/jpeg, image/gif"},null,512)])]),e("div",null,[e("div",Z,[ee,a(_,{placeholder:"Phone number",modelValue:s(t).contact,"onUpdate:modelValue":o[5]||(o[5]=l=>s(t).contact=l)},null,8,["modelValue"])])]),e("div",oe,[e("button",{type:"submit",class:"ml-3 inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sky-500 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500",disabled:s(t).processing}," Create School ",8,te)])],32)])])]),_:1})}}},ve=O(se,[["__scopeId","data-v-654e5540"]]);export{ve as default};
