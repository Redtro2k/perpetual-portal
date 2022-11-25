import{a as _,_ as x}from"./UserLayout.9362da60.js";import{_ as f}from"./PageHeading.dcdd6209.js";import{c as r,b as l,o,D as m,e as i,a as t,w as c,f as g,F as v,i as b,t as h,h as w,L as k,g as y,a8 as j}from"./app.75dcdf2e.js";import{r as S}from"./UserIcon.b88c7a45.js";import"./SearchIcon.c1746be2.js";import"./popover.24f75e66.js";import"./use-outside-click.e2a6c05f.js";import"./use-resolve-button-type.5b0eaf98.js";import"./use-event-listener.2e22af38.js";import"./menu.fdb777c6.js";import"./calculate-active-index.804d077d.js";import"./HomeIcon.30b79ef9.js";import"./ChevronDownIcon.115862ad.js";function B(s,e){return o(),r("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},[l("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"})])}function $(s,e){return o(),r("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},[l("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})])}const L={class:"bg-white"},N={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},V={class:"max-w-2xl mx-auto px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"},D=t("h2",{class:"pt-12 text-xl font-bold text-gray-900 font-sans"},"Subjects",-1),W={key:1,class:"mt-8 grid sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 gap-x-8 gap-y-2"},C={class:"relative"},M={class:"relative w-full h-72 rounded-lg overflow-hidden"},O=["src"],T={class:"relative mt-4"},Y={class:"text-sm font-bold text-gray-900"},z=["innerHTML"],A={class:"mt-1 text-sm text-gray-500"},H={class:"mt-6"},F={__name:"OverlayList",props:{more:Object,label:String,heading_option:Object,items:Object},setup(s){const e=a=>a>100?a.substring(0,100)+"...":a;return(a,u)=>{const p=m("WithAccentBorder"),d=m("WithDashBorder");return o(),i("div",L,[t("div",N,[(o(),r(j,null,{fallback:c(()=>[l(_)]),default:c(()=>[t("div",V,[l(f,{option:s.heading_option,more:s.more,label:s.label},null,8,["option","more","label"]),D,a.$page.props.flash.warning?(o(),r(p,{key:0,label:a.$page.props.flash.warning},null,8,["label"])):g("",!0),s.items.length!=0?(o(),i("div",W,[(o(!0),i(v,null,b(s.items,n=>(o(),i("div",{key:n,class:"mt-4"},[t("div",C,[t("div",M,[t("img",{src:n.image,class:"w-full h-full object-center object-cover"},null,8,O)]),t("div",T,[t("h3",Y,h(n.name),1),t("p",{class:"mt-1 text-sm text-gray-500",innerHTML:e(n.content)},null,8,z),t("p",A,h(n.topics)+" available Topic",1)])]),t("div",H,[l(w(k),{href:a.route("subject.index"),data:{id:n.id},class:"bg-jvgreen text-white hover:bg-jvdgreen relative flex w-full border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-medium"},{default:c(()=>[y(" View Subjects ")]),_:2},1032,["href","data"])])]))),128))])):(o(),r(d,{key:2,label:"No Subject, Please add Subjects"}))])]),_:1}))])])}}},E={key:1,class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},P={class:"max-w-2xl mx-auto px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"},se={__name:"StudentSubjectsShow",props:{profile:Object},setup(s){const e=s,a=[{icon:S,label:`Adviser Name: ${e.profile!=null?e.profile.adviser:"no adviser"}`},{icon:B,label:e.profile?e.profile.yearlevel:"no Year Level"},{icon:$,label:e.profile?e.profile.academicyear:"No School Year"}];return(u,p)=>{const d=m("WithDashBorder");return o(),r(x,{title:"Year Level","no-content":"",showSideNav:!1},{content:c(()=>[e.profile?(o(),r(F,{key:0,heading_option:a,label:"Student profile",items:e.profile.subjects},null,8,["items"])):(o(),i("div",E,[t("div",P,[l(d,{label:"Your account as a Student will be processing..."})])]))]),_:1})}}};export{se as default};