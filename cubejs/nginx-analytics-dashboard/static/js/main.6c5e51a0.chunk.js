(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{244:function(e,t,a){e.exports=a(488)},250:function(e,t,a){},488:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),o=a(73),c=a.n(o),s=(a(249),a(250),a(201)),u=a(202),l=a(222),i=a(203),m=a(223),E=a(493),d=a(494),b=a(495),g=a(14),h=a(217),f=a.n(h),p=a(74),y=a.n(p),j=a(120),L=a.n(j),D=a(218),v=a.n(D),k=a(224),A=a(489),F=a(490),R=a(491),M=a(492),q=a(219),w=function(e){var t=e.cubejsApi,a=e.title,r=e.query,o=e.render;return n.a.createElement(A.a,null,n.a.createElement(F.a,null,n.a.createElement(R.a,{tag:"h5"},a),n.a.createElement(M.a,null,n.a.createElement(q.QueryRenderer,{query:Object(k.a)({timeDimensions:[{dimension:"Logs.createdAt",dateRange:["2019-04-01","2019-04-09"]}]},r),cubejsApi:t,render:function(e){var t=e.resultSet;return t?o(t):n.a.createElement("div",{className:"loader"})}}))))},I=v()("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NTQ4MjUxODYsImV4cCI6MTU1NDkxMTU4Nn0.DVuaLsFQM495bSkqyIMfJmrLDrbLVGCMwr7Fzr3ZAAk",{apiUrl:"https://rjto0er4a5.execute-api.us-east-1.amazonaws.com/dev/cubejs-api/v1"}),O=function(e){return L()(e/100).format("0%")},C=function(e){return y()(e).format("MMM DD")},x=["#7DB3FF","#49457B","#FF7C78","#FED3D0","#6F76D9","#9ADFB4","#2E7987"],J=function(e,t){var a,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return n.a.createElement("h1",{height:300},(a=e.chartPivot()[0][t],L()(a).format("0,0")),r)},N=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return n.a.createElement(E.a,{fluid:!0},n.a.createElement(d.a,null,n.a.createElement(b.a,{sm:"4"},n.a.createElement(w,{cubejsApi:I,title:"Total Requests",query:{measures:["Logs.count"]},render:function(e){return J(e,"Logs.count")}})),n.a.createElement(b.a,{sm:"4"},n.a.createElement(w,{cubejsApi:I,title:"Total Errors",query:{measures:["Logs.errorCount"]},render:function(e){return J(e,"Logs.errorCount")}})),n.a.createElement(b.a,{sm:"4"},n.a.createElement(w,{cubejsApi:I,title:"Error Rate",query:{measures:["Logs.errorRate"]},render:function(e){return J(e,"Logs.errorRate","%")}}))),n.a.createElement(d.a,null,n.a.createElement(b.a,{sm:"6"},n.a.createElement(w,{cubejsApi:I,title:"Error Rate Last 7 Days",query:{measures:["Logs.errorRate"],timeDimensions:[{dimension:"Logs.createdAt",dateRange:["2019-04-01","2019-04-09"],granularity:"day"}]},render:function(e){return n.a.createElement(g.h,{width:"100%",height:300},n.a.createElement(g.e,{data:e.chartPivot()},n.a.createElement(g.a,{strokeDasharray:"5 5"}),n.a.createElement(g.j,{dataKey:"x",tickFormatter:C}),n.a.createElement(g.k,{domain:["dataMin - 1","dataMax + 1"],tickFormatter:O}),n.a.createElement(g.i,{labelFormatter:C}),n.a.createElement(g.d,{type:"monotone",dataKey:"Logs.errorRate",name:"Error Rate",stroke:"rgb(106, 110, 229)",fill:"rgba(106, 110, 229, .16)"})))}})),n.a.createElement(b.a,{sm:"6"},n.a.createElement(w,{cubejsApi:I,title:"Errors by Status",query:{measures:["Logs.count"],dimensions:["Logs.status"],filters:[{dimension:"Logs.isError",operator:"equals",values:["Yes"]}]},render:function(e){return n.a.createElement(g.h,{width:"100%",height:300},n.a.createElement(g.g,null,n.a.createElement(g.f,{label:!0,nameKey:"x",dataKey:"Logs.count",data:e.chartPivot()},e.chartPivot().map(function(e,t){return n.a.createElement(g.b,{fill:x[t%x.length]})})),n.a.createElement(g.c,null),n.a.createElement(g.i,null)))}}))),n.a.createElement(f.a,{size:120,href:"https://github.com/statsbotco/cube.js"}))}}]),t}(r.Component),T=document.getElementById("root");c.a.render(n.a.createElement(N,null),T)}},[[244,1,2]]]);
//# sourceMappingURL=main.6c5e51a0.chunk.js.map