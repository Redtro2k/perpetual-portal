import{c as i,b as a,o as r,$ as N,a7 as D,u as A,p as B,w as o,a as t,h as s,n as m,g as f,f as c,_ as x,C,e as p,X as b,m as L,Y as E,v as P,x as M,a8 as O,i as F,t as h,L as T,F as z,D as U}from"./app.c1af1f95.js";import{_ as Y,a as W}from"./UserLayout.7717c02f.js";import{_ as G}from"./PageHeading.6a8ded14.js";import{_ as H}from"./Paginate.3af1211c.js";import{s as X,d as w,f as q,c as j,_ as k,o as I}from"./FormDescription.91bd2b7e.js";import{_ as J}from"./FormInput.415af08e.js";import{_ as K}from"./RadioCard.3f957428.js";import{_ as Q}from"./ValidationErrors.84f8ef8f.js";import{_ as R}from"./Button.a8ebcde9.js";import{r as Z}from"./UserIcon.a28d02e5.js";import{r as ee}from"./TrashIcon.58614f53.js";import{r as se}from"./CollectionIcon.cfed4094.js";import{r as te}from"./PlusIcon.a5d3539e.js";import{r as ae}from"./CheckCircleIcon.eded16ce.js";import"./SearchIcon.63fea564.js";import"./popover.ca883c0d.js";import"./use-outside-click.05e09a47.js";import"./use-resolve-button-type.525f8011.js";import"./use-event-listener.e89fd11f.js";import"./menu.80302a37.js";import"./calculate-active-index.804d077d.js";import"./HomeIcon.51fa6b7b.js";import"./ChevronDownIcon.87b03203.js";import"./micro-task.fe338338.js";import"./radio-group.ebd87b63.js";import"./label.6703e288.js";import"./description.363cd376.js";import"./use-controllable.24eb19a9.js";function le(_,l){return r(),i("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},[a("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"})])}function re(_,l){return r(),i("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},[a("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"})])}const oe={class:"max-w-7xl h-full mx-auto pb-10 lg:py-12 lg:px-8"},ne={class:"lg:grid lg:grid-cols-12 lg:gap-x-5"},ie={class:"py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3"},de={class:"space-y-1"},ce={class:"space-y-6 sm:px-6 lg:px-0 lg:col-span-9"},ue={key:4,class:"py-6"},me={class:"mt-6 grid grid-cols-4 gap-4"},pe={key:2,class:"py-6"},_e={key:3,class:"py-6"},ge={class:"bg-white"},he={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},fe={class:"max-w-2xl mx-auto px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"},ve=t("h2",{class:"pt-12 text-xl font-bold text-gray-900 font-sans"},"Add Subjects",-1),be={class:"mt-8 grid sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 gap-x-8 gap-y-2"},ye={class:"relative"},xe={class:"relative w-full h-72 rounded-lg overflow-hidden"},we=["src"],je={class:"relative mt-4"},ke={class:"text-sm font-medium text-gray-900"},$e={class:"mt-1 text-sm text-gray-500"},Se={class:"mt-1 text-sm text-gray-500"},Ve={key:0,class:"absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden"},Ne={class:"relative text-lg font-semibold text-white"},De={class:"mt-6"},Ae={class:"sr-only"},os={__name:"AdminYearLevelEdit",props:{subjects:Object,yearlevel:Object,year_created_by:String,teacher:Object,sections:Object},setup(_){const l=_;let $=()=>confirm("Are you sure you want to add this subject?");const S=[{icon:re,label:l.yearlevel.type},{icon:le,label:N(l.yearlevel.date_created).format("LL").toString()},{icon:Z,label:"Created by "+l.year_created_by}],V=[{icon:ee,label:"Delete",href:route("yearlevel.destroy",l.yearlevel.id),isPrimary:!0,isDelete:!0,method:"DELETE"},{icon:D,label:"View Own Subject",href:route("owned-subject.show",l.yearlevel.id),isPrimary:!0,method:"GET"}],d=A({yearlevel_id:l.yearlevel.id,name:null,adviser_id:null});let y=()=>{d.post(route("enrolled-student.store"),{preserveScroll:!1,onFinish:()=>d.reset("name","adviser_id"),onSuccess:()=>d.reset("name","adviser_id")})},g=[];return B(()=>{l.sections.length==0&&g.push("Sections"),l.subjects.data.length==0&&g.push("Subject")}),(n,u)=>{const v=U("WithAccentBorder");return r(),i(Y,{title:"Year Level","no-content":"",showSideNav:!1},{content:o(()=>[t("main",oe,[t("div",ne,[a(s(I),null,{default:o(()=>[t("aside",ie,[t("nav",de,[a(s(X),null,{default:o(()=>[a(s(w),{as:"template"},{default:o(({selected:e})=>[t("button",{class:m([e?"bg-gray-50 text-jvdgreen hover:bg-white":"text-gray-900 hover:text-gray-900 hover:bg-gray-50","group rounded-md px-3 py-2 flex items-center text-sm font-medium"])},[a(s(se),{class:m([e?"text-jvgreen":"text-gray-400 group-hover:text-gray-500","flex-shrink-0 -ml-1 mr-3 h-6 w-6"])},null,8,["class"]),f(" List Of Sections ")],2)]),_:1}),a(s(w),{as:"template"},{default:o(({selected:e})=>[t("button",{class:m([e?"bg-gray-50 text-jvdgreen hover:bg-white":"text-gray-900 hover:text-gray-900 hover:bg-gray-50","group rounded-md px-3 py-2 flex items-center text-sm font-medium"])},[a(s(te),{class:m([e?"text-jvgreen":"text-gray-400 group-hover:text-gray-500","flex-shrink-0 -ml-1 mr-3 h-6 w-6"])},null,8,["class"]),f(" Create Section ")],2)]),_:1})]),_:1})])]),t("div",ce,[a(s(q),null,{default:o(()=>[a(s(j),null,{default:o(()=>[a(k,{title:"List Sections",description:"these are all section that created"},{main:o(()=>[s(g).length!=0?(r(),i(v,{key:0,label:`No ${s(g).join(", ")} Please create new ${s(g).join(", ")} before you proceed`},null,8,["label"])):c("",!0),n.$page.props.flash.warning?(r(),i(v,{key:1,label:n.$page.props.flash.warning},null,8,["label"])):c("",!0),n.$page.props.flash.success?(r(),i(x,{key:2,class:"mb-4 mt-8",label:n.$page.props.flash.success},null,8,["label"])):c("",!0),l.sections.length!=0?(r(),i(C,{key:3,items:l.sections,edit_link:"enrolled-student.destroy",isEditData:"enrolled-student.edit",isDeleteData:{current_yearlevel:l.yearlevel.id},post:""},null,8,["items","isDeleteData"])):(r(),p("div",ue,[a(b,{label:"No Available Section, Please create one"})]))]),_:1})]),_:1}),a(s(j),null,{default:o(()=>[t("form",{onSubmit:u[2]||(u[2]=L((...e)=>s(y)&&s(y)(...e),["prevent"]))},[a(k,{title:"Creating Section",description:"add new section for this year level",haveFooter:""},{main:o(()=>[a(Q,{class:"mb-4 pt-8"}),n.$page.props.flash.success?(r(),i(x,{key:0,class:"mb-4 mt-8",label:n.$page.props.flash.success},null,8,["label"])):c("",!0),n.$page.props.flash.warning?(r(),i(E,{key:1,label:n.$page.props.flash.warning},null,8,["label"])):c("",!0),t("div",me,[a(J,{label:"Section Name",modelValue:s(d).name,"onUpdate:modelValue":u[0]||(u[0]=e=>s(d).name=e)},null,8,["modelValue"])]),l.teacher.data.length!=0?(r(),p("div",pe,[a(K,{items:_.teacher.data,label:"Available Teachers",modelValue:s(d).adviser_id,"onUpdate:modelValue":u[1]||(u[1]=e=>s(d).adviser_id=e)},null,8,["items","modelValue"])])):(r(),p("div",_e,[a(b,{label:"No Available teacher, try to assigining teacher"})]))]),footer:o(()=>[P(a(R,{class:m(["ml-4",{"opacity-25":s(d).processing}]),disable:s(d).processing},{default:o(()=>[f(" add Adviser ")]),_:1},8,["class","disable"]),[[M,s(d).adviser_id]])]),_:1})],32)]),_:1})]),_:1})])]),_:1})])]),t("div",ge,[t("div",he,[(r(),i(O,null,{fallback:o(()=>[a(W)]),default:o(()=>[t("div",fe,[a(G,{option:S,more:V,label:_.yearlevel.name},null,8,["label"]),ve,n.$page.props.flash.warning?(r(),i(v,{key:0,label:n.$page.props.flash.warning},null,8,["label"])):c("",!0),t("div",be,[(r(!0),p(z,null,F(l.subjects.data,e=>(r(),p("div",{key:e.id,class:"mb-4"},[t("div",ye,[t("div",xe,[t("img",{src:e.images,class:"w-full h-full object-center object-cover"},null,8,we)]),t("div",je,[t("h3",ke,h(e.name),1),t("p",$e,"Unit: "+h(e.value_units),1),t("p",Se,"Term: "+h(e.term),1)]),e.already_added?(r(),p("div",Ve,[t("p",Ne,[a(s(ae),{class:"h-5 w-5 text-jvgreen border-2 border-jvdgreen rounded-full"})])])):c("",!0)]),t("div",De,[a(s(T),{href:e.already_added?n.route("subject.index"):n.route("add-subject"),method:e.already_added?"get":"post",data:e.already_added?{id:e.id}:{yearlevel_id:l.yearlevel.id,subject_id:e.id},as:"button",type:"button",class:m([e.already_added?"bg-jvgreen text-white hover:bg-jvdgreen":"bg-gray-200 text-gray-900 hover:bg-gray-100","relative flex w-full border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-medium"]),onBefore:Be=>e.already_added?null:s($)},{default:o(()=>[f(h(e.already_added?"View":"Add")+" Modules",1),t("span",Ae,", "+h(e.name),1)]),_:2},1032,["href","method","data","class","onBefore"])])]))),128))]),l.subjects.data.length==0?(r(),i(b,{key:1,label:"No Subject, Please add Subjects"})):c("",!0),a(H,{links:l.subjects.links,from:l.subjects.from,to:l.subjects.to,result:l.subjects.result,responsiveNext:l.subjects.next_page_url,responsivePrevious:l.subjects.first_page_url},null,8,["links","from","to","result","responsiveNext","responsivePrevious"])])]),_:1}))])])]),_:1})}}};export{os as default};
