import{o as a,c as n,b as o,w as l,g as f,t as x,h as s,L as B,u as w,a2 as D,k as O,a as t,v as g,x as b,n as p,V as P,C as $,X as y,a3 as A,f as m,m as V,e as h,F as N,Y as U,D as z,a0 as q,a1 as H}from"./app.69e48e67.js";import{_ as Q}from"./UserLayout.a24cb15a.js";import{d as C,f as R,c as E,_ as v,o as X}from"./FormDescription.10a1b657.js";import{_ as Y}from"./ValidationErrors.616fb564.js";import{_ as I}from"./FormInput.32780116.js";import{_ as G}from"./FormSlot.7fe348dd.js";import{_ as M}from"./Button.27fb7189.js";import{_ as J}from"./ButtonLink.c8ebc9df.js";import{_ as K}from"./RadioCard.2f6e7d82.js";import{_ as W}from"./_plugin-vue_export-helper.cdc0426e.js";import{r as Z}from"./CollectionIcon.28bbd574.js";import{r as ee}from"./PlusIcon.4f98cb16.js";import"./SearchIcon.84157a4d.js";import"./popover.a942ee08.js";import"./use-outside-click.39d564af.js";import"./use-resolve-button-type.41d4d527.js";import"./use-event-listener.0fd12e9f.js";import"./menu.0e8d2c7b.js";import"./calculate-active-index.804d077d.js";import"./HomeIcon.d123c957.js";import"./micro-task.fe338338.js";import"./radio-group.3b4a3a6a.js";import"./label.57245af6.js";import"./description.ff233e71.js";import"./use-controllable.3334d46b.js";import"./CheckCircleIcon.1e540d7c.js";function se(d,e){return a(),n("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),o("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"})])}const T={__name:"ButtonLinkSecondary",props:{label:String,routes:String,params:{type:String,default:()=>null}},setup(d){return(e,c)=>(a(),n(s(B),{href:d.params==null?e.route(d.routes):e.route(d.routes,d.params),class:"inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"},{default:l(()=>[f(x(d.label),1)]),_:1},8,["href"]))}};const te=d=>(q("data-v-4d5779df"),d=d(),H(),d),ae={class:"max-w-7xl mx-auto pb-10 lg:py-12 lg:px-8"},oe={class:"lg:grid lg:grid-cols-12 lg:gap-x-5"},re={class:"py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3"},le={class:"space-y-1"},ie={class:"space-y-6 sm:px-6 lg:px-0 lg:col-span-9"},ne={class:"px-4 sm:px-6 lg:px-8"},de={class:"mt-8 flex flex-col"},ce={class:"-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8"},ue={class:"inline-block min-w-full py-2 align-middle md:px-6 lg:px-8"},me={class:"mt-6 grid grid-cols-4 gap-4"},pe={class:"mt-6 grid grid-cols-4 gap-4"},_e={class:"py-4"},ge={for:"first-name",class:"block text-sm font-medium text-gray-700"},be={key:0,class:"text-indigo-500 font-semibold"},fe=te(()=>t("label",{class:"block text-sm font-medium text-gray-700"},"Description",-1)),he=["innerHTML"],ve={class:"flex-shrink-0"},je=["src"],ye={class:"mt-6 grid grid-cols-4 gap-4"},xe={key:0,class:"py-6"},ke={key:1,class:"py-6"},Se={__name:"AdminAddSubjectIndex",props:{subjects:Object,selected_subject:Object,selected_image:String,teachers:Object,selected_modules:Object},setup(d){const e=d,c=w({_method:e.selected_subject?"PUT":"POST",name:e.selected_subject?e.selected_subject.name:"",value_units:e.selected_subject?e.selected_subject.value_units.toString():"0",images:[],description:e.selected_subject?e.selected_subject.description.toString():""});let j=()=>Math.random().toString(36).substring(2);const _=w({user_id:null,token:j()+j()+j(),subject_id:e.selected_subject?e.selected_subject.id:""}),F=D(()=>!!O().props.value.errors);let k=()=>{_.post(route("assign_teacher.store"),{preserveState:!0,preserveScroll:!0,onBefore:()=>confirm("Are you sure you wanna assign this teacher ?")})},S=()=>{e.selected_subject?c.post(route("subject.update",e.selected_subject.id),{preserveState:!1,preserveScroll:!0}):c.post(route("subject.store"),{preserveState:!F.value,preserveScroll:!0,onSuccess:()=>c.reset("id","name","value_units","term","images","description")})};return(i,u)=>{const L=z("QuillEditor");return a(),n(Q,{title:"Subjects","no-content":"",showSideNav:!1},{content:l(()=>[t("main",ae,[t("div",oe,[o(s(X),{defaultIndex:d.selected_subject?1:0},{default:l(()=>[t("aside",re,[t("nav",le,[g(o(s(C),{as:"template"},{default:l(({selected:r})=>[t("button",{class:p([r?"bg-gray-50 text-jvdgreen hover:bg-white":"text-gray-900 hover:text-gray-900 hover:bg-gray-50","group rounded-md px-3 py-2 flex items-center text-sm font-medium"])},[o(s(Z),{class:p([r?"text-jvgreen":"text-gray-400 group-hover:text-gray-500","flex-shrink-0 -ml-1 mr-3 h-6 w-6"])},null,8,["class"]),f(" Subjects ")],2)]),_:1},512),[[b,i.$page.props.can.admin_or_superadmin]]),o(s(C),{as:"template"},{default:l(({selected:r})=>[t("button",{class:p([r?"bg-gray-50 text-djvgreen hover:bg-white":"text-gray-900 hover:text-gray-900 hover:bg-gray-50","group rounded-md px-3 py-2 flex items-center text-sm font-medium"])},[(a(),n(P(i.$page.props.can.admin_or_superadmin||i.$page.props.can.manage_teacher?s(ee):s(se)),{class:p([r?"text-jvgreen":"text-gray-400 group-hover:text-jvgreen","flex-shrink-0 -ml-1 mr-3 h-6 w-6"])},null,8,["class"])),f(" "+x(i.$page.props.can.admin_or_superadmin||i.$page.props.can.manage_teacher?"Add/Edit Subject":`${e.selected_subject.name} Subject`),1)],2)]),_:1})])]),t("div",ie,[o(s(R),null,{default:l(()=>[g(o(s(E),null,{default:l(()=>[o(v,{title:"List of all Subjects",description:"these are all of records subjects from the database"},{main:l(()=>[t("div",ne,[t("div",de,[t("div",ce,[t("div",ue,[e.subjects.data.length!=0?(a(),n($,{key:0,items:e.subjects.data,edit_link:"subject.index",post:""},null,8,["items"])):(a(),n(y,{key:1,label:"No Record, Create a new Subjects"}))]),e.subjects.data!=0?(a(),n(A,{key:0,class:"mt-4",links:e.subjects.links,from:e.subjects.from,to:e.subjects.to,result:e.subjects.result,responsiveNext:e.subjects.next_page_url,responsivePrevious:e.subjects.first_page_url},null,8,["links","from","to","result","responsiveNext","responsivePrevious"])):m("",!0)])])])]),_:1})]),_:1},512),[[b,i.$page.props.can.admin_or_superadmin]]),o(s(E),null,{default:l(()=>[t("form",{onSubmit:u[4]||(u[4]=V((...r)=>s(S)&&s(S)(...r),["prevent"]))},[o(v,{title:"Create Subject",description:"Create a new Subjects all of field must be required",haveFooter:i.$page.props.can.admin_or_superadmin},{main:l(()=>[o(Y,{class:"mb-4 pt-8"}),t("div",me,[o(I,{label:"Subject Name",modelValue:s(c).name,"onUpdate:modelValue":u[0]||(u[0]=r=>s(c).name=r),disabled:!i.$page.props.can.admin_or_superadmin},null,8,["modelValue","disabled"])]),g(t("div",pe,[o(I,{label:"Value Units",modelValue:s(c).value_units,"onUpdate:modelValue":u[1]||(u[1]=r=>s(c).value_units=r),disabled:!i.$page.props.can.admin_or_superadmin},null,8,["modelValue","disabled"])],512),[[b,!1]]),t("div",_e,[i.$page.props.can.admin_or_superadmin?(a(),h(N,{key:0},[t("label",ge,[f("Description "),s(c).description?m("",!0):(a(),h("small",be,"*required"))]),o(L,{content:s(c).description,"onUpdate:content":u[2]||(u[2]=r=>s(c).description=r),contentType:"html",placeholder:"description About this Subjects",toolbar:"essential",theme:"snow"},null,8,["content"])],64)):(a(),h(N,{key:1},[fe,t("span",{class:"text-sm pl-2",innerHTML:s(c).description},null,8,he)],64))]),e.selected_subject?(a(),n(G,{key:0,label:"Images",class:"mt-4"},{main:l(()=>[t("div",ve,[t("img",{src:e.selected_image,class:"rounded-full h-20 w-20"},null,8,je)])]),_:1})):m("",!0),g(t("div",ye,[t("input",{type:"file",onInput:u[3]||(u[3]=r=>s(c).images=r.target.files[0])},null,32)],512),[[b,i.$page.props.can.admin_or_superadmin]])]),footer:l(()=>[t("div",{class:p(e.selected_subject!=null?"flex justify-between":"")},[e.selected_subject!=null?(a(),n(T,{key:0,label:"Clear",routes:"subject.index"})):m("",!0),t("div",null,[o(J,{routes:"subject.destroy",id:e.selected_subject?e.selected_subject.id:null,label:"REMOVE",method:"DELETE",isShow:!!e.selected_subject},null,8,["id","isShow"]),o(M,{class:p(["ml-4",{"opacity-25":s(c).processing}]),disabled:s(c).processing},{default:l(()=>[f(x(e.selected_subject?"Edit":"Add"),1)]),_:1},8,["class","disabled"])])],2)]),_:1},8,["haveFooter"])],32),t("form",{onSubmit:u[6]||(u[6]=V((...r)=>s(k)&&s(k)(...r),["prevent"]))},[e.selected_subject?g((a(),n(v,{key:0,class:"mt-4",title:"Teachers",description:"Select Only 1 teacher, if you trying to demote the one of the teachers, go to user management and select view",haveFooter:""},{main:l(()=>[e.teachers.data.length!=0?(a(),h("div",xe,[i.$page.props.flash.warning?(a(),n(U,{key:0,label:i.$page.props.flash.warning},null,8,["label"])):m("",!0),o(K,{items:e.teachers.data,label:"Available Teachers",modelValue:s(_).user_id,"onUpdate:modelValue":u[5]||(u[5]=r=>s(_).user_id=r),isActive:"Available"},null,8,["items","modelValue"]),e.teachers.data!=0?(a(),n(A,{key:1,class:"mt-4",links:e.teachers.links,from:e.teachers.from,to:e.teachers.to,result:e.teachers.result,responsiveNext:e.teachers.next_page_url,responsivePrevious:e.teachers.first_page_url},null,8,["links","from","to","result","responsiveNext","responsivePrevious"])):m("",!0)])):(a(),h("div",ke,[o(y,{label:"No available Teacher, try to assigning teacher"})]))]),footer:l(()=>[g(o(M,{class:p(["ml-4",{"opacity-25":s(_).processing}]),disabled:s(_).processing},{default:l(()=>[f(" Assign ")]),_:1},8,["class","disabled"]),[[b,s(_).user_id]])]),_:1},512)),[[b,i.$page.props.can.admin_or_superadmin]]):m("",!0)],32),e.selected_subject?(a(),n(v,{key:0,class:"mt-4",title:"Modules",description:i.$page.props.can.manage_student?"List of all topics availables":"Add modules from subjects that you selected",haveFooter:!i.$page.props.can.manage_student},{main:l(()=>[d.selected_modules.length!=0?(a(),n($,{key:0,items:d.selected_modules,link_label:"View",dash_error:"No Modules, please Add modules this Subject",edit_link:"modules.edit"},null,8,["items"])):(a(),n(y,{key:1,label:"No Modules, please Add modules this Subject"}))]),footer:l(()=>[e.selected_subject?(a(),n(T,{key:0,label:"Add Modules",routes:"modules.create",data:{id:e.selected_subject.id}},null,8,["data"])):m("",!0)]),_:1},8,["description","haveFooter"])):m("",!0)]),_:1})]),_:1})])]),_:1},8,["defaultIndex"])])])]),_:1})}}},Ke=W(Se,[["__scopeId","data-v-4d5779df"]]);export{Ke as default};