(this["webpackJsonpgithub-id-card"]=this["webpackJsonpgithub-id-card"]||[]).push([[0],[,,,,function(e,t,a){e.exports=a(11)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(3),s=a.n(r),l=a(1);a(9),a(10);var o=function(e){return n.a.createElement("div",{className:"card"},n.a.createElement("a",{className:"blog",href:e.blog},n.a.createElement("img",{src:"https://img.icons8.com/ios/24/000000/domain.png"})),n.a.createElement("h1",{className:"name"},e.name),n.a.createElement("p",{className:"repo"},"Repos: ",e.repo),n.a.createElement("p",{className:"company"},"Company: ",e.company),n.a.createElement("img",{className:"avatar",src:e.url,alt:""}),n.a.createElement("div",{className:"line"}),n.a.createElement("p",{className:"place"},e.location),n.a.createElement("p",{className:"joined-date"},e.date),n.a.createElement("p",{className:"bio"},e.bio),n.a.createElement("p",{className:"followers"},n.a.createElement("i",{class:"fa fa-users"}),"\xa0\xa0",e.followers),n.a.createElement("p",{className:"twitter"},n.a.createElement("a",{href:e.twitter},n.a.createElement("i",{class:"fa fa-twitter"}))))};var m=function(e){var t=Object(c.useState)(!0),a=Object(l.a)(t,2),r=a[0],s=a[1],m=Object(c.useState)(""),u=Object(l.a)(m,2),i=u[0],b=u[1],p=Object(c.useState)(""),f=Object(l.a)(p,2),E=f[0],h=f[1],j=Object(c.useState)(0),O=Object(l.a)(j,2),g=O[0],d=O[1],N=Object(c.useState)(""),v=Object(l.a)(N,2),S=v[0],w=v[1],y=Object(c.useState)(""),_=Object(l.a)(y,2),x=_[0],C=_[1],k=Object(c.useState)(""),D=Object(l.a)(k,2),J=D[0],Y=D[1],B=Object(c.useState)(null),I=Object(l.a)(B,2),K=I[0],P=I[1],R=Object(c.useState)(""),U=Object(l.a)(R,2),q=U[0],z=U[1],A=Object(c.useState)(0),F=Object(l.a)(A,2),G=F[0],H=F[1],L=Object(c.useState)(""),M=Object(l.a)(L,2),Q=M[0],T=M[1],V=Object(c.useState)(""),W=Object(l.a)(V,2),X=W[0],Z=W[1];function $(e){b(e.name),h(e.login),d(e.public_repos),w(e.avatar_url),C(e.company),Y(e.location),P(e.created_at.substring(0,10)),null==e.bio?z("Oops! You need a bio\ud83d\ude44"):z(e.bio),H(e.followers),T("https://twitter.com/".concat(e.twitter_username)),Z(e.blog)}return Object(c.useEffect)((function(){fetch("https://api.github.com/users/PrathamKumar14").then((function(e){return e.json()})).then((function(e){e.message,$(e)}))}),[]),n.a.createElement("div",null,n.a.createElement("form",{onSubmit:function(e){e.preventDefault(),fetch("https://api.github.com/users/".concat(E)).then((function(e){return e.json()})).then((function(e){e.message?s(!1):($(e),s(!0))}))},className:"form",action:""},n.a.createElement("input",{onChange:function(e){h(e.target.value)},className:"input",type:"text",placeholder:"Enter Your Username"}),n.a.createElement("input",{className:"btn",type:"submit"})),r?n.a.createElement(o,{name:i,repo:g,url:S,company:x,location:J,date:K,bio:q,followers:G,twitter:Q,blog:X}):n.a.createElement("h1",{className:"error-msg"},"Oops!\ud83d\ude10 Create an account at \xa0",n.a.createElement("a",{style:{textDecoration:"none"},href:"https://github.com/"},"here\ud83d\udc49")))};var u=function(){return n.a.createElement("div",null,n.a.createElement(m,null))};s.a.render(n.a.createElement(u,null),document.getElementById("root"))}],[[4,1,2]]]);
//# sourceMappingURL=main.d3f63a6d.chunk.js.map