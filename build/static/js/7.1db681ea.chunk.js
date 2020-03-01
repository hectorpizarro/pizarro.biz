/*! For license information please see 7.1db681ea.chunk.js.LICENSE.txt */
(this.webpackJsonphectorpizarro=this.webpackJsonphectorpizarro||[]).push([[7],{120:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(s){a=!0,o=s}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.d(t,"a",(function(){return r}))},277:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(278),a=r.__importStar(n(0)),o=function(e){function t(t){var n=e.call(this,t)||this;return n.outerRef=null,n.handleRef=function(e){if(n.outerRef=e,n.props.forwardedRef)if("function"===typeof n.props.forwardedRef)n.props.forwardedRef(e);else{if("object"!==typeof n.props.forwardedRef)throw new Error("Invalid forwardedRef "+n.props.forwardedRef);n.props.forwardedRef.current=e}},n.handleTransitionEnd=function(e){e.target===n.outerRef&&"height"===e.propertyName&&(n.state.childrenLeaving?n.setState({children:null,childrenLeaving:!1},(function(){return n.endTransition()})):n.endTransition())},n.state={children:t.children,childrenLeaving:!1},n}return r.__extends(t,e),t.prototype.componentDidMount=function(){this.outerRef&&(this.props.closed||!this.props.children?(this.outerRef.classList.add("closed"),this.outerRef.style.height="0px"):this.props.transitionOnAppear?this.startTransition("0px"):this.outerRef.style.height="auto")},t.prototype.getSnapshotBeforeUpdate=function(){return this.outerRef?this.outerRef.getBoundingClientRect().height+"px":null},t.getDerivedStateFromProps=function(e,t){return e.children?{children:e.children,childrenLeaving:!1}:t.children?{children:t.children,childrenLeaving:!0}:null},t.prototype.componentDidUpdate=function(e,t,n){this.outerRef&&this.startTransition(n)},t.prototype.startTransition=function(e){var t="0px";this.props.closed||this.state.childrenLeaving||!this.state.children||(this.outerRef.classList.remove("closed"),this.outerRef.style.height="auto",t=getComputedStyle(this.outerRef).height),parseFloat(t).toFixed(2)!==parseFloat(e).toFixed(2)&&(this.outerRef.classList.add("transitioning"),this.outerRef.style.height=e,this.outerRef.offsetHeight,this.outerRef.style.transitionProperty="height",this.outerRef.style.height=t)},t.prototype.endTransition=function(){this.outerRef.classList.remove("transitioning"),this.outerRef.style.transitionProperty="none",this.outerRef.style.height=this.props.closed?"0px":"auto",!this.props.closed&&this.state.children||this.outerRef.classList.add("closed")},t.prototype.render=function(){var e=this.props,t=e.as,n=void 0===t?"div":t,o=(e.children,e.className),i=(e.closed,e.transitionOnAppear,e.forwardedRef,r.__rest(e,["as","children","className","closed","transitionOnAppear","forwardedRef"])),l=o?"react-slidedown "+o:"react-slidedown";return a.default.createElement(n,r.__assign({ref:this.handleRef,className:l,onTransitionEnd:this.handleTransitionEnd},i),this.state.children)},t.defaultProps={transitionOnAppear:!0,closed:!1},t}(a.Component);t.SlideDown=a.forwardRef((function(e,t){return a.default.createElement(o,r.__assign({},e,{forwardedRef:t}))})),t.default=t.SlideDown},278:function(e,t,n){"use strict";n.r(t),n.d(t,"__extends",(function(){return a})),n.d(t,"__assign",(function(){return o})),n.d(t,"__rest",(function(){return i})),n.d(t,"__decorate",(function(){return l})),n.d(t,"__param",(function(){return s})),n.d(t,"__metadata",(function(){return c})),n.d(t,"__awaiter",(function(){return u})),n.d(t,"__generator",(function(){return f})),n.d(t,"__exportStar",(function(){return d})),n.d(t,"__values",(function(){return p})),n.d(t,"__read",(function(){return m})),n.d(t,"__spread",(function(){return h})),n.d(t,"__spreadArrays",(function(){return y})),n.d(t,"__await",(function(){return b})),n.d(t,"__asyncGenerator",(function(){return v})),n.d(t,"__asyncDelegator",(function(){return g})),n.d(t,"__asyncValues",(function(){return w})),n.d(t,"__makeTemplateObject",(function(){return E})),n.d(t,"__importStar",(function(){return _})),n.d(t,"__importDefault",(function(){return S})),n.d(t,"__classPrivateFieldGet",(function(){return R})),n.d(t,"__classPrivateFieldSet",(function(){return x}));var r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};function a(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var o=function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};function i(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}function l(e,t,n,r){var a,o=arguments.length,i=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(i=(o<3?a(i):o>3?a(t,n,i):a(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i}function s(e,t){return function(n,r){t(n,r,e)}}function c(e,t){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(e,t)}function u(e,t,n,r){return new(n||(n=Promise))((function(a,o){function i(e){try{s(r.next(e))}catch(t){o(t)}}function l(e){try{s(r.throw(e))}catch(t){o(t)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}s((r=r.apply(e,t||[])).next())}))}function f(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=(a=i.trys).length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(l){o=[6,l],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}}function d(e,t){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}function p(e){var t="function"===typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"===typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function m(e,t){var n="function"===typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,a,o=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)i.push(r.value)}catch(l){a={error:l}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(a)throw a.error}}return i}function h(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(m(arguments[t]));return e}function y(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),a=0;for(t=0;t<n;t++)for(var o=arguments[t],i=0,l=o.length;i<l;i++,a++)r[a]=o[i];return r}function b(e){return this instanceof b?(this.v=e,this):new b(e)}function v(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,a=n.apply(e,t||[]),o=[];return r={},i("next"),i("throw"),i("return"),r[Symbol.asyncIterator]=function(){return this},r;function i(e){a[e]&&(r[e]=function(t){return new Promise((function(n,r){o.push([e,t,n,r])>1||l(e,t)}))})}function l(e,t){try{(n=a[e](t)).value instanceof b?Promise.resolve(n.value.v).then(s,c):u(o[0][2],n)}catch(r){u(o[0][3],r)}var n}function s(e){l("next",e)}function c(e){l("throw",e)}function u(e,t){e(t),o.shift(),o.length&&l(o[0][0],o[0][1])}}function g(e){var t,n;return t={},r("next"),r("throw",(function(e){throw e})),r("return"),t[Symbol.iterator]=function(){return this},t;function r(r,a){t[r]=e[r]?function(t){return(n=!n)?{value:b(e[r](t)),done:"return"===r}:a?a(t):t}:a}}function w(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e=p(e),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=e[n]&&function(t){return new Promise((function(r,a){(function(e,t,n,r){Promise.resolve(r).then((function(t){e({value:t,done:n})}),t)})(r,a,(t=e[n](t)).done,t.value)}))}}}function E(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}function _(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function S(e){return e&&e.__esModule?e:{default:e}}function R(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)}function x(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,n),n}},279:function(e,t,n){},293:function(e,t,n){"use strict";n.r(t);var r=n(120),a=n(0),o=n.n(a),i=n(277),l=n(85),s=(n(279),n(13));t.default=o.a.memo((function(){var e=Object(a.useState)({advanced:!1,intermediate:!0,novice:!0}),t=Object(r.a)(e,2),n=t[0],c=t[1],u=function(e){var t=l.a.getClickId(e),n={};s.m.forEach((function(e){n[e]=t!==e})),c(n)};return o.a.createElement("div",{className:"text-xs sm:text-sm md:text-base"},o.a.createElement("button",{className:"font-bold border border-gray-500 bg-gray-300 text-left w-full p-2 hover:border-gray-800 hover:bg-white transition-colors transition-500 cursor-pointer","data-id":"advanced",onClick:u},"Advanced"),o.a.createElement(i.SlideDown,{className:"skills-slidedown border-l border-r border-b border-gray-400 p-2 bg-white",closed:n.advanced},o.a.createElement("p",null,"Technologies I used for most of my projects, usually requiring compilation, installation, configuration and management:"),o.a.createElement("ul",{className:"ml-6 list-outside list-disc"},o.a.createElement("li",null,o.a.createElement("span",{className:"font-semibold"},"SPA web development:"),o.a.createElement("ul",{className:"ml-2 list-outside"},o.a.createElement("li",null,o.a.createElement("span",{className:"italic underline mr-2"},"Javascript:"),o.a.createElement("span",null,"JavaScript ES6, AngularJS, React, Redux, styled components.")),o.a.createElement("li",null,o.a.createElement("span",{className:"italic underline mr-2"},"Build:"),o.a.createElement("span",null,"Gulp, Browserify, Webpack, npm, Chrome extension API, git, storybook.")),o.a.createElement("li",null,o.a.createElement("span",{className:"italic underline mr-2"},"Services:"),o.a.createElement("span",null,"Github, Jira, Sentry, Full Story, circleCI.")),o.a.createElement("li",null,o.a.createElement("span",{className:"italic underline mr-2"},"Libraries:"),o.a.createElement("span",null,"Axios, Lodash, JQuery, bootstrap, Mapbox, Masonry, Moment, Google maps.")),o.a.createElement("li",null,o.a.createElement("span",{className:"italic underline mr-2"},"Test:"),o.a.createElement("span",null,"Jest, Jazmine.")))),o.a.createElement("li",null,o.a.createElement("span",{className:"font-semibold mr-2"},"Linux distributions:"),o.a.createElement("span",null,"Red Hat Enterprise Linux 4/5, Debian, Ubuntu, Gentoo, Open SuSE, Fedora, CentOS, Linux Mint. Used linux as workstation for 5 years.")),o.a.createElement("li",null,o.a.createElement("span",{className:"font-semibold mr-2"},"Linux services:"),o.a.createElement("span",null,"Apache web server, MySQL database server, PostgreSQL database server, nginx, redis, mongoDB.")),o.a.createElement("li",null,o.a.createElement("span",{className:"font-semibold mr-2"},"Backend Development languages:"),o.a.createElement("ul",{className:"ml-2 list-outside"},o.a.createElement("li",null,o.a.createElement("span",{className:"italic underline mr-2"},"PHP:"),o.a.createElement("span",null,"OOP PHP, Symfony, CodeIgniter, Zend Framework, CakePHP.")),o.a.createElement("li",null,o.a.createElement("span",{className:"italic underline mr-2"},"Perl:"),o.a.createElement("span",null,"Scripting, mod_perl, Mason framework.")))),o.a.createElement("li",null,o.a.createElement("span",{className:"font-semibold mr-2"},"Web technologies:"),o.a.createElement("span",null,"HTML5, CSS3.")))),o.a.createElement("div",{className:"font-bold border border-gray-500 bg-gray-300 text-left w-full p-2 hover:border-gray-800 hover:bg-white transition-colors transition-500 cursor-pointer","data-id":"intermediate",onClick:u},"Intermediate"),o.a.createElement(i.SlideDown,{className:"skills-slidedown border-l border-r border-b border-gray-400 p-2 bg-white",closed:n.intermediate},o.a.createElement("p",null,"Technologies I have used on multiple projects through the years, but I don't have in-depth experience. As an example I have known Java for 10+ years now but never was part of a complex project, only simple sites or specific applications."),o.a.createElement("ul",{className:"ml-6 list-outside list-disc"},o.a.createElement("li",null,o.a.createElement("span",{className:"font-semibold mr-2"},"Development Languages:"),o.a.createElement("span",null,"PHP Doctrine ORM, Bash scripting, Regular Expressions, WordPress plugin development using custom React libraries.")),o.a.createElement("li",null,o.a.createElement("span",{className:"font-semibold mr-2"},"Services:"),o.a.createElement("span",null,"Perforce, Open Social, Facebook PHP API, FBML (Facebook Markup Language), Google apps API, Jenkins.")))),o.a.createElement("div",{className:"font-bold border border-gray-500 bg-gray-300 text-left w-full p-2 hover:border-gray-800 hover:bg-white transition-colors transition-500 cursor-pointer","data-id":"novice",onClick:u},"Novice"),o.a.createElement(i.SlideDown,{className:"skills-slidedown border-l border-r border-b border-gray-400 p-2 bg-white",closed:n.novice},o.a.createElement("p",null,"Technologies used for a single specific project or for research purposes in behalf of clients. Also includes languages that I'm not interested to delve into. Some are deprecated."),o.a.createElement("ul",{className:"ml-6 list-outside list-disc"},o.a.createElement("li",null,o.a.createElement("span",{className:"font-semibold mr-2"},"Development languages:"),o.a.createElement("span",null,"Java (JSP, servlets, javabeans), coffeescript, Applescript, Ruby, ActionScript, Objective C, C.")),o.a.createElement("li",null,o.a.createElement("span",{className:"font-semibold mr-2"},"Build:"),o.a.createElement("span",null,"CVS, SVN, Backbone, Prototype.")),o.a.createElement("li",null,o.a.createElement("span",{className:"font-semibold mr-2"},"Services:"),o.a.createElement("span",null,"Hudson CI, Apache Ant, Bugzilla, Atlassian Crucible, Novel Netware 4.")))))}))}}]);
//# sourceMappingURL=7.1db681ea.chunk.js.map