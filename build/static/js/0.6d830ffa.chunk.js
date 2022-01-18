(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{129:function(e,a,t){"use strict";var c=function(){};e.exports=c},131:function(e,a,t){"use strict";var c=t(17),s=t(2),i=t(5),r=t(6),o=t.n(r),l=t(0),n=t(8),d=t(1),b=["as","bsPrefix","className"],f=["className"],j=["xxl","xl","lg","md","sm","xs"];var m=l.forwardRef((function(e,a){var t=function(e){var a=e.as,t=e.bsPrefix,c=e.className,r=Object(i.a)(e,b);t=Object(n.a)(t,"col");var l=[],d=[];return j.forEach((function(e){var a,c,s,i=r[e];delete r[e],"object"===typeof i&&null!=i?(a=i.span,c=i.offset,s=i.order):a=i;var o="xs"!==e?"-".concat(e):"";a&&l.push(!0===a?"".concat(t).concat(o):"".concat(t).concat(o,"-").concat(a)),null!=s&&d.push("order".concat(o,"-").concat(s)),null!=c&&d.push("offset".concat(o,"-").concat(c))})),[Object(s.a)(Object(s.a)({},r),{},{className:o.a.apply(void 0,[c].concat(l,d))}),{as:a,bsPrefix:t,spans:l}]}(e),r=Object(c.a)(t,2),l=r[0],m=l.className,O=Object(i.a)(l,f),v=r[1],u=v.as,p=void 0===u?"div":u,x=v.bsPrefix,N=v.spans;return Object(d.jsx)(p,Object(s.a)(Object(s.a)({},O),{},{ref:a,className:o()(m,!N.length&&x)}))}));m.displayName="Col",a.a=m},137:function(e,a,t){"use strict";var c=t(2),s=t(5),i=t(6),r=t.n(i),o=t(0),l=t(8),n=t(1),d=["bsPrefix","fluid","as","className"],b=o.forwardRef((function(e,a){var t=e.bsPrefix,i=e.fluid,o=e.as,b=void 0===o?"div":o,f=e.className,j=Object(s.a)(e,d),m=Object(l.a)(t,"container"),O="string"===typeof i?"-".concat(i):"-fluid";return Object(n.jsx)(b,Object(c.a)(Object(c.a)({ref:a},j),{},{className:r()(f,i?"".concat(m).concat(O):m)}))}));b.displayName="Container",b.defaultProps={fluid:!1},a.a=b},138:function(e,a,t){"use strict";var c=t(2),s=t(5),i=t(6),r=t.n(i),o=t(0),l=t(8),n=t(1),d=["bsPrefix","className","as"],b=["xxl","xl","lg","md","sm","xs"],f=o.forwardRef((function(e,a){var t=e.bsPrefix,i=e.className,o=e.as,f=void 0===o?"div":o,j=Object(s.a)(e,d),m=Object(l.a)(t,"row"),O="".concat(m,"-cols"),v=[];return b.forEach((function(e){var a,t=j[e];delete j[e],a=null!=t&&"object"===typeof t?t.cols:t;var c="xs"!==e?"-".concat(e):"";null!=a&&v.push("".concat(O).concat(c,"-").concat(a))})),Object(n.jsx)(f,Object(c.a)(Object(c.a)({ref:a},j),{},{className:r.a.apply(void 0,[i,m].concat(v))}))}));f.displayName="Row",a.a=f},139:function(e,a,t){"use strict";var c=t(2),s=t(17),i=t(5),r=t(6),o=t.n(r),l=t(0),n=t(42),d=t(8),b=t(1),f=["as","bsPrefix","variant","size","active","className"],j=l.forwardRef((function(e,a){var t=e.as,r=e.bsPrefix,l=e.variant,j=e.size,m=e.active,O=e.className,v=Object(i.a)(e,f),u=Object(d.a)(r,"btn"),p=Object(n.b)(Object(c.a)({tagName:t},v)),x=Object(s.a)(p,2),N=x[0],h=x[1].tagName;return Object(b.jsx)(h,Object(c.a)(Object(c.a)(Object(c.a)({},v),N),{},{ref:a,className:o()(O,u,m&&"active",l&&"".concat(u,"-").concat(l),j&&"".concat(u,"-").concat(j),v.href&&v.disabled&&"disabled")}))}));j.displayName="Button",j.defaultProps={variant:"primary",active:!1,disabled:!1},a.a=j},141:function(e,a,t){"use strict";var c=t(2),s=t(5),i=t(6),r=t.n(i),o=t(22),l=t.n(o),n=t(0),d=t(1),b=["as","className","type","tooltip"],f={type:l.a.string,tooltip:l.a.bool,as:l.a.elementType},j=n.forwardRef((function(e,a){var t=e.as,i=void 0===t?"div":t,o=e.className,l=e.type,n=void 0===l?"valid":l,f=e.tooltip,j=void 0!==f&&f,m=Object(s.a)(e,b);return Object(d.jsx)(i,Object(c.a)(Object(c.a)({},m),{},{ref:a,className:r()(o,"".concat(n,"-").concat(j?"tooltip":"feedback"))}))}));j.displayName="Feedback",j.propTypes=f;var m=j,O=n.createContext({}),v=t(8),u=["id","bsPrefix","className","type","isValid","isInvalid","as"],p=n.forwardRef((function(e,a){var t=e.id,i=e.bsPrefix,o=e.className,l=e.type,b=void 0===l?"checkbox":l,f=e.isValid,j=void 0!==f&&f,m=e.isInvalid,p=void 0!==m&&m,x=e.as,N=void 0===x?"input":x,h=Object(s.a)(e,u),y=Object(n.useContext)(O).controlId;return i=Object(v.a)(i,"form-check-input"),Object(d.jsx)(N,Object(c.a)(Object(c.a)({},h),{},{ref:a,type:b,id:t||y,className:r()(o,i,j&&"is-valid",p&&"is-invalid")}))}));p.displayName="FormCheckInput";var x=p,N=["bsPrefix","className","htmlFor"],h=n.forwardRef((function(e,a){var t=e.bsPrefix,i=e.className,o=e.htmlFor,l=Object(s.a)(e,N),b=Object(n.useContext)(O).controlId;return t=Object(v.a)(t,"form-check-label"),Object(d.jsx)("label",Object(c.a)(Object(c.a)({},l),{},{ref:a,htmlFor:o||b,className:r()(i,t)}))}));h.displayName="FormCheckLabel";var y=h;var P=["id","bsPrefix","bsSwitchPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","feedbackType","className","style","title","type","label","children","as"],w=n.forwardRef((function(e,a){var t=e.id,i=e.bsPrefix,o=e.bsSwitchPrefix,l=e.inline,b=void 0!==l&&l,f=e.disabled,j=void 0!==f&&f,u=e.isValid,p=void 0!==u&&u,N=e.isInvalid,h=void 0!==N&&N,w=e.feedbackTooltip,I=void 0!==w&&w,g=e.feedback,F=e.feedbackType,k=e.className,R=e.style,C=e.title,z=void 0===C?"":C,S=e.type,T=void 0===S?"checkbox":S,V=e.label,L=e.children,E=e.as,H=void 0===E?"input":E,G=Object(s.a)(e,P);i=Object(v.a)(i,"form-check"),o=Object(v.a)(o,"form-switch");var J=Object(n.useContext)(O).controlId,M=Object(n.useMemo)((function(){return{controlId:t||J}}),[J,t]),A=!L&&null!=V&&!1!==V||function(e,a){return n.Children.toArray(e).some((function(e){return n.isValidElement(e)&&e.type===a}))}(L,y),B=Object(d.jsx)(x,Object(c.a)(Object(c.a)({},G),{},{type:"switch"===T?"checkbox":T,ref:a,isValid:p,isInvalid:h,disabled:j,as:H}));return Object(d.jsx)(O.Provider,{value:M,children:Object(d.jsx)("div",{style:R,className:r()(k,A&&i,b&&"".concat(i,"-inline"),"switch"===T&&o),children:L||Object(d.jsxs)(d.Fragment,{children:[B,A&&Object(d.jsx)(y,{title:z,children:V}),g&&Object(d.jsx)(m,{type:F,tooltip:I,children:g})]})})})}));w.displayName="FormCheck";var I=Object.assign(w,{Input:x,Label:y}),g=t(3),F=(t(129),["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"]),k=n.forwardRef((function(e,a){var t,i,o=e.bsPrefix,l=e.type,b=e.size,f=e.htmlSize,j=e.id,m=e.className,u=e.isValid,p=void 0!==u&&u,x=e.isInvalid,N=void 0!==x&&x,h=e.plaintext,y=e.readOnly,P=e.as,w=void 0===P?"input":P,I=Object(s.a)(e,F),k=Object(n.useContext)(O).controlId;(o=Object(v.a)(o,"form-control"),h)?t=Object(g.a)({},"".concat(o,"-plaintext"),!0):(i={},Object(g.a)(i,o,!0),Object(g.a)(i,"".concat(o,"-").concat(b),b),t=i);return Object(d.jsx)(w,Object(c.a)(Object(c.a)({},I),{},{type:l,size:f,ref:a,readOnly:y,id:j||k,className:r()(m,t,p&&"is-valid",N&&"is-invalid","color"===l&&"".concat(o,"-color"))}))}));k.displayName="FormControl";var R=Object.assign(k,{Feedback:m}),C=t(30),z=Object(C.a)("form-floating"),S=["controlId","as"],T=n.forwardRef((function(e,a){var t=e.controlId,i=e.as,r=void 0===i?"div":i,o=Object(s.a)(e,S),l=Object(n.useMemo)((function(){return{controlId:t}}),[t]);return Object(d.jsx)(O.Provider,{value:l,children:Object(d.jsx)(r,Object(c.a)(Object(c.a)({},o),{},{ref:a}))})}));T.displayName="FormGroup";var V=T,L=t(131),E=["as","bsPrefix","column","visuallyHidden","className","htmlFor"],H=n.forwardRef((function(e,a){var t=e.as,i=void 0===t?"label":t,o=e.bsPrefix,l=e.column,b=e.visuallyHidden,f=e.className,j=e.htmlFor,m=Object(s.a)(e,E),u=Object(n.useContext)(O).controlId;o=Object(v.a)(o,"form-label");var p="col-form-label";"string"===typeof l&&(p="".concat(p," ").concat(p,"-").concat(l));var x=r()(f,o,b&&"visually-hidden",l&&p);return j=j||u,l?Object(d.jsx)(L.a,Object(c.a)({ref:a,as:"label",className:x,htmlFor:j},m)):Object(d.jsx)(i,Object(c.a)({ref:a,className:x,htmlFor:j},m))}));H.displayName="FormLabel",H.defaultProps={column:!1,visuallyHidden:!1};var G=H,J=["bsPrefix","className","id"],M=n.forwardRef((function(e,a){var t=e.bsPrefix,i=e.className,o=e.id,l=Object(s.a)(e,J),b=Object(n.useContext)(O).controlId;return t=Object(v.a)(t,"form-range"),Object(d.jsx)("input",Object(c.a)(Object(c.a)({},l),{},{type:"range",ref:a,className:r()(i,t),id:o||b}))}));M.displayName="FormRange";var A=M,B=["bsPrefix","size","htmlSize","className","isValid","isInvalid","id"],_=n.forwardRef((function(e,a){var t=e.bsPrefix,i=e.size,o=e.htmlSize,l=e.className,b=e.isValid,f=void 0!==b&&b,j=e.isInvalid,m=void 0!==j&&j,u=e.id,p=Object(s.a)(e,B),x=Object(n.useContext)(O).controlId;return t=Object(v.a)(t,"form-select"),Object(d.jsx)("select",Object(c.a)(Object(c.a)({},p),{},{size:o,ref:a,className:r()(l,t,i&&"".concat(t,"-").concat(i),f&&"is-valid",m&&"is-invalid"),id:u||x}))}));_.displayName="FormSelect";var q=_,D=["bsPrefix","className","as","muted"],K=n.forwardRef((function(e,a){var t=e.bsPrefix,i=e.className,o=e.as,l=void 0===o?"small":o,n=e.muted,b=Object(s.a)(e,D);return t=Object(v.a)(t,"form-text"),Object(d.jsx)(l,Object(c.a)(Object(c.a)({},b),{},{ref:a,className:r()(i,t,n&&"text-muted")}))}));K.displayName="FormText";var Q=K,U=n.forwardRef((function(e,a){return Object(d.jsx)(I,Object(c.a)(Object(c.a)({},e),{},{ref:a,type:"switch"}))}));U.displayName="Switch";var W=Object.assign(U,{Input:I.Input,Label:I.Label}),X=["bsPrefix","className","children","controlId","label"],Y=n.forwardRef((function(e,a){var t=e.bsPrefix,i=e.className,o=e.children,l=e.controlId,n=e.label,b=Object(s.a)(e,X);return t=Object(v.a)(t,"form-floating"),Object(d.jsxs)(V,Object(c.a)(Object(c.a)({ref:a,className:r()(i,t),controlId:l},b),{},{children:[o,Object(d.jsx)("label",{htmlFor:l,children:n})]}))}));Y.displayName="FloatingLabel";var Z=Y,$=["className","validated","as"],ee={_ref:l.a.any,validated:l.a.bool,as:l.a.elementType},ae=n.forwardRef((function(e,a){var t=e.className,i=e.validated,o=e.as,l=void 0===o?"form":o,n=Object(s.a)(e,$);return Object(d.jsx)(l,Object(c.a)(Object(c.a)({},n),{},{ref:a,className:r()(t,i&&"was-validated")}))}));ae.displayName="Form",ae.propTypes=ee;a.a=Object.assign(ae,{Group:V,Control:R,Floating:z,Check:I,Switch:W,Label:G,Text:Q,Range:A,Select:q,FloatingLabel:Z})}}]);
//# sourceMappingURL=0.6d830ffa.chunk.js.map