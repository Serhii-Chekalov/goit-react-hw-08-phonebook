(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[1],{132:function(n,e){},142:function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return M}));var r,c,a,o,i,b,u,l=t(0),s=t(12),d=t(132),j=t(127),p=t(128),f=p.a.ul(r||(r=Object(j.a)(["\n  margin-left: 70px;\n"]))),x=p.a.li(c||(c=Object(j.a)(["\n  margin-top: 10px;\n  font-size: 16px;\n"]))),O=p.a.button(a||(a=Object(j.a)(["\n  padding: 3px 6px;\n  margin-left: 10px;\n  font-size: 12px;\n  background-color: #fff;\n  border: 1px solid grey;\n  border-radius: 5px;\n  &:hover {\n    cursor: pointer;\n    background-color: blue;\n    border-color: blue;\n  }\n"]))),m=t(39),h=function(n){return n.contacts.items},g=function(n){return n.contacts.filter},v=function(n){var e=function(n){return n.contacts.filter}(n),t=function(n){return n.contacts.items}(n);return""===e?t:t!==[]?t.filter((function(n){return n.name.toLowerCase().includes(e)})):void 0},k=t(1),y=function(){var n=Object(s.b)(),e=Object(s.c)(v);return Object(k.jsx)("div",{children:Object(k.jsx)(f,{children:e.map((function(e){var t=e.id,r=e.name,c=e.number;return Object(k.jsxs)(x,{children:[r," - ",c,Object(k.jsx)(O,{type:"button",onClick:function(){return n(Object(m.c)(t))},children:"Delete"})]},t)}))})})},w=t(17),C=t(134),z=p.a.form(o||(o=Object(j.a)(["\n  display: inline-flex;\n  flex-direction: column;\n  margin-left: 70px;\n  padding: 10px 200px 10px 10px;\n  border: 2px solid black;\n"]))),A=p.a.label(i||(i=Object(j.a)(["\n  font-size: 16px;\n  font-weight: 600;\n"]))),F=p.a.input(b||(b=Object(j.a)(["\n  padding: 3px;\n  margin-top: 5px;\n  margin-bottom: 15px;\n  &:hover {\n    border-color: blue;\n  }\n"]))),J=p.a.button(u||(u=Object(j.a)(["\n  width: fit-content;\n  padding: 4px;\n  margin-top: 8px;\n  font-size: 14px;\n  border: 1px solid grey;\n  border-radius: 5px;\n  background-color: #fff;\n  &:hover {\n    cursor: pointer;\n    background-color: blue;\n    border-color: blue;\n  }\n"])));var S,Z,q,D=function(){var n=Object(l.useState)(""),e=Object(w.a)(n,2),t=e[0],r=e[1],c=Object(l.useState)(""),a=Object(w.a)(c,2),o=a[0],i=a[1],b=Object(s.c)(h),u=Object(s.b)(),d=function(n){switch(n.target.name){case"name":r(n.target.value);break;case"number":i(n.target.value);break;default:return}},j=function(){var n={name:t,number:o};b.some((function(e){return e.name===n.name}))?function(n){Object(C.b)("".concat(n," is already in contacts"))}(n.name):u(Object(m.a)(n))};return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)(z,{action:"",onSubmit:function(n){n.preventDefault(),j(),r(""),i("")},children:[Object(k.jsx)(A,{htmlFor:"name",children:"Name"}),Object(k.jsx)(F,{onChange:d,type:"text",name:"name",value:t,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0}),Object(k.jsx)(A,{htmlFor:"number",children:"Number"}),Object(k.jsx)(F,{onChange:d,type:"tel",name:"number",value:o,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0}),Object(k.jsx)(J,{type:"submit",children:"Add contact"})]}),Object(k.jsx)(C.a,{position:"top-center",toastOptions:{duration:3e3,style:{background:"#f8cd98",color:"#000"}}})]})},L=p.a.div(S||(S=Object(j.a)(["\n  display: inline-flex;\n  flex-direction: column;\n  margin-left: 70px;\n"]))),N=p.a.input(Z||(Z=Object(j.a)(["\n  padding: 3px;\n  margin-top: 5px;\n  &:hover {\n    border-color: blue;\n  }\n"]))),B=p.a.label(q||(q=Object(j.a)(["\n  font-weight: 500;\n"]))),E=function(){var n=Object(s.c)(g),e=Object(s.b)();return Object(k.jsxs)(L,{children:[Object(k.jsx)(B,{htmlFor:"filter",children:"Find contacts by name"}),Object(k.jsx)(N,{type:"text",name:"filter",value:n,onChange:function(n){return e(Object(m.b)(n.target.value.toLowerCase()))}})]})};function M(n){var e=Object(s.b)();return Object(l.useEffect)((function(){return e(Object(d.fetchContactsAction)())}),[e]),Object(k.jsxs)("div",{children:[Object(k.jsx)(D,{}),Object(k.jsx)(E,{}),Object(k.jsx)(y,{})]})}}}]);
//# sourceMappingURL=contacts-page.195d4ffd.chunk.js.map