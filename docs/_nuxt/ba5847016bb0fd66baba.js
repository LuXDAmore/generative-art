(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{290:function(e,n,t){"use strict";t.r(n);t(12),t(26);var r=t(6),o=t(11),c={name:"three-js-starter",data:function(){return{sketchManager:null}},mounted:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e.$sketch({animate:!0,duration:10,context:"webgl",attributes:{antialias:!0},canvas:e.$refs.canvas},e.sketch);case 3:e.sketchManager=n.sent,n.next=9;break;case 6:n.prev=6,n.t0=n.catch(0),console.error(n.t0);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})))()},beforeDestroy:function(){this.sketchManager&&this.sketchManager.unload()},methods:{sketch:function(e){return Object(r.a)(regeneratorRuntime.mark((function n(){var r,c,l,d,f,h,v,m,w,x;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.context,(c=new o.D({context:r})).setClearColor(new o.e("#333"),1),c.physicallyCorrectLights=!0,c.outputEncoding=o.E,(l=new o.n(45,1,.01,100)).position.set(2,2,4),l.lookAt(new o.A),n.next=10,t.e(0).then(t.bind(null,283)).then((function(e){return e.default||e}));case 10:return d=n.sent,f=d.OrbitControls,h=new f(l,r.canvas),v=new o.t,m=new o.c(1,1,1),w=new o.u({vertexShader:"#define GLSLIFY 1\n// VSCode vertex\n#pragma vscode_glsllint_stage : vert\n\n// Main\nvoid main () {\n\n    gl_Position = projectionMatrix * modelViewMatrix * vec4( position.xyz, 1.0 );\n\n}\n",fragmentShader:"#define GLSLIFY 1\n// VSCode Frag\n#pragma vscode_glsllint_stage : frag\n\n// Uniforms\nuniform mediump float time;\nuniform mediump float playhead;\n\n// Main\nvoid main () {\n\n    gl_FragColor = vec4( playhead, playhead, playhead, 1. );\n\n}\n",extensions:{derivatives:"#extension GL_OES_standard_derivatives : enable"},side:o.h,uniforms:{time:{type:"f",value:0},playhead:{type:"f",value:0}}}),x=new o.l(m,w),v.add(x),n.abrupt("return",{render:function(e){var time=e.time,n=e.playhead;x.rotation.y=time*(10*Math.PI/100),w.uniforms.time.value=time,w.uniforms.playhead.value=n,h.update(),c.render(v,l)},resize:function(e){var n=e.pixelRatio,t=e.viewportWidth,r=e.viewportHeight;c.setPixelRatio(n),c.setSize(t,r),l.aspect=t/r,l.updateProjectionMatrix()},unload:function(){h.dispose(),c.dispose()}});case 19:case"end":return n.stop()}}),n)})))()}}},l=t(22),component=Object(l.a)(c,(function(){var e=this.$createElement,n=this._self._c||e;return n("main",{staticClass:"container canvas-container"},[n("canvas",{ref:"canvas"})])}),[],!1,null,null,null);n.default=component.exports}}]);