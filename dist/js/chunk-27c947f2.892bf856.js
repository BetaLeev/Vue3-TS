(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-27c947f2"],{"10f1":function(t,e,n){"use strict";n.r(e);var r=n("7a23");const o=Object(r["H"])("data-v-ae0928d2");Object(r["u"])("data-v-ae0928d2");const c={class:"plate"},u=Object(r["h"])("h3",{class:"title"},"模拟实现call",-1),i={class:"plate-container"},a={class:"plate-"},f={class:"plate"},s=Object(r["h"])("h3",{class:"title"},"模拟实现apply",-1),l={class:"plate-container"},p=Object(r["h"])("div",{class:"plate"},[Object(r["h"])("h3",{class:"title"},"模拟实现bind"),Object(r["h"])("div",{class:"plate-container"})],-1);Object(r["r"])();const b=o((t,e,n,o,b,h)=>(Object(r["q"])(),Object(r["e"])("div",null,[Object(r["h"])("div",c,[u,Object(r["h"])("div",i,[Object(r["h"])("p",null,Object(r["B"])(t.user.name),1),Object(r["h"])("p",null,Object(r["B"])(t.user.age),1),Object(r["h"])("p",null,Object(r["B"])(t.user.sex),1)]),Object(r["h"])("div",a,[Object(r["h"])("p",null,Object(r["B"])(t.userB.name),1),Object(r["h"])("p",null,Object(r["B"])(t.userB.age),1),Object(r["h"])("p",null,Object(r["B"])(t.userB.sex),1)])]),Object(r["h"])("div",f,[s,Object(r["h"])("div",l,[Object(r["h"])("button",{onClick:e[1]||(e[1]=(...e)=>t.changeObject&&t.changeObject(...e))},"change")])]),p])));var h=n("9ab4"),y=n("ce1f"),d=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.user={name:"leev",age:88,sex:["a","b","c"]},e.userB=Object.assign({},e.user),e}return Object(h["c"])(e,t),e.prototype.changeObject=function(){this.user.age+=1;var t=Math.random();this.user.sex.push(t)},e=Object(h["b"])([Object(y["a"])({components:{}})],e),e}(y["b"]),O=d;n("f733");O.render=b,O.__scopeId="data-v-ae0928d2";e["default"]=O},"385e":function(t,e,n){},"9ab4":function(t,e,n){"use strict";n.d(e,"c",(function(){return o})),n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return u})),n.d(e,"d",(function(){return i})),n.d(e,"e",(function(){return a}));
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},r(t,e)};function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}function c(t,e,n,r){var o,c=arguments.length,u=c<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)u=Reflect.decorate(t,e,n,r);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(u=(c<3?o(u):c>3?o(e,n,u):o(e,n))||u);return c>3&&u&&Object.defineProperty(e,n,u),u}function u(t,e,n,r){function o(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,c){function u(t){try{a(r.next(t))}catch(e){c(e)}}function i(t){try{a(r["throw"](t))}catch(e){c(e)}}function a(t){t.done?n(t.value):o(t.value).then(u,i)}a((r=r.apply(t,e||[])).next())}))}function i(t,e){var n,r,o,c,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return c={next:i(0),throw:i(1),return:i(2)},"function"===typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c;function i(t){return function(e){return a([t,e])}}function a(c){if(n)throw new TypeError("Generator is already executing.");while(u)try{if(n=1,r&&(o=2&c[0]?r["return"]:c[0]?r["throw"]||((o=r["return"])&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return u.label++,{value:c[1],done:!1};case 5:u.label++,r=c[1],c=[0];continue;case 7:c=u.ops.pop(),u.trys.pop();continue;default:if(o=u.trys,!(o=o.length>0&&o[o.length-1])&&(6===c[0]||2===c[0])){u=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){u.label=c[1];break}if(6===c[0]&&u.label<o[1]){u.label=o[1],o=c;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(c);break}o[2]&&u.ops.pop(),u.trys.pop();continue}c=e.call(t,u)}catch(i){c=[6,i],r=0}finally{n=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}Object.create;function a(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),o=0;for(e=0;e<n;e++)for(var c=arguments[e],u=0,i=c.length;u<i;u++,o++)r[o]=c[u];return r}Object.create},ce1f:function(t,e,n){"use strict";n.d(e,"a",(function(){return B})),n.d(e,"b",(function(){return S})),n.d(e,"c",(function(){return R}));var r=n("7a23");
/**
  * vue-class-component v8.0.0-rc.1
  * (c) 2015-present Evan You
  * @license MIT
  */function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function u(t,e,n){return e&&c(t.prototype,e),n&&c(t,n),t}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}function l(t){return l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},l(t)}function p(t,e){return p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},p(t,e)}function b(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function h(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function y(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?h(t):e}function d(t){var e=b();return function(){var n,r=l(t);if(e){var o=l(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return y(this,n)}}function O(t){return v(t)||j(t)||_(t)||m()}function v(t){if(Array.isArray(t))return g(t)}function j(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function _(t,e){if(t){if("string"===typeof t)return g(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?g(t,e):void 0}}function g(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function m(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function w(t,e,n){Object.defineProperty(t,e,{get:n,enumerable:!1,configurable:!0})}function P(t,e,n){Object.defineProperty(t,e,{get:function(){return n[e].value},set:function(t){n[e].value=t},enumerable:!0,configurable:!0})}function k(t){var e=Object.getPrototypeOf(t.prototype);if(e)return e.constructor}function x(t,e){return t.hasOwnProperty(e)?t[e]:void 0}var E=function(){function t(e,n){var r=this;o(this,t),w(this,"$props",(function(){return e})),w(this,"$attrs",(function(){return n.attrs})),w(this,"$slots",(function(){return n.slots})),w(this,"$emit",(function(){return n.emit})),Object.keys(e).forEach((function(t){Object.defineProperty(r,t,{enumerable:!1,configurable:!0,writable:!0,value:e[t]})}))}return u(t,null,[{key:"registerHooks",value:function(t){var e;(e=this.__h).push.apply(e,O(t))}},{key:"with",value:function(t){var e=new t,n={};Object.keys(e).forEach((function(t){var r=e[t];n[t]=null!==r&&void 0!==r?r:null}));var r=function(t){s(n,t);var e=d(n);function n(){return o(this,n),e.apply(this,arguments)}return n}(this);return r.__b={props:n},r}},{key:"__vccOpts",get:function(){if(this===S)return{};var t=this,e=x(t,"__c");if(e)return e;var n=f({},x(t,"__o"));t.__c=n;var o=k(t);o&&(n["extends"]=o.__vccOpts);var c=x(t,"__b");c&&(n.mixins=n.mixins||[],n.mixins.unshift(c)),n.methods=f({},n.methods),n.computed=f({},n.computed);var u=t.prototype;Object.getOwnPropertyNames(u).forEach((function(e){if("constructor"!==e)if(t.__h.indexOf(e)>-1)n[e]=u[e];else{var r=Object.getOwnPropertyDescriptor(u,e);"function"!==typeof r.value?(r.get||r.set)&&(n.computed[e]={get:r.get,set:r.set}):n.methods[e]=r.value}})),n.setup=function(e,n){var o,c=new t(e,n),u=Object.keys(c),i={},a=null;return u.forEach((function(t){void 0===c[t]||c[t]&&c[t].__s||(i[t]=Object(r["w"])(c[t]),P(c,t,i))})),u.forEach((function(t){if(c[t]&&c[t].__s){var e=c[t].__s();e instanceof Promise?(a||(a=Promise.resolve(i)),a=a.then((function(){return e.then((function(e){return i[t]=Object(r["t"])(e),i}))}))):i[t]=Object(r["t"])(e)}})),null!==(o=a)&&void 0!==o?o:i};var i=x(t,"__d");i&&i.forEach((function(t){return t(n)}));var a=["render","ssrRender","__file","__cssModules","__scopeId","__hmrId"];return a.forEach((function(e){t[e]&&(n[e]=t[e])})),n}}]),t}();E.__h=["data","beforeCreate","created","beforeMount","mounted","beforeUnmount","unmounted","beforeUpdate","updated","activated","deactivated","render","errorCaptured","serverPrefetch"];var S=E;function B(t){return function(e){return e.__o=t,e}}function R(t){return function(e,n,r){var o="function"===typeof e?e:e.constructor;o.__d||(o.__d=[]),"number"!==typeof r&&(r=void 0),o.__d.push((function(e){return t(e,n,r)}))}}},f733:function(t,e,n){"use strict";n("385e")}}]);
//# sourceMappingURL=chunk-27c947f2.892bf856.js.map