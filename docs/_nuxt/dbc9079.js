(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{404:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(85);var l=n(109);function o(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(l.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},490:function(t,e,n){var content=n(605);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(45).default)("d24eddb6",content,!0,{sourceMap:!1})},604:function(t,e,n){"use strict";n(490)},605:function(t,e,n){(e=n(44)(!1)).push([t.i,".nav-menu[data-v-a1d781e0]{position:absolute;top:0;left:0;z-index:2;display:flex;flex:1 1 100%;flex-direction:column;align-items:flex-start;justify-items:center;width:100%;min-height:45px;font-size:1rem;text-align:center}@media (min-width:800px){.nav-menu[data-v-a1d781e0]{flex-direction:row}}.nav-menu .nav-menu__summary>*[data-v-a1d781e0]{display:inline-block;margin:0;font-size:1rem;vertical-align:middle}.nav-menu .nav-menu__details[data-v-a1d781e0]{width:100%;padding:8px;overflow:hidden;background-color:#333;border:1px dotted #fff;cursor:pointer}.nav-menu .nav[data-v-a1d781e0]{padding:16px;visibility:hidden;opacity:0;transition:opacity .2s linear .1s}.nav-menu .nav-menu__details[open] .nav[data-v-a1d781e0]{visibility:visible;opacity:1}.nav-menu .nav>ul[data-v-a1d781e0]{margin:0;padding:0;list-style:none}.nav-menu .nav a[data-v-a1d781e0]{display:block;color:#fff;font-weight:lighter;white-space:nowrap}.nav-menu .nav a.nuxt-link-exact-active[data-v-a1d781e0]{font-weight:bolder;text-decoration:none}",""]),t.exports=e},623:function(t,e,n){"use strict";n.r(e);n(98),n(47);var r=n(404),l={name:"nav-menu",inheritAttrs:!1,data:function(){return{links:[{url:"/",text:"HOMEPAGE"},{url:"/single/three-js-starter",text:"ThreeJs starter template"},{url:"/single/page-1",text:"Page 1"},{url:"/single/page-2",text:"Page 2"},{url:"/single/page-3",text:"Page 3"},{url:"/single/page-4",text:"Page 4"},{url:"/single/generative-art-1",text:"Generative Art 1"},{url:"/single/page-6",text:"Page 6"},{url:"/single/audio-video",text:"Microphone audio and video webcam"},{url:"/single/page-8",text:"Page 8"},{url:"/single/page-9",text:"Page 9"},{url:"/single/page-10",text:"Page 10"},{url:"/single/page-11",text:"Page 11"},{url:"/single/infinite-animation",text:"Infinite animation"}],linksNavigate:[{url:"/navigate/page-1",text:"GrayKlein Geometry"},{url:"/navigate/page-2",text:"Sphere Geometry"}],linksExperiments:[{url:"/experiments/tensorflow-facemesh",text:"Tensorflow Facemesh"}]}},jsonld:function(){return this.links.length||this.linksNavigate.length?{"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[].concat(Object(r.a)(this.links),Object(r.a)(this.linksNavigate)).map((function(t,e){return{"@type":"ListItem",position:e+1,item:{"@id":t.url,url:t.url,name:t.text||t.title}}}))}:null}},o=(n(604),n(43)),c=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav-menu"},[t.links.length?n("details",{staticClass:"nav-menu__details"},[t._m(0),n("nav",{staticClass:"nav"},[n("ul",t._l(t.links,(function(link){return n("li",{key:link.url},[n("nuxt-link",{attrs:{to:link.url,title:link.text}},[t._v(" "+t._s(link.text)+" ")])],1)})),0)])]):t._e(),t.linksNavigate.length?n("details",{staticClass:"nav-menu__details"},[t._m(1),n("nav",{staticClass:"nav"},[n("ul",t._l(t.linksNavigate,(function(link){return n("li",{key:link.url},[n("nuxt-link",{attrs:{to:link.url,title:link.text}},[t._v(" "+t._s(link.text)+" ")])],1)})),0)])]):t._e(),t.linksExperiments.length?n("details",{staticClass:"nav-menu__details"},[t._m(2),n("nav",{staticClass:"nav"},[n("ul",t._l(t.linksExperiments,(function(link){return n("li",{key:link.url},[n("nuxt-link",{attrs:{to:link.url,title:link.text}},[t._v(" "+t._s(link.text)+" ")])],1)})),0)])]):t._e()])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("summary",{staticClass:"nav-menu__summary"},[e("h2",[this._v(" Single ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("summary",{staticClass:"nav-menu__summary"},[e("h2",[this._v(" Navigation ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("summary",{staticClass:"nav-menu__summary"},[e("h2",[this._v(" Experiments ")])])}],!1,null,"a1d781e0",null).exports;e.default=c}}]);