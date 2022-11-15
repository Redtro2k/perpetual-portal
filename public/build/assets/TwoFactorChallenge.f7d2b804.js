import{d,u as k,e as t,b as o,h as a,w as m,F as r,o as c,H as h,a as i,g as n,m as y,n as x,Q as C}from"./app.0e63341f.js";import{J as w}from"./AuthenticationCard.dbb8c7f4.js";import{_ as V}from"./AuthenticationCardLogo.b0de0f41.js";import{_ as $}from"./Button.51955c7a.js";import{_ as p}from"./Input.fa93143a.js";import{_ as v}from"./Label.ee879f30.js";import{_ as F}from"./ValidationErrors.8587dc01.js";import"./_plugin-vue_export-helper.cdc0426e.js";const I={class:"mb-4 text-sm text-gray-600"},T=["onSubmit"],U={key:0},B={key:1},N={class:"flex items-center justify-end mt-4"},H=["onClick"],Q={__name:"TwoFactorChallenge",setup(J){const s=d(!1),e=k({code:"",recovery_code:""}),f=d(null),_=d(null),g=async()=>{s.value^=!0,await C(),s.value?(f.value.focus(),e.code=""):(_.value.focus(),e.recovery_code="")},b=()=>{e.post(route("two-factor.login"))};return(P,l)=>(c(),t(r,null,[o(a(h),{title:"Two-factor Confirmation"}),o(w,null,{logo:m(()=>[o(V)]),default:m(()=>[i("div",I,[s.value?(c(),t(r,{key:1},[n(" Please confirm access to your account by entering one of your emergency recovery codes. ")],64)):(c(),t(r,{key:0},[n(" Please confirm access to your account by entering the authentication code provided by your authenticator application. ")],64))]),o(F,{class:"mb-4"}),i("form",{onSubmit:y(b,["prevent"])},[s.value?(c(),t("div",B,[o(v,{for:"recovery_code",value:"Recovery Code"}),o(p,{id:"recovery_code",ref_key:"recoveryCodeInput",ref:f,modelValue:a(e).recovery_code,"onUpdate:modelValue":l[1]||(l[1]=u=>a(e).recovery_code=u),type:"text",class:"mt-1 block w-full",autocomplete:"one-time-code"},null,8,["modelValue"])])):(c(),t("div",U,[o(v,{for:"code",value:"Code"}),o(p,{id:"code",ref_key:"codeInput",ref:_,modelValue:a(e).code,"onUpdate:modelValue":l[0]||(l[0]=u=>a(e).code=u),type:"text",inputmode:"numeric",class:"mt-1 block w-full",autofocus:"",autocomplete:"one-time-code"},null,8,["modelValue"])])),i("div",N,[i("button",{type:"button",class:"text-sm text-gray-600 hover:text-gray-900 underline cursor-pointer",onClick:y(g,["prevent"])},[s.value?(c(),t(r,{key:1},[n(" Use an authentication code ")],64)):(c(),t(r,{key:0},[n(" Use a recovery code ")],64))],8,H),o($,{class:x(["ml-4",{"opacity-25":a(e).processing}]),disabled:a(e).processing},{default:m(()=>[n(" Log in ")]),_:1},8,["class","disabled"])])],40,T)]),_:1})],64))}};export{Q as default};
