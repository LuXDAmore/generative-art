(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{571:function(e,t,r){"use strict";r.r(t);var n=r(15),c=r(2);function o(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var h={exportPixelRatio:2},f={name:"generative-art-1",data:()=>({sketchManager:null}),mounted(){var e=this;this.$nextTick(Object(c.a)((function*(){try{e.sketchManager=yield e.$sketch(l(l({},h),{},{canvas:e.$refs.canvas}),e.sketch)}catch(e){console.error(e)}})))},beforeDestroy(){this.sketchManager&&this.sketchManager.unload()},methods:{sketch(e){var{canvas:canvas,render:t}=e;function r(){t()}canvas.addEventListener("click",r,!1);var n=(e,t)=>Math.random()*(t-e)+e,c=new Array(1e3).fill().map(()=>{var e=2*Math.PI-n(0,2*Math.PI/3),t=n(-.1,.3)*Math.PI*2,r=Math.floor(n(5,200));return{segments:new Array(r).fill().map(()=>n(0,1)),arcStart:e,arcEnd:e+t,arcLength:t,thickness:n(.01,1),alpha:n(.25,.5),radius:n(.1,.75),x:.5+.085*n(-1,1),y:.5+.085*n(-1,1)}});return{render(e){var{context:t,width:r,height:o}=e;t.globalCompositeOperation="source-over",t.fillStyle="black",t.globalAlpha=1,t.fillRect(0,0,r,o);var l=Math.min(r,o),h=n(1,1.5);t.strokeStyle="white",t.fillStyle="white",c.forEach(circle=>{t.beginPath(),t.globalCompositeOperation="lighter",circle.segments.forEach(e=>{var c=circle.arcStart+circle.arcLength*e,f=circle.radius*l+.5*n(-1,1),v=circle.x*r+Math.cos(c)*f,O=circle.y*o+Math.sin(c)*f;t.beginPath(),t.arc(v,O,circle.thickness*n(.1,2)*h,0,2*Math.PI*n(0,1),!1),t.fill(),t.globalAlpha=circle.alpha})})},unload(){canvas.removeEventListener("click",r,!1)}}}}},v=r(32),component=Object(v.a)(f,(function(){var e=this.$createElement,t=this._self._c||e;return t("main",{staticClass:"container canvas-container"},[t("canvas",{ref:"canvas"})])}),[],!1,null,null,null);t.default=component.exports}}]);