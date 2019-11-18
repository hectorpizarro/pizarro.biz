(this.webpackJsonphectorpizarro=this.webpackJsonphectorpizarro||[]).push([[9],{106:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return u}));var a=r(82),n=r.n(a),o=r(83),s=r(10),c=r(96),i=r.n(c),l=r(16),m=r(5),d=function(){var e=Object(o.a)(n.a.mark((function e(){var t,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="./experience.json",e.prev=1,e.next=4,i.a.get(t);case 4:r=e.sent,Object(s.setExperiences)(r.data),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log("loadExperiences - error loading ".concat(t,":"),e.t0),Object(m.showToast)("Error loading experiences data, please reload.",!1);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=Object(o.a)(n.a.mark((function e(t){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.post(l.b,t);case 3:return Object(m.showToast)("Your message was delivered.",!0),e.abrupt("return",!0);case 7:return e.prev=7,e.t0=e.catch(0),console.log("sendMail error:",e.t0),Object(m.showToast)("There was an error sending your message, please try again.",!1),e.abrupt("return",!1);case 12:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},468:function(e,t,r){},477:function(e,t,r){"use strict";r.r(t);var a=r(2),n=r(82),o=r.n(n),s=r(83),c=r(0),i=r.n(c),l=r(335),m=r(469),d=r(18),u=function(e){return i.a.createElement("button",{type:e.type,disabled:e.disabled,className:function(){var t=["py-2 border rounded px-8"];return e.inverse?(t.push("bg-white"),e.disabled?t.push("text-gray-300 border-gray-300 cursor-default"):t.push("text-gray-700 border-gray-500 hover:text-gray-900 hover:border-gray-900 transition-colors transition-500")):(t.push("text-white"),e.disabled?t.push("border-gray-300 bg-gray-300 cursor-default"):t.push("border-transparent bg-gray-900 hover:text-gray-900 hover:border-gray-900 hover:bg-white transition-colors transition-500")),t.join(" ")}()},e.disabled?i.a.createElement(d.a,{forButton:!0}):e.label)};u.defaultProps={type:"button",disabled:!1,inverse:!1,onSubmit:function(){}};var b=i.a.memo(u),p=(r(468),r(106)),g=r(16);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(r,!0).forEach((function(t){Object(a.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var y=Object(l.object)().shape({name:Object(l.string)().min(3,"Too Short!").max(100,"Too Long!").required("Required"),email:Object(l.string)().email("Invalid email").required("Required"),message:Object(l.string)().min(3,"Too Short!").max(1024,"Too Long!").required("Required")}),x=function(){var e=Object(s.a)(o.a.mark((function e(t,r){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.b)(t);case 2:e.sent?r.resetForm():r.setSubmitting(!1);case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),v=function(e){var t=e.errors,r=(e.status,e.touched),a=e.isSubmitting;return i.a.createElement(m.c,{className:"container-grid w-full pt-10 sm:px-5 md:px-10"},i.a.createElement("label",{htmlFor:"name",className:"label label-name ".concat(t.name&&r.name?"text-red-500":"")},"Name *:"),i.a.createElement(m.b,{type:"text",name:"name",id:"name",className:"field-name p-2 rounded border self-stretch ".concat(t.name&&r.name?"border-red-500":"border-gray-500"," ").concat(a?"bg-gray-100 text-gray-500":""),disabled:a}),i.a.createElement(m.a,{name:"name",component:"div",className:"error-name font-bold text-xs text-red-500 leading-none"}),i.a.createElement("label",{htmlFor:"email",className:"label label-email ".concat(t.email&&r.email?"text-red-500":"")},"Email *:"),i.a.createElement(m.b,{type:"email",name:"email",id:"email",className:"field-email p-2 rounded border self-stretch ".concat(t.email&&r.email?"border-red-500":"border-gray-500"," ").concat(a?"bg-gray-100 text-gray-500":""),disabled:a}),i.a.createElement(m.a,{name:"email",component:"div",className:"error-email font-bold text-xs text-red-500 leading-none"}),i.a.createElement("label",{htmlFor:"message",className:"label label-message ".concat(t.message&&r.message?"text-red-500":"")},"Message *:"),i.a.createElement(m.b,{component:"textarea",name:"message",id:"message",className:"field-message p-2 rounded border self-stretch ".concat(t.message&&r.message?"border-red-500":"border-gray-500"," ").concat(a?"bg-gray-100 text-gray-500":""),disabled:a}),i.a.createElement(m.a,{name:"message",component:"div",className:"error-message font-bold text-xs text-red-500 leading-none"}),i.a.createElement("div",{className:"buttonbar"},i.a.createElement(b,{type:"reset",inverse:!0,disabled:a,label:"Reset"}),i.a.createElement(b,{type:"submit",disabled:a,label:"Submit"})))};t.default=i.a.memo((function(){return i.a.createElement("div",null,i.a.createElement("p",null,"Let's work together! You can always reach me at my mail or sending me a message here:"),i.a.createElement(m.d,{initialValues:h({},g.a),validationSchema:y,onSubmit:x},v))}))}}]);
//# sourceMappingURL=9.01b5d1ec.chunk.js.map