(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{522:function(e,t,n){var content=n(649);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(19).default)("1c1728ce",content,!0,{sourceMap:!1})},647:function(e,t,n){"use strict";var r=n(16),l=n(22),o=n(4),c=n(13),m=n(17),d=n(26).f,v=n(144),x=o.Symbol;if(l&&"function"==typeof x&&(!("description"in x.prototype)||void 0!==x().description)){var h={},f=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof f?new x(e):void 0===e?x():x(e);return""===e&&(h[t]=!0),t};v(f,x);var _=f.prototype=x.prototype;_.constructor=f;var y=_.toString,k="Symbol(test)"==String(x("test")),w=/^Symbol\((.*)\)[^)]+$/;d(_,"description",{configurable:!0,get:function(){var symbol=m(this)?this.valueOf():this,e=y.call(symbol);if(c(h,symbol))return"";var desc=k?e.slice(7,-1):e.replace(w,"$1");return""===desc?void 0:desc}}),r({global:!0,forced:!0},{Symbol:f})}},648:function(e,t,n){"use strict";n(522)},649:function(e,t,n){var r=n(18)(!1);r.push([e.i,".nav-menu[data-v-70325e4e]{position:fixed;top:0;z-index:100;display:flex;flex:1 1 100%;flex-direction:column;justify-items:center;width:100%;max-width:100%;font-size:1.1rem;text-align:left}@media screen and (min-width:600px){.nav-menu[data-v-70325e4e]{top:8px;left:8px;max-width:381px}}.nav-menu .nav-menu__summary>*[data-v-70325e4e]{display:inline-block;margin:0;font-size:1.2rem}.nav-menu .nav-menu__summary small[data-v-70325e4e]{font-weight:lighter}.nav-menu .nav-menu__details[data-v-70325e4e]{width:100%;padding:2px 8px;background-color:#333;border:1px dotted #fff;cursor:pointer}.nav-menu .nav-menu__details.father[data-v-70325e4e]{padding:4px}.nav-menu .nav-menu__details.father>summary[data-v-70325e4e]{padding:0 0 4px}.nav-menu .nav[data-v-70325e4e]{padding:4px 16px}.nav-menu .nav>ul[data-v-70325e4e]{margin:0;padding:0;list-style:none}.nav-menu .nav a[data-v-70325e4e]{display:block;color:#fff;font-weight:lighter;white-space:nowrap;text-decoration:none}.nav-menu .nav a.nuxt-link-exact-active[data-v-70325e4e]{font-weight:bolder;text-decoration:line-through}",""]),e.exports=r},662:function(e,t,n){"use strict";n.r(t);n(647),n(9),n(12);var r={name:"nav-menu",inheritAttrs:!1,data:()=>({hideMenu:!1,links:[{url:"/",text:"HOMEPAGE, README",class:["font-bold"]},{url:"/single/three-js-starter",text:"ThreeJs starter template"},{url:"/single/page-1",text:"Page 1"},{url:"/single/page-2",text:"Page 2"},{url:"/single/page-3",text:"Page 3"},{url:"/single/page-4",text:"Page 4"},{url:"/single/generative-art-1",text:"Generative Art 1"},{url:"/single/page-6",text:"Page 6"},{url:"/single/microphone-audio-and-video-webcam",text:"Microphone audio and video webcam"},{url:"/single/page-8",text:"Page 8"},{url:"/single/page-9",text:"Page 9"},{url:"/single/page-10",text:"Page 10"},{url:"/single/page-11",text:"Page 11"},{url:"/single/infinite-animation",text:"Infinite animation"}],linksNavigate:[{url:"/navigate/page-1",text:"GrayKlein Geometry"},{url:"/navigate/page-2",text:"Sphere Geometry"}],linksExperiments:[{url:"/experiments/tensorflow-facemesh",text:"Tensorflow Facemesh"}]}),jsonld(){return[{"@context":"https://schema.org/","@type":"SoftwareSourceCode",programmingLanguage:"Javascript",targetProduct:"NuxtJs, VueJs",name:"@luxdamore/nuxt-canvas-sketch",description:"🌈🎨 Generative Art is the idea realized as genetic code of artificial events, as construction of dynamic complex systems able to generate endless variations. This is also a nuxt-module (@luxdamore/nuxt-canvas-sketch) - [three.js, tensorflow.js and gsap are not included].",about:"🌈🎨 Generative Art is the idea realized as genetic code of artificial events, as construction of dynamic complex systems able to generate endless variations. This is also a nuxt-module (@luxdamore/nuxt-canvas-sketch) - [three.js, tensorflow.js and gsap are not included].",author:"Luca Iaconelli <lucabelli@msn.com> (https://lucaiaconelli.it)",url:"https://luxdamore.github.io/generative-art",codeSampleType:"https://luxdamore.github.io/generative-art",workExample:"https://luxdamore.github.io/generative-art",codeRepository:"https://luxdamore.github.io/generative-art"},{"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[...this.links,...this.linksNavigate,...this.linksExperiments].map(((e,t)=>({"@type":"ListItem",position:t+1,item:{"@id":e.url,url:e.url,name:e.text||e.title}})))}]}},l=(n(648),n(14)),o=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"nav-menu"},[n("details",{staticClass:"nav-menu__details father",attrs:{open:""}},[e._m(0),e.links.length?n("details",{staticClass:"nav-menu__details"},[e._m(1),n("nav",{staticClass:"nav"},[n("ul",e._l(e.links,(function(link){return n("li",{key:link.url,class:link.class},[n("nuxt-link",{attrs:{to:link.url,title:link.text},domProps:{textContent:e._s(link.text)}})],1)})),0)])]):e._e(),e.linksNavigate.length?n("details",{staticClass:"nav-menu__details"},[e._m(2),n("nav",{staticClass:"nav"},[n("ul",e._l(e.linksNavigate,(function(link){return n("li",{key:link.url,class:link.class},[n("nuxt-link",{attrs:{to:link.url,title:link.text},domProps:{textContent:e._s(link.text)}})],1)})),0)])]):e._e(),e.linksExperiments.length?n("details",{staticClass:"nav-menu__details"},[e._m(3),n("nav",{staticClass:"nav"},[n("ul",e._l(e.linksExperiments,(function(link){return n("li",{key:link.url,class:link.class},[n("nuxt-link",{attrs:{to:link.url,title:link.text},domProps:{textContent:e._s(link.text)}})],1)})),0)])]):e._e()])])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("summary",{staticClass:"nav-menu__summary"},[n("small",[e._v(" Menu ")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("summary",{staticClass:"nav-menu__summary"},[n("h2",[e._v(" Single pages ")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("summary",{staticClass:"nav-menu__summary"},[n("h2",[e._v(" Layouts ")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("summary",{staticClass:"nav-menu__summary"},[n("h2",[e._v(" Experiments ")])])}],!1,null,"70325e4e",null).exports;t.default=o}}]);