import{u as g,e as m,b as o,h as t,w as n,F as h,o as c,H as x,a as e,t as w,f as d,m as b,c as v,g as u,L as y,n as k}from"./app.4f3f3175.js";import{_ as L}from"./Button.900e850d.js";import{_ as f}from"./Input.c9d9fffe.js";import{_ as V}from"./Checkbox.136725d6.js";import{_ as p}from"./Label.69bb762b.js";import{_ as $}from"./ValidationErrors.687f84e7.js";import{_ as j}from"./GuestLayout.4176f2a1.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./popover.76a468dc.js";import"./use-outside-click.6f679d58.js";import"./use-resolve-button-type.17c0443c.js";import"./use-event-listener.f266e277.js";import"./ChevronDownIcon.53ad19fb.js";const B={class:"min-h-full flex"},R={class:"flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24"},F={class:"mx-auto w-full max-w-sm lg:w-96"},S=e("div",null,[e("img",{class:"h-12 w-auto",src:"https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg",alt:"Workflow"}),e("h2",{class:"mt-6 text-3xl font-extrabold text-gray-900"}," Sign in to your account ")],-1),q={class:"mt-8"},N=e("div",null,[e("div",{class:"mt-6 relative"},[e("div",{class:"absolute inset-0 flex items-center","aria-hidden":"true"},[e("div",{class:"w-full border-t border-gray-300"})]),e("div",{class:"relative flex justify-center text-sm"},[e("span",{class:"px-2 bg-white text-gray-500"}," continue with ")])])],-1),U={class:"mt-6"},C={key:0,class:"mb-4 font-medium text-sm text-green-600"},E=["onSubmit"],H={class:"mt-1"},P={class:"space-y-1"},W={class:"mt-1"},D={class:"flex items-center justify-between"},M={class:"flex items-center"},O=e("span",{class:"ml-2 block text-sm text-gray-900"},"Remember me",-1),z=e("div",{class:"hidden lg:block relative w-0 flex-1"},[e("img",{class:"absolute inset-0 h-full w-full object-cover",src:"https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80",alt:""})],-1),oe={__name:"Login",props:{canResetPassword:Boolean,status:String},setup(i){const s=g({auth:"",password:"",remember:!1}),_=()=>{s.transform(l=>({...l,remember:s.remember?"on":""})).post(route("login"),{onFinish:()=>s.reset("password")})};return(l,a)=>(c(),m(h,null,[o(t(x),{title:"Log in"}),o(j,{canLogin:l.$page.props.checkLogged.canLogin,canRegister:l.$page.props.checkLogged.canRegister},{content:n(()=>[e("div",B,[e("div",R,[e("div",F,[S,e("div",q,[N,e("div",U,[o($,{class:"mb-4"}),i.status?(c(),m("div",C,w(i.status),1)):d("",!0),e("form",{onSubmit:b(_,["prevent"]),class:"space-y-6"},[e("div",null,[o(p,{for:"auth",value:"Username Or Email"}),e("div",H,[o(f,{id:"auth",modelValue:t(s).auth,"onUpdate:modelValue":a[0]||(a[0]=r=>t(s).auth=r),type:"text",class:"mt-1 block w-full",required:"",autofocus:""},null,8,["modelValue"])])]),e("div",P,[o(p,{for:"password",value:"Password"}),e("div",W,[o(f,{id:"password",modelValue:t(s).password,"onUpdate:modelValue":a[1]||(a[1]=r=>t(s).password=r),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"current-password"},null,8,["modelValue"])])]),e("div",D,[e("label",M,[o(V,{checked:t(s).remember,"onUpdate:checked":a[2]||(a[2]=r=>t(s).remember=r),name:"remember"},null,8,["checked"]),O]),i.canResetPassword?(c(),v(t(y),{key:0,href:l.route("password.request"),class:"font-medium text-jvdgreen hover:text-jvgreen"},{default:n(()=>[u(" Forgot your password? ")]),_:1},8,["href"])):d("",!0)]),o(L,{class:k({"opacity-25":t(s).processing}),disabled:t(s).processing,fullWidth:""},{default:n(()=>[u(" Log in ")]),_:1},8,["class","disabled"])],40,E)])])])]),z])]),_:1},8,["canLogin","canRegister"])],64))}};export{oe as default};
