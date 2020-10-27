(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{614:function(e,n,t){"use strict";t.r(n);t(28),t(38),t(32),t(52),t(53),t(54),t(12),t(33);var r=t(49),o=t(22),c=(t(21),t(3)),l=t(248);function v(object,e){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),n.push.apply(n,t)}return n}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(n){Object(o.a)(e,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(source,n))}))}return e}var m={animate:!0,context:"webgl",attributes:{antialias:!0}},f={name:"audio-video",data:function(){return{sketchManager:null}},mounted:function(){var e=this;this.$nextTick(Object(c.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e.$sketch(d(d({},m),{},{canvas:e.$refs.canvas}),e.sketch);case 3:e.sketchManager=n.sent,n.next=9;break;case 6:n.prev=6,n.t0=n.catch(0),console.error(n.t0);case 9:case"end":return n.stop()}}),n,null,[[0,6]])}))))},beforeDestroy:function(){this.sketchManager&&this.sketchManager.unload()},methods:{sketch:function(e){var n=this;return Object(c.a)(regeneratorRuntime.mark((function o(){var c,canvas,v,d,m,f,h,w,x,y,O,U,j,_,k,D,M,audio,P,S,C,video,E,L,R,F,G,Y,$;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return c=e.context,canvas=e.canvas,v=e.width,d=e.height,o.next=3,t.e(1).then(t.bind(null,612)).then((function(e){return e.default||e}));case 3:return m=o.sent,f=m.OrbitControls,h=t(461),w=!1,x=new l.H({context:c}),y=new l.w,O=new l.E,U=function(e){O.x=e.clientX/window.innerWidth*2-1,O.y=-e.clientY/window.innerHeight*2+1,y.setFromCamera(O,j);var n=y.intersectObjects(G.children),t=Object(r.a)(n,1)[0],o=t&&t.point?t.point:null;w=!!o},j=new l.r(63,1,.001,1e3),_=new f(j,canvas),k=new l.s(v/d,1,54,54),D={bass:[20,140],lowMid:[140,400],mid:[400,2600],highMid:[2600,5200],treble:[5200,14e3]},2048,!1,M=new l.b,audio=new l.u(M),P=new l.a(audio,2048),S=function(data,e){for(var n=Math.round(e[0]/24e3*data.length),t=Math.round(e[1]/24e3*data.length),r=0,o=0,i=n;i<=t;i++)r+=data[i],o+=1;return r/o/255},C=function(e){audio.gain.gain.value=.001,audio.setMediaStreamSource(e),audio.context.resume()},video=document.createElement("video"),E=function(e){video.srcObject=e,video.width=v,video.height=d,video.playsinline=!0,video.muted=!0,video.autoplay=!0,video.oncanplaythrough=function(){return R.uniforms.video.value.needsUpdate=!0},video.play()},L=function e(){canvas.removeEventListener("click",e,!1),n.$refs.title.remove();try{navigator.mediaDevices.getUserMedia({audio:!0,video:!1}).then(C)}catch(e){console.error(e),window.alert("You must allow access to your microphone")}try{navigator.mediaDevices.getUserMedia({video:{width:v,height:d,facingMode:"user"},audio:!1}).then(E)}catch(e){console.error(e),window.alert("You must allow access to your webcam")}},R=new l.y({vertexShader:"#define GLSLIFY 1\n#pragma vscode_glsllint_stage : vert\n\nvarying vec2 vUv;\nvarying vec3 vPosition;\n\nvoid main () {\n\n    vUv = uv;\n\n    vPosition = position;\n\n    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n}\n",fragmentShader:"#define GLSLIFY 1\n#pragma vscode_glsllint_stage : frag\n\nuniform sampler2D microphone;\nuniform sampler2D video;\n\nuniform float bass;\nuniform float mid;\nuniform float treble;\n\nuniform float time;\n\nuniform vec3 mouse;\nuniform float mouse_radius;\n\nvarying vec3 vPosition;\n\nvarying vec2 vUv;\n\nfloat map(\n    float value,\n    float min1,\n    float max1,\n    float min2,\n    float max2\n) {\n\n    return min2 + ( value - min1 ) * ( max2 - min2 ) / ( max1 - min1 );\n\n}\n\nvoid main() {\n\n    vec3 webcam = texture2D(\n        video,\n        vUv\n    ).rgb;\n\n    vec2 displacedUv = vec2(\n        vUv.x,\n        vUv.y\n    );\n\n    displacedUv.y = mix(\n        vUv.y,\n        bass,\n        1.0\n    );\n    displacedUv.x = mix(\n        vUv.x,\n        mid,\n        treble\n    );\n\n    float dist = length( vPosition - mouse );\n    float prox = 1. - map(\n        dist,\n        0.,\n        mouse_radius,\n        0.,\n        1.\n    );\n\n    prox = clamp(\n        prox,\n        0.,\n        1.\n    );\n\n    // Microphone\n    vec3 backgroundColor = vec3( displacedUv.y, displacedUv.x, prox );\n\n    float f = texture2D( microphone, vec2( displacedUv.x, 0.0 ) ).r;\n    float g = texture2D( microphone, vec2( displacedUv.x, 0.0 ) ).g;\n    float b = texture2D( microphone, vec2( displacedUv.x, 0.0 ) ).b;\n\n    vec3 color = vec3( f, g, b );\n\n    float i = sin( step( vUv.y, f ) * step( f - 0.0125, vUv.y ) );\n\n    // Webcam\n    webcam.r = webcam.r + ( 1. - bass );\n    webcam.g = webcam.g + ( 1. - treble );\n    webcam.b = webcam.b + ( 1. - mid );\n\n    // Color mixer\n    vec4 mixed = vec4( mix( webcam, mix( backgroundColor, color, i ), bass ), 1.0 );\n\n    gl_FragColor = mixed;\n\n}\n",extensions:{derivatives:"#extension GL_OES_standard_derivatives : enable"},side:l.i,uniforms:{time:{type:"f",value:0},mouse_radius:{type:"f",value:.3},bass:{type:"f",value:0},mid:{type:"f",value:0},treble:{type:"f",value:0},video:{type:"t",value:new l.G(video)},microphone:{type:"t",value:new l.g(P.data,1024,1,l.m)},mouse:{type:"v3",value:O},resolution:{type:"v2",value:new l.D(v,d)},uvRate1:{value:new l.D(1,1)}}}),F=new l.o(k,R),G=new l.x,Y={mouse_radius:.3},$=new h.GUI,canvas.addEventListener("click",L,!1),canvas.addEventListener("mousemove",U,!1),j.position.set(0,0,1),G.add(F),$.add(Y,"mouse_radius",0,1,.1),$.close(),o.abrupt("return",{resize:function(e){var n=e.pixelRatio,t=e.viewportWidth,r=e.viewportHeight;x.setPixelRatio(n),x.setSize(t,r),R.uniforms.resolution.value.x=t,R.uniforms.resolution.value.y=r,j.aspect=t/r,j.updateProjectionMatrix()},render:function(e){var time=e.time,data=P.getFrequencyData(),n=S(data,D.bass),t=S(data,D.mid),r=S(data,D.treble);R.uniforms.bass.value=n,R.uniforms.mid.value=t,R.uniforms.treble.value=r,R.uniforms.microphone.value.needsUpdate=!0,R.uniforms.time.value=time,R.uniforms.mouse_radius.value=Y.mouse_radius,w&&(R.uniforms.mouse.value=O),_.update(),x.render(G,j)},unload:function(){audio.context.suspend(),$.destroy(),x.dispose()}});case 15:case"end":return o.stop()}}),o)})))()}}},h=t(51),component=Object(h.a)(f,(function(){var e=this.$createElement,n=this._self._c||e;return n("main",{staticClass:"container canvas-container"},[n("h6",{ref:"title",staticClass:"absolute z-index--1 text--center text--red no-pointer-event cursor--pointer"},[this._v(" Click on the canvas"),n("br"),n("small",[this._v("(allow access to camera and microphone)")])]),n("canvas",{ref:"canvas"})])}),[],!1,null,null,null);n.default=component.exports}}]);