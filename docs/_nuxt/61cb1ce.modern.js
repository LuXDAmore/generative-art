(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{652:function(n,e,t){"use strict";t.r(e);var o=t(3),r=t(10),l={name:"page-11",data:()=>({sketchManager:null}),mounted(){var n=this;return Object(o.a)((function*(){try{n.sketchManager=yield n.$sketch({animate:!0,context:"webgl",attributes:{antialias:!0},canvas:n.$refs.canvas},n.sketch)}catch(n){console.error(n)}}))()},beforeDestroy(){this.sketchManager&&this.sketchManager.unload()},methods:{sketch(n){var{context:e,canvas:canvas,width:t,height:o,pixelRatio:l}=n,c=new r.H({context:e,antialias:!0});c.setPixelRatio(l>3?3:l),c.setSize(t,o),c.setClearColor(new r.f("#ff992c"),1),c.physicallyCorrectLights=!0,c.outputEncoding=r.I;var v=new r.r(50,.1,2e4,2e4);v.position.set(0,0,54),v.lookAt(new r.E(1,1,1));var f={x:Math.random(),y:Math.random()},h=new r.x,x=new r.s(2,2,1,1),d=new r.y({vertexShader:"#define GLSLIFY 1\n// VSCode vertex\n#pragma vscode_glsllint_stage : vert\n\n// pass a few things along to the vertex shader\nvarying vec2 vUv;\n\nvoid main() {\n\n    vUv = uv;\n    gl_Position = vec4( position, 1.0) ;\n\n}\n",fragmentShader:"// VSCode Frag\nprecision mediump float;\n#define GLSLIFY 1\n\n// Const\nconst float PI = 3.1415926535897932384626433832795;\n\n// User values\nuniform float uTime;\nuniform vec2 uMousePosition;\nuniform float uHue;\nuniform float uHueVariation;\nuniform float uDensity;\nuniform float uDisplacement;\n\n// Varying\nvarying vec2 vUv;\n\n// Colors\nfloat hue2rgb( float f1, float f2, float hue ) {\n\n        if( hue <= 0.0 )\n            hue += 1.0;\n        else if( hue > 1.0 )\n            hue -= 1.0;\n\n        float res;\n\n        if( ( 6.0 * hue ) <= 1.0 )\n            res = f1 + (f2 - f1) * 6.0 * hue;\n        else if( ( 2.0 * hue ) < 1.0 )\n            res = f2;\n        else if( ( 3.0 * hue ) < 2.0 )\n            res = f1 + ( f2 - f1 ) * ( ( 2.0 / 3.0 ) - hue ) * 6.0;\n        else\n            res = f1;\n\n        return res;\n\n}\nvec3 hsl2rgb(vec3 hsl) {\n\n        vec3 rgb;\n\n        if( hsl.y == 0.0 ) {\n\n            rgb = vec3( hsl.z ); // Luminance\n\n        } else {\n\n            float f2;\n\n            if( hsl.z < 0.5 )\n                f2 = hsl.z * ( 1.0 + hsl.y );\n            else\n                f2 = hsl.z + hsl.y - hsl.y * hsl.z;\n\n            float f1 = 2.0 * hsl.z - f2;\n\n            rgb.r = hue2rgb( f1, f2, hsl.x + ( 1.0/3.0 ) );\n            rgb.g = hue2rgb( f1, f2, hsl. x );\n            rgb.b = hue2rgb( f1, f2, hsl.x - ( 1.0/3.0 ) );\n\n        }\n\n        return rgb;\n\n}\nvec3 hsl2rgb( float h, float s, float l ) {\n\n        return hsl2rgb(vec3(h, s, l));\n\n}\n\n// Noise\nfloat mod289( float x ) { return x - floor(x * (1.0 / 289.0)) * 289.0; }\nvec4 mod289( vec4 x ) { return x - floor(x * (1.0 / 289.0)) * 289.0; }\nvec4 perm( vec4 x ){ return mod289( ( ( x * 34.0 ) + 1.0 ) * x ); }\nfloat rand(vec2 co) { return fract( sin( dot( co.xy ,vec2( 12.9898, 78.233 ) ) ) * 43758.5453 ); }\nvec2 fade( vec2 t ) { return t * t * t * ( t * ( t * 6.0 - 15.0 ) + 10.0 ); }\n\nfloat cnoise( vec2 P ) {\n\n        vec4 Pi = floor(P.xyxy) + vec4(0.0, 0.0, 1.0, 1.0);\n        vec4 Pf = fract(P.xyxy) - vec4(0.0, 0.0, 1.0, 1.0);\n        Pi = mod(Pi, 289.0); // To avoid truncation effects in permutation\n        vec4 ix = Pi.xzxz;\n        vec4 iy = Pi.yyww;\n        vec4 fx = Pf.xzxz;\n        vec4 fy = Pf.yyww;\n        vec4 i = perm(perm(ix) + iy);\n        vec4 gx = 2.0 * fract(i * 0.0243902439) - 1.0; // 1/41 = 0.024...\n        vec4 gy = abs(gx) - 0.5;\n        vec4 tx = floor(gx + 0.5);\n        gx = gx - tx;\n        vec2 g00 = vec2(gx.x,gy.x);\n        vec2 g10 = vec2(gx.y,gy.y);\n        vec2 g01 = vec2(gx.z,gy.z);\n        vec2 g11 = vec2(gx.w,gy.w);\n        vec4 norm = 1.79284291400159 - 0.85373472095314 *\n        vec4(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11));\n        g00 *= norm.x;\n        g01 *= norm.y;\n        g10 *= norm.z;\n        g11 *= norm.w;\n        float n00 = dot(g00, vec2(fx.x, fy.x));\n        float n10 = dot(g10, vec2(fx.y, fy.y));\n        float n01 = dot(g01, vec2(fx.z, fy.z));\n        float n11 = dot(g11, vec2(fx.w, fy.w));\n        vec2 fade_xy = fade(Pf.xy);\n        vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);\n        float n_xy = mix(n_x.x, n_x.y, fade_xy.y);\n\n        return 2.3 * n_xy;\n\n}\n\n// Main\nvoid main () {\n\n    float mouseDistance = length( vUv - uMousePosition );\n    float t = uTime * .005;\n    float elevation =  vUv.y * uDensity * 30.0;\n\n    float shadow = smoothstep( 0.0, .3 + sin( t * 5.0 * PI ) * .1 , mouseDistance );\n    elevation += shadow * 5.0;\n\n    float displacement = cnoise( vec2( t + vUv.y * 2.0, t + vUv.x * 3.0 ) ) * uDisplacement * 3.;\n\n    elevation += displacement * 4.0;\n    elevation *= 2.0 + cnoise( vec2( t + vUv.y * 1.0, t + .5) ) * 2.0 ;\n\n    float light = .9 + fract( elevation ) ;\n    light *= .9 + (1.0 - ( displacement * displacement ) ) * .1;\n    elevation = floor( elevation );\n\n    float hue =  uHue + shadow * .1 + cnoise( vec2( elevation * .10, .1 + t ) ) * uHueVariation;\n    float saturation = .6;\n    float brightness =  - ( 1.0 - shadow ) * .1 + .5  - smoothstep( 0.0, .9, cnoise( vec2( elevation * .5, .4 + t * 5.0 ) ) ) * .1;\n\n    vec3 hslCol = vec3( hue, saturation, brightness );\n    vec3 col = hsl2rgb( hslCol ) * vec3( light, 1.0, 1.0 );\n\n    gl_FragColor = vec4( col, 1. );\n\n}\n",extensions:{derivatives:"#extension GL_OES_standard_derivatives : enable"},side:r.i,uniforms:{uTime:{type:"f",value:0},uHue:{type:"f",value:0},uHueVariation:{type:"f",value:0},uDensity:{type:"f",value:1},uDisplacement:{type:"f",value:.45},uMousePosition:{type:"v2",value:new r.D(Math.random(),Math.random())}}}),y=new r.o(x,d);return h.add(y),canvas.addEventListener("mousemove",(n=>{f.x=n.clientX/window.innerWidth,f.y=1-n.clientY/window.innerHeight}),!1),{render(n){var{time:time}=n;d.uniforms.uTime.value=time/3.6,d.uniforms.uMousePosition.value=f,c.render(h,v)},resize(n){var{viewportWidth:e,viewportHeight:t}=n;c.setSize(e,t,!1),v.aspect=e/t,v.updateProjectionMatrix()},unload(){c.dispose()}}}}},c=t(14),component=Object(c.a)(l,(function(){var n=this.$createElement,e=this._self._c||n;return e("main",{staticClass:"container canvas-container"},[e("canvas",{ref:"canvas"})])}),[],!1,null,null,null);e.default=component.exports}}]);