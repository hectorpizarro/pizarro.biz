(this.webpackJsonphectorpizarro=this.webpackJsonphectorpizarro||[]).push([[8],{106:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var a=n(82),r=n.n(a),c=n(83),s=n(10),o=n(96),l=n.n(o),i=n(16),u=n(5),m=function(){var e=Object(c.a)(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="./experience.json",e.prev=1,e.next=4,l.a.get(t);case 4:n=e.sent,Object(s.setExperiences)(n.data),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log("loadExperiences - error loading ".concat(t,":"),e.t0),Object(u.showToast)("Error loading experiences data, please reload.",!1);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.post(i.a,t);case 3:return Object(u.showToast)("Your message was delivered.",!0),e.abrupt("return",!0);case 7:return e.prev=7,e.t0=e.catch(0),console.log("sendMail error:",e.t0),Object(u.showToast)("There was an error sending your message, please try again.",!1),e.abrupt("return",!1);case 12:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},315:function(e,t,n){},331:function(e,t,n){},476:function(e,t,n){"use strict";n.r(t);var a=n(54),r=n(0),c=n.n(r),s=n(17),o=n(55),l=n(61),i=n(106),u=(n(313),n(314),n(315),n(316)),m=n.n(u),d=Object(s.b)((function(e){return{experiences:e.misc.experiences}}))((function(e){return c.a.createElement("ul",{className:"text-xs"},e.experiences&&e.experiences.map((function(t,n){return c.a.createElement("li",{key:n,className:"my-2"},c.a.createElement("button",{className:"w-full text-left p-2 border rounded border-gray-300 bg-white shadow-sm","data-id":n,onClick:e.goToSlide},c.a.createElement("div",{className:"flex justify-between"},c.a.createElement("div",null,c.a.createElement("span",{className:"text-sm font-bold"},t.company),t.contractorCompany&&c.a.createElement("span",null," (in ".concat(t.contractorCompany,")"))),c.a.createElement("div",null,"".concat(t.fromMonth," ").concat(t.fromYear,"/").concat(t.toMonth," ").concat(t.toYear))),c.a.createElement("div",{className:"role-and-country flex justify-between"},c.a.createElement("div",null,t.role),c.a.createElement("div",null,"".concat(t.isInsite?"Insite":"Remotely"," - ").concat(t.country)))))})))})),p=n(143),f=n(73),b={arrows:!1,dots:!0,infinite:!0,slidesToScroll:1,slidesToShow:1,speed:500},x=Object(s.b)((function(e){return{experiences:e.misc.experiences}}))((function(e){var t=null;return c.a.createElement("div",{className:"block sm:hidden -mt-4"},c.a.createElement(m.a,Object.assign({ref:function(e){return t=e}},b),c.a.createElement(d,{goToSlide:function(e){var n=f.a.getClickId(e);t.slickGoTo(Number(n)+1)}}),e.experiences.map((function(e,t){return c.a.createElement(p.a,{key:t,experience:e})}))))})),v=n(62),E=n(63),h=n(9),y=n(16),g=Object(s.b)((function(e){return{experiences:e.misc.experiences}}))((function(e){var t=function(e){var t=f.a.getClickId(e);Object(h.showModal)(y.c,"".concat(t))},n=function(e){return e.preventDefault(),e.stopPropagation(),!1};return c.a.createElement("div",{className:"hidden sm:block"},c.a.createElement("div",{className:"experience-desktop-grid text-xs screen730:text-sm lg:text-base"},e.experiences.map((function(e,a){return c.a.createElement("div",{key:a,className:"desktop-card shadow-lg","data-id":e.id,onClick:t},c.a.createElement("div",{className:"px-2 pt-2"},c.a.createElement("div",{className:"flex justify-between"},c.a.createElement("div",null,c.a.createElement("span",{className:"text-sm md:text-md lg:text-base font-bold"},e.company)),c.a.createElement("div",{className:"hidden screen960:block"},"".concat(e.isInsite?"Insite":"Remotely"," - ").concat(e.country)),c.a.createElement("div",{className:"block screen960:hidden"},e.country)),c.a.createElement("div",{className:"flex justify-between"},c.a.createElement("div",{className:"block screen960:hidden"}),c.a.createElement("div",{className:"hidden screen960:block text-sm"},e.contractorCompany&&c.a.createElement("span",null," (in ".concat(e.contractorCompany,")"))),c.a.createElement("div",{className:"text-sm"},"".concat(e.fromMonth," ").concat(e.fromYear,"/").concat(e.toMonth," ").concat(e.toYear)))),c.a.createElement("div",{className:"border-t border-gray-300 px-2 py-1 mt-1"},c.a.createElement(v.a,{icon:E.g,className:"text-1xl text-gray-500 mr-2"}),c.a.createElement("span",null,e.role)),c.a.createElement("div",{className:"row-description-short border-t border-gray-300 text-justify px-2 pt-1 pb-4"},e.descriptionShort),c.a.createElement("a",{href:"/#",onClick:n,className:"absolute right-0 bottom-0 mr-1 mb-1 text-xs text-red-500"},"more"))}))))}));n(331);function N(){var e=Object(a.a)(["\n  animation: 2s ",";\n"]);return N=function(){return e},e}function j(){var e=Object(a.a)(["",""]);return j=function(){return e},e}var w=Object(o.b)(j(),l.fadeIn),k=o.a.div(N(),w);t.default=Object(s.b)((function(e){return{experiences:e.misc.experiences}}))((function(e){return Object(r.useEffect)((function(){Object(i.a)()}),[]),e.experiences?c.a.createElement(k,null,c.a.createElement(x,null),c.a.createElement(g,null)):c.a.createElement("div",{className:"flex h-full w-full items-center justify-center"},c.a.createElement("p",{className:"text-gray-500"},"Loading experiences..."))}))}}]);
//# sourceMappingURL=8.b56837a2.chunk.js.map