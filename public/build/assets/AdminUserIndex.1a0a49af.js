import{o as a,c as u,b as o,e as _,a as e,t as d,F as C,h as A,V as B,g as t,a3 as L,j as w,l as N,u as M,w as m,i as x,f as y,L as k,y as S,E as O,d as j,G as E,a2 as U}from"./app.d6fd6ef0.js";import{d as W}from"./debounce.9b943525.js";import{_ as H,a as I}from"./UserLayout.cf4779a3.js";import{h as T}from"./moment.9709ab41.js";import{_ as D}from"./SimpleCustom.543c427c.js";import{o as V,H as P,W as R,A as z,f as F}from"./transition.65bbd5f2.js";import{r as b}from"./UserIcon.21820f05.js";import"./SearchIcon.ef60ed6c.js";import"./popover.11880e8a.js";import"./use-outside-click.4ced2ae8.js";import"./use-resolve-button-type.ddd396ff.js";import"./use-event-listener.daba031f.js";import"./menu.57fea4d8.js";import"./calculate-active-index.804d077d.js";import"./HomeIcon.c44d3662.js";import"./form.c56a6aaf.js";import"./description.42e15c9a.js";function K(n,s){return a(),u("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"})])}function G(n,s){return a(),u("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})])}const Q={class:"mt-4"},q=e("label",{for:"search",class:"block text-sm font-medium text-gray-700"},"Quick search",-1),J={class:"mt-1 relative flex items-center"},X=["value"],Y=e("div",{class:"absolute inset-y-0 right-0 flex py-1.5 pr-1.5"},[e("kbd",{class:"inline-flex items-center border border-gray-200 rounded px-2 text-sm font-sans font-medium text-gray-400"}," \u2318K ")],-1),Z={__name:"WithKeyboard",props:{modelValue:String},setup(n){return(s,i)=>(a(),_("div",Q,[q,e("div",J,[e("input",{type:"text",value:n.modelValue,onInput:i[0]||(i[0]=l=>s.$emit("update:modelValue",l.target.value)),class:"shadow-sm focus:ring-jvgreen focus:border-jvgreen block w-full pr-12 sm:text-sm border-gray-300 rounded-md"},null,40,X),Y])]))}},ee={class:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"},se={class:"text-lg leading-6 font-semibold text-gray-900"},te={class:"mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"},oe={class:"p-5"},re={class:"flex items-center"},ae={class:"flex-shrink-0"},ne={class:"ml-5 w-0 flex-1"},le={class:"text-sm font-medium text-gray-500 truncate"},ie={class:"text-lg font-medium text-gray-900"},de={class:"bg-gray-50 px-5 py-3"},ce={class:"text-sm"},me=["href"],ue={__name:"LayoutCard",props:{cards:Object,label:{type:String,default:()=>"pinned"}},setup(n){return(s,i)=>(a(),_("div",ee,[e("h2",se,d(n.label),1),e("div",te,[(a(!0),_(C,null,A(n.cards,l=>(a(),_("div",{key:l.name,class:"bg-white overflow-hidden shadow rounded-lg"},[e("div",oe,[e("div",re,[e("div",ae,[(a(),u(B(l.icon),{class:"h-6 w-6 text-gray-400","aria-hidden":"true"}))]),e("div",ne,[e("dl",null,[e("dt",le,d(l.name),1),e("dd",null,[e("div",ie,d(l.records),1)])])])])]),e("div",de,[e("div",ce,[e("a",{href:l.href,class:"font-medium text-jvgreen hover:text-jvdgreen"}," View all ",8,me)])])]))),128))])]))}},he={class:"rounded-md bg-yellow-50 p-4"},pe={class:"flex"},fe={class:"flex-shrink-0"},_e={class:"ml-3"},ge=e("h3",{class:"text-sm font-medium text-yellow-800"},"Attention needed",-1),xe={class:"mt-2 text-sm text-yellow-700"},ve={__name:"WithDescription",props:{label:String},setup(n){return(s,i)=>(a(),_("div",he,[e("div",pe,[e("div",fe,[o(t(L),{class:"h-5 w-5 text-yellow-400","aria-hidden":"true"})]),e("div",_e,[ge,e("div",xe,[e("p",null,d(n.label),1)])])])]))}},we={class:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"},be=e("span",{class:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true"},"\u200B",-1),ye={class:"relative inline-block align-bottom bg-white rounded-lg px-4 pt-3 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-3"},$e={class:"mt-1"},ke={class:"flex justify-between"},je={class:"font-tight text-sm flex pl-2"},Ve={class:"space-y-6 pt-2 h-80"},Ce={class:"mt-1"},Ne=["src"],Se={class:"mt-1"},Ae={class:"pt-2"},Be=x(" Edit "),Le={class:"mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense"},Me=x(" Update "),Oe={__name:"CenteredWithWideButton",props:{show:Object,roles:Object},setup(n){var f;const s=n,i=w(()=>!!s.show),l=()=>{S.Inertia.get(route("manage-user.index"),{},{})};N(()=>s.show,r=>{r&&(c.id=s.show.id)});const c=M({id:(f=s.show)==null?void 0:f.id,roles:null}),h=w(()=>{let r=s.show.roles[0];return r?r.name:"No Roles"}),g=w(()=>s.show.gender=="male"?"Mr":"Ms"),p=w(()=>{let r=s.show.name;return r>17?r.substring(0,17)+"...":r});return(r,v)=>(a(),u(t(F),{as:"template",show:t(i)},{default:m(()=>[o(t(z),{as:"div",class:"fixed z-10 inset-0 overflow-y-auto",onClose:v[1]||(v[1]=$=>i.value=!1)},{default:m(()=>[e("div",we,[o(t(V),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in duration-200","leave-from":"opacity-100","leave-to":"opacity-0"},{default:m(()=>[o(t(P),{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"})]),_:1}),be,o(t(V),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to":"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200","leave-from":"opacity-100 translate-y-0 sm:scale-100","leave-to":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:m(()=>[e("div",ye,[e("div",null,[e("div",$e,[e("div",ke,[o(t(R),{as:"h3",class:"text-lg leading-6 font-semibold text-gray-900"},{default:m(()=>[x(d(t(g))+". "+d(t(p)),1)]),_:1})]),e("p",je,[o(t(K),{class:"h-4 w-4 text-gray-600"}),x(" "+d(s.show.email)+" | "+d(t(T)(s.show.created_at).format("LL")),1)]),e("div",Ve,[e("div",Ce,[r.$page.props.flash.warning?(a(),u(ve,{key:0,label:r.$page.props.flash.warning},null,8,["label"])):y("",!0),e("img",{src:s.show.profile_photo_url,class:"inline-block h-20 w-20 rounded-full p-2"},null,8,Ne),x(" "+d(t(h)),1)]),e("div",Se,[o(D,{modelValue:t(c).roles,"onUpdate:modelValue":v[0]||(v[0]=$=>t(c).roles=$),label:"Approve as",options:s.roles},null,8,["modelValue","options"])])])]),e("span",Ae,[t(h)=="teacher"?(a(),u(t(k),{key:0,class:"w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-black hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-100 sm:col-start-2 sm:text-sm",href:r.route("teachers.show",s.show.id)},{default:m(()=>[o(t(G),{class:"-ml-1 mr-2 h-5 w-5","aria-hidden":"true"}),Be]),_:1},8,["href"])):y("",!0)])]),e("div",Le,[r.$page.props.user.roles?y("",!0):(a(),u(t(k),{key:0,href:r.route("manage-user.store"),method:"post",data:t(c),as:"button",class:"w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-jvgreen text-base font-medium text-white hover:bg-jvdgreen focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-jvgreen sm:col-start-2 sm:text-sm","preserve-state":""},{default:m(()=>[Me]),_:1},8,["href","data"])),e("button",{type:"button",class:"mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-jvgreen sm:mt-0 sm:col-start-1 sm:text-sm",onClick:l,ref:"cancelButtonRef"}," Cancel ",512)])])]),_:1})])]),_:1})]),_:1},8,["show"]))}},Ee={class:"min-h-full"},Ue={class:"mt-8"},We={class:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end"},ss={__name:"AdminUserIndex",props:{users:Object,filters:String,show_user:Object,roles:Object,students:Number,teachers:Number,record_user:Number},setup(n){const s=n,i=O({loader:()=>E(()=>import("./WithSortHeading.c85596c6.js"),["assets/WithSortHeading.c85596c6.js","assets/app.d6fd6ef0.js","assets/app.3e8067e1.css","assets/UserLayout.cf4779a3.js","assets/SearchIcon.ef60ed6c.js","assets/popover.11880e8a.js","assets/use-outside-click.4ced2ae8.js","assets/use-resolve-button-type.ddd396ff.js","assets/use-event-listener.daba031f.js","assets/menu.57fea4d8.js","assets/calculate-active-index.804d077d.js","assets/HomeIcon.c44d3662.js","assets/PlusIcon.f09ce124.js","assets/ChevronUpIcon.5afe4e56.js","assets/ChevronDownIcon.63ed9210.js"]),loadingComponent:I,delay:200,errorComponent:"Error Somthings wrong",timeout:3e3}),l=[{name:"Teachers",href:route("manage-user.download-all-teacher"),icon:b,records:s.teachers},{name:"Students",href:route("manage-user.download-all-student"),icon:b,records:s.students},{name:"Courses",href:"#",icon:b,records:"0"},{name:"Users",href:route("manage-user.download-all-user"),icon:b,records:s.record_user}],c=j(s.filters),h=j(null);return N(()=>[c.value,h.value],W(g=>{S.Inertia.get("manage-user",{"filter[name]":g[0],sort:g[1]},{replace:!0,preserveState:!0})})),(g,p)=>(a(),_(C,null,[o(Oe,{show:s.show_user,roles:s.roles},null,8,["show","roles"]),o(H,{"no-content":"",title:"Manage User"},{content:m(()=>[e("div",Ee,[e("div",Ue,[o(ue,{cards:l,label:"Overview"})]),e("div",We,[o(Z,{class:"w-full lg:w-64",modelValue:c.value,"onUpdate:modelValue":p[0]||(p[0]=f=>c.value=f)},null,8,["modelValue"])]),o(t(i),{sort:h.value,onToggle:p[1]||(p[1]=f=>h.value=f),items:s.users.data,viewable:!0,viewlink:"mange-user.show","not-sortable":["roles","image"],routes:"manage-user.index"},null,8,["sort","items"]),s.users.data.length!==0?(a(),u(U,{key:0,class:"max-w-6xl mx-auto mt-8 px-4 sm:px-6 lg:px-8",links:s.users.links,from:s.users.from,to:s.users.to,result:s.users.total,responsiveNext:s.users.next_page_url,responsivePrevious:s.users.first_page_url},null,8,["links","from","to","result","responsiveNext","responsivePrevious"])):y("",!0)])]),_:1})],64))}};export{ss as default};