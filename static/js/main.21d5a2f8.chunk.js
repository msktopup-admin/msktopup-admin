(this.webpackJsonpadmin=this.webpackJsonpadmin||[]).push([[0],{315:function(e,t,r){},451:function(e,t,r){"use strict";r.r(t);var n=r(5),a=r(0),c=r.n(a),s=r(16),o=r.n(s),u=(r(315),r(529)),i=r(528),p=r(8),l=r.n(p),d=r(12),f=r(125),b=r(126);function j(){return(j=Object(d.a)(l.a.mark((function e(t,r,n){var a,c,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(r,t),e.next=3,fetch("".concat(t,"/get/games"),{method:"GET"});case 3:return a=e.sent,e.next=6,a.json();case 6:return(c=e.sent).err&&console.log(c),console.log(c),s=c.map((function(e){var t=e;return t.id=e._id,t})),console.log("Im returing",s),e.abrupt("return",{data:s,total:s.length});case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var h=function(e,t,r){return j.apply(this,arguments)};function x(){return(x=Object(d.a)(l.a.mark((function e(t,r,n){var a,c,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t,"/get/games?id=").concat(n.id),{method:"GET"});case 2:return a=e.sent,console.log("the srver response body",a),e.next=6,a.json();case 6:return c=e.sent,console.log("the body",c),c.err&&console.log(c),(s=c).id=c._id,console.log("the final game is:",s),e.abrupt("return",{data:s});case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var m=function(e,t,r){return x.apply(this,arguments)};function O(){var e={};if(e.id=localStorage.getItem("id"),e.key=localStorage.getItem("key"),e.id&&e.key){var t=new Headers;for(var r in e)t.append(r,e[r]);return t.append("Content-Type","application/json"),t}}function g(){return(g=Object(d.a)(l.a.mark((function e(t,r){var n,a,c,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("hello wrold from s/d/g/createGame.js"),n=r.data,a="".concat(t,"/admin/games"),e.next=5,fetch(a,{headers:O(),method:"POST",body:JSON.stringify({name:n.name,image:n.image||"/img/default.jpg"})});case 5:return c=e.sent,e.next=8,c.text();case 8:return s=e.sent,console.log(s),n.id=s._id,e.abrupt("return",{data:n});case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var v=function(e,t){return g.apply(this,arguments)};function k(){return(k=Object(d.a)(l.a.mark((function e(t,r){var n,a,c,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("The fucking params that is fucking me out is:",r),console.log("the fucking params is",r),n=r.data,a="".concat(t,"/admin/games/").concat(r.id),e.next=6,fetch(a,{headers:O(),method:"PATCH",body:JSON.stringify({name:n.name,image:n.image||"/img/default.jpg"})});case 6:return c=e.sent,e.next=9,c.text();case 9:return s=e.sent,console.log(s),n.id=s._id,e.abrupt("return",{data:n});case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var y=function(e,t){return k.apply(this,arguments)};function w(){return(w=Object(d.a)(l.a.mark((function e(t,r){var n,a,c,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(t,"/admin/games/").concat(r.id),e.next=3,fetch(n,{headers:O(),method:"DELETE"});case 3:return a=e.sent,console.log("the funckin server response",a),e.next=7,a.json();case 7:return(c=e.sent).id=c._id,c._id=void 0,console.log("The effing responseBody:",c),(s={}).data=c,console.log("the effing return object",s),e.abrupt("return",s);case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var P=function(e,t){return w.apply(this,arguments)};function I(){return(I=Object(d.a)(l.a.mark((function e(t,r){var n,a,c,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(t,"/get/packages"),n+="?game="+r,e.next=4,fetch(n,{method:"GET",headers:O()});case 4:return a=e.sent,e.next=7,a.json();case 7:return(c=e.sent).err&&console.log(c),console.log(c),s=c.map((function(e){var t=e;return t.id=e._id,t})),console.log("Im returing",s),e.abrupt("return",{data:s,total:s.length});case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var _=function(e,t){return I.apply(this,arguments)};function A(){return(A=Object(d.a)(l.a.mark((function e(t,r,n){var a,c,s,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(t,"/get/packages?id=").concat(n.id),e.next=3,fetch(a,{method:"GET",headers:O()});case 3:return c=e.sent,console.log("the srver response body",c),e.next=7,c.json();case 7:return s=e.sent,console.log("the body",s),s.err&&console.log(s),(o=s).id=s._id,console.log("the final thepackage is:",o),e.abrupt("return",{data:o});case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var L=function(e,t,r){return A.apply(this,arguments)};function U(){return(U=Object(d.a)(l.a.mark((function e(t,r){var n,a,c,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(t,"/admin/packages/").concat(r.id),e.next=3,fetch(n,{method:"DELETE",headers:O()});case 3:return a=e.sent,e.next=6,a.json();case 6:return(c=e.sent).id=c._id,c._id=void 0,(s={}).data=c,e.abrupt("return",s);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var R=function(e,t){return U.apply(this,arguments)};function T(){return(T=Object(d.a)(l.a.mark((function e(t,r,n){var a,c,s,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.data,c="".concat(t,"/admin/packages"),e.next=4,fetch(c,{headers:O(),method:"POST",body:JSON.stringify({name:a.name,price:a.price,game:a.game||n})});case 4:return s=e.sent,e.next=7,s.text();case 7:return o=e.sent,console.log(o),a.id=o._id,e.abrupt("return",{data:a});case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var S=function(e,t,r){return T.apply(this,arguments)},C=r(506);function N(){return(N=Object(d.a)(l.a.mark((function e(t,r,n){var a,c,s,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(t,"/admin/orders?page=").concat(n.pagination.page,"&&limit=").concat(n.pagination.perPage),"Pending Orders"===r&&(a+="&&status=Pending"),n.filter&&(console.log("the effing params.filet.q",n.filter.q),a+="&&id="+n.filter.q),e.next=5,fetch(a,{method:"GET",headers:O()});case 5:if(401!==(c=e.sent).status){e.next=8;break}return e.abrupt("return",Promise.reject(new C.a("unauthorized",401,{})));case 8:return e.next=10,c.json();case 10:return s=e.sent,console.log("the effing resBody is",s),s.err&&console.log(s),console.log("this is the responsebody",s),o=s.values.map((function(e){var t=e;return t.id=e._id,console.log("the package is",e.package),t.orderedBy=e.orderedBy.username,t.name="Deleted",t.price="Deleted",e.package&&(t.name=e.package.name,t.price=e.package.price),t})),console.log("Im returing",o),e.abrupt("return",{data:o,total:s.total});case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var B=function(e,t,r){return N.apply(this,arguments)};function E(){return(E=Object(d.a)(l.a.mark((function e(t,r){var n,a,c,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.data,a="".concat(t,"/admin/packages/").concat(r.id),e.next=4,fetch(a,{headers:O(),method:"PATCH",body:JSON.stringify({name:n.name,price:n.price})});case 4:return c=e.sent,e.next=7,c.text();case 7:return s=e.sent,console.log("response body 18:33",s),n.id=s._id,e.abrupt("return",{data:n});case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var q=function(e,t){return E.apply(this,arguments)};function G(){return(G=Object(d.a)(l.a.mark((function e(t,r){var n,a,c,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r,a="".concat(t,"/admin/orders?id=").concat(r.id,"&&status=").concat(r.status),e.next=4,fetch(a,{headers:O(),method:"PATCH"});case 4:return c=e.sent,e.next=7,c.text();case 7:return s=e.sent,console.log(s),n.id=s._id,e.abrupt("return",{data:n});case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var J=function(e,t){return G.apply(this,arguments)};function H(){return(H=Object(d.a)(l.a.mark((function e(t,r,n){var a,c,s,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(t,"/admin/users?page=").concat(n.pagination.page,"&&limit=").concat(n.pagination.perPage),n.filter.q&&(console.log(n.filter.q),a+="&&username="+n.filter.q),e.next=4,fetch(a,{method:"GET",headers:O()});case 4:return c=e.sent,e.next=7,c.json();case 7:return s=e.sent,console.log("Very Messy body:",s),s.err&&console.log(s),console.log(s),o=s.values.map((function(e){var t=e;return t.id=e._id,t})),console.log("the users are:",s),e.abrupt("return",{data:o,total:s.total});case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var M=function(e,t,r){return H.apply(this,arguments)},D=function(){function e(t){Object(f.a)(this,e),this.API_URL=t}return Object(b.a)(e,[{key:"getList",value:function(){var e=Object(d.a)(l.a.mark((function e(t,r){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"games"!==t){e.next=5;break}return e.next=4,h(this.API_URL);case 4:return e.abrupt("return",e.sent);case 5:if("Pending Orders"!==t&&"All Orders"!==t){e.next=7;break}return e.abrupt("return",B(this.API_URL,t,r));case 7:if("packages"!==t){e.next=9;break}return e.abrupt("return",_(this.API_URL,"5fad192bb14f33d9676111d1",r));case 9:if("promos"!==t){e.next=11;break}return e.abrupt("return",_(this.API_URL,"5fafcf9dd37dec0017a8c84c",r));case 11:if("users"!==t){e.next=13;break}return e.abrupt("return",M(this.API_URL,t,r));case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.log(e.t0);case 18:case"end":return e.stop()}}),e,this,[[0,15]])})));return function(t,r){return e.apply(this,arguments)}}()},{key:"getOne",value:function(){var e=Object(d.a)(l.a.mark((function e(t,r){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"games"!==t){e.next=3;break}return e.abrupt("return",m(this.API_URL,t,r));case 3:if("packages"!==t){e.next=8;break}return e.next=7,L(this.API_URL,t,r);case 7:return e.abrupt("return",e.sent);case 8:if("promos"!==t){e.next=12;break}return e.next=11,L(this.API_URL,t,r);case 11:return e.abrupt("return",e.sent);case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,this,[[0,14]])})));return function(t,r){return e.apply(this,arguments)}}()},{key:"getMany",value:function(){var e=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"getManyReference",value:function(){}},{key:"create",value:function(){var e=Object(d.a)(l.a.mark((function e(t,r){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"games"!==t){e.next=5;break}return e.next=4,v(this.API_URL,r);case 4:return e.abrupt("return",e.sent);case 5:if("packages"!==t){e.next=9;break}return e.next=8,S(this.API_URL,r,"5fad192bb14f33d9676111d1");case 8:return e.abrupt("return",e.sent);case 9:if("promos"!==t){e.next=13;break}return e.next=12,S(this.API_URL,r,"5fafcf9dd37dec0017a8c84c");case 12:return e.abrupt("return",e.sent);case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.log(e.t0);case 18:case"end":return e.stop()}}),e,this,[[0,15]])})));return function(t,r){return e.apply(this,arguments)}}()},{key:"update",value:function(){var e=Object(d.a)(l.a.mark((function e(t,r){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"games"!==t){e.next=5;break}return e.next=4,y(this.API_URL,r);case 4:return e.abrupt("return",e.sent);case 5:if("packages"!==t){e.next=9;break}return e.next=8,q(this.API_URL,r);case 8:return e.abrupt("return",e.sent);case 9:if("promos"!==t){e.next=13;break}return e.next=12,q(this.API_URL,r);case 12:return e.abrupt("return",e.sent);case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.log(e.t0);case 18:case"end":return e.stop()}}),e,this,[[0,15]])})));return function(t,r){return e.apply(this,arguments)}}()},{key:"updateMany",value:function(){}},{key:"delete",value:function(){var e=Object(d.a)(l.a.mark((function e(t,r){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"games"!==t){e.next=5;break}return e.next=4,P(this.API_URL,r);case 4:return e.abrupt("return",e.sent);case 5:if("packages"!==t){e.next=9;break}return e.next=8,R(this.API_URL,r);case 8:return e.abrupt("return",e.sent);case 9:if("promos"!==t){e.next=13;break}return e.next=12,R(this.API_URL,r);case 12:return e.abrupt("return",e.sent);case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.log(e.t0);case 18:case"end":return e.stop()}}),e,this,[[0,15]])})));return function(t,r){return e.apply(this,arguments)}}()},{key:"deleteMany",value:function(){var e=Object(d.a)(l.a.mark((function e(t,r){var n,a,c,s=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"games"!==t){e.next=4;break}return n=r.ids.map(function(){var e=Object(d.a)(l.a.mark((function e(t){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P(s.API_URL,{id:t});case 2:return r=e.sent,e.abrupt("return",r.id);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.abrupt("return",{data:n});case 4:if("packages"!==t){e.next=7;break}return a=r.ids.map(function(){var e=Object(d.a)(l.a.mark((function e(t){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R(s.API_URL,{id:t});case 2:return r=e.sent,e.abrupt("return",r.id);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.abrupt("return",{data:a});case 7:if("promos"!==t){e.next=10;break}return c=r.ids.map(function(){var e=Object(d.a)(l.a.mark((function e(t){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R(s.API_URL,{id:t});case 2:return r=e.sent,e.abrupt("return",r.id);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.abrupt("return",{data:c});case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t,r){return e.apply(this,arguments)}}()},{key:"editOrder",value:function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J(this.API_URL,t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"editUser",value:function(){var e=Object(d.a)(l.a.mark((function e(t){var r,n,a,c,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t,n="unblock",t.isBlocked&&(n="block"),a="".concat(this.API_URL,"/admin/users?id=").concat(t.id,"&&isBlocked=").concat(n),e.next=6,fetch(a,{headers:O(),method:"PATCH"});case 6:return c=e.sent,e.next=9,c.json();case 9:return s=e.sent,console.log(s),r.id=s._id,e.abrupt("return",{data:r});case 13:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}();function F(){return(F=Object(d.a)(l.a.mark((function e(t,r){var n,a,c,s,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.username,a=r.password,c=new Request(t+"/auth/login",{method:"POST",body:JSON.stringify({username:n,password:a}),headers:new Headers({"Content-Type":"application/json"})}),e.next=4,fetch(c);case 4:if(!((s=e.sent).status<200||s.status>=300)){e.next=7;break}return e.abrupt("return",Promise.reject(Error(s.statusText)));case 7:return e.next=9,s.json();case 9:return o=e.sent,console.log("the server responded with:",o),localStorage.setItem("id",o.id),localStorage.setItem("key",o.key),localStorage.setItem("privillage","admin"),e.abrupt("return",Promise.resolve());case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var z=function(e,t){return F.apply(this,arguments)},V=function(){function e(t){Object(f.a)(this,e),this.API_URL=t}return Object(b.a)(e,[{key:"login",value:function(e){return z(this.API_URL,e)}},{key:"checkError",value:function(e){var t=e.status;return 401===t||403===t?(localStorage.removeItem("id"),localStorage.removeItem("key"),Promise.reject()):Promise.resolve()}},{key:"checkAuth",value:function(){return localStorage.getItem("id")&&localStorage.getItem("key")?Promise.resolve():Promise.reject()}},{key:"logout",value:function(){return localStorage.clear(),Promise.resolve()}},{key:"getIdentity",value:function(){}},{key:"getPermissions",value:function(){var e=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("admin"!==localStorage.getItem("privillage")){e.next=2;break}return e.abrupt("return",Promise.resolve());case 2:return e.abrupt("return",Promise.reject());case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),e}(),K=r(18),Q=r(530),W=r(531),X=r(520),Y=r(521),Z=r(536);var $=function(e){return console.log("props are",e),Object(n.jsx)(Q.a,Object(K.a)(Object(K.a)({},e),{},{children:Object(n.jsxs)(W.a,{children:[Object(n.jsx)(X.a,{source:"id"}),Object(n.jsx)(X.a,{source:"name"}),Object(n.jsx)(Y.a,{}),Object(n.jsx)(Z.a,{})]})}))},ee=r(539),te=r(532),re=r(286),ne=r(533),ae=function(e){return Object(n.jsx)(ee.a,Object(K.a)(Object(K.a)({},e),{},{children:Object(n.jsxs)(te.a,{children:[Object(n.jsx)(re.a,{source:"name"}),Object(n.jsx)(ne.a,{source:"image"})]})}))},ce=r(534),se=function(e){return Object(n.jsx)(ce.a,Object(K.a)(Object(K.a)({},e),{},{children:Object(n.jsxs)(te.a,{children:[Object(n.jsx)(re.a,{source:"name"}),Object(n.jsx)(ne.a,{source:"image"})]})}))};var oe=function(e){return console.log("props are",e),Object(n.jsx)(Q.a,Object(K.a)(Object(K.a)({},e),{},{children:Object(n.jsxs)(W.a,{children:[Object(n.jsx)(X.a,{source:"id"}),Object(n.jsx)(X.a,{source:"name"}),Object(n.jsx)(X.a,{source:"price"}),Object(n.jsx)(Y.a,{}),Object(n.jsx)(Z.a,{})]})}))},ue=function(e){return Object(n.jsx)(ee.a,Object(K.a)(Object(K.a)({},e),{},{children:Object(n.jsxs)(te.a,{children:[Object(n.jsx)(re.a,{source:"name"}),Object(n.jsx)(re.a,{source:"price"})]})}))},ie=function(e){return Object(n.jsx)(ce.a,Object(K.a)(Object(K.a)({},e),{},{children:Object(n.jsxs)(te.a,{children:[Object(n.jsx)(re.a,{source:"name"}),Object(n.jsx)(re.a,{source:"price"})]})}))},pe=r(537),le=r(526),de=r(153),fe=r.n(de),be=function(e){return Object(n.jsx)(pe.a,Object(K.a)(Object(K.a)({},e),{},{children:Object(n.jsx)(le.a,{source:"q",alwaysOn:!0})}))},je=function(e){var t=function(e){var t=e.record;return Object(n.jsx)("button",{className:"btn btn-primary",onClick:Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fe()(t.emailOrNumber+"|"+t.password);case 1:case"end":return e.stop()}}),e)}))),children:"Copy"})};return Object(n.jsx)(Q.a,Object(K.a)(Object(K.a)({},e),{},{filters:Object(n.jsx)(be,{}),children:Object(n.jsxs)(W.a,{children:[Object(n.jsx)(X.a,{source:"id"}),Object(n.jsx)(t,{}),Object(n.jsx)(X.a,{source:"status"}),Object(n.jsx)(X.a,{source:"orderedBy"}),Object(n.jsx)(X.a,{source:"name"}),Object(n.jsx)(X.a,{source:"price"}),Object(n.jsx)(X.a,{source:"accountPlatform"}),Object(n.jsx)(X.a,{source:"emailOrNumber"}),Object(n.jsx)(X.a,{source:"password"}),Object(n.jsx)(X.a,{source:"bkashNumber"})]})}))},he=(r(422),r(95)),xe=r(512),me=function(e){var t=function(e){return Object(n.jsx)(pe.a,Object(K.a)(Object(K.a)({},e),{},{children:Object(n.jsx)(le.a,{source:"q",alwaysOn:!0})}))};console.log("props are",e);var r=Object(he.a)(),a=Object(xe.a)(),c=function(e){var t=e.record;return Object(n.jsx)("button",{className:"btn btn-primary",onClick:Object(d.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.editOrder({id:t.id,status:"complete"});case 2:n=e.sent,a(),console.log(n);case 5:case"end":return e.stop()}}),e)}))),children:"Confirm"})},s=function(e){var t=e.record;return Object(n.jsx)("button",{className:"btn btn-danger",onClick:Object(d.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.editOrder({id:t.id,status:"cancelled"});case 2:n=e.sent,a(),console.log(n);case 5:case"end":return e.stop()}}),e)}))),children:"Cancel"})},o=function(e){var t=e.record,r=e.item;return Object(n.jsxs)("button",{className:"btn btn-primary",onClick:Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fe()(t[r]);case 1:case"end":return e.stop()}}),e)}))),children:["Copy ",r]})},u=function(e){var t=e.record;return t.playerId?Object(n.jsx)(o,{record:t,item:"playerId"}):Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(o,{record:t,item:"emailOrNumber"})})},i=function(e){var t=e.record;return t.playerId?null:Object(n.jsx)(o,{record:t,item:"password"})};return Object(n.jsx)(Q.a,Object(K.a)(Object(K.a)({},e),{},{filters:Object(n.jsx)(t,{}),children:Object(n.jsxs)(W.a,{children:[Object(n.jsx)(X.a,{source:"id"}),Object(n.jsx)(u,{}),Object(n.jsx)(i,{}),Object(n.jsx)(X.a,{source:"status"}),Object(n.jsx)(X.a,{source:"orderedBy"}),Object(n.jsx)(X.a,{source:"name"}),Object(n.jsx)(X.a,{source:"price"}),Object(n.jsx)(X.a,{source:"accountPlatform"}),Object(n.jsx)(X.a,{source:"bkashNumber"}),Object(n.jsx)(c,{}),Object(n.jsx)(s,{})]})}))},Oe=r(527),ge=function(e){var t=function(e){return Object(n.jsx)(pe.a,Object(K.a)(Object(K.a)({},e),{},{children:Object(n.jsx)(le.a,{source:"q",alwaysOn:!0})}))},r=Object(he.a)(),a=Object(xe.a)(),c=function(e){var t=e.record;return t.isBlocked?Object(n.jsx)("button",{className:"btn btn-primary",onClick:Object(d.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.editUser({id:t.id,isBlocked:!1});case 2:n=e.sent,a(),console.log(n);case 5:case"end":return e.stop()}}),e)}))),children:"Unblock"}):null},s=function(e){var t=e.record;return t.isBlocked?null:Object(n.jsx)("button",{className:"btn btn-danger",onClick:Object(d.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.editUser({id:t.id,isBlocked:!0});case 2:n=e.sent,a(),console.log(n);case 5:case"end":return e.stop()}}),e)}))),children:"Block"})};return Object(n.jsx)(Q.a,Object(K.a)(Object(K.a)({},e),{},{filters:Object(n.jsx)(t,{}),children:Object(n.jsxs)(W.a,{children:[Object(n.jsx)(X.a,{source:"id"}),Object(n.jsx)(X.a,{source:"username"}),Object(n.jsx)(X.a,{source:"email"}),Object(n.jsx)(Oe.a,{source:"joinedAt"}),Object(n.jsx)(c,{}),Object(n.jsx)(s,{})]})}))},ve=new D("http://localhost:80/api");console.log(ve.getList());var ke=new V("http://localhost:80/api");var ye=function(){return Object(n.jsxs)(u.a,{dataProvider:ve,authProvider:ke,children:[Object(n.jsx)(i.a,{name:"Pending Orders",list:me,title:""}),Object(n.jsx)(i.a,{name:"All Orders",list:je,title:""}),Object(n.jsx)(i.a,{name:"users",list:ge,title:""}),Object(n.jsx)(i.a,{name:"games",list:$,create:ae,edit:se}),Object(n.jsx)(i.a,{name:"packages",list:oe,create:ue,edit:ie}),Object(n.jsx)(i.a,{name:"promos",list:oe,create:ue,edit:ie})]})},we=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,542)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;r(e),n(e),a(e),c(e),s(e)}))};o.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(ye,{})}),document.getElementById("root")),we()}},[[451,1,2]]]);
//# sourceMappingURL=main.21d5a2f8.chunk.js.map