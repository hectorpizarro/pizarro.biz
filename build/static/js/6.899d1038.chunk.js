(this.webpackJsonphectorpizarro=this.webpackJsonphectorpizarro||[]).push([[6],{102:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(21);t.a=r.a.memo((function(){return r.a.createElement("div",{className:"flex h-screen w-full items-center justify-center"},r.a.createElement(l.a,{className:"text-gray-500 h-16 w-16"}))}))},143:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(62),c=a(63);t.a=r.a.memo((function(e){return r.a.createElement("div",{className:"border rounded bg-white text-xs sm:text-base"},r.a.createElement("div",{className:"border-b border-gray-200 px-4 py-2 sm:py-4"},r.a.createElement("div",{className:"flex items-center justify-between"},r.a.createElement("div",{className:"flex items-center"},r.a.createElement("div",{className:"font-bold text-xs sm:text-xl"},e.experience.company),e.experience.contractorCompany&&r.a.createElement("span",{className:"ml-1"},"(in ",e.experience.contractorCompany,")")),r.a.createElement("div",{className:"flex items-center"},r.a.createElement("span",{className:"text-xs hidden sm:block"},e.experience.isInsite?"Insite":"Remotely"),r.a.createElement("span",{className:"mx-2 hidden sm:block"},"-"),r.a.createElement("span",null,e.experience.country))),r.a.createElement("div",{className:"flex items-center justify-between"},r.a.createElement("div",null,r.a.createElement(l.a,{icon:c.g,className:"text-1xl text-gray-500 mr-2"}),r.a.createElement("span",null,e.experience.role)),r.a.createElement("div",null,r.a.createElement("span",{className:"text-xs mr-3 hidden sm:inline"},"(",e.experience.timeDescription,")"),r.a.createElement("span",null,"".concat(e.experience.fromMonth," ").concat(e.experience.fromYear," - ").concat(e.experience.toMonth," ").concat(e.experience.toYear))))),r.a.createElement("div",{className:"border-b border-gray-200 px-4 pt-2 sm:pt-4 pb-0 sm:pb-2"},e.experience.description.map((function(e,t){return r.a.createElement("p",{key:t,className:"pb-2 text-justify"},e)}))),r.a.createElement("div",{className:"experience-tech-grid px-4 py-2 sm:py-4"},e.experience.tech_dev&&r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{icon:c.e,className:"text-1xl mr-2 mt-1 text-gray-700"}),r.a.createElement("div",{className:"font-bold text-gray-700 text-right hidden sm:block"},"Dev:"),r.a.createElement("div",null,e.experience.tech_dev)),e.experience.tech_build&&r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{icon:c.d,className:"text-1xl mr-2 mt-1 text-gray-700"}),r.a.createElement("div",{className:"font-bold text-gray-700 text-right hidden sm:block"},"Build:"),r.a.createElement("div",null,e.experience.tech_build)),e.experience.tech_test&&r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{icon:c.b,className:"text-1xl mr-2 mt-1 text-gray-700"}),r.a.createElement("div",{className:"font-bold text-gray-700 text-right hidden sm:block"},"Test:"),r.a.createElement("div",null,e.experience.tech_test))))}))},293:function(e,t,a){e.exports=a.p+"static/media/photo_small.10dbf592.jpg"},310:function(e,t,a){},475:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(17),c=a(105),o=a(470),i=a(96),s=a.n(i),m=a(16),u=a(9),d=a(127),f=a(72),b=a(102),p=a(54),x=a(55),E=a(61),h=a(62),g=a(63),v=a(293),N=a.n(v),y=a(73);function w(){var e=Object(p.a)(["\n  animation: "," ",";\n"]);return w=function(){return e},e}function k(){var e=Object(p.a)(["",""]);return k=function(){return e},e}var j=Object(x.b)(k(),E.slideInLeft),I=x.a.section(w(),(function(e){return e.isLeft?"2s":"0s"}),j),O=Object(l.b)((function(e){return{isInitRoute:e.misc.initRoute}}))(Object(d.g)((function(e){var t=function(t){e.isLeft||Object(u.hideModal)()},a=e.isLeft?{section:"hidden sm:flex flex-col justify-center items-center bg-gray-900 text-gray-400 overflow-auto fixed top-0 h-full sm:w-24 md:w-32 lg:w-40 sm:text-xs md:text-sm lg:text-base",figure:"w-20 md:w-24 lg:32 mb-8",figCaption:"text-white text-center mt-2 whitespace-no-wrap",li:"border-8 border-gray-900"}:{section:"flex flex-col justify-center items-center bg-gray-100 text-gray-500 text-sm",figure:"w-16 mb-4",figCaption:"hidden",li:"border-8 border-gray-100"},n=function(t){if(e.isInitRoute){var a=y.a.pages.find((function(e){return e.id===t}));e.history.push(a.route)}};return r.a.createElement(I,{isLeft:e.isLeft,className:a.section},r.a.createElement("figure",{className:a.figure},r.a.createElement("img",{src:N.a,alt:"Hector Pizarro",className:"border-4 border-gray-600 rounded-full"}),r.a.createElement("figcaption",{className:a.figCaption},"Hector Pizarro")),r.a.createElement("nav",{className:"container"},r.a.createElement("ul",{className:"list-none"},y.a.pages.map((function(l){return r.a.createElement("li",{key:l.id,className:a.li},r.a.createElement(f.Link,{className:"navButton ".concat(e.isLeft?"navButtonLeft":"navButtonMobile"),activeClass:"active",to:l.id,spy:!0,onSetActive:n,duration:1e3,smooth:"easeInOutQuad",onClick:t},l.label))}))),r.a.createElement("div",{className:"text-center mt-10"},r.a.createElement("a",{href:"".concat("","/hector-pizarro-resume.pdf"),download:!0,className:"border rounded px-1 py-1 bg-gray-200 hover:bg-white text-gray-700 hover:text-black transition-colors transition-500"},r.a.createElement(h.a,{icon:g.c,className:"text-1xl mr-2"}),r.a.createElement("span",{className:"text-sm"},"Resume")))))}))),C=a(140),z=a.n(C),R=function(){return r.a.createElement("div",{className:"py-2 px-2"},r.a.createElement("nav",{className:"container"},r.a.createElement("ul",{className:"list-none"},r.a.createElement(O,{isLeft:!1,closeModal:u.hideModal}))))},L=a(143);z.a.setAppElement("#root");var M=function(e){e.stopPropagation(),Object(u.hideModal)()},S=Object(l.b)((function(e){return{modalId:e.modal.modalId,modalData:e.modal.modalData,experiences:e.misc.experiences}}))((function(e){Object(n.useEffect)((function(){var t=function(t){e.modalId&&27===t.keyCode&&Object(u.hideModal)()};return document.addEventListener("keydown",t),function(){return document.removeEventListener("keydown",t)}}),[e.modalId]);var t=e.modalId!==m.d;return r.a.createElement(z.a,{isOpen:null!==e.modalId,onRequestClose:M,contentLabel:"Modal",overlayClassName:"mobile-menu-overlay inset-0 fixed flex items-center justify-center",className:"mobile-menu-content absolute outline-none rounded shadow-lg overflow-y-auto ".concat(t?"md:max-w-lg mx-auto w-10/12":"top-0 right-0"," ").concat(e.modalId===m.d?"bg-gray-100":"bg-white"),closeTimeoutMS:m.b},function(){switch(e.modalId){case m.d:return r.a.createElement(R,null);case m.c:var t=e.experiences.find((function(t){return t.id===e.modalData}));return r.a.createElement(L.a,{experience:t});default:return null}}(e.modalId,e.modalData))}));function F(){var e=Object(p.a)(["\n  right: 1.25rem;\n  top: 1.25rem;\n"]);return F=function(){return e},e}z.a.setAppElement("#root");var _=x.a.button(F()),B=function(){return Object(u.showModal)(m.d)},P=r.a.memo((function(){return r.a.createElement(_,{className:"menu-button fixed p-0 m-0 block sm:hidden border border-gray-400 bg-gray-100 rounded-full px-2 shadow-lg",onClick:B,"aria-label":"Mobile Menu Button"},r.a.createElement(h.a,{icon:g.a,className:"text-1xl"}))})),D=a(10),A=(a(310),a(5)),T=Object(l.b)((function(e){return{message:e.toast.message,isSuccess:e.toast.isSuccess,fade:e.toast.fade}}))((function(e){return""===e.message?null:r.a.createElement("div",{className:"toast pointer-events-none fixed z-10 w-full text-right font-bold ".concat(e.fade?"fadeMe":"")},r.a.createElement("button",{className:"inline-flex pointer-events-auto items-center justify-center close cursor-pointer px-4 py-2 text-white ".concat(e.isSuccess?"bg-blue-500":"bg-red-500"),title:"close",onClick:A.fadeToast},e.message))})),H=a(311);function U(){var e=Object(p.a)(["\n  animation: 2s ",";\n"]);return U=function(){return e},e}function q(){var e=Object(p.a)(["",""]);return q=function(){return e},e}var J=Object(x.b)(q(),E.slideInUp),Q=x.a.footer(U(),J),Y=r.a.memo((function(){return r.a.createElement(Q,{className:"flex items-center justify-between h-20 bg-gray-900 px-5"},r.a.createElement("div",null,r.a.createElement("span",{className:"footerButton"},r.a.createElement(h.a,{icon:g.f,className:"text-3xl mr-2 hidden sm:inline"}),r.a.createElement("span",null,"hpizarro@gmail.com"))),r.a.createElement("div",{className:"text-3xl whitespace-no-wrap"},r.a.createElement("a",{href:"https://github.com/hectorpizarro",target:"_blank",rel:"noopener noreferrer",className:"footerButton ml-4","aria-label":"Github"},r.a.createElement(h.a,{icon:H.b})),r.a.createElement("a",{href:"https://www.linkedin.com/in/hectorpizarro/",target:"_blank",rel:"noopener noreferrer",className:"footerButton ml-4","aria-label":"Linkedin"},r.a.createElement(h.a,{icon:H.d})),r.a.createElement("a",{href:"https://www.instagram.com/hectorpizarrom/",target:"_blank",rel:"noopener noreferrer",className:"footerButton ml-4","aria-label":"Instagram"},r.a.createElement(h.a,{icon:H.c})),r.a.createElement("a",{href:"https://www.facebook.com/hectorpizarrom",target:"_blank",rel:"noopener noreferrer",className:"footerButton ml-4","aria-label":"Facebook"},r.a.createElement(h.a,{icon:H.a}))))}));function G(){var e=Object(p.a)(["\n  animation: 2s ",";\n"]);return G=function(){return e},e}function W(){var e=Object(p.a)(["",""]);return W=function(){return e},e}var $=Object(x.b)(W(),E.fadeIn),K=x.a.section(G(),$),V=function(e){var t=null;switch(e.name){case m.e:t=r.a.lazy((function(){return a.e(11).then(a.bind(null,473))}));break;case m.i:t=r.a.lazy((function(){return a.e(7).then(a.bind(null,474))}));break;case m.f:t=r.a.lazy((function(){return Promise.all([a.e(2),a.e(9)]).then(a.bind(null,477))}));break;default:return null}return r.a.createElement(f.Element,{name:e.name,className:"flex flex-col h-screen w-full ".concat(e.className)},r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(b.a,null)},r.a.createElement(K,{className:"py-4 px-4 sm:px-8 h-full"},e.title&&r.a.createElement("div",{className:"mb-4"},r.a.createElement("h1",{className:"font-bold sm:text-2xl"},e.title)),r.a.createElement(t,null)),e.withFooter&&r.a.createElement(Y,null)))};V.defaultProps={className:"",withFooter:!1};var X=r.a.memo(V),Z=y.a.pages.map((function(e){return e.route})),ee=r.a.lazy((function(){return a.e(10).then(a.bind(null,478))})),te=r.a.lazy((function(){return Promise.all([a.e(5),a.e(8)]).then(a.bind(null,476))})),ae=Object(l.b)((function(e){return{isInitRoute:e.misc.initRoute}}))(Object(d.g)(r.a.memo((function(e){return Object(n.useEffect)((function(){var t=y.a.getIdFromRoute(e.location.pathname);t&&y.a.setScroll(t,0),Object(D.setFlagInitRoute)()}),[]),r.a.createElement("div",{className:"flex h-screen antialiased text-base"},r.a.createElement(r.a.Suspense,null,r.a.createElement(O,{isLeft:!0})),r.a.createElement("main",{className:"inline-block w-full h-full sm:ml-24 md:ml-32 lg:ml-40"},r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(f.Element,{name:m.h,className:"flex flex-col h-screen w-full"},r.a.createElement(b.a,null))},r.a.createElement(ee,null)),r.a.createElement(X,{name:m.e,title:"About"}),r.a.createElement(X,{name:m.i,title:"Skills",className:"bg-gray-100"}),r.a.createElement(f.Element,{name:m.g,className:"flex flex-col h-screen w-full backgroundPattern01"},r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(b.a,null)},r.a.createElement("section",{className:"py-4 px-4 sm:px-8 h-full"},r.a.createElement("div",{className:"mb-4"},r.a.createElement("h1",{className:"font-bold sm:text-2xl"},"Experience")),r.a.createElement(te,null)))),r.a.createElement(X,{name:m.f,title:"Contact",withFooter:!0})),r.a.createElement(r.a.Suspense,null,r.a.createElement(T,null),r.a.createElement(S,null),r.a.createElement(P,null)),r.a.createElement(d.d,null,r.a.createElement(d.a,{exact:!0,from:"/",to:"/home"}),Z.map((function(e,t){return r.a.createElement(d.b,{key:t,path:e,children:function(){return null}})}))))}))));s.a.defaults.transformRequest=function(e){return e?Object.keys(e).map((function(t){return"".concat(encodeURIComponent(t),"=").concat(encodeURIComponent(e[t]))})).join("&"):[]},s.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded";t.default=Object(l.b)((function(e){return{modalId:e.modal.modalId}}))(r.a.memo((function(e){return r.a.createElement(c.a,null,r.a.createElement(o.a,{handleWidth:!0,handleHeight:!0,onResize:function(t,a){e.modalId===m.d&&Object(u.hideModal)()}}),r.a.createElement(ae,null))})))},73:function(e,t,a){"use strict";var n=a(72),r=a(16),l=[{id:r.h,route:"/home",label:"Home"},{id:r.e,route:"/about",label:"About"},{id:r.i,route:"/skills",label:"Skills"},{id:r.g,route:"/experience",label:"Experience"},{id:r.f,route:"/contact",label:"Contact"}],c={pages:l,getClickId:function(e){return e&&(e.preventDefault(),e.stopPropagation()),t=e.currentTarget.getAttribute("data-id"),/^\d+$/.test(t)?Number(t):t;var t},setScroll:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;n.scroller.scrollTo(e,{duration:t,smooth:"easeInOutQuad"})},getIdFromRoute:function(e){var t=l.find((function(t){return t.route===e}));return t?t.id:null},getRouteFromId:function(e){var t=l.find((function(t){return t.id===e}));return t?t.route:null}};t.a=c}}]);
//# sourceMappingURL=6.899d1038.chunk.js.map