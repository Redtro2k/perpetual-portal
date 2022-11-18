import{d as i,u as _,c as f,w as e,o as g,g as n,a as l,b as r,h as o,n as V}from"./app.4f3f3175.js";import{_ as v}from"./ActionMessage.05902c55.js";import{_ as y}from"./Button.900e850d.js";import{_ as P}from"./FormSection.664108cd.js";import{_ as d}from"./Input.c9d9fffe.js";import{_ as p}from"./InputError.b0d0f635.js";import{_ as c}from"./Label.69bb762b.js";import"./_plugin-vue_export-helper.cdc0426e.js";const b={class:"col-span-6 sm:col-span-4"},k={class:"col-span-6 sm:col-span-4"},S={class:"col-span-6 sm:col-span-4"},T={__name:"UpdatePasswordForm",setup($){const u=i(null),m=i(null),s=_({current_password:"",password:"",password_confirmation:""}),w=()=>{s.put(route("user-password.update"),{errorBag:"updatePassword",preserveScroll:!0,onSuccess:()=>s.reset(),onError:()=>{s.errors.password&&(s.reset("password","password_confirmation"),u.value.focus()),s.errors.current_password&&(s.reset("current_password"),m.value.focus())}})};return(U,a)=>(g(),f(P,{onSubmitted:w},{title:e(()=>[n(" Update Password ")]),description:e(()=>[n(" Ensure your account is using a long, random password to stay secure. ")]),form:e(()=>[l("div",b,[r(c,{for:"current_password",value:"Current Password"}),r(d,{id:"current_password",ref_key:"currentPasswordInput",ref:m,modelValue:o(s).current_password,"onUpdate:modelValue":a[0]||(a[0]=t=>o(s).current_password=t),type:"password",class:"mt-1 block w-full",autocomplete:"current-password"},null,8,["modelValue"]),r(p,{message:o(s).errors.current_password,class:"mt-2"},null,8,["message"])]),l("div",k,[r(c,{for:"password",value:"New Password"}),r(d,{id:"password",ref_key:"passwordInput",ref:u,modelValue:o(s).password,"onUpdate:modelValue":a[1]||(a[1]=t=>o(s).password=t),type:"password",class:"mt-1 block w-full",autocomplete:"new-password"},null,8,["modelValue"]),r(p,{message:o(s).errors.password,class:"mt-2"},null,8,["message"])]),l("div",S,[r(c,{for:"password_confirmation",value:"Confirm Password"}),r(d,{id:"password_confirmation",modelValue:o(s).password_confirmation,"onUpdate:modelValue":a[2]||(a[2]=t=>o(s).password_confirmation=t),type:"password",class:"mt-1 block w-full",autocomplete:"new-password"},null,8,["modelValue"]),r(p,{message:o(s).errors.password_confirmation,class:"mt-2"},null,8,["message"])])]),actions:e(()=>[r(v,{on:o(s).recentlySuccessful,class:"mr-3"},{default:e(()=>[n(" Saved. ")]),_:1},8,["on"]),r(y,{class:V({"opacity-25":o(s).processing}),disabled:o(s).processing},{default:e(()=>[n(" Save ")]),_:1},8,["class","disabled"])]),_:1}))}};export{T as default};
