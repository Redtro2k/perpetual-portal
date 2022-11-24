import{o as l,e as d,a as e,b as p,r as C,t as q,d as x,u as A,l as D,c as N,w as $,_ as B,f as n,g as m,h as s,v as u,Z as c,n as y,s as v,m as F,D as M,x as L,$ as w}from"./app.c1af1f95.js";import{_ as R}from"./UserLayout.7717c02f.js";import{_ as S}from"./SimpleCustom.5d888c31.js";import{_ as T}from"./ValidationErrors.84f8ef8f.js";import{J as E}from"./ApplicationLogo.b72950d5.js";import"./SearchIcon.63fea564.js";import"./popover.ca883c0d.js";import"./use-outside-click.05e09a47.js";import"./use-resolve-button-type.525f8011.js";import"./use-event-listener.e89fd11f.js";import"./menu.80302a37.js";import"./calculate-active-index.804d077d.js";import"./HomeIcon.51fa6b7b.js";import"./use-controllable.24eb19a9.js";import"./_plugin-vue_export-helper.cdc0426e.js";const J={class:"min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8"},O={class:"sm:mx-auto sm:w-full sm:max-w-md"},P=e("h2",{class:"mt-6 text-center text-3xl font-extrabold text-gray-900"},"Create New User",-1),Y=e("p",{class:"mt-2 text-center text-sm text-gray-600"}," Creating new user will be directly to our database "+q(" "),-1),z={class:"mt-8 sm:mx-auto sm:w-full sm:max-w-md"},G={class:"bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10"},Z={__name:"FormLayout",props:{title:String,label:String},setup(k){return(_,j)=>(l(),d("div",J,[e("div",O,[p(E,{class:"mx-auto h-12 w-auto"}),P,Y]),e("div",z,[e("div",G,[C(_.$slots,"content")])])]))}},H={for:"email",class:"block text-sm font-medium text-gray-700"},I={key:0,class:"text-indigo-500 font-semibold"},K={class:"mt-1"},Q={for:"email",class:"block text-sm font-medium text-gray-700"},W={key:0,class:"text-indigo-500 font-semibold"},X={class:"mt-1"},ee=e("small",null,"for some concern we must first fill birthdate to auto generate username and password",-1),te={for:"email",class:"block text-sm font-medium text-gray-700"},se={key:0,class:"text-indigo-500 font-semibold"},oe={class:"mt-1"},ae=["disabled"],le={for:"email",class:"block text-sm font-medium text-gray-700"},re={key:0,class:"text-indigo-500 font-semibold"},ne={class:"mt-1"},de=["disabled"],ie={for:"email",class:"block text-sm font-medium text-gray-700"},me={key:0,class:"text-indigo-500 font-semibold"},ue={class:"mt-1"},ce=["disabled"],pe={for:"email",class:"block text-sm font-medium text-gray-700"},be={key:0,class:"text-indigo-500 font-semibold"},fe={class:"mt-1"},ge=e("label",{for:"email",class:"block text-sm font-medium text-gray-700"}," Email address ",-1),_e={class:"mt-1"},he={class:"block text-sm font-medium text-gray-700"},xe={key:0,class:"text-indigo-500 font-semibold"},ye={class:"mt-1"},ve={for:"password",class:"block text-sm font-medium text-gray-700"},we={key:0,class:"text-indigo-500 font-semibold"},ke={class:"mt-1"},je=e("div",null,[e("button",{type:"submit",class:"w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-jvgreen hover:bg-jvdgreen focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-jvgreen"}," Create New ")],-1),Ee={__name:"AdminNewAccount",props:{roles:Object},setup(k){const _=k,j=[{id:1,name:"male"},{id:2,name:"female"}],b=x(""),f=x(""),g=x(""),t=A({name:b.value+f.value+g.value,firstname:"",lastname:"",middlename:"",username:"",email:"",birthdate:"",password:"",gender:"",roles:""});let V=()=>{t.post(route("new-account.store"),{preserveScroll:!0,preserveState:!0,onSuccess:()=>t.reset("name","username","firstname","lastname","middlename","password","email","gender","roles"),onFinish:()=>t.reset("name","username","password","firstname","lastname","middlename","email","gender","roles")})};const h=(i,o,r=!1)=>{let a=i.split(" ");a[0],a[1],a[2]&&i.substr(i.indexOf(" ")+1);var U=w(o).format("ll").split(" ");return r==!0?a[0].charAt(0)+a[2].charAt(0)+a[1]+"000"+U[0]+w(o).format("Y"):a[0].charAt(0)+a[2].charAt(0)+a[1]+"000"+w(o).format("Y")};return D(()=>[b.value,f.value,g.value],i=>{const o=i.join(" "),r=o.split(" ");t.firstname=r[0],t.lastname=r[2],t.middlename=r[1],t.name=r[0]+" "+r[2]+" "+r[1],t.username=h(o.toString(),t.birthdate),t.password=h(o.toString(),t.birthdate,!0),t.email=h(o.toString(),t.birthdate)+"@perpetual.com"}),(i,o)=>{const r=M("Datepicker");return l(),N(R,{title:"Register New Account","no-content":"",showSideNav:!1},{content:$(()=>[p(Z,{title:"Create New User",label:"Creating new user will be directly to our database"},{content:$(()=>[e("form",{class:"space-y-6",onSubmit:o[9]||(o[9]=F((...a)=>s(V)&&s(V)(...a),["prevent"]))},[p(T,{class:"mb-4"}),i.$page.props.flash.success?(l(),N(B,{key:0,label:i.$page.props.flash.success},null,8,["label"])):n("",!0),e("div",null,[e("label",H,[m(" Role "),s(t).roles?n("",!0):(l(),d("small",I,"*required"))]),e("div",K,[p(S,{modelValue:s(t).roles,"onUpdate:modelValue":o[0]||(o[0]=a=>s(t).roles=a),options:_.roles},null,8,["modelValue","options"])])]),e("div",null,[e("label",Q,[m(" BirthDate "),s(t).birthdate?n("",!0):(l(),d("small",W,"*required"))]),e("div",X,[p(r,{modelValue:s(t).birthdate,"onUpdate:modelValue":o[1]||(o[1]=a=>s(t).birthdate=a),utc:"",enableTimePicker:!1},null,8,["modelValue"])])]),ee,e("div",null,[e("label",te,[m(" First Name "),s(t).firstname?n("",!0):(l(),d("small",se,"*required"))]),e("div",oe,[u(e("input",{type:"text",disabled:s(t).birthdate.length==0,class:y([s(t).birthdate.length!=0?"":"disabled:opacity-75 disabled:bg-gray-200","appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-jvgreen focus:border-jvdgreen sm:text-sm"]),"onUpdate:modelValue":o[2]||(o[2]=a=>v(b)?b.value=a:null)},null,10,ae),[[c,s(b)]])]),e("label",le,[m(" Last Name "),s(t).middlename?n("",!0):(l(),d("small",re,"*required"))]),e("div",ne,[u(e("input",{type:"text",disabled:s(t).birthdate.length==0,class:y([s(t).birthdate.length!=0?"":"disabled:opacity-75 disabled:bg-gray-200","appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-jvgreen focus:border-jvdgreen sm:text-sm"]),"onUpdate:modelValue":o[3]||(o[3]=a=>v(f)?f.value=a:null)},null,10,de),[[c,s(f)]])]),e("label",ie,[m(" Middle Name "),s(t).lastname?n("",!0):(l(),d("small",me,"*required"))]),e("div",ue,[u(e("input",{type:"text",disabled:s(t).birthdate.length==0,class:y([s(t).birthdate.length!=0?"":"disabled:opacity-75 disabled:bg-gray-200","appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-jvgreen focus:border-jvdgreen sm:text-sm"]),"onUpdate:modelValue":o[4]||(o[4]=a=>v(g)?g.value=a:null)},null,10,ce),[[c,s(g)]])])]),e("div",null,[e("label",pe,[m(" Gender "),s(t).gender?n("",!0):(l(),d("small",be,"*required"))]),e("div",fe,[p(S,{modelValue:s(t).gender,"onUpdate:modelValue":o[5]||(o[5]=a=>s(t).gender=a),options:j},null,8,["modelValue"])])]),u(e("div",null,[ge,e("div",_e,[u(e("input",{type:"email",class:"appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-jvgreen focus:border-jvgreen sm:text-sm","onUpdate:modelValue":o[6]||(o[6]=a=>s(t).email=a)},null,512),[[c,s(t).email]])])],512),[[L,!1]]),e("div",null,[e("label",he,[m(" Username "),s(t).username?n("",!0):(l(),d("small",xe,"*required"))]),e("div",ye,[u(e("input",{type:"text",disabled:"",class:"disabled:opacity-75 disabled:bg-gray-100 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-jvgreen focus:border-jvdgreen sm:text-sm","onUpdate:modelValue":o[7]||(o[7]=a=>s(t).username=a)},null,512),[[c,s(t).username]])])]),e("div",null,[e("label",ve,[m(" Password "),s(t).password?n("",!0):(l(),d("small",we,"*required"))]),e("div",ke,[u(e("input",{disabled:"",type:"text",class:"disabled:opacity-75 disabled:bg-gray-100 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-jvgreen focus:border-jvgreen sm:text-sm","onUpdate:modelValue":o[8]||(o[8]=a=>s(t).password=a)},null,512),[[c,s(t).password]])])]),je],32)]),_:1})]),_:1})}}};export{Ee as default};
