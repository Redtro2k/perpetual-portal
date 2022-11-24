import{o as l,c as a,b as n,E as g,u as x,w as v,G as _,a as e,t as r,h as s,g as u,m as w,v as h,Z as b,e as k,f as y,x as C}from"./app.c1af1f95.js";import{_ as j,a as M}from"./UserLayout.7717c02f.js";import{_ as V}from"./Paginate.3af1211c.js";import{r as B}from"./AnnotationIcon.7a2d4146.js";import"./SearchIcon.63fea564.js";import"./popover.ca883c0d.js";import"./use-outside-click.05e09a47.js";import"./use-resolve-button-type.525f8011.js";import"./use-event-listener.e89fd11f.js";import"./menu.80302a37.js";import"./calculate-active-index.804d077d.js";import"./HomeIcon.51fa6b7b.js";function N(t,c){return l(),a("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 19l9 2-9-18-9 18 9-2zm0 0v-8"})])}function S(t,c){return l(),a("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"})])}const T={class:"bg-gray-200"},$={class:"bg-white overflow-hidden sm:rounded-lg"},L={class:"container mx-auto sm:px-6 lg:px-8"},P={class:"border-b border-gray-200 py-5"},E={class:"flex justify-between"},A={class:"text-lg font-bold leading-6 text-gray-900"},D={class:"mt-2 max-w-4xl text-sm text-gray-500"},H=["innerHTML"],O={class:"flex space-x-4 pt-4"},z={class:"bg-white shadow sm:rounded-lg"},F={class:"px-4 py-3 sm:p-6"},G=e("div",{class:"mt-2 max-w-xl text-sm text-gray-500"},[e("p",null,"Comment your reaction about this post.")],-1),I=["src"],R={class:"w-full"},U=e("label",{for:"comment",class:"sr-only"},"Comment",-1),Z={class:"text-sm text-red-500"},q=["value"],J=["disabled"],le={__name:"Show",props:{contents:Object},setup(t){const c=t,p=g({loader:()=>_(()=>import("./TheComments.c2cf346e.js"),["assets/TheComments.c2cf346e.js","assets/app.c1af1f95.js","assets/app.9bd10fad.css"]),loadingComponent:M,delay:200,errorComponent:"error",timeout:3e3}),o=x({comment:null,token:c.contents.post_id});let d=()=>{o.post(route("comment.store"),{preserveScroll:!0,onSuccess:()=>o.reset("comment")})};return(f,i)=>(l(),a(j,{title:"Post"},{content:v(()=>[e("div",T,[e("div",$,[e("div",L,[e("div",P,[e("div",E,[e("h3",A,r(t.contents.title),1),e("small",null,r(t.contents.audience),1)]),e("div",D,[e("span",{innerHTML:t.contents.description},null,8,H)]),e("ul",O,[e("li",null,[n(s(S),{class:"h-5 w-5 inline-block"}),u(r(t.contents.likes),1)]),e("li",null,[n(s(B),{class:"h-5 w-5 inline-block"}),u(" "+r(t.contents.comment),1)])])]),e("div",z,[e("div",F,[G,e("form",{class:"mt-3 space-x-2 sm:flex sm:items-center",onSubmit:i[1]||(i[1]=w((...m)=>s(d)&&s(d)(...m),["prevent"]))},[e("img",{class:"hidden h-10 w-10 rounded-full sm:inline-block",src:f.$page.props.user.profile_photo_url,alt:""},null,8,I),e("div",R,[U,h(e("input",{type:"text","onUpdate:modelValue":i[0]||(i[0]=m=>s(o).comment=m),placeholder:"comment here",class:"block w-full rounded-md border-gray-300 shadow-sm focus:ring-jvgreen sm:text-sm"},null,512),[[b,s(o).comment]]),e("p",Z,r(s(o).errors.comment),1)]),s(o).progress?(l(),k("progress",{key:0,value:s(o).progress.percentage,max:"100"},r(s(o).progress.percentage)+"%",9,q)):y("",!0),e("button",{type:"submit",disabled:s(o).processing,class:"mt-3 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-jvgreen px-4 py-2 font-medium text-white shadow-sm hover:bg-jvdgreen focus:outline-none focus:ring-2 focus:ring-jvgreen focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"},[n(s(N),{class:"h-5 w-5"})],8,J)],32)])]),n(s(p),{items:t.contents.comments.data},null,8,["items"]),h(n(V,{links:t.contents.comments.links,from:t.contents.comments.form,to:t.contents.comments.to,result:t.contents.comments.total,responsiveNext:t.contents.comments.next_page_url,responsivePrevious:t.contents.comments.first_page_url},null,8,["links","from","to","result","responsiveNext","responsivePrevious"]),[[C,t.contents.comments.data!=0]])])])])]),_:1}))}};export{le as default};
