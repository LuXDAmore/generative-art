(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{524:function(e,n){},525:function(e,n){},551:function(e,n){},613:function(e,n,t){"use strict";t.r(n);t(293),t(32),t(30),t(12),t(33);var r=t(49),o=(t(21),t(3)),c=t(610),d=(t(609),t(608),t(248)),f={name:"facemesh-with-machine-learning",data:function(){return{sketchManager:null,facemesh:null}},mounted:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e.$sketch({animate:!0,duration:6.279582609797744,context:"webgl",attributes:{antialias:!0},canvas:e.$refs.canvas},e.sketch);case 3:e.sketchManager=n.sent,n.next=9;break;case 6:n.prev=6,n.t0=n.catch(0),console.error(n.t0);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})))()},beforeDestroy:function(){this.sketchManager&&this.sketchManager.unload()},methods:{sketch:function(e){var n=this;return Object(o.a)(regeneratorRuntime.mark((function f(){var l,v,h,m,w,x,y,k,P,_,R,$,j,C,M,O,S,E,L,z;return regeneratorRuntime.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:return l=e.context,v=e.width,h=e.height,(m=new d.H({context:l,antialias:!0,alpha:!0})).setClearColor(new d.f("#333"),1),m.physicallyCorrectLights=!0,m.outputEncoding=d.I,(w=new d.r(92,v/h,.01)).position.set(0,0,250),w.lookAt(new d.E(1,1,1)),f.next=10,t.e(1).then(t.bind(null,612)).then((function(e){return e.default||e}));case 10:if(x=f.sent,y=x.OrbitControls,k=new y(w,l.canvas),P=new d.x,_=new d.s(100,100),R=new d.p({color:new d.f("#123"),side:d.i}),$=new d.e,j=new d.y({vertexShader:"#define GLSLIFY 1\n// VSCode vertex\n#pragma vscode_glsllint_stage : vert\n\n// Varying\nvarying vec3 vPos;\n\n// Main\nvoid main () {\n\n    vPos = position.xyz;\n\n   vec4 mvPosition = modelViewMatrix * vec4( position.xyz, 1.0 );\n\n    gl_PointSize = 600. * ( 1. / - mvPosition.z );\n\n    gl_Position = projectionMatrix * mvPosition;\n\n}\n",fragmentShader:"#define GLSLIFY 1\n// VSCode Frag\n#pragma vscode_glsllint_stage : frag\n\n// Const\nconst float PI = 3.1415926535897932384626433832795;\n\n// Uniforms\nuniform mediump float uPlayhead;\nuniform sampler2D pointTexture;\n\n// Varying\nvarying vec3 vPos;\n\n// Main\nvoid main () {\n\n    gl_FragColor = vec4( gl_PointCoord, 1., 1. ) * vec4( vPos, 1. );\n\n}\n",extensions:{derivatives:"#extension GL_OES_standard_derivatives : enable"},depthTest:!1,depthWrite:!1,transparent:!0,side:d.i,uniforms:{uPlayhead:{type:"f",value:0}}}),C=new d.t($,j),M=new d.o(_,R),468,3,O=3,S=new d.l(new Array(1404).fill(0),3).setUsage(d.j),_.name="face",S.name="position",$.setAttribute("position",S),P.add(C),P.add(M),n.$refs.video){f.next=31;break}return f.abrupt("return");case 31:return E=function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.facemesh){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,n.facemesh.estimateFaces(n.$refs.video);case 4:if((t=e.sent).length){e.next=7;break}return e.abrupt("return");case 7:t.forEach((function(e){e.mesh&&(e.mesh.forEach((function(e,n){var t=Object(r.a)(e,3),o=t[0],c=t[1],d=t[2];return S.setXYZ(n,o,c,d)})),$.attributes.position.needsUpdate=!0,console.info("Face updated",{pointsGeometry:$}))}));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a({maxFaces:1});case 2:return n.facemesh=e.sent,e.next=5,E();case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(){var t,r,o,c,d=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=d.length>0&&void 0!==d[0]?d[0]:v,r=d.length>1&&void 0!==d[1]?d[1]:h,e.prev=2,n.$refs.video){e.next=5;break}return e.abrupt("return");case 5:return o=v/O,c=h/O,n.$refs.video.width=o,n.$refs.video.height=c,e.next=10,navigator.mediaDevices.getUserMedia({audio:!1,video:{width:t,height:r,facingMode:"user"}});case 10:return n.$refs.video.srcObject=e.sent,e.next=13,L();case 13:return e.next=15,n.$refs.video.play();case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(2),console.error(e.t0);case 20:case"end":return e.stop()}}),e,null,[[2,17]])})));return function(){return e.apply(this,arguments)}}(),n.$refs.video.addEventListener("click",E,!1),n.$refs.video.addEventListener("playing",E,!1),f.abrupt("return",{render:function(e){var n=e.playhead;j.uniforms.uPlayhead.value=n,k.update(),m.render(P,w)},resize:function(e){var n=e.pixelRatio,t=e.viewportWidth,r=e.viewportHeight;m.setSize(t,r,!1),m.setPixelRatio(n),w.aspect=r/r,w.updateProjectionMatrix(),z()},unload:function(){k.dispose(),m.dispose()}});case 35:case"end":return f.stop()}}),f)})))()}}},l=t(51),component=Object(l.a)(f,(function(){var e=this.$createElement,n=this._self._c||e;return n("main",{staticClass:"container canvas-container"},[n("canvas",{ref:"canvas"}),n("video",{ref:"video",staticClass:"absolute z-index--1 pin-r pin-b cursor--pointer",attrs:{preload:"auto",playsinline:"",autoplay:"",muted:""},domProps:{muted:!0}})])}),[],!1,null,null,null);n.default=component.exports}}]);