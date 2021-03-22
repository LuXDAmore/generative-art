(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{650:function(e,t){},651:function(e,t){},677:function(e,t){},708:function(e,t,n){"use strict";n.r(t);var r=n(6),o=(n(38),n(13),n(20),n(23),n(45),n(115),n(639),n(31),n(465),n(470),n(471),n(472),n(473),n(474),n(475),n(476),n(477),n(478),n(479),n(480),n(481),n(482),n(483),n(485),n(486),n(487),n(488),n(489),n(490),n(491),n(492),n(493),n(494),n(705)),c=n(678),d=(n(704),n(703),n(14)),l=n(169),h={name:"three-js-starter",data:function(){return{width:500,height:500,showBackground:!1,continuosRafCheck:!1,isWebcamReady:!1,loading:!1,pointsSize:20}},created:function(){this.$sketchManager=null,this.$facemesh=null,this.$camera=null,this.$geometry=null},mounted:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$sketch({animate:!0,duration:10,context:"webgl",attributes:{antialias:!0},canvas:e.$refs.canvas},e.sketch);case 3:e.$sketchManager=t.sent,e.$once("hook:beforeDestroy",(function(){return e.$sketchManager.unload()})),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},methods:{createRenderer:function(e){var t=e.context,n=e.width,r=e.height,o=e.color,c=void 0===o?"#111":o,l=new d.H({context:t,depth:!1,antialias:!0});return l.setClearColor(new d.f(c),1),l.setSize(n,r),l.outputEncoding=d.I,l.physicallyCorrectLights=!0,l},createCameraAndControls:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var canvas,r,o,c,l,h,m;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return canvas=e.context.canvas,r=e.width,o=e.height,(c=new d.r(70,r/o,.001,2e3)).position.set(0,0,-6),t.next=5,n.e(0).then(n.bind(null,464));case 5:return l=t.sent,h=l.OrbitControls,m=new h(c,canvas),t.abrupt("return",{camera:c,controls:m});case 9:case"end":return t.stop()}}),t)})))()},createSceneAndPointsMaterialGeometry:function(){var e=new d.x,t=new d.e,n=new d.y({depthTest:!1,depthWrite:!1,transparent:!0,vertexShader:"#define GLSLIFY 1\n// Uniforms\nuniform mediump float pointsSize;\n\n// Main\nvoid main () {\n\n   vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\n    gl_PointSize = pointsSize * ( 1. / - mvPosition.z );\n\n    gl_Position = projectionMatrix * mvPosition;\n\n}\n",fragmentShader:"#define GLSLIFY 1\n// Main\nvoid main () {\n\n    // Make point rounded\n    float dist = length( gl_PointCoord - vec2( 0.5 ) );\n    float alpha = 1. - smoothstep( 0.45, 0.5, dist );\n\n    // Bring back pixels\n    gl_FragColor = vec4( 1., 1., 1., alpha );\n\n}\n",extensions:{derivatives:"#extension GL_OES_standard_derivatives : enable"},uniforms:{time:{type:"f",value:0},playhead:{type:"f",value:0},pointsSize:{type:"f",value:this.pointsSize}}});return t.name="face",{scene:e,geometry:t,material:n}},createPoints:function(e,t){return new d.t(t,e)},addAttributes:function(e){var t=Array.from({length:1404},Math.random),n=new d.l(t,3).setUsage(d.j),r="position",o=c.UV_COORDS.flat(),l=new d.l(o,2);n.name=r,e.setAttribute(r,n),l.name="uv",e.setAttribute("uv",l),e.computeVertexNormals(),e.computeBoundingBox(),e.computeBoundingSphere(),e.rotateX(180),e.center(),e.attributes.position.needsUpdate=!0,e.attributes.uv.needsUpdate=!0},face:function(){var e=arguments,t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=e.length>0&&void 0!==e[0]?e[0]:t.width,o=e.length>1&&void 0!==e[1]?e[1]:t.height,t.$refs.video){n.next=4;break}return n.abrupt("return");case 4:if(!t.isWebcamReady&&!t.$facemesh){n.next=8;break}return n.next=7,t.findFaces();case 7:return n.abrupt("return");case 8:return l.a.to(t,{pointsSize:5,ease:"expo.in",duration:1.5}),l.a.to(t.$camera.position,{z:-1e3,ease:"expo.in",duration:4,onComplete:function(){return t.$camera.updateProjectionMatrix()}}),t.loading=!0,t.$nuxt.$loading.start(),n.prev=12,t.$refs.video.width=r,t.$refs.video.height=o,n.next=17,navigator.mediaDevices.getUserMedia({audio:!1,video:{width:r,height:o,facingMode:"user"}});case 17:return t.$refs.video.srcObject=n.sent,n.next=20,t.$refs.video.play();case 20:return t.showBackground=!0,n.next=23,t.facemeshInit();case 23:return n.next=25,t.findFaces();case 25:t.isWebcamReady=!0,l.a.to(t.$camera.position,{duration:5,ease:"expo.out",z:-500,onComplete:function(){return t.$camera.updateProjectionMatrix()}}),l.a.to(t,{pointsSize:1250,ease:"expo.out",duration:3}),n.next=34;break;case 30:n.prev=30,n.t0=n.catch(12),console.error(n.t0),window.alert("You must allow access to your webcam");case 34:t.$nuxt.$loading.finish(),t.loading=!1;case 36:case"end":return n.stop()}}),n,null,[[12,30]])})))()},facemeshInit:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(o.b)(o.a.mediapipeFacemesh,{maxFaces:1});case 3:e.$facemesh=t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.error(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))()},findFaces:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.$facemesh){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,t.next=5,e.$facemesh.estimateFaces({input:e.$refs.video,predictIrises:!1,flipHorizontal:!0});case 5:if((n=t.sent).length){t.next=8;break}return t.abrupt("return");case 8:n.forEach((function(t){var n=t.scaledMesh;e.$geometry.attributes.position.array=new Float32Array(n.flat()),e.$geometry.computeVertexNormals(),e.$geometry.computeBoundingBox(),e.$geometry.computeBoundingSphere(),e.$geometry.rotateX(180),e.$geometry.center(),e.$geometry.attributes.position.needsUpdate=!0})),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(2),console.error(t.t0);case 14:case"end":return t.stop()}}),t,null,[[2,11]])})))()},sketch:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var o,c,d,l,h,m,f,v,w,k,x,y;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=e.context,c=e.width,d=e.height,t.width=c,t.height=d,l=t.createRenderer({context:o,width:c,height:d}),n.next=6,t.createCameraAndControls({context:o,width:window.innerWidth,height:window.innerHeight});case 6:return h=n.sent,m=h.camera,f=h.controls,v=t.createSceneAndPointsMaterialGeometry(),w=v.scene,k=v.material,x=v.geometry,t.addAttributes(x),y=t.createPoints(k,x),w.add(y),t.$camera=m,t.$geometry=x,n.abrupt("return",{render:function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(n){var r,time;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.playhead,time=n.time,e.t0=t.continuosRafCheck,!e.t0){e.next=5;break}return e.next=5,t.findFaces();case 5:k.uniforms.playhead.value=r,k.uniforms.time.value=time,t.pointsSize!==k.uniforms.pointsSize.value&&(k.uniforms.pointsSize.value=t.pointsSize),f.update(),l.render(w,m);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),resize:function(e){var t=e.pixelRatio,n=e.viewportWidth,r=e.viewportHeight;l.setPixelRatio(t),l.setSize(n,r,!1),m.aspect=n/r,m.updateProjectionMatrix()},unload:function(){f.dispose(),l.dispose()}});case 19:case"end":return n.stop()}}),n)})))()}}},m=n(22),component=Object(m.a)(h,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",{staticClass:"container canvas-container"},[n("video",{ref:"video",staticClass:"absolute z-index--minus-1 pin cursor--pointer w-screen h-screen",attrs:{preload:"none",playsinline:"",autoplay:"",muted:""},domProps:{muted:!0}}),n("canvas",{ref:"canvas",class:{"opacity-90":e.showBackground}}),n("div",{staticClass:"w-full absolute z-index--2 pin-b text--center"},[e.continuosRafCheck?e._e():n("button",{attrs:{disabled:e.loading,type:"button"},on:{click:function(t){return t.preventDefault(),e.face()}}},[e.isWebcamReady?[e._v(" Click to update face points geometry ")]:e.loading?[n("strong",[e._v("Loading...")]),n("br"),e._m(0)]:[n("strong",[e._v("Click to start FaceRecognition")]),n("br"),e._m(1)]],2),e.isWebcamReady?[n("br"),n("label",{attrs:{for:"continuosRafCheck"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.continuosRafCheck,expression:"continuosRafCheck"}],attrs:{id:"continuosRafCheck",disabled:!e.isWebcamReady,type:"checkbox"},domProps:{checked:Array.isArray(e.continuosRafCheck)?e._i(e.continuosRafCheck,null)>-1:e.continuosRafCheck},on:{change:function(t){var n=e.continuosRafCheck,r=t.target,o=!!r.checked;if(Array.isArray(n)){var c=e._i(n,null);r.checked?c<0&&(e.continuosRafCheck=n.concat([null])):c>-1&&(e.continuosRafCheck=n.slice(0,c).concat(n.slice(c+1)))}else e.continuosRafCheck=o}}}),e._v(" Let FaceRecognition execute on the "),n("strong",[e._v("requestAnimationFrame")])]),n("br"),n("label",{attrs:{for:"showBackground"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.showBackground,expression:"showBackground"}],attrs:{id:"showBackground",disabled:!e.isWebcamReady,type:"checkbox"},domProps:{checked:Array.isArray(e.showBackground)?e._i(e.showBackground,null)>-1:e.showBackground},on:{change:function(t){var n=e.showBackground,r=t.target,o=!!r.checked;if(Array.isArray(n)){var c=e._i(n,null);r.checked?c<0&&(e.showBackground=n.concat([null])):c>-1&&(e.showBackground=n.slice(0,c).concat(n.slice(c+1)))}else e.showBackground=o}}}),e._v(" Keep the webcam background? ")])]:e._e()],2)])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("small",[n("em",[e._v("Please wait (sometimes it takes a while)..")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("small",[e._v("("),n("em",[e._v("You must allow access to your camera")]),e._v(")")])}],!1,null,null,null);t.default=component.exports}}]);