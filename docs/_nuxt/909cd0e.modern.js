(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{434:function(e,t,n){var content=n(550);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(34).default)("d24eddb6",content,!0,{sourceMap:!1})},549:function(e,t,n){"use strict";n(434)},550:function(e,t,n){(t=n(33)(!1)).push([e.i,".nav-menu[data-v-a1d781e0]{position:absolute;top:0;left:0;z-index:2;display:flex;flex:1 1 100%;flex-direction:column;align-items:flex-start;justify-items:center;width:100%;min-height:45px;font-size:1rem;text-align:center}@media (min-width:800px){.nav-menu[data-v-a1d781e0]{flex-direction:row}}.nav-menu .nav-menu__summary>*[data-v-a1d781e0]{display:inline-block;margin:0;font-size:1rem;vertical-align:middle}.nav-menu .nav-menu__details[data-v-a1d781e0]{width:100%;padding:8px;overflow:hidden;background-color:#333;border:1px dotted #fff;cursor:pointer}.nav-menu .nav[data-v-a1d781e0]{padding:16px;visibility:hidden;opacity:0;transition:opacity .2s linear .1s}.nav-menu .nav-menu__details[open] .nav[data-v-a1d781e0]{visibility:visible;opacity:1}.nav-menu .nav>ul[data-v-a1d781e0]{margin:0;padding:0;list-style:none}.nav-menu .nav a[data-v-a1d781e0]{display:block;color:#fff;font-weight:lighter;white-space:nowrap}.nav-menu .nav a.nuxt-link-exact-active[data-v-a1d781e0]{font-weight:bolder;text-decoration:none}",""]),e.exports=t},568:function(e,t,n){"use strict";n.r(t);n(20),n(22);var l={name:"nav-menu",inheritAttrs:!1,data:()=>({links:[{url:"/",text:"HOMEPAGE"},{url:"/single/three-js-starter",text:"ThreeJs starter template"},{url:"/single/page-1",text:"Page 1"},{url:"/single/page-2",text:"Page 2"},{url:"/single/page-3",text:"Page 3"},{url:"/single/page-4",text:"Page 4"},{url:"/single/generative-art-1",text:"Generative Art 1"},{url:"/single/page-6",text:"Page 6"},{url:"/single/audio-video",text:"Microphone audio and video webcam"},{url:"/single/page-8",text:"Page 8"},{url:"/single/page-9",text:"Page 9"},{url:"/single/page-10",text:"Page 10"},{url:"/single/page-11",text:"Page 11"},{url:"/single/infinite-animation",text:"Infinite animation"}],linksNavigate:[{url:"/navigate/page-1",text:"GrayKlein Geometry"},{url:"/navigate/page-2",text:"Sphere Geometry"}],linksExperiments:[{url:"/experiments/tensorflow-facemesh",text:"Tensorflow Facemesh"}]}),jsonld(){return this.links.length||this.linksNavigate.length?{"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[...this.links,...this.linksNavigate].map((e,t)=>({"@type":"ListItem",position:t+1,item:{"@id":e.url,url:e.url,name:e.text||e.title}}))}:null}},r=(n(549),n(32)),o=Object(r.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"nav-menu"},[e.links.length?n("details",{staticClass:"nav-menu__details"},[e._m(0),n("nav",{staticClass:"nav"},[n("ul",e._l(e.links,(function(link){return n("li",{key:link.url},[n("nuxt-link",{attrs:{to:link.url,title:link.text}},[e._v(" "+e._s(link.text)+" ")])],1)})),0)])]):e._e(),e.linksNavigate.length?n("details",{staticClass:"nav-menu__details"},[e._m(1),n("nav",{staticClass:"nav"},[n("ul",e._l(e.linksNavigate,(function(link){return n("li",{key:link.url},[n("nuxt-link",{attrs:{to:link.url,title:link.text}},[e._v(" "+e._s(link.text)+" ")])],1)})),0)])]):e._e(),e.linksExperiments.length?n("details",{staticClass:"nav-menu__details"},[e._m(2),n("nav",{staticClass:"nav"},[n("ul",e._l(e.linksExperiments,(function(link){return n("li",{key:link.url},[n("nuxt-link",{attrs:{to:link.url,title:link.text}},[e._v(" "+e._s(link.text)+" ")])],1)})),0)])]):e._e()])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("summary",{staticClass:"nav-menu__summary"},[t("h2",[this._v(" Single ")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("summary",{staticClass:"nav-menu__summary"},[t("h2",[this._v(" Navigation ")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("summary",{staticClass:"nav-menu__summary"},[t("h2",[this._v(" Experiments ")])])}],!1,null,"a1d781e0",null).exports;t.default=o}}]);