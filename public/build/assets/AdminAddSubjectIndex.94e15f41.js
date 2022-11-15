import{o as a,c as n,b as r,w as l,i as f,t as x,g as s,L,u as w,a1 as B,k as O,C as P,a as t,v as g,x as b,n as p,V as D,D as $,X as j,a2 as A,f as m,m as V,e as y,F as U,Y as z,$ as H,a0 as Q}from"./app.d6fd6ef0.js";import{_ as R}from"./UserLayout.cf4779a3.js";import{e as N,t as Y,a as C,_ as h,Y as q}from"./FormDescription.6a96f0c9.js";import{_ as X}from"./ValidationErrors.0b35cf52.js";import{_ as E}from"./FormInput.4f925074.js";import{_ as G}from"./FormSlot.50e12b38.js";import{_ as I}from"./Button.6d30971e.js";import{_ as J}from"./ButtonLink.81a6d159.js";import{_ as K}from"./RadioCard.2e0c8bfc.js";import{_ as W}from"./_plugin-vue_export-helper.cdc0426e.js";import{r as Z}from"./CollectionIcon.d19cc3c9.js";import{r as ee}from"./PlusIcon.8ea89f14.js";import"./SearchIcon.ef60ed6c.js";import"./popover.11880e8a.js";import"./use-outside-click.4ced2ae8.js";import"./use-resolve-button-type.ddd396ff.js";import"./use-event-listener.daba031f.js";import"./menu.57fea4d8.js";import"./calculate-active-index.804d077d.js";import"./HomeIcon.c44d3662.js";import"./moment.9709ab41.js";import"./radio-group.d16294a8.js";import"./label.d955b3ac.js";import"./description.42e15c9a.js";import"./form.c56a6aaf.js";import"./CheckCircleIcon.ff70a515.js";function se(d,e){return a(),n("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},[r("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),r("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"})])}const M={__name:"ButtonLinkSecondary",props:{label:String,routes:String,params:{type:String,default:()=>null}},setup(d){return(e,c)=>(a(),n(s(L),{href:d.params==null?e.route(d.routes):e.route(d.routes,d.params),class:"inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"},{default:l(()=>[f(x(d.label),1)]),_:1},8,["href"]))}};const te=d=>(H("data-v-9887c090"),d=d(),Q(),d),ae={class:"max-w-7xl mx-auto pb-10 lg:py-12 lg:px-8"},oe={class:"lg:grid lg:grid-cols-12 lg:gap-x-5"},re={class:"py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3"},le={class:"space-y-1"},ne=f(" Subjects "),ie={class:"space-y-6 sm:px-6 lg:px-0 lg:col-span-9"},de={class:"px-4 sm:px-6 lg:px-8"},ce={class:"mt-8 flex flex-col"},ue={class:"-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8"},me={class:"inline-block min-w-full py-2 align-middle md:px-6 lg:px-8"},pe={class:"mt-6 grid grid-cols-4 gap-4"},_e={class:"mt-6 grid grid-cols-4 gap-4"},ge={class:"py-4"},be=te(()=>t("label",{class:"block text-sm font-medium text-gray-700"},"Description",-1)),fe=["innerHTML"],he={class:"flex-shrink-0"},ve=["src"],je={class:"mt-6 grid grid-cols-4 gap-4"},ye={key:0,class:"py-6"},xe={key:1,class:"py-6"},ke=f(" Assign "),Se={__name:"AdminAddSubjectIndex",props:{subjects:Object,selected_subject:Object,selected_image:String,teachers:Object,selected_modules:Object},setup(d){const e=d,c=w({_method:e.selected_subject?"PUT":"POST",name:e.selected_subject?e.selected_subject.name:"",value_units:e.selected_subject?e.selected_subject.value_units.toString():"",images:[],description:e.selected_subject?e.selected_subject.description.toString():""});let v=()=>Math.random().toString(36).substring(2);const _=w({user_id:null,token:v()+v()+v(),subject_id:e.selected_subject?e.selected_subject.id:""}),T=B(()=>!!O().props.value.errors);let k=()=>{_.post(route("assign_teacher.store"),{preserveState:!0,preserveScroll:!0,onBefore:()=>confirm("Are you sure you wanna assign this teacher ?")})},S=()=>{e.selected_subject?c.post(route("subject.update",e.selected_subject.id),{preserveState:!1,preserveScroll:!0}):c.post(route("subject.store"),{preserveState:!T.value,preserveScroll:!0,onSuccess:()=>c.reset("id","name","value_units","term","images","description")})};return(i,u)=>{const F=P("QuillEditor");return a(),n(R,{title:"Subjects","no-content":"",showSideNav:!1},{content:l(()=>[t("main",ae,[t("div",oe,[r(s(q),{defaultIndex:d.selected_subject?1:0},{default:l(()=>[t("aside",re,[t("nav",le,[g(r(s(N),{as:"template"},{default:l(({selected:o})=>[t("button",{class:p([o?"bg-gray-50 text-jvdgreen hover:bg-white":"text-gray-900 hover:text-gray-900 hover:bg-gray-50","group rounded-md px-3 py-2 flex items-center text-sm font-medium"])},[r(s(Z),{class:p([o?"text-jvgreen":"text-gray-400 group-hover:text-gray-500","flex-shrink-0 -ml-1 mr-3 h-6 w-6"])},null,8,["class"]),ne],2)]),_:1},512),[[b,i.$page.props.can.admin_or_superadmin]]),r(s(N),{as:"template"},{default:l(({selected:o})=>[t("button",{class:p([o?"bg-gray-50 text-djvgreen hover:bg-white":"text-gray-900 hover:text-gray-900 hover:bg-gray-50","group rounded-md px-3 py-2 flex items-center text-sm font-medium"])},[(a(),n(D(i.$page.props.can.admin_or_superadmin||i.$page.props.can.manage_teacher?s(ee):s(se)),{class:p([o?"text-jvgreen":"text-gray-400 group-hover:text-jvgreen","flex-shrink-0 -ml-1 mr-3 h-6 w-6"])},null,8,["class"])),f(" "+x(i.$page.props.can.admin_or_superadmin||i.$page.props.can.manage_teacher?"Add/Edit Subject":`${e.selected_subject.name} Subject`),1)],2)]),_:1})])]),t("div",ie,[r(s(Y),null,{default:l(()=>[g(r(s(C),null,{default:l(()=>[r(h,{title:"List of all Subjects",description:"these are all of records subjects from the database"},{main:l(()=>[t("div",de,[t("div",ce,[t("div",ue,[t("div",me,[e.subjects.data.length!=0?(a(),n($,{key:0,items:e.subjects.data,edit_link:"subject.index",post:""},null,8,["items"])):(a(),n(j,{key:1,label:"No Record, Create a new Subjects"}))]),e.subjects.data!=0?(a(),n(A,{key:0,class:"mt-4",links:e.subjects.links,from:e.subjects.from,to:e.subjects.to,result:e.subjects.result,responsiveNext:e.subjects.next_page_url,responsivePrevious:e.subjects.first_page_url},null,8,["links","from","to","result","responsiveNext","responsivePrevious"])):m("",!0)])])])]),_:1})]),_:1},512),[[b,i.$page.props.can.admin_or_superadmin]]),r(s(C),null,{default:l(()=>[t("form",{onSubmit:u[4]||(u[4]=V((...o)=>s(S)&&s(S)(...o),["prevent"]))},[r(h,{title:"Create Subject",description:"Create a new Subjects all of field must be required",haveFooter:i.$page.props.can.admin_or_superadmin},{main:l(()=>[r(X,{class:"mb-4 pt-8"}),t("div",pe,[r(E,{label:"Subject Name",modelValue:s(c).name,"onUpdate:modelValue":u[0]||(u[0]=o=>s(c).name=o),disabled:!i.$page.props.can.admin_or_superadmin},null,8,["modelValue","disabled"])]),t("div",_e,[r(E,{label:"Value Units",modelValue:s(c).value_units,"onUpdate:modelValue":u[1]||(u[1]=o=>s(c).value_units=o),disabled:!i.$page.props.can.admin_or_superadmin},null,8,["modelValue","disabled"])]),t("div",ge,[i.$page.props.can.admin_or_superadmin?(a(),n(F,{key:0,content:s(c).description,"onUpdate:content":u[2]||(u[2]=o=>s(c).description=o),contentType:"html",placeholder:"description About this Subjects",toolbar:"essential",theme:"snow"},null,8,["content"])):(a(),y(U,{key:1},[be,t("span",{class:"text-sm pl-2",innerHTML:s(c).description},null,8,fe)],64))]),e.selected_subject?(a(),n(G,{key:0,label:"Images",class:"mt-4"},{main:l(()=>[t("div",he,[t("img",{src:e.selected_image,class:"rounded-full h-20 w-20"},null,8,ve)])]),_:1})):m("",!0),g(t("div",je,[t("input",{type:"file",onInput:u[3]||(u[3]=o=>s(c).images=o.target.files[0])},null,32)],512),[[b,i.$page.props.can.admin_or_superadmin]])]),footer:l(()=>[t("div",{class:p(e.selected_subject!=null?"flex justify-between":"")},[e.selected_subject!=null?(a(),n(M,{key:0,label:"Clear",routes:"subject.index"})):m("",!0),t("div",null,[r(J,{routes:"subject.destroy",id:e.selected_subject?e.selected_subject.id:null,label:"REMOVE",method:"DELETE",isShow:!!e.selected_subject},null,8,["id","isShow"]),r(I,{class:p(["ml-4",{"opacity-25":s(c).processing}]),disabled:s(c).processing},{default:l(()=>[f(x(e.selected_subject?"Edit":"Add"),1)]),_:1},8,["class","disabled"])])],2)]),_:1},8,["haveFooter"])],32),t("form",{onSubmit:u[6]||(u[6]=V((...o)=>s(k)&&s(k)(...o),["prevent"]))},[e.selected_subject?g((a(),n(h,{key:0,class:"mt-4",title:"Teachers",description:"Select Only 1 teacher, if you trying to demote the one of the teachers, go to user management and select view",haveFooter:""},{main:l(()=>[e.teachers.data.length!=0?(a(),y("div",ye,[i.$page.props.flash.warning?(a(),n(z,{key:0,label:i.$page.props.flash.warning},null,8,["label"])):m("",!0),r(K,{items:e.teachers.data,label:"Available Teachers",modelValue:s(_).user_id,"onUpdate:modelValue":u[5]||(u[5]=o=>s(_).user_id=o),isActive:"Available"},null,8,["items","modelValue"]),e.teachers.data!=0?(a(),n(A,{key:1,class:"mt-4",links:e.teachers.links,from:e.teachers.from,to:e.teachers.to,result:e.teachers.result,responsiveNext:e.teachers.next_page_url,responsivePrevious:e.teachers.first_page_url},null,8,["links","from","to","result","responsiveNext","responsivePrevious"])):m("",!0)])):(a(),y("div",xe,[r(j,{label:"No available Teacher, try to assigning teacher"})]))]),footer:l(()=>[g(r(I,{class:p(["ml-4",{"opacity-25":s(_).processing}]),disabled:s(_).processing},{default:l(()=>[ke]),_:1},8,["class","disabled"]),[[b,s(_).user_id]])]),_:1},512)),[[b,i.$page.props.can.admin_or_superadmin]]):m("",!0)],32),e.selected_subject?(a(),n(h,{key:0,class:"mt-4",title:"Modules",description:i.$page.props.can.manage_student?"List of all topics availables":"Add modules from subjects that you selected",haveFooter:!i.$page.props.can.manage_student},{main:l(()=>[d.selected_modules.length!=0?(a(),n($,{key:0,items:d.selected_modules,link_label:"View",dash_error:"No Modules, please Add modules this Subject",edit_link:"modules.edit"},null,8,["items"])):(a(),n(j,{key:1,label:"No Modules, please Add modules this Subject"}))]),footer:l(()=>[e.selected_subject?(a(),n(M,{key:0,label:"Add Modules",routes:"modules.create",data:{id:e.selected_subject.id}},null,8,["data"])):m("",!0)]),_:1},8,["description","haveFooter"])):m("",!0)]),_:1})]),_:1})])]),_:1},8,["defaultIndex"])])])]),_:1})}}},Ke=W(Se,[["__scopeId","data-v-9887c090"]]);export{Ke as default};