(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{604:function(e,t,n){var content=n(737);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(28).default)("1c1728ce",content,!0,{sourceMap:!1})},736:function(e,t,n){"use strict";n(604)},737:function(e,t,n){var r=n(27)(!1);r.push([e.i,".nav-menu[data-v-70325e4e]{position:fixed;top:0;z-index:100;display:flex;flex:1 1 100%;flex-direction:column;justify-items:center;width:100%;max-width:100%;font-size:1.1rem;text-align:left}@media screen and (min-width:600px){.nav-menu[data-v-70325e4e]{top:8px;left:8px;max-width:381px}}.nav-menu .nav-menu__summary>*[data-v-70325e4e]{display:inline-block;margin:0;font-size:1.2rem}.nav-menu .nav-menu__summary small[data-v-70325e4e]{font-weight:lighter}.nav-menu .nav-menu__details[data-v-70325e4e]{width:100%;padding:2px 8px;background-color:#333;border:1px dotted #fff;cursor:pointer}.nav-menu .nav-menu__details.father[data-v-70325e4e]{padding:4px}.nav-menu .nav-menu__details.father>summary[data-v-70325e4e]{padding:0 0 4px}.nav-menu .nav[data-v-70325e4e]{padding:4px 16px}.nav-menu .nav>ul[data-v-70325e4e]{margin:0;padding:0;list-style:none}.nav-menu .nav a[data-v-70325e4e]{display:block;color:#fff;font-weight:lighter;white-space:nowrap;text-decoration:none}.nav-menu .nav a.nuxt-link-exact-active[data-v-70325e4e]{font-weight:bolder;text-decoration:line-through}",""]),e.exports=r},743:function(e,t,n){"use strict";n.r(t);var r=n(118);var l=n(162),o=n(82);function c(e){return function(e){if(Array.isArray(e))return Object(r.a)(e)}(e)||Object(l.a)(e)||Object(o.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n(41),n(129),n(58),n(94);var m={name:"nav-menu",inheritAttrs:!1,data:function(){return{hideMenu:!1,links:[{url:"/",text:"HOMEPAGE, README",class:["font-bold"]},{url:"/single/three-js-starter",text:"ThreeJs starter template"},{url:"/single/page-1",text:"Page 1"},{url:"/single/page-2",text:"Page 2"},{url:"/single/page-3",text:"Page 3"},{url:"/single/page-4",text:"Page 4"},{url:"/single/generative-art-1",text:"Generative Art 1"},{url:"/single/page-6",text:"Page 6"},{url:"/single/microphone-audio-and-video-webcam",text:"Microphone audio and video webcam"},{url:"/single/page-8",text:"Page 8"},{url:"/single/page-9",text:"Page 9"},{url:"/single/page-10",text:"Page 10"},{url:"/single/page-11",text:"Page 11"},{url:"/single/infinite-animation",text:"Infinite animation"}],linksNavigate:[{url:"/navigate/page-1",text:"GrayKlein Geometry"},{url:"/navigate/page-2",text:"Sphere Geometry"}],linksExperiments:[{url:"/experiments/tensorflow-facemesh",text:"Tensorflow Facemesh"}]}},jsonld:function(){return[{"@context":"https://schema.org/","@type":"SoftwareSourceCode",programmingLanguage:"Javascript",targetProduct:"NuxtJs, VueJs",name:"@luxdamore/nuxt-canvas-sketch",description:"🌈🎨 Generative Art is the idea realized as genetic code of artificial events, as construction of dynamic complex systems able to generate endless variations. This is also a nuxt-module (@luxdamore/nuxt-canvas-sketch) - [three.js, tensorflow.js and gsap are not included].",about:"🌈🎨 Generative Art is the idea realized as genetic code of artificial events, as construction of dynamic complex systems able to generate endless variations. This is also a nuxt-module (@luxdamore/nuxt-canvas-sketch) - [three.js, tensorflow.js and gsap are not included].",author:"Luca Iaconelli <lucabelli@msn.com> (https://lucaiaconelli.it)",url:"https://luxdamore.github.io/generative-art",codeSampleType:"https://luxdamore.github.io/generative-art",workExample:"https://luxdamore.github.io/generative-art",codeRepository:"https://luxdamore.github.io/generative-art"},{"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[].concat(c(this.links),c(this.linksNavigate),c(this.linksExperiments)).map((function(e,t){return{"@type":"ListItem",position:t+1,item:{"@id":e.url,url:e.url,name:e.text||e.title}}}))}]}},d=(n(736),n(23)),v=Object(d.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"nav-menu"},[n("details",{staticClass:"nav-menu__details father",attrs:{open:""}},[e._m(0),e.links.length?n("details",{staticClass:"nav-menu__details"},[e._m(1),n("nav",{staticClass:"nav"},[n("ul",e._l(e.links,(function(link){return n("li",{key:link.url,class:link.class},[n("nuxt-link",{attrs:{to:link.url,title:link.text},domProps:{textContent:e._s(link.text)}})],1)})),0)])]):e._e(),e.linksNavigate.length?n("details",{staticClass:"nav-menu__details"},[e._m(2),n("nav",{staticClass:"nav"},[n("ul",e._l(e.linksNavigate,(function(link){return n("li",{key:link.url,class:link.class},[n("nuxt-link",{attrs:{to:link.url,title:link.text},domProps:{textContent:e._s(link.text)}})],1)})),0)])]):e._e(),e.linksExperiments.length?n("details",{staticClass:"nav-menu__details"},[e._m(3),n("nav",{staticClass:"nav"},[n("ul",e._l(e.linksExperiments,(function(link){return n("li",{key:link.url,class:link.class},[n("nuxt-link",{attrs:{to:link.url,title:link.text},domProps:{textContent:e._s(link.text)}})],1)})),0)])]):e._e()])])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("summary",{staticClass:"nav-menu__summary"},[n("small",[e._v(" Menu ")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("summary",{staticClass:"nav-menu__summary"},[n("h2",[e._v(" Single pages ")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("summary",{staticClass:"nav-menu__summary"},[n("h2",[e._v(" Layouts ")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("summary",{staticClass:"nav-menu__summary"},[n("h2",[e._v(" Experiments ")])])}],!1,null,"70325e4e",null).exports;t.default=v}}]);