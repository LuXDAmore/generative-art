(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{470:function(e,n,t){var content=t(603);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(56).default)("1335a97a",content,!0,{sourceMap:!1})},602:function(e,n,t){"use strict";t(470)},603:function(e,n,t){(n=t(55)(!1)).push([e.i,'.layout[data-v-0fc31f90]:before{position:fixed;top:0;left:0;z-index:-1;display:block;width:100%;height:100%;background-color:#333;content:""}.layout[data-v-0fc31f90]{min-height:100vh;color:#fff}.layout-readme .container[data-v-0fc31f90]{padding-top:135px}@media (min-width:800px){.layout-readme .container[data-v-0fc31f90]{padding-top:45px}}',""]),e.exports=n},623:function(e,n,t){"use strict";t.r(n);t(28),t(38),t(32),t(52),t(53),t(54),t(12),t(33);var r=t(22),o=(t(21),t(3)),c=t(248),l=t(611);function v(object,e){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),n.push.apply(n,t)}return n}function h(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(n){Object(r.a)(e,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(source,n))}))}return e}var f={animate:!0,context:"webgl",attributes:{antialias:!0}},d={name:"navigate",components:{"nav-menu":function(){return t.e(2).then(t.bind(null,626))}},data:function(){return{sketchManager:null,animations:{pageValue:0}}},computed:{pageToValue:function(){var e=0;switch(this.$route.path){case"/navigate/page-2":e=.5;break;case"/navigate/page-3":e=1}return e}},watch:{"$route.path":{handler:"onRouteChange",immediate:!0}},mounted:function(){var e=this;this.$nextTick(Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e.$sketch(h(h({},f),{},{canvas:e.$refs.canvas}),e.sketch);case 3:e.sketchManager=n.sent,n.next=9;break;case 6:n.prev=6,n.t0=n.catch(0),console.error(n.t0);case 9:case"end":return n.stop()}}),n,null,[[0,6]])}))))},beforeDestroy:function(){this.sketchManager&&this.sketchManager.unload()},methods:{createSphere:function(){var u=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2?arguments[2]:void 0;u*=-Math.PI,e*=2*Math.PI;var t=Math.sin(u)*Math.cos(e),r=Math.sin(u)*Math.sin(e),o=Math.cos(u);n.set(t,r,o)},createGrayKlein:function(){var u=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2?arguments[2]:void 0;u*=-4*Math.PI,e*=2*Math.PI;var a=3,t=3,r=1,o=(a+Math.cos(t*u/2)*Math.sin(e)-Math.sin(t*u/2)*Math.sin(2*e))*Math.cos(r*u/2),c=(a+Math.cos(t*u/2)*Math.sin(e)-Math.sin(t*u/2)*Math.sin(2*e))*Math.sin(r*u/2),l=Math.sin(t*u/2)*Math.sin(e)+Math.cos(t*u/2)*Math.sin(2*e);n.set(o,c,l)},onRouteChange:function(){l.a.to(this.animations,{duration:.63,pageValue:this.pageToValue})},sketch:function(e){var n=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var o,canvas,l,v,h,f,d,m,w,x,M,y,O,j,k,P,S;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=e.context,canvas=e.canvas,l=e.width,v=e.height,h=e.pixelRatio,r.next=3,t.e(1).then(t.bind(null,612)).then((function(e){return e.default||e}));case 3:return f=r.sent,d=f.OrbitControls,m=l/v,w=h>3?3:h,x=new c.H({context:o}),M=new c.r(45,m,.001,1e3),y=new d(M,canvas),O=new c.q(n.createGrayKlein,100,100),j=new c.q(n.createSphere,100,100),k=new c.y({vertexShader:"#pragma vscode_glsllint_stage : vert\n\nprecision mediump float;\n#define GLSLIFY 1\n\nuniform float page;\n\nvarying vec2 vUv;\nvarying vec3 vNormal;\n\nattribute vec3 positionSphere;\n\nvoid main() {\n\n    vUv = uv;\n\n    vNormal = normal;\n\n    vec3 final = mix(\n        position,\n        positionSphere,\n        smoothstep(\n            0.,\n            1.,\n            page\n        )\n    );\n\n    gl_Position = projectionMatrix * modelViewMatrix * vec4( final, max( .6, - page ) );\n\n}\n",fragmentShader:"#pragma vscode_glsllint_stage : frag\n\nprecision mediump float;\n#define GLSLIFY 1\n\nuniform float page;\n\nvarying vec2 vUv;\nvarying vec3 vNormal;\n\nvec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {\n\n    return a + b * cos( 6.28318 * ( c * t + d ) );\n\n}\n\nvoid main () {\n\n    float diff = abs(\n        dot(\n            normalize(\n                vec3(\n                    1.,\n                    1.,\n                    1.\n                )\n            ),\n            vNormal\n        )\n    );\n\n    // Colors\n    // https://iquilezles.org/www/articles/palettes/palettes.htm\n    vec3 a = vec3( .8, page, page );\n    vec3 b = vec3( .2, .4, .2 );\n    vec3 c = vec3( 2., page, page );\n    vec3 d = vec3( 1., .25, .25 );\n\n    vec3 color = palette( diff, a, b, c, d * ( page / 2. ) );\n\n    gl_FragColor = vec4(\n        color,\n        1.\n    );\n\n}\n",extensions:{derivatives:"#extension GL_OES_standard_derivatives : enable"},side:c.i,uniforms:{time:{type:"f",value:0},page:{type:"f",value:n.animations.pageValue},resolution:{type:"v2",value:new c.D(l,v)},uvRate1:{value:new c.D(1,1)}}}),P=new c.o(O,k),S=new c.x,x.setPixelRatio(w),x.setSize(l,v),x.setClearColor(new c.f("#333"),1),O.setAttribute("positionSphere",new c.d(j.attributes.position.array,3)),M.position.set(1,1,18),M.updateProjectionMatrix(),S.add(P),r.abrupt("return",{resize:function(e){var n=e.pixelRatio,t=e.viewportWidth,r=e.viewportHeight;x.setPixelRatio(n),x.setSize(t,r),k.uniforms.resolution.value.x=t,k.uniforms.resolution.value.y=r,M.aspect=t/r,M.updateProjectionMatrix()},render:function(e){var time=e.time;k.uniforms.time.value=time,k.uniforms.page.value=n.animations.pageValue,P.rotateX(.001),P.rotateY(.001),y.update(),x.render(S,M)},unload:function(){y.dispose(),x.dispose()}});case 23:case"end":return r.stop()}}),r)})))()}}},m=(t(602),t(51)),component=Object(m.a)(d,(function(){var e=this.$createElement,n=this._self._c||e;return n("div",{staticClass:"layout"},[n("canvas",{ref:"canvas",staticClass:"absolute z-index--minus-1"}),n("nav-menu",{attrs:{"keep-navigation-menu-opened":""}}),n("nuxt")],1)}),[],!1,null,"0fc31f90",null);n.default=component.exports}}]);