import{E as p,c as o,w as c,G as u,C as f,o as s,f as i,J as l,b as r,g as d}from"./app.d6fd6ef0.js";import g from"./TheTabNav.9c4aac10.js";import{_ as b,a as h}from"./UserLayout.cf4779a3.js";import{_ as k}from"./Paginate.ee4bf37d.js";import"./SearchIcon.ef60ed6c.js";import"./popover.11880e8a.js";import"./use-outside-click.4ced2ae8.js";import"./use-resolve-button-type.ddd396ff.js";import"./use-event-listener.daba031f.js";import"./menu.57fea4d8.js";import"./calculate-active-index.804d077d.js";import"./HomeIcon.c44d3662.js";const E={__name:"Dashboard",props:{posts:Object,teachers:[String,Object,Boolean]},setup(e){const m=p({loader:()=>u(()=>import("./ThePosts.32998f88.js"),["assets/ThePosts.32998f88.js","assets/app.d6fd6ef0.js","assets/app.3e8067e1.css","assets/moment.9709ab41.js","assets/DotsVerticalIcon.9bf7c791.js","assets/TrashIcon.e7836ba1.js","assets/menu.57fea4d8.js","assets/use-outside-click.4ced2ae8.js","assets/calculate-active-index.804d077d.js","assets/use-resolve-button-type.ddd396ff.js"]),loadingComponent:h,delay:200,errorComponent:"error",timeout:3e3});return(a,t)=>{const n=f("WithAccentBorder");return s(),o(b,{title:"Dashboard"},{content:c(()=>[e.teachers?(s(),o(n,{key:0,class:"my-2",label:e.teachers},null,8,["label"])):i("",!0),a.$page.props.flash.warning?(s(),o(n,{key:1,class:"my-2",label:a.$page.props.flash.warning},null,8,["label"])):i("",!0),t[0]||(l(-1),t[0]=r(g),l(1),t[0]),r(d(m),{posts:e.posts},null,8,["posts"]),r(k,{links:e.posts.links,from:e.posts.from,to:e.posts.to,result:e.posts.result,responsiveNext:e.posts.next_page_url,responsivePrevious:e.posts.first_page_url},null,8,["links","from","to","result","responsiveNext","responsivePrevious"])]),_:1})}}};export{E as default};