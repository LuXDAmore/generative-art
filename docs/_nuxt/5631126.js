(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{103:function(t,e,r){"use strict";var o=r(1),n=r(153),c=r.n(n);o.a.use(c.a,{space:0})},160:function(t,e,r){t.exports=r(161)},195:function(t,e,r){var content=r(196);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(56).default)("3b37a659",content,!0,{sourceMap:!1})},196:function(t,e,r){(e=r(55)(!1)).push([t.i,":root{font-size:16px}*{min-width:0}body,html{margin:0;padding:0}body{position:relative;color:#333;line-height:1.5}.container{display:flex;flex:1 1 100%;flex-direction:column;align-items:center;justify-content:center;width:100%;max-width:100%;margin-right:auto;margin-left:auto}main{min-height:100vh}h1{font-size:2em}.absolute{position:absolute}.z-index--minus-1{z-index:-1}.z-index--1{z-index:1}a{color:#00bfff}.text--center{text-align:center}.text--red{color:#ff1e00}.no-pointer-event{pointer-events:none}.cursor--pointer{cursor:pointer}.pin-r{right:16px}.pin-b{bottom:16px}",""]),t.exports=e},197:function(t,e,r){var content=r(198);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(56).default)("0ab47a5d",content,!0,{sourceMap:!1})},198:function(t,e,r){(e=r(55)(!1)).push([t.i,".canvas-container{overflow:hidden}canvas{top:0;right:0;bottom:0;left:0;z-index:0;display:block;width:100%;height:100%;margin:0 auto;transform:translateZ(0)}",""]),t.exports=e},27:function(t,e,r){"use strict";var o={name:"error",props:{error:{type:Object,required:!0}},head:function(){if(this.is404)return{title:"404 Pagina non trovata - NuxtJs || ThreeJs",meta:[{hid:"referrer",name:"referrer",content:"unsafe-url"}]}},computed:{is404:function(){return this.error&&404===this.error.statusCode}}},n=r(51),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"layout-error container text-center"},[r("h1",{attrs:{align:"center"}},[t._v(" C'è stato un errore imprevisto: "),r("strong",{domProps:{textContent:t._s(t.error.statusCode)}}),t._v(". ")]),t.error.message?r("p",{domProps:{textContent:t._s(t.error.message)}}):t._e(),r("nuxt-link",{attrs:{to:"/",title:"go back to the homepage"}},[r("strong",[t._v("< go back to the homepage")])])],1)}),[],!1,null,null,null);e.a=component.exports}},[[160,28,5,29]]]);