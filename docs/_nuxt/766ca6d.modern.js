(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{118:function(t,e,o){t.exports=o(119)},159:function(t,e,o){var content=o(160);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(34).default)("3b37a659",content,!0,{sourceMap:!1})},160:function(t,e,o){(e=o(33)(!1)).push([t.i,":root{font-size:16px}*{min-width:0}body,html{margin:0;padding:0}body{position:relative;color:#333;line-height:1.5}.container{display:flex;flex:1 1 100%;flex-direction:column;align-items:center;justify-content:center;width:100%;max-width:100%;margin-right:auto;margin-left:auto}main{min-height:100vh}h1{font-size:2em}video{display:block;margin:0;padding:0}button{width:100%;max-width:354px;margin:16px auto;padding:8px;color:#f05;font-weight:700;line-height:1.36;text-align:center;background-color:#f3f0f1;border:0;border-radius:6px;cursor:pointer;opacity:.9;transition:all .27s ease-in-out;-webkit-appearance:none;-moz-appearance:none;appearance:none}button:active,button:focus,button:hover{opacity:1}.opacity-90{opacity:.9!important}.w-full{width:100%}.w-screen{width:100vw}.h-screen{height:100vh}.absolute{position:absolute}.z-index--minus-1{z-index:-1}.z-index--1{z-index:1}.z-index--2{z-index:2}a{color:#00bfff}.text--center{text-align:center}.text--red{color:#ff1e00}.no-pointer-event{pointer-events:none}.cursor--pointer{cursor:pointer}.pin{top:0;right:0;bottom:0;left:0}.pin-r{right:16px}.pin-b{bottom:16px}",""]),t.exports=e},161:function(t,e,o){var content=o(162);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(34).default)("0ab47a5d",content,!0,{sourceMap:!1})},162:function(t,e,o){(e=o(33)(!1)).push([t.i,".canvas-container{overflow:hidden}canvas{top:0;right:0;bottom:0;left:0;z-index:0;display:block;width:100%;height:100%;margin:0 auto;transform:translateZ(0);opacity:1;transition:opacity .3s ease-out;will-change:opacity}",""]),t.exports=e},19:function(t,e,o){"use strict";var n={name:"error",props:{error:{type:Object,required:!0}},head(){if(this.is404)return{title:"404 Pagina non trovata - NuxtJs || ThreeJs",meta:[{hid:"referrer",name:"referrer",content:"unsafe-url"}]}},computed:{is404(){return this.error&&404===this.error.statusCode}}},r=o(32),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"layout-error container text-center"},[o("h1",{attrs:{align:"center"}},[t._v(" C'è stato un errore imprevisto: "),o("strong",{domProps:{textContent:t._s(t.error.statusCode)}}),t._v(". ")]),t.error.message?o("p",{domProps:{textContent:t._s(t.error.message)}}):t._e(),o("nuxt-link",{attrs:{to:"/",title:"go back to the homepage"}},[o("strong",[t._v("< go back to the homepage")])])],1)}),[],!1,null,null,null);e.a=component.exports},66:function(t,e,o){"use strict";var n=o(1),r=o(106),c=o.n(r);n.a.use(c.a,{space:0})}},[[118,29,7,30]]]);