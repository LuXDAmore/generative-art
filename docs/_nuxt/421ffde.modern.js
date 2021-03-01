(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{589:function(e,t){},590:function(e,t){},616:function(e,t){},646:function(e,t,n){"use strict";n.r(t);n(577),n(18),n(579),n(427),n(10),n(431),n(432);var o=n(3),r=n(644),c=n(617),d=(n(643),n(642),n(9)),l=n(126),h={name:"three-js-starter",data:()=>({width:500,height:500,showBackground:!1,continuosRafCheck:!1,isWebcamReady:!1,loading:!1,pointsSize:20}),created(){this.$sketchManager=null,this.$facemesh=null,this.$camera=null,this.$geometry=null},mounted(){var e=this;return Object(o.a)((function*(){try{e.$sketchManager=yield e.$sketch({animate:!0,duration:10,context:"webgl",attributes:{antialias:!0},canvas:e.$refs.canvas},e.sketch),e.$once("hook:beforeDestroy",(()=>e.$sketchManager.unload()))}catch(e){console.error(e)}}))()},methods:{createRenderer(e){var{context:t,width:n,height:o,color:r="#111"}=e,c=new d.H({context:t,depth:!1,antialias:!0});return c.setClearColor(new d.f(r),1),c.setSize(n,o),c.outputEncoding=d.I,c.physicallyCorrectLights=!0,c},createCameraAndControls:e=>Object(o.a)((function*(){var{context:{canvas:canvas},width:t,height:o}=e,r=new d.r(70,t/o,.001,2e3);r.position.set(0,0,-6);var{OrbitControls:c}=yield n.e(0).then(n.bind(null,424));return{camera:r,controls:new c(r,canvas)}}))(),createSceneAndPointsMaterialGeometry(){var e=new d.x,t=new d.e,n=new d.y({depthTest:!1,depthWrite:!1,transparent:!0,vertexShader:"#define GLSLIFY 1\n// Uniforms\nuniform mediump float pointsSize;\n\n// Main\nvoid main () {\n\n   vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\n    gl_PointSize = pointsSize * ( 1. / - mvPosition.z );\n\n    gl_Position = projectionMatrix * mvPosition;\n\n}\n",fragmentShader:"#define GLSLIFY 1\n// Main\nvoid main () {\n\n    // Make point rounded\n    float dist = length( gl_PointCoord - vec2( 0.5 ) );\n    float alpha = 1. - smoothstep( 0.45, 0.5, dist );\n\n    // Bring back pixels\n    gl_FragColor = vec4( 1., 1., 1., alpha );\n\n}\n",extensions:{derivatives:"#extension GL_OES_standard_derivatives : enable"},uniforms:{time:{type:"f",value:0},playhead:{type:"f",value:0},pointsSize:{type:"f",value:this.pointsSize}}});return t.name="face",{scene:e,geometry:t,material:n}},createPoints:(e,t)=>new d.t(t,e),addAttributes(e){var t=Array.from({length:1404},Math.random),n=new d.l(t,3).setUsage(d.j),o="position",r=c.UV_COORDS.flat(),l=new d.l(r,2);n.name=o,e.setAttribute(o,n),l.name="uv",e.setAttribute("uv",l),e.computeVertexNormals(),e.computeBoundingBox(),e.computeBoundingSphere(),e.rotateX(180),e.center(),e.attributes.position.needsUpdate=!0,e.attributes.uv.needsUpdate=!0},face(){var e=arguments,t=this;return Object(o.a)((function*(){var n=e.length>0&&void 0!==e[0]?e[0]:t.width,o=e.length>1&&void 0!==e[1]?e[1]:t.height;if(t.$refs.video)if(t.isWebcamReady||t.$facemesh)yield t.findFaces();else{l.a.to(t,{pointsSize:5,ease:"expo.in",duration:1.5}),l.a.to(t.$camera.position,{z:-1e3,ease:"expo.in",duration:4,onComplete:()=>t.$camera.updateProjectionMatrix()}),t.loading=!0,t.$nuxt.$loading.start();try{t.$refs.video.width=n,t.$refs.video.height=o,t.$refs.video.srcObject=yield navigator.mediaDevices.getUserMedia({audio:!1,video:{width:n,height:o,facingMode:"user"}}),yield t.$refs.video.play(),t.showBackground=!0,yield t.facemeshInit(),yield t.findFaces(),t.isWebcamReady=!0,l.a.to(t.$camera.position,{duration:5,ease:"expo.out",z:-500,onComplete:()=>t.$camera.updateProjectionMatrix()}),l.a.to(t,{pointsSize:1250,ease:"expo.out",duration:3})}catch(e){console.error(e)}t.$nuxt.$loading.finish(),t.loading=!1}}))()},facemeshInit(){var e=this;return Object(o.a)((function*(){try{e.$facemesh=yield Object(r.b)(r.a.mediapipeFacemesh,{maxFaces:1})}catch(e){console.error(e)}}))()},findFaces(){var e=this;return Object(o.a)((function*(){if(e.$facemesh)try{var t=yield e.$facemesh.estimateFaces({input:e.$refs.video,predictIrises:!1,flipHorizontal:!0});if(!t.length)return;t.forEach((t=>{var{scaledMesh:n}=t;e.$geometry.attributes.position.array=new Float32Array(n.flat()),e.$geometry.computeVertexNormals(),e.$geometry.computeBoundingBox(),e.$geometry.computeBoundingSphere(),e.$geometry.rotateX(180),e.$geometry.center(),e.$geometry.attributes.position.needsUpdate=!0}))}catch(e){console.error(e)}}))()},sketch(e){var t=this;return Object(o.a)((function*(){var{context:n,width:r,height:c}=e;t.width=r,t.height=c;var d=t.createRenderer({context:n,width:r,height:c}),{camera:l,controls:h}=yield t.createCameraAndControls({context:n,width:window.innerWidth,height:window.innerHeight}),{scene:m,material:f,geometry:v}=t.createSceneAndPointsMaterialGeometry();t.addAttributes(v);var y,w=t.createPoints(f,v);return m.add(w),t.$camera=l,t.$geometry=v,{render:(y=Object(o.a)((function*(e){var{playhead:n,time:time}=e;t.continuosRafCheck&&(yield t.findFaces()),f.uniforms.playhead.value=n,f.uniforms.time.value=time,t.pointsSize!==f.uniforms.pointsSize.value&&(f.uniforms.pointsSize.value=t.pointsSize),h.update(),d.render(m,l)})),function(e){return y.apply(this,arguments)}),resize(e){var{pixelRatio:t,viewportWidth:n,viewportHeight:o}=e;d.setPixelRatio(t),d.setSize(n,o,!1),l.aspect=n/o,l.updateProjectionMatrix()},unload(){h.dispose(),d.dispose()}}}))()}}},m=n(12),component=Object(m.a)(h,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",{staticClass:"container canvas-container"},[n("video",{ref:"video",staticClass:"absolute z-index--minus-1 pin cursor--pointer w-screen h-screen",attrs:{preload:"none",playsinline:"",autoplay:"",muted:""},domProps:{muted:!0}}),n("canvas",{ref:"canvas",class:{"opacity-90":e.showBackground}}),n("div",{staticClass:"w-full absolute z-index--2 pin-b text--center"},[e.continuosRafCheck?e._e():n("button",{attrs:{disabled:e.loading,type:"button"},on:{click:function(t){return t.preventDefault(),e.face()}}},[e.isWebcamReady?[e._v(" Click to update face points geometry ")]:e.loading?[n("strong",[e._v("Loading...")]),n("br"),e._m(0)]:[n("strong",[e._v("Click to start FaceRecognition")]),n("br"),e._m(1)]],2),e.isWebcamReady?[n("br"),n("label",{attrs:{for:"continuosRafCheck"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.continuosRafCheck,expression:"continuosRafCheck"}],attrs:{id:"continuosRafCheck",disabled:!e.isWebcamReady,type:"checkbox"},domProps:{checked:Array.isArray(e.continuosRafCheck)?e._i(e.continuosRafCheck,null)>-1:e.continuosRafCheck},on:{change:function(t){var n=e.continuosRafCheck,o=t.target,r=!!o.checked;if(Array.isArray(n)){var c=e._i(n,null);o.checked?c<0&&(e.continuosRafCheck=n.concat([null])):c>-1&&(e.continuosRafCheck=n.slice(0,c).concat(n.slice(c+1)))}else e.continuosRafCheck=r}}}),e._v(" Let FaceRecognition execute on the "),n("strong",[e._v("requestAnimationFrame")])]),n("br"),n("label",{attrs:{for:"showBackground"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.showBackground,expression:"showBackground"}],attrs:{id:"showBackground",disabled:!e.isWebcamReady,type:"checkbox"},domProps:{checked:Array.isArray(e.showBackground)?e._i(e.showBackground,null)>-1:e.showBackground},on:{change:function(t){var n=e.showBackground,o=t.target,r=!!o.checked;if(Array.isArray(n)){var c=e._i(n,null);o.checked?c<0&&(e.showBackground=n.concat([null])):c>-1&&(e.showBackground=n.slice(0,c).concat(n.slice(c+1)))}else e.showBackground=r}}}),e._v(" Keep the webcam background? ")])]:e._e()],2)])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("small",[n("em",[e._v("Please wait (sometimes it takes a while)..")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("small",[e._v("("),n("em",[e._v("You must allow access to your camera")]),e._v(")")])}],!1,null,null,null);t.default=component.exports}}]);