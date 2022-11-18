import{u as v,c as _,w as r,h as e,o as l,b as a,a as t,g as b,e as i,t as d,f as m,i as h,v as w,ac as k,F as C,m as V,D as j}from"./app.4f3f3175.js";import{_ as B}from"./InputText.b7d8b030.js";import{f as N,o as f,V as P,U,N as $}from"./transition.4187fda7.js";import"./use-outside-click.6f679d58.js";import"./use-event-listener.f266e277.js";import"./micro-task.fe338338.js";import"./description.4b660e59.js";const T={class:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"},D=t("span",{class:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true"},"\u200B",-1),E={class:"relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"},F={class:"mt-3 sm:mt-5"},S={class:"col-span-6 sm:col-span-3 py-2"},L=t("label",{class:"block text-sm font-medium text-gray-700"},"Title",-1),M=["textContent"],Q={class:"py-2"},R=t("label",{for:"about",class:"block text-sm font-medium text-gray-700"}," About ",-1),z={class:"mt-1"},A=t("p",{class:"mt-2 text-sm text-gray-500"},"Brief description of your Post. URLs are hyperlinked.",-1),q=["textContent"],G=t("legend",{class:"contents text-base font-medium text-gray-900"},"Post Privacy",-1),H=t("p",{class:"text-sm text-gray-500"},"These are setting to filter who will see your post.",-1),I={class:"mt-4 space-y-4"},J=["value"],K={class:"ml-3 block text-sm font-medium text-gray-700"},O=["textContent"],W=["value"],X={class:"mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense"},Y=["disabled"],le={__name:"Create",props:{show:Boolean},setup(c){const g=[{label:"anyone can see",value:"public"},{label:"for teachers",value:"for_teachers"},{label:"for students",value:"for_student"}],s=v({title:null,description:null,audience:null});let u=()=>{s.post(route("post.store"),{preserveScroll:!0})};return(p,o)=>{const x=j("QuillEditor");return l(),_(e(N),{as:"template",show:c.show},{default:r(()=>[a(e($),{as:"div",class:"fixed z-10 inset-0 overflow-y-auto",onClose:o[6]||(o[6]=n=>c.show=!1)},{default:r(()=>[t("form",{onSubmit:o[5]||(o[5]=V((...n)=>e(u)&&e(u)(...n),["prevent"]))},[t("div",T,[a(e(f),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in duration-200","leave-from":"opacity-100","leave-to":"opacity-0"},{default:r(()=>[a(e(P),{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"})]),_:1}),D,a(e(f),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to":"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200","leave-from":"opacity-100 translate-y-0 sm:scale-100","leave-to":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:r(()=>[t("div",E,[t("div",null,[t("div",F,[a(e(U),{as:"h3",class:"text-lg leading-6 font-medium text-gray-900 text-bold"},{default:r(()=>[b(" Create Post ")]),_:1}),t("div",S,[L,a(B,{modelValue:e(s).title,"onUpdate:modelValue":o[0]||(o[0]=n=>e(s).title=n)},null,8,["modelValue"]),e(s).errors.title?(l(),i("div",{key:0,textContent:d(e(s).errors.title),class:"text-red-500 text-xs mt-1"},null,8,M)):m("",!0)]),t("div",Q,[R,t("div",z,[a(x,{content:e(s).description,"onUpdate:content":o[1]||(o[1]=n=>e(s).description=n),contentType:"html",placeholder:"content here",toolbar:"essential",theme:"snow"},null,8,["content"])]),A,e(s).errors.description?(l(),i("div",{key:0,textContent:d(e(s).errors.description),class:"text-red-500 text-xs mt-1"},null,8,q)):m("",!0)]),t("fieldset",null,[G,H,t("div",I,[(l(),i(C,null,h(g,n=>t("div",{class:"flex items-center",key:n},[w(t("input",{type:"radio",name:"privacy","onUpdate:modelValue":o[2]||(o[2]=y=>e(s).audience=y),class:"focus:ring-jvgreen h-4 w-4 text-jvdgreen border-gray-300",value:n.value},null,8,J),[[k,e(s).audience]]),t("label",K,d(n.label),1)])),64)),e(s).errors.audience?(l(),i("div",{key:0,textContent:d(e(s).errors.audience),class:"text-red-500 text-xs mt-1"},null,8,O)):m("",!0)])]),e(s).progress?(l(),i("progress",{key:0,value:e(s).progress.percentage,max:"100"},d(e(s).progress.percentage)+"% ",9,W)):m("",!0)])]),t("div",X,[t("button",{type:"submit",disabled:e(s).processing,class:"w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-jvgreen text-base font-medium text-white hover:bg-jvdgreen focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-jvgreen sm:col-start-2 sm:text-sm",onClick:o[3]||(o[3]=n=>p.$emit("close"))},"Publish Post",8,Y),t("button",{type:"button",class:"mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-jvgreen sm:mt-0 sm:col-start-1 sm:text-sm",onClick:o[4]||(o[4]=n=>p.$emit("close"))},"Cancel")])])]),_:1})])],32)]),_:1})]),_:1},8,["show"])}}};export{le as default};
