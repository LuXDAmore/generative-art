(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{661:function(e,t,n){"use strict";n.r(t);n(11);var r=n(3),o=n(9),c={name:"three-js-starter",data:()=>({sketchManager:null}),mounted(){var e=this;return Object(r.a)((function*(){try{e.sketchManager=yield e.$sketch({animate:!0,duration:10,context:"webgl",attributes:{antialias:!0},canvas:e.$refs.canvas},e.sketch),e.$once("hook:beforeDestroy",(()=>e.sketchManager.unload()))}catch(e){console.error(e)}}))()},methods:{createRenderer(e,t){var{width:n,height:r,color:c="#111"}=t,h=new o.H({context:e});return h.setClearColor(new o.f(c),1),h.setSize(n,r),h.outputEncoding=o.I,h.physicallyCorrectLights=!0,h},createCameraAndControls:e=>Object(r.a)((function*(){var{width:t,height:r,context:{canvas:canvas}}=e,c=new o.r(70,t/r,.001,1e3);c.position.set(0,0,4.5);var{OrbitControls:h}=yield n.e(0).then(n.bind(null,425));return{camera:c,controls:new h(c,canvas)}}))(),createSceneAndMeshMaterialGeometry(){var e=new o.x,t=new o.c(1,1,1),n=new o.p({side:o.i,color:new o.f("#fff")});return{scene:e,mesh:new o.o(t,n),material:n}},createLights(){var e=arguments;return Object(r.a)((function*(){var t=e.length>0&&void 0!==e[0]?e[0]:"#f05",{PointLight:r}=yield n.e(28).then(n.bind(null,646)),c=new r(new o.f(t),500,100,2);return c.position.set(8,10,13),{light:c}}))()},sketch(e){var t=this;return Object(r.a)((function*(){var{context:n,width:r,height:o}=e,c=t.createRenderer(n,{width:r,height:o}),{camera:h,controls:l}=yield t.createCameraAndControls({width:window.innerWidth,height:window.innerHeight,context:n}),{light:d}=yield t.createLights(),{scene:w,mesh:v}=t.createSceneAndMeshMaterialGeometry();return w.add(d),w.add(v),{render(e){var{playhead:t}=e,n=2*t*Math.PI;v.rotation.y=n,v.rotation.z=n,l.update(),c.render(w,h)},resize(e){var{pixelRatio:t,viewportWidth:n,viewportHeight:r}=e;c.setPixelRatio(t),c.setSize(n,r,!1),h.aspect=n/r,h.updateProjectionMatrix()},unload(){l.dispose(),c.dispose()}}}))()}}},h=n(13),component=Object(h.a)(c,(function(){var e=this.$createElement,t=this._self._c||e;return t("main",{staticClass:"container canvas-container"},[t("canvas",{ref:"canvas"})])}),[],!1,null,null,null);t.default=component.exports}}]);