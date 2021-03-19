/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{330:function(e,n,t){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;function l(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},i=0;i<10;i++)n["_"+String.fromCharCode(i)]=i;if("0123456789"!==Object.getOwnPropertyNames(n).map((function(e){return n[e]})).join(""))return!1;var t={};return"abcdefghijklmnopqrst".split("").forEach((function(e){t[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},t)).join("")}catch(e){return!1}}()?Object.assign:function(e,source){for(var n,t,f=l(e),s=1;s<arguments.length;s++){for(var v in n=Object(arguments[s]))o.call(n,v)&&(f[v]=n[v]);if(r){t=r(n);for(var i=0;i<t.length;i++)c.call(n,t[i])&&(f[t[i]]=n[t[i]])}}return f}},411:function(e,n,t){var r=t(412),o=t(330),c=t(423),l=function(){};function f(e,progress,n){if("function"!=typeof(progress=progress||l))return Promise.reject(new Error("The second argument to load.all() and load.any() must be a function, or undefined"));var t,r,o=0,c=function(e,n,r,o){var c={target:e,total:t,count:r,progress:r/t,value:n};o&&(c.error=o),progress(c)};if(r=n?function(e){return v(e).then((function(e){return{value:e}}),(function(e){return{value:null,error:e}})).then((function(n){return c(e,n.value,++o,n.error),n.value}))}:function(e){return v(e).then((function(n){return c(e,n,++o),n}))},Array.isArray(e))return t=e.length,Promise.all(e.map((function(e){return r(e)})));if(e){var f=Object.keys(e).map((function(n){return{key:n,value:e[n]}}));return t=f.length,Promise.all(f.map((function(e){var n=e.key;return r(e.value).then((function(e){return{value:e,key:n}}))}))).then((function(e){return e.reduce((function(e,n){return e[n.key]=n.value,e}),{})}))}return Promise.reject(new Error("You must specify an array of assets or object group to load"))}function v(e){return e?("string"==typeof e&&(e={url:e}),c(e)?e:function(e){var i,n,t=e.type?e.type:null;if(t){if("function"==typeof t)return Promise.resolve(t);if(t=t.toLowerCase(),!e.url)return Promise.reject(new Error("When using loadAsset(), you must specify a URL or descriptor of the asset to load"));for(i=0;i<r.length;i++)if((n=r[i]).key===t)return Promise.resolve(n.load);return Promise.reject(new Error('Could not find an asset loader by the key "'+e.type+'"'))}if(!e.url)return Promise.reject(new Error("When using loadAsset(), you must specify a URL or descriptor of the asset to load"));var o=function(e){if(!e)return"";var n=e.lastIndexOf("/");-1!==n&&(e=e.substring(n+1));-1!==(n=e.indexOf("?"))&&(e=e.substring(0,n));-1!==(n=e.indexOf("#"))&&(e=e.substring(0,n));return-1!==(n=e.lastIndexOf("."))?e.substring(n):""}(e.url);if(!o)return Promise.reject(new Error('No extension found for input URL "'+e.url+'", try to specify a { type } such as "image" or "text"'));for(i=0;i<r.length;i++){if((n=r[i]).match)if("function"==typeof n.match?n.match(o):n.match.test(o))return Promise.resolve(n.load)}return Promise.reject(new Error('Could not infer an asset loader from the file type "'+o+'", try specifying { type } such as "image" or "text"'))}(e).then((function(n){return delete(e=o({},e)).type,n(e)}))):Promise.reject(new Error("You must specify a URL or descriptor of the asset to load"))}e.exports=v,e.exports.all=function(e,progress){return f(e,progress,!1)},e.exports.any=function(e,progress){return f(e,progress,!0)}},412:function(e,n,t){const r=t(413),o=t(416),c=t(422);e.exports=[{key:"json",match:/\.json$/i,load:o("json")},{key:"text",match:/\.txt$/i,load:o("text")},{key:"image",match:/\.(jpg|jpeg|svg|png|gif|webp|bmp|tga|tif|apng|wbpm|ico)$/i,load:c},r("audio",(function(){return new window.Audio})),r("video",(function(){return document.createElement("video")})),{key:"binary",match:/\.bin$/i,load:o("binary")},{key:"blob",load:o("blob")}]},413:function(e,n,t){var r=t(414);e.exports=function(e,n){return{key:e,match:function(n){return function(e){var n=r(e);return n?0===n.indexOf("audio")?"audio":0===n.indexOf("video")?"video":null:null}(n)===e},load:function(t){return new Promise((function(r,o){var c=!1,l=n(),f=function(){c||(c=!0,r(l))},v=(t.event||"canplay").toLowerCase();if("loadedmetadata"===v?l.onloadedmetadata=f:"canplaythrough"===v?l.oncanplaythrough=f:"loadeddata"===v?l.onloadeddata=f:l.oncanplay=f,l.onerror=function(n){c||(c=!0,o(new Error("Error while loading "+e+" at "+t.url)))},t.crossOrigin&&(l.crossOrigin=t.crossOrigin),void 0!==t.volume&&(l.volume=t.volume),void 0!==t.preload&&(l.preload=t.volume),void 0!==t.playbackRate&&(l.playbackRate=t.volume),void 0!==t.muted&&(l.muted=t.volume),void 0!==t.currentTime&&(l.currentTime=t.volume),void 0!==t.controls&&(l.controls=t.volume),void 0!==t.autoPlay&&(l.autoPlay=t.volume),l.src=t.url,l.readyState>=l.HAVE_ENOUGH_DATA)return c=!0,r(l);l.load()}))}}}},414:function(e,n,t){var r=t(415),o={};Object.keys(r).forEach((function(e){r[e].forEach((function(n){o[n]=e}))})),e.exports=function(e){if(!e)throw new TypeError("must specify extension string");return 0===e.indexOf(".")&&(e=e.substring(1)),o[e.toLowerCase()]}},415:function(e){e.exports=JSON.parse('{"audio/midi":["mid","midi","kar","rmi"],"audio/mp4":["mp4a","m4a"],"audio/mpeg":["mpga","mp2","mp2a","mp3","m2a","m3a"],"audio/ogg":["oga","ogg","spx"],"audio/webm":["weba"],"audio/x-matroska":["mka"],"audio/x-mpegurl":["m3u"],"audio/wav":["wav"],"video/3gpp":["3gp"],"video/3gpp2":["3g2"],"video/mp4":["mp4","mp4v","mpg4"],"video/mpeg":["mpeg","mpg","mpe","m1v","m2v"],"video/ogg":["ogv"],"video/quicktime":["qt","mov"],"video/webm":["webm"],"video/x-f4v":["f4v"],"video/x-fli":["fli"],"video/x-flv":["flv"],"video/x-m4v":["m4v"],"video/x-matroska":["mkv","mk3d","mks"]}')},416:function(e,n,t){var r=t(417),o=t(330);e.exports=function(e){return function(n){return("fetch"in window?window.fetch(n.url,n).then((function(n){if(/404/.test(n.status))throw new Error("Resource not found");if(!/^2/.test(n.status))throw new Error("Unexpected HTTP Status Code: "+n.status);if(!n.ok)throw new Error("Response not OK");return"json"===e?n.json():"binary"===e?n.arrayBuffer():"blob"===e?n.blob():n.text()})):function(e,n){return new Promise((function(t,c){var l="text";"json"===e?l="text":"binary"===e?l="arraybuffer":"blob"===e&&(l="blob"),n=o({},n,{json:!1,responseType:l}),r(n,(function(n,r,body){if(n)return c(n);if(/404/.test(r.statusCode))throw new Error("Resource not found");if(!/^2/.test(r.statusCode))return c(new Error("Unexpected HTTP Status Code: "+r.statusCode));if("json"===e)try{body=JSON.parse(body)}catch(n){return c(n)}t(body)}))}))}(e,n)).catch((function(e){throw new Error(e.message+" while loading file "+n.url)}))}}},417:function(e,n,t){"use strict";var r=t(418),o=t(419),c=t(420),l=t(421);function f(e,n,t){var r=e;return o(n)?(t=n,"string"==typeof e&&(r={uri:e})):r=l(n,{uri:e}),r.callback=t,r}function v(e,n,t){return d(n=f(e,n,t))}function d(e){if(void 0===e.callback)throw new Error("callback argument missing");var n=!1,t=function(t,r,body){n||(n=!0,e.callback(t,r,body))};function r(){var body=void 0;if(body=m.response?m.response:m.responseText||function(e){try{if("document"===e.responseType)return e.responseXML;var n=e.responseXML&&"parsererror"===e.responseXML.documentElement.nodeName;if(""===e.responseType&&!n)return e.responseXML}catch(e){}return null}(m),O)try{body=JSON.parse(body)}catch(e){}return body}function o(e){return clearTimeout(y),e instanceof Error||(e=new Error(""+(e||"Unknown XMLHttpRequest Error"))),e.statusCode=0,t(e,E)}function l(){if(!d){var n;clearTimeout(y),n=e.useXDR&&void 0===m.status?200:1223===m.status?204:m.status;var o=E,l=null;return 0!==n?(o={body:r(),statusCode:n,method:w,headers:{},url:x,rawRequest:m},m.getAllResponseHeaders&&(o.headers=c(m.getAllResponseHeaders()))):l=new Error("Internal XMLHttpRequest Error"),t(l,o,o.body)}}var f,d,m=e.xhr||null;m||(m=e.cors||e.useXDR?new v.XDomainRequest:new v.XMLHttpRequest);var y,x=m.url=e.uri||e.url,w=m.method=e.method||"GET",body=e.body||e.data,h=m.headers=e.headers||{},j=!!e.sync,O=!1,E={body:void 0,headers:{},statusCode:0,method:w,url:x,rawRequest:m};if("json"in e&&!1!==e.json&&(O=!0,h.accept||h.Accept||(h.Accept="application/json"),"GET"!==w&&"HEAD"!==w&&(h["content-type"]||h["Content-Type"]||(h["Content-Type"]="application/json"),body=JSON.stringify(!0===e.json?body:e.json))),m.onreadystatechange=function(){4===m.readyState&&setTimeout(l,0)},m.onload=l,m.onerror=o,m.onprogress=function(){},m.onabort=function(){d=!0},m.ontimeout=o,m.open(w,x,!j,e.username,e.password),j||(m.withCredentials=!!e.withCredentials),!j&&e.timeout>0&&(y=setTimeout((function(){if(!d){d=!0,m.abort("timeout");var e=new Error("XMLHttpRequest timeout");e.code="ETIMEDOUT",o(e)}}),e.timeout)),m.setRequestHeader)for(f in h)h.hasOwnProperty(f)&&m.setRequestHeader(f,h[f]);else if(e.headers&&!function(e){for(var i in e)if(e.hasOwnProperty(i))return!1;return!0}(e.headers))throw new Error("Headers cannot be set on an XDomainRequest object");return"responseType"in e&&(m.responseType=e.responseType),"beforeSend"in e&&"function"==typeof e.beforeSend&&e.beforeSend(m),m.send(body||null),m}e.exports=v,e.exports.default=v,v.XMLHttpRequest=r.XMLHttpRequest||function(){},v.XDomainRequest="withCredentials"in new v.XMLHttpRequest?v.XMLHttpRequest:r.XDomainRequest,function(e,n){for(var i=0;i<e.length;i++)n(e[i])}(["get","put","post","patch","head","delete"],(function(e){v["delete"===e?"del":e]=function(n,t,r){return(t=f(n,t,r)).method=e.toUpperCase(),d(t)}}))},418:function(e,n,t){(function(n){var t;t="undefined"!=typeof window?window:void 0!==n?n:"undefined"!=typeof self?self:{},e.exports=t}).call(this,t(20))},419:function(e,n){e.exports=function(e){if(!e)return!1;var n=t.call(e);return"[object Function]"===n||"function"==typeof e&&"[object RegExp]"!==n||"undefined"!=typeof window&&(e===window.setTimeout||e===window.alert||e===window.confirm||e===window.prompt)};var t=Object.prototype.toString},420:function(e,n){var t=function(e){return e.replace(/^\s+|\s+$/g,"")};e.exports=function(e){if(!e)return{};for(var n,r={},o=t(e).split("\n"),i=0;i<o.length;i++){var c=o[i],l=c.indexOf(":"),f=t(c.slice(0,l)).toLowerCase(),v=t(c.slice(l+1));void 0===r[f]?r[f]=v:(n=r[f],"[object Array]"===Object.prototype.toString.call(n)?r[f].push(v):r[f]=[r[f],v])}return r}},421:function(e,n){e.exports=function(){for(var e={},i=0;i<arguments.length;i++){var source=arguments[i];for(var n in source)t.call(source,n)&&(e[n]=source[n])}return e};var t=Object.prototype.hasOwnProperty},422:function(e,n){e.exports=function(e){return new Promise((function(n,t){var r=!1,image=new window.Image;image.onload=function(){r||(r=!0,n(image))},image.onerror=function(){r||(r=!0,t(new Error("Error while loading image at "+e.url)))},e.crossOrigin&&(image.crossOrigin=e.crossOrigin),image.src=e.url}))}},423:function(e,n){function t(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}e.exports=t,e.exports.default=t},425:function(e,n,t){"use strict";(function(e){var r=t(11),o=t(3),c=(t(15),t(9),t(12),t(411)),l=t.n(c),f=t(10),v=t(630),d=t(631);function m(object,e){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),n.push.apply(n,t)}return n}function y(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(n){Object(r.a)(e,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(source,n))}))}return e}var x={animate:!0,context:"webgl",attributes:{antialias:!0}};n.a={name:"page-9",data:()=>({sketchManager:null}),mounted(){var e=this;this.$nextTick(Object(o.a)((function*(){try{e.sketchManager=yield e.$sketch(y(y({},x),{},{canvas:e.$refs.canvas}),e.sketch)}catch(e){console.error(e)}})))},beforeDestroy(){this.sketchManager&&this.sketchManager.unload()},methods:{sketch:n=>Object(o.a)((function*(){var{context:r,canvas:canvas,width:o,height:c,update:m}=n,{OrbitControls:y}=yield t.e(0).then(t.bind(null,426)),x="".concat(e.env.base,"luna.jpg"),image=yield l()(x),{width:w,height:h}=image,j=w/h;m({dimensions:[w,h]});var O=new f.H({context:r}),E=new f.r(45,o/c,.001,1e3),k=new y(E,canvas),P=new f.s(j,1,45,45),R=new f.y({vertexShader:d.a,fragmentShader:v.a,extensions:{derivatives:"#extension GL_OES_standard_derivatives : enable"},side:f.i,uniforms:{image:{type:"t",value:(new f.C).load(x)},time:{type:"f",value:0},resolution:{type:"v2",value:new f.D(o,c)},uvRate1:{value:new f.D(1,1)}}}),z=new f.o(P,R),C=new f.x;return E.position.set(.3,0,-1.5),C.add(z),{resize(e){var{pixelRatio:n,viewportWidth:t,viewportHeight:r}=e;m({dimensions:[t,r]}),O.setPixelRatio(n),O.setSize(t,r),R.uniforms.resolution.value.x=t,R.uniforms.resolution.value.y=r,E.aspect=t/r,E.updateProjectionMatrix()},render(e){var{time:time}=e;R.uniforms.time.value=time,k.update(),O.render(C,E)},unload(){k.dispose(),O.dispose()}}}))()}}}).call(this,t(139))},630:function(e,n,t){"use strict";n.a="#pragma vscode_glsllint_stage : frag\n\nprecision mediump float;\n#define GLSLIFY 1\n\nvarying vec2 vUv;\nvarying float vWave;\nuniform sampler2D image;\n\nvoid main() {\n\n    float wave = vWave * 0.25;\n    float r = texture2D(image, vUv + wave).r;\n    float g = texture2D(image, vUv).g;\n    float b = texture2D(image, vUv).b;\n\n    vec3 texture = vec3(r, g, b);\n\n    gl_FragColor = vec4(texture, 1.);\n\n}\n"},631:function(e,n,t){"use strict";n.a="#pragma vscode_glsllint_stage : vert\n\nprecision mediump float;\n#define GLSLIFY 1\n\nvarying vec2 vUv;\nvarying float vWave;\nuniform float time;\n\nvec3 mod289(vec3 x) {\n\n    return x - floor(x * (1.0 / 289.0)) * 289.0;\n\n}\n\nvec4 mod289(vec4 x) {\n\n    return x - floor(x * (1.0 / 289.0)) * 289.0;\n\n}\n\nvec4 permute(vec4 x) {\n\n    return mod289(((x*34.0)+1.0)*x);\n\n}\n\nvec4 taylorInvSqrt(vec4 r) {\n\n    return 1.79284291400159 - 0.85373472095314 * r;\n\n}\n\nfloat snoise(vec3 v) {\n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\n  // First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n  // Other corners\n  vec3 g = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g;\n  vec3 i1 = min( g.xyz, l.zxy );\n  vec3 i2 = max( g.xyz, l.zxy );\n\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy;\n  vec3 x3 = x0 - D.yyy;\n\n  // Permutations\n  i = mod289(i);\n  vec4 p = permute( permute( permute(\n             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n  float n_ = 0.142857142857;\n  vec3  ns = n_ * D.wyz - D.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1.xy,h.z);\n  vec3 p3 = vec3(a1.zw,h.w);\n\n  // Normalise gradients\n  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n  // Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),\n                                dot(p2,x2), dot(p3,x3) ) );\n}\n\nvoid main() {\n\n    vUv = uv;\n\n    vec3 pos = position;\n    float noiseFreq = 3.5;\n    float noiseAmp = 0.15;\n\n    vec3 noisePos = vec3( pos.x * noiseFreq + time, pos.y, pos.z );\n    pos.z += snoise( noisePos ) * noiseAmp;\n\n    vWave = pos.z;\n\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);\n\n}\n"},664:function(e,n,t){"use strict";t.r(n);var r=t(425).a,o=t(14),component=Object(o.a)(r,(function(){var e=this.$createElement,n=this._self._c||e;return n("main",{staticClass:"container canvas-container"},[n("canvas",{ref:"canvas"})])}),[],!1,null,null,null);n.default=component.exports}}]);