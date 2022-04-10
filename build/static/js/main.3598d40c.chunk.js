(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[4],{10:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return j}));var c=n(13),r=n.n(c),a=n(29),u=n(23),i=n.n(u),o=n(9),s=Object(o.c)("contacts/fetchContacts",Object(a.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.get("/contacts");case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))),l=Object(o.c)("contacts/addContacts",function(){var e=Object(a.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.post("/contacts",t);case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}()),j=Object(o.c)("contacts/deleteContacts",function(){var e=Object(a.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.delete("/contacts/".concat(t));case 3:return e.abrupt("return",t);case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}())},126:function(e,t,n){},127:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(19),u=n.n(a),i=n(27),o=n(7),s=n(11),l=n(66),j=n.n(l),b=n(2),d=n(4),f={getIsLoggedIn:function(e){return e.auth.isLoggedIn},getUserName:function(e){return e.auth.user.name},getIsFetching:function(e){return e.auth.isFetching}},p=n(1),O=["component","redirectTo","children"];function h(e){e.component;var t=e.redirectTo,n=void 0===t?"/":t,c=e.children,r=Object(d.a)(e,O),a=Object(s.c)(f.getIsLoggedIn);return Object(p.jsx)(o.b,Object(b.a)(Object(b.a)({},r),{},{children:a?c:Object(p.jsx)(o.a,{to:n})}))}var g=["restricted","redirectTo","children"];function v(e){var t=e.restricted,n=void 0!==t&&t,c=e.redirectTo,r=void 0===c?"/":c,a=e.children,u=Object(d.a)(e,g),i=Object(s.c)(f.getIsLoggedIn)&&n;return Object(p.jsx)(o.b,Object(b.a)(Object(b.a)({},u),{},{children:i?Object(p.jsx)(o.a,{to:r}):a}))}var x=n(129),m=n(130),k=n(22),y=n.n(k),w=function(){var e=Object(s.c)(f.getIsLoggedIn);return Object(p.jsx)(x.a,{children:Object(p.jsxs)(m.a,{children:[Object(p.jsx)(i.b,{exact:!0,to:"/",className:y.a.link,activeClassName:y.a.activeLink,children:"Main page"}),e&&Object(p.jsx)(i.b,{to:"/contacts",className:y.a.link,activeClassName:y.a.activeLink,children:"Contacts"})]})})};function I(){return Object(p.jsx)(x.a,{children:Object(p.jsxs)(m.a,{children:[Object(p.jsx)(i.b,{to:"/register",className:y.a.link,activeClassName:y.a.activeLink,children:"Registration"}),Object(p.jsx)(i.b,{to:"/login",className:y.a.link,activeClassName:y.a.activeLink,children:"Login"})]})})}var L=n(25);function _(){var e=Object(s.b)(),t=Object(s.c)(f.getUserName);return Object(p.jsxs)(x.a,{children:[Object(p.jsxs)("p",{className:"greetings",children:["Welcome, ",t," "]}),Object(p.jsx)("button",{className:"btn-logout",type:"button",onClick:function(){return e(Object(L.c)())},children:"Exit"})]})}function F(){var e=Object(s.c)(f.getIsLoggedIn);return Object(p.jsxs)(x.a,{children:[Object(p.jsx)(w,{}),e?Object(p.jsx)(_,{}):Object(p.jsx)(I,{})]})}var N=Object(c.lazy)((function(){return n.e(2).then(n.bind(null,138))})),C=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,139))})),A=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,143))})),B=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(8),n.e(1)]).then(n.bind(null,146))}));function T(){var e=Object(s.b)(),t=Object(s.c)(f.getIsFetching);return Object(c.useEffect)((function(){e(Object(L.a)())}),[e]),t?null:Object(p.jsxs)("div",{children:[Object(p.jsx)(F,{}),Object(p.jsx)(c.Suspense,{fallback:Object(p.jsx)(j.a,{type:"Rings",color:"#00BFFF",height:80,width:80,timeout:3e3,display:"flex","justify-content":"center",className:y.a.loader}),children:Object(p.jsxs)(o.d,{children:[Object(p.jsx)(v,{exact:!0,path:"/",children:Object(p.jsx)(N,{})}),Object(p.jsx)(v,{exact:!0,path:"/register",redirectTo:"/contacts",restricted:!0,children:Object(p.jsx)(A,{})}),Object(p.jsx)(v,{exact:!0,path:"/login",redirectTo:"/contacts",restricted:!0,children:Object(p.jsx)(C,{})}),Object(p.jsx)(h,{path:"/contacts",redirectTo:"/login",children:Object(p.jsx)(B,{})})]})})]})}var z,W,V,R,S=n(69),E=n(9),P=n(30),U=n(70),J=n.n(U),M=n(3),X=n(49),K=n(12),q=n(64),D=n(10),G=Object(E.d)([],(z={},Object(M.a)(z,D.c.fulfilled,(function(e,t){return t.payload.data})),Object(M.a)(z,D.a.fulfilled,(function(e,t){return[t.payload.data].concat(Object(X.a)(e))})),Object(M.a)(z,D.b.fulfilled,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),z)),H=Object(E.d)(!1,(W={},Object(M.a)(W,D.c.pending,(function(){return!0})),Object(M.a)(W,D.c.fulfilled,(function(){return!1})),Object(M.a)(W,D.c.rejected,(function(){return!1})),Object(M.a)(W,D.b.fulfilled,(function(){return!1})),Object(M.a)(W,D.b.pending,(function(){return!0})),Object(M.a)(W,D.b.rejected,(function(){return!1})),Object(M.a)(W,D.a.fulfilled,(function(){return!1})),Object(M.a)(W,D.a.pending,(function(){return!0})),Object(M.a)(W,D.a.rejected,(function(){return!1})),W)),Q=Object(E.d)(null,(V={},Object(M.a)(V,D.c.rejected,(function(e,t){return t.payload})),Object(M.a)(V,D.c.pending,(function(){return null})),Object(M.a)(V,D.a.pending,(function(){return null})),Object(M.a)(V,D.a.rejected,(function(e,t){return t.payload})),Object(M.a)(V,D.b.pending,(function(){return null})),Object(M.a)(V,D.b.rejected,(function(e,t){return t.payload})),V)),Y=Object(E.d)("",Object(M.a)({},q.a,(function(e,t){return t.payload}))),Z=Object(K.b)({entities:G,isLoading:H,error:Q,filter:Y}),$=Object(E.e)({name:"auth",initialState:{user:{name:null,email:null},token:null,isLoggedIn:!1,isFetching:!1},extraReducers:(R={},Object(M.a)(R,L.d.fulfilled,(function(e,t){var n=t.payload;e.user=n.user,e.token=n.token,e.isLoggedIn=!0})),Object(M.a)(R,L.b.fulfilled,(function(e,t){var n=t.payload;e.user=n.user,e.token=n.token,e.isLoggedIn=!0})),Object(M.a)(R,L.c.fulfilled,(function(e,t){e.user={name:null,email:null},e.token=null,e.isLoggedIn=!1})),Object(M.a)(R,L.a.pending,(function(e){e.isFetching=!0})),Object(M.a)(R,L.a.fulfilled,(function(e,t){var n=t.payload;e.user=n,e.isLoggedIn=!0,e.isFetching=!1})),Object(M.a)(R,L.a.rejected,(function(e){e.isFetching=!1})),R)}).reducer,ee={key:"auth",storage:J.a,whitelist:["token"]},te=Object(E.a)({reducer:{auth:Object(P.g)(ee,$),phonebook:Z},devTools:!1,middleware:function(e){return e({serializableCheck:{ignoredActions:[P.a,P.f,P.b,P.c,P.d,P.e]}})}}),ne=Object(P.h)(te);n(125),n(126);u.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(s.a,{store:te,children:Object(p.jsx)(S.a,{loading:null,persistor:ne,children:Object(p.jsx)(i.a,{children:Object(p.jsx)(T,{})})})})}),document.getElementById("root"))},22:function(e,t,n){e.exports={nav:"AppBar_nav__Kwi-w",link:"AppBar_link__2cIXF",activeLink:"AppBar_activeLink__36Odk AppBar_link__2cIXF",loader:"AppBar_loader__2bedc"}},25:function(e,t,n){"use strict";n.d(t,"d",(function(){return j})),n.d(t,"b",(function(){return b})),n.d(t,"c",(function(){return d})),n.d(t,"a",(function(){return f}));var c=n(13),r=n.n(c),a=n(29),u=n(23),i=n.n(u),o=n(9);i.a.defaults.baseURL="https://connections-api.herokuapp.com";var s=function(e){i.a.defaults.headers.common.Authorization="Bearer ".concat(e)},l=function(){i.a.defaults.headers.common.Authorization=""},j=Object(o.c)("auth/register",function(){var e=Object(a.a)(r.a.mark((function e(t,n){var c,a,u;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n.rejectWithValue,e.prev=1,e.next=4,i.a.post("/users/signup",t);case 4:return a=e.sent,u=a.data,s(u.token),e.abrupt("return",u);case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",c(e.t0.data));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,n){return e.apply(this,arguments)}}()),b=Object(o.c)("auth/login",function(){var e=Object(a.a)(r.a.mark((function e(t,n){var c,a,u;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n.rejectWithValue,e.prev=1,e.next=4,i.a.post("/users/login",t);case 4:return a=e.sent,u=a.data,s(u.token),e.abrupt("return",u);case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",c(e.t0.data));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,n){return e.apply(this,arguments)}}()),d=Object(o.c)("auth/logout",function(){var e=Object(a.a)(r.a.mark((function e(t,n){var c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n.rejectWithValue,e.prev=1,e.next=4,i.a.post("/users/logout");case 4:l(),e.next=10;break;case 7:return e.prev=7,e.t0=e.catch(1),e.abrupt("return",c(e.t0.data));case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,n){return e.apply(this,arguments)}}()),f=Object(o.c)("auth/refresh",function(){var e=Object(a.a)(r.a.mark((function e(t,n){var c,a,u,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=n.getState(),null!==(a=c.auth.token)){e.next=4;break}return e.abrupt("return",n.rejectWithValue());case 4:return s(a),e.prev=5,e.next=8,i.a.get("/users/current");case 8:return u=e.sent,o=u.data,e.abrupt("return",o);case 13:return e.prev=13,e.t0=e.catch(5),e.abrupt("return",n.rejectWithValue(e.t0.data));case 16:case"end":return e.stop()}}),e,null,[[5,13]])})));return function(t,n){return e.apply(this,arguments)}}())},64:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var c=n(9),r=Object(c.b)("contacts/changeFilter")}},[[127,6,7]]]);
//# sourceMappingURL=main.3598d40c.chunk.js.map