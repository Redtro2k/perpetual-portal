import{o as a,c as i,b as n,e as l,i as d,a as e,t as o,h as r,$ as _,v as h,x as p,w as m,L as u,F as x}from"./app.c1af1f95.js";function f(c,t){return a(),i("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})])}const v={class:"py-4"},w={class:"flex space-x-3"},g=["src"],k={class:"flex-1 space-y-1"},y={class:"flex items-center justify-between"},b={class:"text-sm font-medium"},B={class:"text-sm text-gray-500"},L={class:"text-mb text-gray-500 pl-1 pb-2"},C={__name:"TheComments",props:{items:Object},setup(c){return(t,E)=>(a(!0),l(x,null,d(c.items,s=>(a(),l("ul",{class:"divide-y divide-gray-200",key:s},[e("li",v,[e("div",w,[e("img",{class:"h-8 w-8 rounded-full",src:s.person_name.profile_photo_url,alt:""},null,8,g),e("div",k,[e("div",y,[e("h3",b,o(s.person_name.name),1),e("p",B,o(r(_)(s.person_created).fromNow()),1)]),e("p",L,o(s.person_comment),1),h(e("span",null,[n(r(u),{class:"text-red-500 text-xs mt-3 hover:text-red-700",href:t.route("comment.destroy",s.person_id),as:"button",method:"DELETE","preserve-state":""},{default:m(()=>[n(r(f),{class:"h-5 w-5"})]),_:2},1032,["href"])],512),[[p,s.person_name.id===t.$page.props.user.id]])])])])]))),128))}};export{C as default};
