import{o as s,c as _,b as a,e as o,a as e,F as m,i as f,w as l,g as d,t as h,h as n,L as i,f as u}from"./app.75dcdf2e.js";function g(c,r){return s(),_("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[a("path",{"fill-rule":"evenodd",d:"M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z","clip-rule":"evenodd"})])}const p={"aria-labelledby":"friends-available-heading"},x={class:"bg-white rounded-lg shadow"},v={class:"p-6"},w=e("h2",{id:"who-to-follow-heading",class:"text-base font-medium text-gray-900"},"People's Online",-1),y={class:"mt-6 flow-root"},b={role:"list",class:"-my-4 divide-y divide-gray-200"},k={class:"flex-shrink-0"},V=["src"],B={class:"min-w-0 flex-1"},N={class:"text-sm font-medium text-gray-900"},j={class:"text-sm text-gray-500"},C={class:"flex-shrink-0"},L={key:0,type:"button",class:"inline-flex items-center px-3 py-0.5 rounded-full bg-green-50 text-sm font-medium text-jvdgreen hover:bg-indigo-100"},F=e("span",null," Add ",-1),O={class:"mt-6"},z={__name:"PeoplesNav",props:{users:Object},setup(c){return(r,P)=>(s(),o("section",p,[e("div",x,[e("div",v,[w,e("div",y,[e("ul",b,[(s(!0),o(m,null,f(c.users,t=>(s(),o("li",{key:t.id,class:"flex items-center py-4 space-x-3"},[e("div",k,[e("img",{class:"h-8 w-8 rounded-full",src:t.image,alt:""},null,8,V)]),e("div",B,[e("p",N,[a(n(i),{href:t.href},{default:l(()=>[d(h(t.name==r.$page.props.user.name?"You":t.name),1)]),_:2},1032,["href"])]),e("p",j,[a(n(i),{href:t.href},{default:l(()=>[d(h("@"+t.role),1)]),_:2},1032,["href"])])]),e("div",C,[t.name!=r.$page.props.user.name?(s(),o("button",L,[a(n(g),{class:"-ml-1 mr-0.5 h-5 w-5 text-jvgreen","aria-hidden":"true"}),F])):u("",!0)])]))),128))])]),e("div",O,[a(n(i),{href:"#",class:"w-full block text-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"},{default:l(()=>[d(" View all ")]),_:1})])])])]))}};export{z as default};