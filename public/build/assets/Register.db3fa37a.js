import{u as g,e as u,b as s,h as t,w as n,F as h,o as p,H as w,a as e,g as r,t as v,L as c,m as x,f as b,n as y}from"./app.4f3f3175.js";import{_ as k}from"./Button.900e850d.js";import{_ as m}from"./Input.c9d9fffe.js";import{_ as V}from"./Checkbox.136725d6.js";import{_ as d}from"./Label.69bb762b.js";import{_ as $}from"./ValidationErrors.687f84e7.js";import{_ as j}from"./GuestLayout.4176f2a1.js";import{_ as L}from"./SimpleCustom.95a2bec5.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./popover.76a468dc.js";import"./use-outside-click.6f679d58.js";import"./use-resolve-button-type.17c0443c.js";import"./use-event-listener.f266e277.js";import"./ChevronDownIcon.53ad19fb.js";import"./calculate-active-index.804d077d.js";import"./use-controllable.ef010fe9.js";const U={class:"min-h-full flex"},P={class:"flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24"},R={class:"mx-auto w-full max-w-sm lg:w-96"},q=e("img",{class:"h-12 w-auto",src:"https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg",alt:"Workflow"},null,-1),F=e("h2",{class:"mt-6 text-3xl font-extrabold text-gray-900"}," Sign Up to your account ",-1),N={class:"mt-2 text-sm text-gray-600"},S={class:"mt-8"},B=e("div",null,[e("div",{class:"mt-6 relative"},[e("div",{class:"absolute inset-0 flex items-center","aria-hidden":"true"},[e("div",{class:"w-full border-t border-gray-300"})]),e("div",{class:"relative flex justify-center text-sm"},[e("span",{class:"px-2 bg-white text-gray-500"}," continue with ")])])],-1),C={class:"mt-6"},E=["onSubmit"],H={class:"mt-4"},T={class:"mt-4"},W={class:"mt-4"},D={class:"mt-4"},M={key:0,class:"mt-4"},O={class:"flex items-center"},z={class:"ml-2"},A={class:"font-medium text-jvdgreen hover:text-jvgreen"},G={class:"flex items-center"},I=e("div",{class:"hidden lg:block relative w-0 flex-1"},[e("img",{class:"absolute inset-0 h-full w-full object-cover",src:"https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80",alt:""})],-1),ce={__name:"Register",setup(J){const o=g({name:"",email:"",username:"",password:"",gender:"",password_confirmation:"",terms:!1}),f=[{id:1,name:"male"},{id:2,name:"female"}],_=()=>{o.post(route("register"),{onFinish:()=>o.reset("password","password_confirmation")})};return(i,a)=>(p(),u(h,null,[s(t(w),{title:"Register"}),s(j,{canLogin:i.$page.props.checkLogged.canLogin,canRegister:i.$page.props.checkLogged.canRegister},{content:n(()=>[e("div",U,[e("div",P,[e("div",R,[e("div",null,[q,F,e("p",N,[r(" Or "+v(" ")+" "),s(t(c),{href:i.route("login"),class:"font-medium text-jvdgreen hover:text-jvgreen"},{default:n(()=>[r(" already registered? ")]),_:1},8,["href"])])]),e("div",S,[B,e("div",C,[s($,{class:"mb-4"}),e("form",{onSubmit:x(_,["prevent"]),class:"space-y-6"},[e("div",null,[s(d,{for:"name",value:"Name"}),s(m,{id:"name",modelValue:t(o).name,"onUpdate:modelValue":a[0]||(a[0]=l=>t(o).name=l),type:"text",class:"mt-1 block w-full",required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"])]),e("div",H,[s(d,{for:"email",value:"Email"}),s(m,{id:"email",modelValue:t(o).email,"onUpdate:modelValue":a[1]||(a[1]=l=>t(o).email=l),type:"email",class:"mt-1 block w-full",required:""},null,8,["modelValue"])]),e("div",T,[s(d,{for:"gender",value:"Gender"}),s(L,{modelValue:t(o).gender,"onUpdate:modelValue":a[2]||(a[2]=l=>t(o).gender=l),options:f},null,8,["modelValue"])]),e("div",W,[s(d,{for:"password",value:"Password"}),s(m,{id:"password",modelValue:t(o).password,"onUpdate:modelValue":a[3]||(a[3]=l=>t(o).password=l),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"])]),e("div",D,[s(d,{for:"password_confirmation",value:"Confirm Password"}),s(m,{id:"password_confirmation",modelValue:t(o).password_confirmation,"onUpdate:modelValue":a[4]||(a[4]=l=>t(o).password_confirmation=l),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"])]),i.$page.props.jetstream.hasTermsAndPrivacyPolicyFeature?(p(),u("div",M,[s(d,{for:"terms"},{default:n(()=>[e("div",O,[s(V,{id:"terms",checked:t(o).terms,"onUpdate:checked":a[5]||(a[5]=l=>t(o).terms=l),name:"terms"},null,8,["checked"]),e("div",z,[e("p",A,[r(" I agree to the "),s(t(c),{target:"_blank",href:i.route("terms.show"),class:"underline"},{default:n(()=>[r("Terms of Service")]),_:1},8,["href"]),r(" and "),s(t(c),{target:"_blank",href:i.route("policy.show"),class:"underline"},{default:n(()=>[r("Privacy Policy")]),_:1},8,["href"])])])])]),_:1})])):b("",!0),e("div",G,[s(k,{class:y(["ml-4",{"opacity-25":t(o).processing}]),disabled:t(o).processing,fullWidth:""},{default:n(()=>[r(" Register ")]),_:1},8,["class","disabled"])])],40,E)])])])]),I])]),_:1},8,["canLogin","canRegister"])],64))}};export{ce as default};
