(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{273:function(e,t,r){e.exports=r(559)},279:function(e,t,r){},559:function(e,t,r){"use strict";r.r(t);var a=r(1),n=r.n(a),c=r(83),s=r.n(c),i=(r(278),r(279),r(228)),l=r(229),o=r(248),u=r(230),m=r(249),d=r(564),h=r(565),E=r(566),p=r(9),b=r(84),f=r.n(b),y=r(242),O=r.n(y),g=r(243),k=r.n(g),w=r(560),j=r(561),v=r(562),q=r(563),I=r(244),U=function(e){var t=e.cubejsApi,r=e.title,a=e.query,c=e.render;return n.a.createElement(w.a,null,n.a.createElement(j.a,null,n.a.createElement(v.a,{tag:"h5"},r),n.a.createElement(q.a,null,n.a.createElement(I.QueryRenderer,{query:a,cubejsApi:t,render:function(e){var t=e.resultSet;return t?c(t):n.a.createElement("div",{className:"loader"})}}))))},A=r(246),F=r.n(A),J=k()("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e30.K9PiJkjegbhnw4Ca5pPlkTmZihoOm42w8bja9Qs2qJg",{apiUrl:"https://react-query-builder.herokuapp.com/cubejs-api/v1"}),K=function(e){return O()(e).format("0,0")},C=function(e){return f()(e).format("MMM YY")},P=function(e,t){return n.a.createElement("h1",{height:300},K(e.chartPivot()[0][t]))},T=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement(d.a,{fluid:!0},n.a.createElement(h.a,null,n.a.createElement(E.a,{sm:"4"},n.a.createElement(U,{cubejsApi:J,title:"Total Users",query:{measures:["Users.count"]},render:function(e){return P(e,"Users.count")}})),n.a.createElement(E.a,{sm:"4"},n.a.createElement(U,{cubejsApi:J,title:"Total Orders",query:{measures:["Orders.count"]},render:function(e){return P(e,"Orders.count")}})),n.a.createElement(E.a,{sm:"4"},n.a.createElement(U,{cubejsApi:J,title:"Shipped Orders",query:{measures:["Orders.count"],filters:[{dimension:"Orders.status",operator:"equals",values:["shipped"]}]},render:function(e){return P(e,"Orders.count")}}))),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement(h.a,null,n.a.createElement(E.a,{sm:"6"},n.a.createElement(U,{cubejsApi:J,title:"New Users Over Time",query:{measures:["Users.count"],timeDimensions:[{dimension:"Users.createdAt",dateRange:["2017-01-01","2018-12-31"],granularity:"month"}]},render:function(e){return n.a.createElement(p.f,{width:"100%",height:300},n.a.createElement(p.b,{data:e.chartPivot()},n.a.createElement(p.h,{dataKey:"category",tickFormatter:C}),n.a.createElement(p.i,{tickFormatter:K}),n.a.createElement(p.g,{labelFormatter:C}),n.a.createElement(p.a,{type:"monotone",dataKey:"Users.count",name:"Users",stroke:"rgb(106, 110, 229)",fill:"rgba(106, 110, 229, .16)"})))}})),n.a.createElement(E.a,{sm:"6"},n.a.createElement(U,{cubejsApi:J,title:"Orders by Status Over Time",query:{measures:["Orders.count"],dimensions:["Orders.status"],timeDimensions:[{dimension:"Orders.createdAt",dateRange:["2017-01-01","2018-12-31"],granularity:"month"}]},render:function(e){return n.a.createElement(p.f,{width:"100%",height:300},n.a.createElement(p.d,{data:e.chartPivot()},n.a.createElement(p.h,{tickFormatter:C,dataKey:"x"}),n.a.createElement(p.i,{tickFormatter:K}),n.a.createElement(p.c,{stackId:"a",dataKey:"shipped, Orders.count",name:"Shipped",fill:"#7DB3FF"}),n.a.createElement(p.c,{stackId:"a",dataKey:"processing, Orders.count",name:"Processing",fill:"#49457B"}),n.a.createElement(p.c,{stackId:"a",dataKey:"completed, Orders.count",name:"Completed",fill:"#FF7C78"}),n.a.createElement(p.e,null),n.a.createElement(p.g,null)))}}))),n.a.createElement(F.a,{size:120,href:"https://github.com/statsbotco/cube.js/tree/master/examples/react-dashboard"}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[273,1,2]]]);
//# sourceMappingURL=main.bfe894d3.chunk.js.map