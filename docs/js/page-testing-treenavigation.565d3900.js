(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-testing-treenavigation"],{"12d3":function(e,t,n){!function(t,n){e.exports=n()}(window,(function(){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=16)}([function(e,t,n){"use strict";function i(e,t,n,i,r,a,o,s){var u,l="function"==typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=n,l._compiled=!0),i&&(l.functional=!0),a&&(l._scopeId="data-v-"+a),o?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},l._ssrRegister=u):r&&(u=s?function(){r.call(this,this.$root.$options.shadowRoot)}:r),u)if(l.functional){l._injectStyles=u;var c=l.render;l.render=function(e,t){return u.call(t),c(e,t)}}else{var f=l.beforeCreate;l.beforeCreate=f?[].concat(f,u):[u]}return{exports:e,options:l}}n.d(t,"a",(function(){return i}))},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"==typeof btoa){var r=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(i),a=i.sources.map((function(e){return"/*# sourceURL="+i.sourceRoot+e+" */"}));return[n].concat(a).concat([r]).join("\n")}return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},r=0;r<this.length;r++){var a=this[r][0];"number"==typeof a&&(i[a]=!0)}for(r=0;r<e.length;r++){var o=e[r];"number"==typeof o[0]&&i[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),t.push(o))}},t}},function(e,t,n){"use strict";function i(e,t){for(var n=[],i={},r=0;r<t.length;r++){var a=t[r],o=a[0],s={id:e+":"+r,css:a[1],media:a[2],sourceMap:a[3]};i[o]?i[o].parts.push(s):n.push(i[o]={id:o,parts:[s]})}return n}n.r(t),n.d(t,"default",(function(){return v}));var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var a={},o=r&&(document.head||document.getElementsByTagName("head")[0]),s=null,u=0,l=!1,c=function(){},f=null,d="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function v(e,t,n,r){l=n,f=r||{};var o=i(e,t);return h(o),function(t){for(var n=[],r=0;r<o.length;r++){var s=o[r];(u=a[s.id]).refs--,n.push(u)}for(t?h(o=i(e,t)):o=[],r=0;r<n.length;r++){var u;if(0===(u=n[r]).refs){for(var l=0;l<u.parts.length;l++)u.parts[l]();delete a[u.id]}}}}function h(e){for(var t=0;t<e.length;t++){var n=e[t],i=a[n.id];if(i){i.refs++;for(var r=0;r<i.parts.length;r++)i.parts[r](n.parts[r]);for(;r<n.parts.length;r++)i.parts.push(g(n.parts[r]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{var o=[];for(r=0;r<n.parts.length;r++)o.push(g(n.parts[r]));a[n.id]={id:n.id,refs:1,parts:o}}}}function m(){var e=document.createElement("style");return e.type="text/css",o.appendChild(e),e}function g(e){var t,n,i=document.querySelector("style["+d+'~="'+e.id+'"]');if(i){if(l)return c;i.parentNode.removeChild(i)}if(p){var r=u++;i=s||(s=m()),t=y.bind(null,i,r,!1),n=y.bind(null,i,r,!0)}else i=m(),t=function(e,t){var n=t.css,i=t.media,r=t.sourceMap;if(i&&e.setAttribute("media",i),f.ssrId&&e.setAttribute(d,t.id),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,i),n=function(){i.parentNode.removeChild(i)};return t(e),function(i){if(i){if(i.css===e.css&&i.media===e.media&&i.sourceMap===e.sourceMap)return;t(e=i)}else n()}}var _=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}();function y(e,t,n,i){var r=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=_(t,r);else{var a=document.createTextNode(r),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(a,o[t]):e.appendChild(a)}}},function(e,t,n){"use strict";n.r(t);var i=n(4),r=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t.default=r.a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(n(20)),r=a(n(15));function a(e){return e&&e.__esModule?e:{default:e}}t.default={data:function(){return{isOpen:null}},props:{parentItem:{type:Object,required:!0},level:{type:Number,required:!0},defaultOpenLevel:{type:Number,required:!0}},computed:{classes:function(){return function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({"NavigationLevel--closed":!this.isOpen},"NavigationLevel--level-"+this.level,!0)}},methods:{onToggleClick:function(){this.isOpen=!this.isOpen},onItemClick:function(){!1===this.isOpen&&(this.isOpen=!0)},renderLevelAsOpen:function(){if(this.defaultOpenLevel>=this.level)return!0;var e=void 0;if(e=void 0!==this.$router?this.$route.path+this.$route.hash:window.location.pathname+window.location.hash,""!==this.parentItem.meta.target&&e.includes(this.parentItem.meta.target))return!0;for(var t=0;t<this.parentItem.children.length;t++){var n=this.parentItem.children[t];if(""!==n.meta.target&&e.includes(n.meta.target))return!0}return!1}},components:{NavigationItem:r.default,NavigationToggle:i.default},mounted:function(){this.isOpen=this.renderLevelAsOpen()}}},function(e,t,n){"use strict";n.r(t);var i=n(6),r=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t.default=r.a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{open:{type:Boolean,required:!1,default:!1}}}},function(e,t,n){var i=n(22);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals),(0,n(2).default)("24af1295",i,!0,{})},function(e,t,n){"use strict";n.r(t);var i=n(9),r=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t.default=r.a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{active:!1}},props:{item:Object,required:!0},methods:{isActive:function(){return""!==this.item.meta.target&&(this.$route?(this.$route.path+this.$route.hash).endsWith(this.item.meta.target)||(this.$route.path+this.$route.hash).endsWith(this.item.meta.target+"/"):window.location.href.endsWith(this.item.meta.target)||window.location.href.endsWith(this.item.meta.target+"/"))}},computed:{showLabel:function(){return void 0===this.item.path&&void 0===this.item.element&&void 0===this.item.external},showRouterLink:function(){return this.showLink&&void 0!==this.$router},showHyperLink:function(){return this.showLink&&void 0===this.$router},showExternalHyperLink:function(){return void 0!==this.item.external},showLink:function(){return void 0!==this.item.path||void 0!==this.item.element},classes:function(){return{"NavigationItem--active":this.active}}},watch:{item:function(){this.active=this.isActive()},$route:function(){this.active=this.isActive()}},mounted:function(){var e=this;this.active=this.isActive(),this.$router||window.addEventListener("hashchange",(function(){e.active=e.isActive()}))}}},function(e,t,n){var i=n(24);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals),(0,n(2).default)("7ceaf854",i,!0,{})},function(e,t,n){var i=n(26);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals),(0,n(2).default)("ea5435ce",i,!0,{})},function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"NavigationLevel",class:e.classes},[n("div",{staticClass:"NavigationLevel__parent"},[n("NavigationToggle",{attrs:{open:e.isOpen},nativeOn:{click:function(t){return e.onToggleClick(t)}}}),e._v(" "),n("NavigationItem",{attrs:{item:e.parentItem},nativeOn:{click:function(t){return e.onItemClick(t)}}})],1),e._v(" "),n("ul",{staticClass:"NavigationLevel__children"},[e._t("default")],2)])},r=[];n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return r}))},function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"NavigationItem",class:e.classes},[e.showLabel?n("span",{staticClass:"NavigationItem__label"},[e._v(e._s(e.item.name))]):e._e(),e._v(" "),e.showRouterLink?n("router-link",{staticClass:"NavigationItem__router-link",attrs:{to:e.item.meta.target}},[e._v(e._s(e.item.name))]):e._e(),e._v(" "),e.showHyperLink?n("a",{staticClass:"NavigationItem__link",attrs:{href:e.item.meta.target}},[e._v(e._s(e.item.name))]):e._e(),e._v(" "),e.showExternalHyperLink?n("a",{staticClass:"NavigationItem__external-link",attrs:{href:e.item.meta.target,target:"_blank"}},[e._v(e._s(e.item.name))]):e._e()],1)},r=[];n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return r}))},function(e,t,n){"use strict";var i=function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"NavigationToggle",class:{"NavigationToggle--closed":!this.open}},[t("span",{staticClass:"NavigationToggle__icon",class:{"NavigationToggle__icon--closed":!this.open}})])},r=[];n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return r}))},function(e,t,n){"use strict";n.r(t);var i=n(13),r=n(8);for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);n(23);var o=n(0),s=Object(o.a)(r.default,i.a,i.b,!1,null,null,null);s.options.__file="NavigationItem.vue",t.default=s.exports},function(e,t,n){"use strict";var i=function(e){return e&&e.__esModule?e:{default:e}}(n(17));e.exports={install:function(e,t){e.component("vue-tree-navigation",i.default)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(18);n(28);var r={props:{items:{type:Array,required:!1,default:function(){return[]}},defaultOpenLevel:{type:Number,default:0}},computed:{navItems:function(){return this.items&&this.items.length?this.items:this.$router&&this.$router.options&&this.$router.options.routes&&this.$router.options.routes.length?this.$router.options.routes:(console.warn("[VueTreeNavigation]: Haven't you forget to provide items or define vue-router routes?"),[])},navItemsWithMetadata:function(){var e=JSON.parse(JSON.stringify(this.navItems));return(0,i.insertMetadataToNavItems)(e)}},render:function(e){return e("div",{class:"TreeNavigation"},[e("div",{class:["NavigationLevel","NavigationLevel--level-0"]},[e("ul",(0,i.generateLevel)(e,this.navItemsWithMetadata,1,this.defaultOpenLevel))])])}};t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getItemMetadata=t.insertMetadataToNavItems=t.generateLevel=void 0;var i=o(n(19)),r=o(n(15)),a=n(27);function o(e){return e&&e.__esModule?e:{default:e}}t.generateLevel=function e(t,n,a,o){var s=[];return n.forEach((function(n){if(n.hasOwnProperty("children")){var u=t(i.default,{props:{parentItem:n,level:a,defaultOpenLevel:o}},[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(e(t,n.children,a+1,o))));s.push(t("li",[u]))}else{var l=t(r.default,{props:{item:n}});s.push(t("li",[l]))}})),s},t.insertMetadataToNavItems=function e(t,n){return t.forEach((function(t){t.meta=s(t,n),t.hasOwnProperty("children")&&(t.children=e(t.children,t))})),t};var s=t.getItemMetadata=function(e,t){var n=(0,a.sanitizeElement)(e.element),i=(0,a.sanitizePath)(e.path),r=e.external;if(void 0===t){if(void 0===n&&void 0===i&&void 0===r)return{path:"",target:""};if(void 0!==r)return{path:"",target:r};if(void 0!==i)return{path:i,target:i};if(void 0!==n)return{path:"",target:"/"+n}}var o=(0,a.sanitizePath)(t.meta.path);return void 0!==r?{path:o,target:r}:void 0!==i?{path:o+i,target:o+i}:void 0!==n?{path:o,target:(0,a.sanitizePath)(o+n)}:{path:o,target:""}}},function(e,t,n){"use strict";n.r(t);var i=n(12),r=n(3);for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);n(25);var o=n(0),s=Object(o.a)(r.default,i.a,i.b,!1,null,null,null);s.options.__file="NavigationLevel.vue",t.default=s.exports},function(e,t,n){"use strict";n.r(t);var i=n(14),r=n(5);for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);n(21);var o=n(0),s=Object(o.a)(r.default,i.a,i.b,!1,null,null,null);s.options.__file="NavigationToggle.vue",t.default=s.exports},function(e,t,n){"use strict";var i=n(7);n.n(i).a},function(e,t,n){(e.exports=n(1)(!1)).push([e.i,"\n.NavigationToggle{position:relative;top:-3px;padding:5px 5px 5px 3px;cursor:pointer\n}\n.NavigationToggle__icon{display:inline-block;padding:3px;border:solid #000;border-width:0 2px 2px 0;transform:rotate(45deg)\n}\n.NavigationToggle__icon--closed{transform:rotate(-45deg)\n}\n",""])},function(e,t,n){"use strict";var i=n(10);n.n(i).a},function(e,t,n){(e.exports=n(1)(!1)).push([e.i,"\n.NavigationItem{display:inline-block;padding-top:5px;padding-bottom:5px\n}\n.NavigationItem span{cursor:pointer\n}\n",""])},function(e,t,n){"use strict";var i=n(11);n.n(i).a},function(e,t,n){(e.exports=n(1)(!1)).push([e.i,"\n.NavigationLevel--closed ul{display:none\n}\n",""])},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.sanitizeElement=function(e){return void 0===e||""===e||"#"!==e[0]&&(e="#"+e),e},t.sanitizePath=function(e){if(void 0!==e)return"/"!==e[0]&&(e="/"+e),"/"===e[e.length-1]&&(e=e.slice(0,-1)),e}},function(e,t,n){var i=n(29);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals),(0,n(2).default)("0965e660",i,!0,{})},function(e,t,n){(e.exports=n(1)(!1)).push([e.i,".TreeNavigation{display:inline-block;padding:0;margin:0}.TreeNavigation ul{padding:0;margin:0;list-style-type:none}.TreeNavigation li{padding-left:20px}\n",""])}])}))},"952d":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("vue-tree-navigation",{attrs:{items:e.items,defaultOpenLevel:1}})],1)},r=[],a=n("12d3"),o=n.n(a),s={components:{VueTreeNavigation:o.a},data:function(){return{items:[{name:"Introduction",path:"introduction",children:[{name:"Features",element:"features"},{name:"Requirements",element:"requirements"},{name:"Demo",element:"demo"}]},{name:"Installation",path:"installation"},{name:"Usage",path:"usage",children:[{name:"Props",element:"props",children:[{name:"items",element:"items"},{name:"defaultOpenLevel",element:"default-open-level"}]}]},{name:"Examples",path:"examples",children:[{name:"Auto-generated",path:"auto"},{name:"Manually defined",path:"manual"},{name:"This website",path:"this"}]},{name:"Styling",path:"styling"},{name:"Visit GitHub",external:"https://github.com/MisRob/vue-tree-navigation"}]}}},u=s,l=(n("f85d"),n("2877")),c=Object(l["a"])(u,i,r,!1,null,null,null);t["default"]=c.exports},da12:function(e,t,n){},f85d:function(e,t,n){"use strict";var i=n("da12"),r=n.n(i);r.a}}]);
//# sourceMappingURL=page-testing-treenavigation.565d3900.js.map