import{o as n,c,b as t,e as p,a as e,t as $,w as l,n as d,h as o,g as u,L as O,d as P,j as B,u as U,p as C,k as j,$ as N,v as R,x as L,m as W,a6 as z,f as g,s as E,D as v}from"./app.cfedd27a.js";import{_ as I}from"./UserLayout.3d0bd7ab.js";import{s as T,d as b,f as G,c as w,_ as k,o as H}from"./FormDescription.ca186e04.js";import{l as q}from"./switch.8d4a1319.js";import{_ as J}from"./SimpleCustom.2d83f208.js";import{_ as A}from"./Button.cf644ddc.js";import{_ as K}from"./WithList.b24270cf.js";import{r as Q}from"./UserIcon.ed86aa14.js";import{r as X}from"./CogIcon.1b3c4b99.js";import"./SearchIcon.4c317441.js";import"./popover.237c8f4a.js";import"./use-outside-click.f416fbbe.js";import"./use-resolve-button-type.9abdd81a.js";import"./use-event-listener.654774c0.js";import"./menu.09cffbea.js";import"./calculate-active-index.804d077d.js";import"./HomeIcon.8f45d367.js";import"./micro-task.fe338338.js";import"./label.c199fa8f.js";import"./description.e40cf46c.js";import"./use-controllable.3bd72c52.js";function Y(r,s){return n(),c("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"})])}const Z={class:"py-4 sm:py-5 w-full sm:grid sm:grid-cols-3 sm:gap-4"},ee={class:"text-sm flex font-medium text-gray-500"},te={class:"mt-1 pl-4 flex flex-row text-sm text-gray-900 sm:mt-0 sm:col-span-2"},se={class:"grow"},h={__name:"FormSpan",props:{label:String,value:String},setup(r){return(s,i)=>(n(),p("div",Z,[e("dt",ee,$(r.label),1),e("dd",te,[e("span",se,$(r.value),1)])]))}},oe={class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5"},re=e("dt",{class:"text-sm font-medium text-gray-500"},"Photo",-1),le={class:"mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2"},ae={class:"flex-grow"},ne=["src"],ie={__name:"FormPhoto",props:{src:String},setup(r){const s=r;return(i,x)=>(n(),p("div",oe,[re,e("dd",le,[e("span",ae,[e("img",{class:"h-8 w-8 rounded-full",src:s.src,alt:""},null,8,ne)])])]))}},de={class:"mt-6 grid grid-cols-4 gap-6"},ce={class:"col-span-4 sm:col-span-2"},me={for:"first-name",class:"block text-sm font-medium text-gray-700"},ue=e("span",{class:"sr-only"},"Enable notifications",-1),pe={__name:"FormSwitch",props:{label:String,modelValue:[Boolean]},emits:["update:modelValue"],setup(r,{emit:s}){const i=r;return(x,f)=>(n(),p("div",de,[e("div",ce,[e("label",me,$(r.label),1),t(o(q),{as:"div","onUpdate:modelValue":f[0]||(f[0]=_=>s("update:modelValue",_)),modelValue:i.modelValue,class:d([r.modelValue?"bg-jvgreen":"bg-gray-200","relative inline-flex h-6 w-11 items-center rounded-full"])},{default:l(()=>[ue,e("span",{class:d([r.modelValue?"translate-x-6":"translate-x-1","inline-block h-4 w-4 transform rounded-full bg-white transition"])},null,2)]),_:1},8,["modelValue","class"])])]))}},_e={class:"mt-6 grid grid-cols-4 gap-6"},ge={class:"col-span-4 sm:col-span-2"},fe=e("label",{for:"first-name",class:"block text-sm font-medium text-gray-700"},"Back up Routine",-1),he={__name:"FormButton",props:{href:String},setup(r){return(s,i)=>(n(),p("div",_e,[e("div",ge,[fe,t(o(O),{href:s.route(r.href),class:"inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-jvgreen"},{default:l(()=>[u("Upload")]),_:1},8,["href"])])]))}},xe={class:"max-w-7xl mx-auto pb-10 lg:py-12 lg:px-8"},ye={class:"lg:grid lg:grid-cols-12 lg:gap-x-5"},ve={class:"py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3"},be={class:"space-y-1"},we={class:"space-y-6 sm:px-6 lg:px-0 lg:col-span-9"},ke={class:"mt-6 grid grid-cols-4 gap-6"},$e={class:"divide-y divide-gray-200"},Se={class:"z-index-0 mt-6 grid grid-cols-4 gap-6"},Ve={class:"divide-y divide-gray-200"},Be={key:1,class:"pt-2"},je=e("label",{for:"first-name",class:"block text-sm font-medium text-gray-700"},"Handle Section & Subjects",-1),Ne={key:2,class:"py-2"},Ae=e("label",{for:"first-name",class:"block text-sm font-medium text-gray-700"},"Student Information",-1),Ye={__name:"AdminUserShow",props:{users:Object,roles:Object,selected_role:String,user_roles:Object},setup(r){const s=r;console.log(s.selected_role);const i=P(!1),x=B(()=>{if(s.users.birthdate!=null)N(s.users.birthdate).format("LL");else return"no birthdate"}),f=B(()=>j().props.value.user.roles[0].name),_=U({id:s.users.id,roles:s.selected_role}),y=[];let S=()=>{_.post(route("add-role"),{onBefore:()=>confirm("Are you sure you wanna assign this user?")})};return C(()=>{s.selected_role&&y.push("This user already exists in roles."),j().props.value.can.school_existed.allowed&&y.push("No currently, the school you need to add school first...")}),(V,m)=>{const M=v("inner-table"),D=v("WithDashBorder"),F=v("WithAccentBorder");return n(),c(I,{"no-content":"",title:"Manage User",showSideNav:!1},{content:l(()=>[e("main",xe,[e("div",ye,[t(o(H),{vertical:""},{default:l(()=>[e("aside",ve,[e("nav",be,[t(o(T),null,{default:l(()=>[t(o(b),{as:"template"},{default:l(({selected:a})=>[e("button",{class:d([a?"bg-gray-50 text-jvdgreen hover:bg-white":"text-gray-900 hover:text-gray-900 hover:bg-gray-50","group rounded-md px-3 py-2 flex items-center text-sm font-medium"])},[t(o(Q),{class:d([a?"text-jvgreen":"text-gray-400 group-hover:text-gray-500","flex-shrink-0 -ml-1 mr-3 h-6 w-6"])},null,8,["class"]),u(" Profile Information ")],2)]),_:1}),t(o(b),{as:"template"},{default:l(({selected:a})=>[e("button",{class:d([a?"bg-white text-jvdgreen hover:bg-white":"text-gray-900 hover:text-gray-900 hover:bg-gray-50","group rounded-md px-3 py-2 flex items-center text-sm font-medium"])},[t(o(Y),{class:d([a?"text-jvgreen":"text-gray-400 group-hover:text-gray-500","flex-shrink-0 -ml-1 mr-3 h-6 w-6"])},null,8,["class"]),u(" Profile Roles ")],2)]),_:1}),t(o(b),{as:"template"},{default:l(({selected:a})=>[R(e("button",{class:d([a?"bg-gray-50 text-jvdgreen hover:bg-white":"text-gray-900 hover:text-gray-900 hover:bg-gray-50","group rounded-md px-3 py-2 flex items-center text-sm font-medium"])},[t(o(X),{class:d([a?"text-jvgreen":"text-gray-400 group-hover:text-gray-500","flex-shrink-0 -ml-1 mr-3 h-6 w-6"])},null,8,["class"]),u(" Backup ")],2),[[L,o(f)=="administrator"]])]),_:1})]),_:1})])]),e("div",we,[t(o(G),null,{default:l(()=>[t(o(w),null,{default:l(()=>[t(k,{title:"User Information",description:"This information will be displayed publicly so be careful what you share."},{main:l(()=>[e("div",ke,[e("dl",$e,[t(h,{label:"Name",value:r.users.name},null,8,["value"]),t(ie,{src:r.users.profile_photo_url},null,8,["src"]),t(h,{label:"Gender",value:r.users.gender},null,8,["value"]),t(h,{label:"BirthDate",value:o(x)},null,8,["value"]),t(h,{label:"Created",value:o(N)(r.users.created_at).format("ll")},null,8,["value"])])])]),_:1})]),_:1}),t(o(w),null,{default:l(()=>[e("form",{onSubmit:m[1]||(m[1]=W((...a)=>o(S)&&o(S)(...a),["prevent"]))},[t(k,{title:"Add Roles",description:"add user roles",haveFooter:!V.$page.props.can.school_existed.allowed},z({main:l(()=>[e("div",Se,[e("dl",Ve,[t(J,{class:"pb-20",label:"add roles",options:s.roles,modelValue:o(_).roles,"onUpdate:modelValue":m[0]||(m[0]=a=>o(_).roles=a)},null,8,["options","modelValue"])])]),s.selected_role?(n(),c(K,{key:0,labels:y})):g("",!0),s.user_roles.hasOwnProperty("teacher")?(n(),p("div",Be,[je,s.user_roles.teacher.length!=0?(n(),c(M,{key:0,items:s.user_roles.teacher},null,8,["items"])):(n(),c(D,{key:1,label:"No currently assigned"}))])):g("",!0),s.user_roles.hasOwnProperty("student")?(n(),p("div",Ne,[Ae,t(F,{label:"No Section enroll"})])):g("",!0)]),_:2},[V.$page.props.can.school_existed.allowed?void 0:{name:"footer",fn:l(()=>[s.selected_role?(n(),c(A,{key:0,isSecondary:""},{default:l(()=>[u("Demote")]),_:1})):g("",!0),s.selected_role?g("",!0):(n(),c(A,{key:1},{default:l(()=>[u("submit")]),_:1}))]),key:"0"}]),1032,["haveFooter"])],32)]),_:1}),t(o(w),null,{default:l(()=>[t(k,{title:"Setting as super-administrator/Admin",description:"this all of control all our system, including backup routine,schedule, for maintenance mode"},{main:l(()=>[t(pe,{label:"Maintenance Mode",modelValue:o(i),"onUpdate:modelValue":m[2]||(m[2]=a=>E(i)?i.value=a:null)},null,8,["modelValue"]),t(he,{label:"Maintenance Mode",href:"post.store"})]),_:1})]),_:1})]),_:1})])]),_:1})])])]),_:1})}}};export{Ye as default};
