(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{629:function(e,t,n){"use strict";n.r(t);n(8),n(19);var r=n(2),o=n(241),c=function(){return n.e(33).then(n.bind(null,610))},h={name:"three-js-starter",data:function(){return{sketchManager:null}},mounted:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$sketch({animate:!0,duration:10,context:"webgl",attributes:{antialias:!0},canvas:e.$refs.canvas},e.sketch);case 3:e.sketchManager=t.sent,e.$once("hook:beforeDestroy",(function(){return e.sketchManager.unload()})),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},methods:{createRenderer:function(e){var t=e.context,n=e.width,r=e.height,c=e.color,h=void 0===c?"#111":c,d=new o.H({context:t});return d.setClearColor(new o.f(h),1),d.setSize(n,r),d.outputEncoding=o.I,d.physicallyCorrectLights=!0,d},createCameraAndControls:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var r,c,canvas,h,d,l,f;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.width,c=e.height,canvas=e.context.canvas,(h=new o.r(70,r/c,.001,1e3)).position.set(0,0,4.5),t.next=5,n.e(1).then(n.bind(null,609));case 5:return d=t.sent,l=d.OrbitControls,f=new l(h,canvas),t.abrupt("return",{camera:h,controls:f});case 9:case"end":return t.stop()}}),t)})))()},createSceneAndMeshMaterialGeometry:function(){var e=new o.x,t=new o.c(1,1,1),n=new o.p({side:o.i,color:new o.f("#fff")});return{scene:e,mesh:new o.o(t,n),material:n}},createLights:function(){var e=arguments;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,h,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.length>0&&void 0!==e[0]?e[0]:"#f05",t.next=3,c();case 3:return r=t.sent,h=r.PointLight,(d=new h(new o.f(n),500,100,2)).position.set(8,10,13),t.abrupt("return",{light:d});case 8:case"end":return t.stop()}}),t)})))()},sketch:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o,c,h,d,l,f,w,v,m,x,k;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.context,o=e.width,c=e.height,h=t.createRenderer({context:r,width:o,height:c}),n.next=4,t.createCameraAndControls({width:window.innerWidth,height:window.innerHeight,context:r});case 4:return d=n.sent,l=d.camera,f=d.controls,n.next=9,t.createLights();case 9:return w=n.sent,v=w.light,m=t.createSceneAndMeshMaterialGeometry(),x=m.scene,k=m.mesh,x.add(v),x.add(k),n.abrupt("return",{render:function(e){var t=2*e.playhead*Math.PI;k.rotation.y=t,k.rotation.z=t,f.update(),h.render(x,l)},resize:function(e){var t=e.pixelRatio,n=e.viewportWidth,r=e.viewportHeight;h.setPixelRatio(t),h.setSize(n,r,!1),l.aspect=n/r,l.updateProjectionMatrix()},unload:function(){f.dispose(),h.dispose()}});case 17:case"end":return n.stop()}}),n)})))()}}},d=n(43),component=Object(d.a)(h,(function(){var e=this.$createElement,t=this._self._c||e;return t("main",{staticClass:"container canvas-container"},[t("canvas",{ref:"canvas"})])}),[],!1,null,null,null);t.default=component.exports}}]);