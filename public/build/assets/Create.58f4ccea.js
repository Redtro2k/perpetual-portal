import{u as b,c as h,w as r,h as t,o as a,b as l,a as e,g as w,e as i,t as d,f as m,i as k,v as C,ac as V,F as j,m as P,D as f}from"./app.69e48e67.js";import{_ as U}from"./InputText.dd73ec5a.js";import{f as B,o as g,V as N,U as $,N as R}from"./transition.2fe9b94f.js";import"./use-outside-click.39d564af.js";import"./use-event-listener.0fd12e9f.js";import"./micro-task.fe338338.js";import"./description.ff233e71.js";const T={class:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"},D=e("span",{class:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true"},"\u200B",-1),E={class:"relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"},F={class:"mt-3 sm:mt-5"},S={class:"col-span-6 sm:col-span-3 py-2"},I=e("label",{class:"block text-sm font-medium text-gray-700"},"Title",-1),L=["textContent"],M={class:"py-2"},Q=e("label",{for:"about",class:"block text-sm font-medium text-gray-700"}," About ",-1),W={class:"mt-1"},z=e("p",{class:"mt-2 text-sm text-gray-500"},"Brief description of your Post. URLs are hyperlinked.",-1),A=["textContent"],O={class:"py-4"},q=e("small",{class:"block font-semibold"},"Upload Photo",-1),G=e("legend",{class:"contents text-base font-medium text-gray-900"},"Post Privacy",-1),H=e("p",{class:"text-sm text-gray-500"},"These are setting to filter who will see your post.",-1),J={class:"mt-4 space-y-4"},K=["value"],X={class:"ml-3 block text-sm font-medium text-gray-700"},Y=["textContent"],Z=["value"],ee={class:"mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense"},te=["disabled"],de={__name:"Create",props:{show:Boolean},setup(c){const y=[{label:"anyone can see",value:"public"},{label:"for teachers",value:"for_teachers"},{label:"for students",value:"for_student"}],s=b({title:null,description:null,audience:null,photo:[]});let u=()=>{s.post(route("post.store"),{preserveScroll:!0})};return(p,o)=>{const x=f("QuillEditor"),v=f("WithRight");return a(),h(t(B),{as:"template",show:c.show},{default:r(()=>[l(t(R),{as:"div",class:"fixed z-10 inset-0 overflow-y-auto",onClose:o[7]||(o[7]=n=>c.show=!1)},{default:r(()=>[e("form",{onSubmit:o[6]||(o[6]=P((...n)=>t(u)&&t(u)(...n),["prevent"]))},[e("div",T,[l(t(g),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in duration-200","leave-from":"opacity-100","leave-to":"opacity-0"},{default:r(()=>[l(t(N),{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"})]),_:1}),D,l(t(g),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to":"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200","leave-from":"opacity-100 translate-y-0 sm:scale-100","leave-to":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:r(()=>[e("div",E,[e("div",null,[e("div",F,[l(t($),{as:"h3",class:"text-lg leading-6 font-medium text-gray-900 text-bold"},{default:r(()=>[w(" Create Post ")]),_:1}),e("div",S,[I,l(U,{modelValue:t(s).title,"onUpdate:modelValue":o[0]||(o[0]=n=>t(s).title=n)},null,8,["modelValue"]),t(s).errors.title?(a(),i("div",{key:0,textContent:d(t(s).errors.title),class:"text-red-500 text-xs mt-1"},null,8,L)):m("",!0)]),e("div",M,[Q,e("div",W,[l(x,{content:t(s).description,"onUpdate:content":o[1]||(o[1]=n=>t(s).description=n),contentType:"html",placeholder:"content here",toolbar:"essential",theme:"snow"},null,8,["content"])]),z,t(s).errors.description?(a(),i("div",{key:0,textContent:d(t(s).errors.description),class:"text-red-500 text-xs mt-1"},null,8,A)):m("",!0)]),e("div",null,[l(v,{label:"if your post contain an Images, upload only One"}),e("div",O,[q,e("input",{type:"file",onInput:o[2]||(o[2]=n=>t(s).photo=n.target.files[0])},null,32)])]),e("fieldset",null,[G,H,e("div",J,[(a(),i(j,null,k(y,n=>e("div",{class:"flex items-center",key:n},[C(e("input",{type:"radio",name:"privacy","onUpdate:modelValue":o[3]||(o[3]=_=>t(s).audience=_),class:"focus:ring-jvgreen h-4 w-4 text-jvdgreen border-gray-300",value:n.value},null,8,K),[[V,t(s).audience]]),e("label",X,d(n.label),1)])),64)),t(s).errors.audience?(a(),i("div",{key:0,textContent:d(t(s).errors.audience),class:"text-red-500 text-xs mt-1"},null,8,Y)):m("",!0)])]),t(s).progress?(a(),i("progress",{key:0,value:t(s).progress.percentage,max:"100"},d(t(s).progress.percentage)+"% ",9,Z)):m("",!0)])]),e("div",ee,[e("button",{type:"submit",disabled:t(s).processing,class:"w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-jvgreen text-base font-medium text-white hover:bg-jvdgreen focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-jvgreen sm:col-start-2 sm:text-sm",onClick:o[4]||(o[4]=n=>p.$emit("close"))},"Publish Post",8,te),e("button",{type:"button",class:"mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-jvgreen sm:mt-0 sm:col-start-1 sm:text-sm",onClick:o[5]||(o[5]=n=>p.$emit("close"))},"Cancel")])])]),_:1})])],32)]),_:1})]),_:1},8,["show"])}}};export{de as default};