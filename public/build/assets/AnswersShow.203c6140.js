import{o as s,c as a,b as i,u as B,w as n,a as o,h as e,n as p,g as u,e as y,i as x,v as f,x as v,V as C,t as N,F as b,L as w,f as k,D as V}from"./app.b30cca47.js";import{_ as F}from"./UserLayout.33db4a21.js";import{s as M,d as j,f as E,c as $,_ as S,o as L}from"./FormDescription.8cade27f.js";import{_ as A}from"./RadioButton.69d7f3aa.js";import{_ as D}from"./FormInput.0d5a9888.js";import{_ as Q}from"./ValidationErrors.a305d68d.js";import{r as T}from"./CheckCircleIcon.05a09680.js";import"./SearchIcon.2bfc9c28.js";import"./popover.5520cb53.js";import"./use-outside-click.ea02fb66.js";import"./use-resolve-button-type.1a388b2e.js";import"./use-event-listener.52918342.js";import"./menu.7794b2c3.js";import"./calculate-active-index.804d077d.js";import"./HomeIcon.540d257d.js";import"./micro-task.fe338338.js";import"./radio-group.8320a675.js";import"./label.f3ed54eb.js";import"./description.264d1fe9.js";import"./use-controllable.3ed737d4.js";function O(r,c){return s(),a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[i("path",{d:"M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"})])}function U(r,c){return s(),a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[i("path",{"fill-rule":"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z","clip-rule":"evenodd"})])}const H={class:"max-w-7xl mx-auto pb-10 lg:py-12 lg:px-8"},Y={class:"lg:grid lg:grid-cols-12 lg:gap-x-5"},G={class:"py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3"},I={class:"space-y-1"},J={class:"space-y-6 sm:px-6 lg:px-0 lg:col-span-9"},K={class:"mt-5 border-t border-gray-200"},P={class:"divide-y divide-gray-200"},R={class:"py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4"},W=o("dt",{class:"text-sm font-medium text-gray-500"},"Score",-1),X={class:"mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2"},Z=["innerHTML"],q={class:"ml-4 flex-shrink-0"},ee={key:1,class:"mt-6 grid grid-cols-4 gap-6 pb-4"},be={__name:"AnswersShow",props:{questions:Object,current_id:[String,Number],check_already_taken:Boolean,is_completed:[Object,Boolean]},setup(r){const c=r,d=B({response:""});return(g,l)=>{const h=V("with-right"),z=V("QuillEditor");return s(),a(F,{title:"Answering...","no-content":"",showSideNav:!1},{content:n(()=>[o("main",H,[o("div",Y,[i(e(L),null,{default:n(()=>[o("aside",G,[o("nav",I,[i(e(M),null,{default:n(()=>[i(e(j),{as:"template"},{default:n(({selected:t})=>[o("button",{class:p([t?"bg-gray-50 text-jvgreen hover:bg-white":"text-gray-900 hover:text-gray-900 hover:bg-gray-50","group rounded-md px-3 py-2 flex items-center text-sm font-medium"])},[i(e(O),{class:p([t?"text-jvgreen":"text-gray-400 group-hover:text-gray-500","flex-shrink-0 -ml-1 mr-3 h-6 w-6"])},null,8,["class"]),u(" Options ")],2)]),_:1}),(s(!0),y(b,null,x(c.questions,(t,_)=>f((s(),a(e(j),{as:"template",key:t},{default:n(({selected:m})=>[o("button",{class:p([m?"bg-gray-50 text-jvdgreen hover:bg-white":"text-gray-900 hover:text-gray-900 hover:bg-gray-50","group rounded-md px-3 py-2 flex items-center text-sm font-medium"]),onClick:l[0]||(l[0]=te=>e(d).reset("response"))},[(s(),a(C(t.answer?e(T):e(U)),{class:p([m?"text-jvgreen":"text-gray-400 group-hover:text-gray-500","flex-shrink-0 -ml-1 mr-3 h-6 w-6"])},null,8,["class"])),u(" Question "+N(_+1),1)],2)]),_:2},1024)),[[v,r.check_already_taken]])),128))]),_:1})])]),o("div",J,[i(e(E),null,{default:n(()=>[i(e($),null,{default:n(()=>[i(S,{title:"Summary",description:"after you answer of all question you will submit to the teachers"},{main:n(()=>[o("div",K,[o("dl",P,[o("div",R,[W,o("dd",X,[o("span",{class:"flex-grow",innerHTML:r.is_completed!=null?[r.is_completed.is_complete==1?r.is_completed.scores:"waiting"]:"waiting"},null,8,Z),o("span",q,[f(i(e(w),{href:g.route("compute"),method:"post",type:"button",as:"button",data:{activities_id:r.current_id},class:"bg-white rounded-md font-medium text-jvdgreen hover:text-jvgreen focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-jvgreen"},{default:n(()=>[u("Finish")]),_:1},8,["href","data"]),[[v,r.is_completed.is_complete==0]])])])])])]),r.check_already_taken?(s(),a(h,{key:1,class:"mt-2",label:"Now you can start now answering question..."})):(s(),a(e(w),{key:0,href:g.route("start-activity"),as:"button",type:"button",method:"post",data:{activities_id:r.current_id},class:"inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-jvgreen hover:bg-jvdgreen focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-jvgreen"},{default:n(()=>[u("Start")]),_:1},8,["href","data"]))]),_:1})]),_:1}),(s(!0),y(b,null,x(c.questions,(t,_)=>(s(),a(e($),{key:t},{default:n(()=>[i(S,{title:`Question #${_+1}`,description:t.question,haveFooter:""},{main:n(()=>[f(o("div",null,[i(Q,{class:"mb-4 pt-8"}),t.available_answer.includes("Essay")?(s(),a(z,{key:0,content:e(d).response,"onUpdate:content":l[1]||(l[1]=m=>e(d).response=m),contentType:"html"},null,8,["content"])):t.available_answer.length==1&&!t.available_answer.includes("Essay")?(s(),y("div",ee,[i(D,{label:"Your Answer",modelValue:e(d).response,"onUpdate:modelValue":l[2]||(l[2]=m=>e(d).response=m)},null,8,["modelValue"])])):t.available_answer.length>=2?(s(),a(A,{key:2,items:t.available_answer,modelValue:e(d).response,"onUpdate:modelValue":l[3]||(l[3]=m=>e(d).response=m),label:"Note",description:"Select which is the correct answer?"},null,8,["items","modelValue"])):k("",!0)],512),[[v,!t.answer]]),t.answer?(s(),a(h,{key:0,class:"mt-2",label:t.answer},null,8,["label"])):k("",!0)]),footer:n(()=>[r.is_completed.is_complete!=1?f((s(),a(e(w),{key:0,href:g.route("student-taking-activities.store"),method:"post",as:"button",type:"button",data:{responses:e(d).response,user_id:g.$page.props.user.id,question_id:t.id,activities_id:r.current_id},class:"inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-jvgreen hover:bg-jvdgreen focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-jvgreen",onFinish:l[4]||(l[4]=m=>e(d).reset("response")),onSuccess:l[5]||(l[5]=m=>e(d).reset("response"))},{default:n(()=>[u("Save")]),_:2},1032,["href","data"])),[[v,!t.answer&&t.available_answer]]):(s(),a(h,{key:1,class:"mt-2",label:"your quiz will be submitted"}))]),_:2},1032,["title","description"])]),_:2},1024))),128))]),_:1})])]),_:1})])])]),_:1})}}};export{be as default};
