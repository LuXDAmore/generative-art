(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{618:function(e,n,t){"use strict";t.r(n);var r=t(21),c=(t(19),t(2)),o=t(546),l=t.n(o);function f(object,e){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),n.push.apply(n,t)}return n}function v(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(n){Object(r.a)(e,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(source,n))}))}return e}var h={context:"webgl",animate:!0},m={name:"page-3",data:function(){return{sketchManager:null}},mounted:function(){var e=this;this.$nextTick(Object(c.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e.$sketch(v(v({},h),{},{canvas:e.$refs.canvas}),e.sketch);case 3:e.sketchManager=n.sent,n.next=9;break;case 6:n.prev=6,n.t0=n.catch(0),console.error(n.t0);case 9:case"end":return n.stop()}}),n,null,[[0,6]])}))))},beforeDestroy:function(){this.sketchManager&&this.sketchManager.unload()},methods:{sketch:function(e){var n=e.gl;return l()({gl:n,frag:"#pragma vscode_glsllint_stage : frag\n\nprecision highp float;\n#define GLSLIFY 1\n\nuniform float time;\nvarying vec2 vUv;\n\nvoid main () {\n\n    vec3 color = 0.5 + 0.5 * cos( time + vUv.xyx + vec3( 0.0, 2.0, 4.0 ) );\n\n    gl_FragColor = vec4(\n        color,\n        1.0\n    );\n\n}\n",uniforms:{time:function(e){return e.time}}})}}},O=t(44),component=Object(O.a)(m,(function(){var e=this.$createElement,n=this._self._c||e;return n("main",{staticClass:"container canvas-container"},[n("canvas",{ref:"canvas"})])}),[],!1,null,null,null);n.default=component.exports}}]);