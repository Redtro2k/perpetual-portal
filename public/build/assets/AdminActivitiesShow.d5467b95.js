import{o as m,c,w as i,i as d,t as Q,V as M,d as U,u as z,C as D,a as n,b as t,g as e,n as r,m as q,_ as j,f as v,v as h,x as b,D as O}from"./app.d6fd6ef0.js";import{_ as R}from"./UserLayout.cf4779a3.js";import{Z as T,e as x,t as Y,a as w,_,Y as Z}from"./FormDescription.6a96f0c9.js";import{_ as V}from"./FormInput.4f925074.js";import{_ as B}from"./ValidationErrors.0b35cf52.js";import{_ as C}from"./Button.6d30971e.js";import{_ as L}from"./RadioButton.0d968936.js";import{_ as G}from"./WithLeftLabelAndDescription.c067b1df.js";import{r as E}from"./PlusIcon.8ea89f14.js";import{r as H}from"./CogIcon.5d467723.js";import{r as I}from"./UserIcon.21820f05.js";import"./SearchIcon.ef60ed6c.js";import"./popover.11880e8a.js";import"./use-outside-click.4ced2ae8.js";import"./use-resolve-button-type.ddd396ff.js";import"./use-event-listener.daba031f.js";import"./menu.57fea4d8.js";import"./calculate-active-index.804d077d.js";import"./HomeIcon.c44d3662.js";import"./radio-group.d16294a8.js";import"./label.d955b3ac.js";import"./description.42e15c9a.js";import"./form.c56a6aaf.js";import"./switch.5fc13a2f.js";const $={__name:"ButtonPrimary",props:{label:String,routing:String,isPost:{type:Boolean,default:()=>!1},isLink:Boolean},setup(g){return(a,u)=>(m(),c(M(g.isLink?"Link":"button"),{href:g.isLink?"#":g.routing,class:"inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-jvgreen hover:bg-jvdgreen focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-jvgreen",type:"button"},{default:i(()=>[d(Q(g.label),1)]),_:1},8,["href"]))}},J={class:"max-w-7xl mx-auto pb-10 lg:py-12 lg:px-8"},K={class:"lg:grid lg:grid-cols-12 lg:gap-x-5"},X={class:"py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3"},ee={class:"space-y-1"},te=d(" Multilple Choices "),se=d(" Essay "),oe=d(" Fill in the blanks "),le=d(" Option "),ie=d(" Students "),ne={class:"space-y-6 sm:px-6 lg:px-0 lg:col-span-9"},re={class:"mt-6 grid grid-cols-4 gap-4"},ae={class:"flex space-x-2"},de={class:"flex justify-between"},ue={class:"flex space-x-2"},me=d("Add"),ce=d("Add"),pe={class:"mt-6 grid grid-cols-4 gap-4"},ge={class:"flex space-x-2"},fe={class:"flex justify-between"},_e={class:"flex space-x-2"},ve=d("Add"),he=d("save"),be=["href"],Re={__name:"AdminActivitiesShow",props:{questions:Object,selected_activities:Object,students_answer:Object},setup(g){const a=g;U("");const u=U(""),o=z({question:"",answer:[],correct_answer:"",activity_id:a.selected_activities.id});let F=()=>{u.value.length!=0?(o.answer.push(u.value),o.answer.length==1&&(o.correct_answer=u.value),u.value=""):alert("Possible Answer field is Empty")},N=()=>{o.answer.pop(),o.answer.length==0&&o.reset("correct_answer")},A=z({given:a.selected_activities.given!=0}),y=()=>{A.put(route("question-answer.update",a.selected_activities.id),{preserveScroll:!0,preserveState:!0})},f=()=>{o.post(route("question-answer.store"),{preserveScroll:!0,onFinish:()=>o.reset("question","answer","correct_answer"),onSuccess:()=>o.reset("question","answer","correct_answer")})};return(p,l)=>{const P=D("QuillEditor"),S=D("WithAccentBorder"),W=D("WithDashBorder");return m(),c(R,{title:"Modules","no-content":"",showSideNav:!1},{content:i(()=>[n("main",J,[n("div",K,[t(e(Z),null,{default:i(()=>[n("aside",X,[n("nav",ee,[t(e(T),null,{default:i(()=>[t(e(x),{as:"template"},{default:i(({selected:s})=>[n("button",{onClick:l[0]||(l[0]=k=>e(o).reset("answer","correct_answer","question")),class:r([s?"bg-gray-50 text-indigo-600 hover:bg-white":"text-gray-900 hover:text-gray-900 hover:bg-gray-50","group rounded-md px-3 py-2 flex items-center text-sm font-medium"])},[t(e(E),{class:r([s?"text-indigo-500":"text-gray-400 group-hover:text-gray-500","flex-shrink-0 -ml-1 mr-3 h-6 w-6"])},null,8,["class"]),te],2)]),_:1}),t(e(x),{as:"template"},{default:i(({selected:s})=>[n("button",{onClick:l[1]||(l[1]=k=>e(o).reset("answer","correct_answer","question")),class:r([s?"bg-gray-50 text-indigo-600 hover:bg-white":"text-gray-900 hover:text-gray-900 hover:bg-gray-50","group rounded-md px-3 py-2 flex items-center text-sm font-medium"])},[t(e(E),{class:r([s?"text-indigo-500":"text-gray-400 group-hover:text-gray-500","flex-shrink-0 -ml-1 mr-3 h-6 w-6"])},null,8,["class"]),se],2)]),_:1}),t(e(x),{as:"template"},{default:i(({selected:s})=>[n("button",{onClick:l[2]||(l[2]=k=>e(o).reset("answer","correct_answer","question")),class:r([s?"bg-gray-50 text-indigo-600 hover:bg-white":"text-gray-900 hover:text-gray-900 hover:bg-gray-50","group rounded-md px-3 py-2 flex items-center text-sm font-medium"])},[t(e(E),{class:r([s?"text-indigo-500":"text-gray-400 group-hover:text-gray-500","flex-shrink-0 -ml-1 mr-3 h-6 w-6"])},null,8,["class"]),oe],2)]),_:1}),t(e(x),{as:"template"},{default:i(({selected:s})=>[n("button",{onClick:l[3]||(l[3]=k=>e(o).reset("answer","correct_answer","question")),class:r([s?"bg-gray-50 text-indigo-600 hover:bg-white":"text-gray-900 hover:text-gray-900 hover:bg-gray-50","group rounded-md px-3 py-2 flex items-center text-sm font-medium"])},[t(e(H),{class:r([s?"text-indigo-500":"text-gray-400 group-hover:text-gray-500","flex-shrink-0 -ml-1 mr-3 h-6 w-6"])},null,8,["class"]),le],2)]),_:1}),t(e(x),{as:"template"},{default:i(({selected:s})=>[n("button",{onClick:l[4]||(l[4]=k=>e(o).reset("answer","correct_answer","question")),class:r([s?"bg-gray-50 text-indigo-600 hover:bg-white":"text-gray-900 hover:text-gray-900 hover:bg-gray-50","group rounded-md px-3 py-2 flex items-center text-sm font-medium"])},[t(e(I),{class:r([s?"text-indigo-500":"text-gray-400 group-hover:text-gray-500","flex-shrink-0 -ml-1 mr-3 h-6 w-6"])},null,8,["class"]),ie],2)]),_:1})]),_:1})])]),n("div",ne,[t(e(Y),null,{default:i(()=>[t(e(w),null,{default:i(()=>[n("form",{onSubmit:l[8]||(l[8]=q((...s)=>e(f)&&e(f)(...s),["prevent"]))},[t(_,{title:"Creating Quizzes",description:"fill up all of validation to proceed the next step",haveFooter:""},{main:i(()=>[t(B,{class:"mb-4 pt-8"}),p.$page.props.flash.success?(m(),c(j,{key:0,class:"mb-4 mt-8",label:p.$page.props.flash.success},null,8,["label"])):v("",!0),n("div",re,[t(V,{label:"Question",modelValue:e(o).question,"onUpdate:modelValue":l[5]||(l[5]=s=>e(o).question=s)},null,8,["modelValue"]),n("div",ae,[t(V,{label:"Add Possible Answer",modelValue:u.value,"onUpdate:modelValue":l[6]||(l[6]=s=>u.value=s)},null,8,["modelValue"])])]),t(L,{items:e(o).answer,modelValue:e(o).correct_answer,"onUpdate:modelValue":l[7]||(l[7]=s=>e(o).correct_answer=s),label:"Note",description:"Select which is the correct answer?"},null,8,["items","modelValue"])]),footer:i(()=>[n("div",de,[n("div",ue,[t($,{label:"Add Answer",onClick:e(F)},null,8,["onClick"]),h(t($,{label:"Remove Answer",onClick:e(N)},null,8,["onClick"]),[[b,e(o).answer.length!=0]])]),t(C,{class:r(["ml-4",{"opacity-25":e(o).processing}]),disabled:e(o).processing},{default:i(()=>[me]),_:1},8,["class","disabled"])])]),_:1})],32)]),_:1}),t(e(w),null,{default:i(()=>[n("form",{onSubmit:l[10]||(l[10]=q((...s)=>e(f)&&e(f)(...s),["prevent"]))},[t(_,{title:"Creating Quizzes",description:"fill up all of validation to proceed the next step",haveFooter:""},{main:i(()=>[t(B,{class:"mb-4 pt-8"}),p.$page.props.flash.success?(m(),c(j,{key:0,class:"mb-4 mt-8",label:p.$page.props.flash.success},null,8,["label"])):v("",!0),t(P,{content:e(o).question,"onUpdate:content":l[9]||(l[9]=s=>e(o).question=s),contentType:"html",placeholder:"Create Essay",toolbar:"essential",theme:"snow"},null,8,["content"]),h(n("div",{class:"mt-6 grid grid-cols-4 gap-4"},Q(e(o).answer=["Essay"])+" - "+Q(e(o).correct_answer="none"),513),[[b,!1]])]),footer:i(()=>[t(C,{class:r(["ml-4",{"opacity-25":e(o).processing}]),disabled:e(o).processing},{default:i(()=>[ce]),_:1},8,["class","disabled"])]),_:1})],32)]),_:1}),t(e(w),null,{default:i(()=>[n("form",{onSubmit:l[14]||(l[14]=q((...s)=>e(f)&&e(f)(...s),["prevent"]))},[t(_,{title:"Creating Quizzes",description:"fill up all of validation to proceed the next step",haveFooter:""},{main:i(()=>[t(B,{class:"mb-4 pt-8"}),p.$page.props.flash.success?(m(),c(j,{key:0,class:"mb-4 mt-8",label:p.$page.props.flash.success},null,8,["label"])):v("",!0),t(S,{class:"my-4",label:"use '____' to highlight your questions,"}),n("div",pe,[t(V,{label:"Question",modelValue:e(o).question,"onUpdate:modelValue":l[11]||(l[11]=s=>e(o).question=s)},null,8,["modelValue"]),n("div",ge,[t(V,{label:"Answer",modelValue:u.value,"onUpdate:modelValue":l[12]||(l[12]=s=>u.value=s)},null,8,["modelValue"])])]),t(L,{items:e(o).answer,modelValue:e(o).correct_answer,"onUpdate:modelValue":l[13]||(l[13]=s=>e(o).correct_answer=s),label:"Note",description:"Final Answer"},null,8,["items","modelValue"])]),footer:i(()=>[n("div",fe,[n("div",_e,[h(t($,{label:"Add Answer",onClick:e(F)},null,8,["onClick"]),[[b,!(e(o).answer.length>=1)]]),h(t($,{label:"Remove Answer",onClick:e(N)},null,8,["onClick"]),[[b,e(o).answer.length!=0]])]),t(C,{class:r(["ml-4",{"opacity-25":e(o).processing}]),disabled:e(o).processing},{default:i(()=>[ve]),_:1},8,["class","disabled"])])]),_:1})],32)]),_:1}),t(e(w),null,{default:i(()=>[n("form",{onSubmit:l[16]||(l[16]=q((...s)=>e(y)&&e(y)(...s),["prevent"]))},[t(_,{title:"Option",description:"all controls",haveFooter:""},{main:i(()=>[a.questions.length==0?(m(),c(S,{key:0,class:"mt-4",label:"Empty Question"})):v("",!0),h(t(G,{class:"pt-4",label:"Deploy activities",body:"if you one this activities, will notify who taken this subjects.",modelValue:e(A).given,"onUpdate:modelValue":l[15]||(l[15]=s=>e(A).given=s)},null,8,["modelValue"]),[[b,a.questions.length!=0]])]),footer:i(()=>[t(C,{class:r(["ml-4",{"opacity-25":e(y).processing}]),disabled:e(y).processing},{default:i(()=>[he]),_:1},8,["class","disabled"])]),_:1})],32)]),_:1}),t(e(w),null,{default:i(()=>[t(_,{title:"All Students",description:"list of all student who answering this activities",haveFooter:""},{main:i(()=>[a.questions.length==0?(m(),c(S,{key:0,class:"mt-4",label:"No Students"})):v("",!0),t(O,{items:a.students_answer,edit_link:"view-student",edit_link_with_request:{selected_activity_id:a.selected_activities.id}},null,8,["items","edit_link_with_request"]),n("a",{href:p.route("activities-result.result",a.selected_activities.id),class:"inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"},"Export Excel",8,be)]),_:1})]),_:1})]),_:1})])]),_:1})]),t(_,{class:"mt-8",title:"Question",description:"list of all question that your created"},{main:i(()=>[a.questions.length!=0?(m(),c(O,{key:0,items:a.questions,edit_link:"question-answer.destroy",isDeleteData:{current_id:a.selected_activities.id}},null,8,["items","isDeleteData"])):(m(),c(W,{key:1,label:"No Question"}))]),_:1})])]),_:1})}}};export{Re as default};