(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{577:function(e,n,t){var content=t(690);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(53).default)("25f81fdc",content,!0,{sourceMap:!1})},689:function(e,n,t){"use strict";t(577)},690:function(e,n,t){(n=t(52)(!1)).push([e.i,".readme .markdown-body[data-v-b4f6515e]{width:100%;max-width:736px;padding:0 36px;line-height:1.5;background-color:#fff}.readme .markdown-body[data-v-b4f6515e]  pre code .hljs-attr,.readme .markdown-body[data-v-b4f6515e]  pre code .hljs-built_in,.readme .markdown-body[data-v-b4f6515e]  pre code .hljs-comment,.readme .markdown-body[data-v-b4f6515e]  pre code .hljs-quote,.readme .markdown-body[data-v-b4f6515e]  pre code .hljs-variable{color:#900}.readme .markdown-body[data-v-b4f6515e]  pre code .hljs-literal,.readme .markdown-body[data-v-b4f6515e]  pre code .hljs-number,.readme .markdown-body[data-v-b4f6515e]  pre code .hljs-tag .hljs-attr{color:#035e21}.readme .markdown-body[data-v-b4f6515e]  pre code{max-width:none}.readme .markdown-body[data-v-b4f6515e] >section>p:nth-child(2){min-height:30px;font-size:0}.readme .markdown-body[data-v-b4f6515e] >section>p:nth-child(2)>a{display:inline-block;margin:2px 1px}",""]),e.exports=n},715:function(e,n,t){"use strict";t.r(n);t(117),t(68),t(34),t(55),t(80),t(69);var l=t(493),r=t(682),o=t.n(r),c=t(683),h=t.n(c),d=t(684),m=t.n(d);o.a.registerLanguage("bash",h.a),o.a.registerLanguage("javascript",m.a);var f={name:"homepage",layout:"readme",head:function(){return{link:[{once:!0,hid:"preload-badge-npm-v",rel:"preload",as:"image",href:"https://img.shields.io/npm/v/@luxdamore/nuxt-canvas-sketch/latest.svg?style=flat-square"},{once:!0,hid:"preload-badge-npm-dt",rel:"preload",as:"image",href:"https://img.shields.io/npm/dt/@luxdamore/nuxt-canvas-sketch.svg?style=flat-square"},{once:!0,hid:"preload-badge-circleci",rel:"preload",as:"image",href:"https://img.shields.io/circleci/build/github/LuXDAmore/generative-art.svg?style=flat-square"},{once:!0,hid:"preload-badge-dependencies",rel:"preload",as:"image",href:"https://img.shields.io/badge/dependencies-up%20to%20date-brightgreen.svg?style=flat-square"},{once:!0,hid:"preload-badge-npm",rel:"preload",as:"image",href:"https://img.shields.io/npm/l/@luxdamore/nuxt-canvas-sketch.svg?style=flat-square"},{once:!0,hid:"preload-badge-paypal",rel:"preload",as:"image",href:"https://img.shields.io/badge/paypal-donate-black.svg?style=flat-square"}]}},computed:{readme:function(){return'<section><h1>🎉 Generative Art || ThreeJs - Nuxt Canvas Sketch</h1>\n<p><a href="https://luxdamore.github.io/generative-art/"><img src="https://img.shields.io/badge/code%20quality-A-informational?style=flat" alt="Code Quality"></a><br>\n<a href="https://npmjs.com/package/@luxdamore/nuxt-canvas-sketch"><img src="https://img.shields.io/badge/dependencies-up%20to%20date-darkgreen.svg?style=flat" alt="Dependencies"></a><br>\n<a href="https://circleci.com/gh/LuXDAmore/generative-art"><img src="https://img.shields.io/circleci/project/github/LuXDAmore/generative-art.svg?style=flat&amp;color=darkgreen" alt="Circle CI"></a><br>\n<a href="https://npmjs.com/package/@luxdamore/nuxt-canvas-sketch"><img src="https://img.shields.io/npm/dt/@luxdamore/nuxt-canvas-sketch.svg?style=flat&amp;color=orange" alt="npm downloads"></a><br>\n<a href="https://npmjs.com/package/@luxdamore/nuxt-canvas-sketch"><img src="https://img.shields.io/npm/v/@luxdamore/nuxt-canvas-sketch/latest.svg?style=flat&amp;color=orange" alt="npm version"></a><br>\n<a href="https://www.paypal.me/luxdamore"><img src="https://img.shields.io/badge/paypal-donate-black.svg?style=flat" alt="Donate"></a></p>\n<blockquote>\n<p>Generative Art is the idea realized as genetic code of artificial events, as construction of dynamic complex systems able to generate endless variations. This is also a nuxt-module (@luxdamore/nuxt-canvas-sketch) - [threejs and tensorflow are not included].</p>\n</blockquote>\n<h2>💘 Motivation</h2>\n<p>I\'m introducing myself into the <strong>Generative art</strong>, <strong>3D art</strong>, <strong>Visual design</strong> and <strong>Creative coding</strong> worlds.</p>\n<p>So, why i can\'t do this with my favorite libraries and framework?<br>\nInfact, this is also a module for <a href="https://nuxtjs.org/"><strong>NuxtJS</strong></a>, it inject the <a href="https://github.com/mattdesl/canvas-sketch">canvas-sketch</a> library with <a href="https://github.com/mattdesl/canvas-sketch-util"><code>canvas-sketch-utils</code></a> and <a href="https://github.com/mattdesl/load-asset"><code>load-asset</code></a> (from the creative coder <a href="https://www.mattdesl.com/">Matt DesLauriers</a>).</p>\n<p>After installation, you have access in NuxtJS (on the <a href="https://nuxtjs.org/docs/2.x/directory-structure/plugins#client-or-server-side-only">client-side</a>) at two things, <code>$canvasSketch</code> (the main module, used internally) and at the method <code>$sketch</code> (it starts the sketch).</p>\n<p>Check out the <a href="./example/pages">example/pages</a> folder for some demos.<br>\n<em>Every page correspond to an example in the <a href="https://luxdamore.github.io/generative-art">main website</a></em>.</p>\n<blockquote>\n<p>N.B.: This is a <em>work-in-progress project</em>, I\'m learning and testing new things here.</p>\n</blockquote>\n<h2>Setup</h2>\n<ol>\n<li>Add <code>@luxdamore/nuxt-canvas-sketch</code> dependency to your project;</li>\n<li>Inject <code>@luxdamore/nuxt-canvas-sketch</code> as a <code>modules</code> in your <code>nuxt.config.js</code>.</li>\n</ol>\n<pre><code class="language-bash">\n    <span class="hljs-comment"># cmd</span>\n    yarn add @luxdamore/nuxt-canvas-sketch <span class="hljs-comment"># or npm install --save @luxdamore/nuxt-canvas-sketch</span>\n\n</code></pre>\n<pre><code class="language-js">\n    <span class="hljs-comment">// nuxt.config.js</span>\n    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n\n        <span class="hljs-comment">// Module injection</span>\n        <span class="hljs-attr">modules</span>: [ <span class="hljs-string">\'@luxdamore/nuxt-canvas-sketch\'</span> ],\n\n        <span class="hljs-comment">// Module configuration</span>\n        <span class="hljs-attr">canvasSketch</span>: {\n            <span class="hljs-attr">hideErrorsInConsole</span>: <span class="hljs-literal">false</span>,\n            <span class="hljs-attr">hideGenericMessagesInConsole</span>: <span class="hljs-literal">false</span>, <span class="hljs-comment">// `true` in production</span>\n        },\n\n    };\n\n</code></pre>\n<h2>Usage</h2>\n<blockquote>\n<p>N.B. : I\'m using the <a href="https://github.com/mattdesl/canvas-sketch/blob/master/docs/api.md#sketchmanager">sketchManager</a>, because i think with VueJS it\'s the better way to remove and clean handlers during the destroy phase.</p>\n</blockquote>\n<pre><code class="language-html">\n    <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"canvas__container"</span>&gt;</span>\n\n            <span class="hljs-tag">&lt;<span class="hljs-name">canvas</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">"canvas"</span> /&gt;</span>\n\n        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n        <span class="hljs-comment">// Page, component or layout</span>\n        <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n            <span class="hljs-attr">data</span>: <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> (\n                {\n                    <span class="hljs-attr">sketchManager</span>: <span class="hljs-literal">null</span>,\n                }\n            ),\n            <span class="hljs-keyword">async</span> mounted() {\n\n                <span class="hljs-keyword">try</span> {\n\n                    <span class="hljs-keyword">this</span>.sketchManager = <span class="hljs-keyword">await</span> <span class="hljs-keyword">this</span>.$sketch(\n                        <span class="hljs-comment">// Settings of the sketch</span>\n                        {\n                            <span class="hljs-attr">maxPixelRatio</span>: <span class="hljs-number">3</span>,\n                            <span class="hljs-attr">hotkeys</span>: <span class="hljs-literal">false</span>,\n                            <span class="hljs-comment">// or you can pass a DOMElement document.querySelector( \'canvas\' )</span>\n                            <span class="hljs-attr">canvas</span>: <span class="hljs-keyword">this</span>.$refs.canvas,\n                        },\n                        <span class="hljs-comment">// Method for the rendering</span>\n                        <span class="hljs-keyword">this</span>.sketch,\n                    );\n\n                    <span class="hljs-comment">// Ensure every listener is removed on-component-destoy</span>\n                    <span class="hljs-keyword">this</span>.$once(\n                        <span class="hljs-string">\'hook:beforeDestroy\'</span>,\n                        () =&gt; <span class="hljs-keyword">this</span>.sketchManager.unload()\n                    );\n\n                } <span class="hljs-keyword">catch</span>( e ) {\n\n                    <span class="hljs-built_in">console</span>.error(\n                        e\n                    );\n\n                }\n\n            },\n            <span class="hljs-attr">methods</span>: {\n                sketch({ context }) {\n\n                    <span class="hljs-comment">// Here you start coding-art</span>\n\n                    <span class="hljs-keyword">return</span> <span class="hljs-function">(<span class="hljs-params">{ context }</span>) =&gt;</span> {\n\n                        <span class="hljs-comment">// Here you can return some animated stuff</span>\n\n                    };\n\n                },\n            },\n        };\n    </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">scoped</span>&gt;</span><span class="css">\n        <span class="hljs-selector-tag">canvas</span> {\n\n            <span class="hljs-attribute">position</span>: absolute;\n            <span class="hljs-attribute">top</span>: <span class="hljs-number">0</span>;\n            <span class="hljs-attribute">left</span>: <span class="hljs-number">0</span>;\n            <span class="hljs-attribute">z-index</span>: <span class="hljs-number">1</span>;\n            <span class="hljs-attribute">display</span>: block;\n            <span class="hljs-attribute">width</span>: <span class="hljs-number">100vw</span>;\n            <span class="hljs-attribute">height</span>: <span class="hljs-number">100vh</span>;\n            <span class="hljs-attribute">margin</span>: <span class="hljs-number">0</span>;\n            <span class="hljs-attribute">padding</span>: <span class="hljs-number">0</span>;\n\n        }\n    </span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>\n\n</code></pre>\n<hr>\n<h3>Related things</h3>\n<h4>ThreeJS</h4>\n<p>There are lots of examples using <code>threejs</code>, but it\'s not included, You can follow the examples and add it with:</p>\n<pre><code class="language-bash">\n    <span class="hljs-comment"># cmd</span>\n    yarn add three <span class="hljs-comment"># or npm install --save three</span>\n\n</code></pre>\n<p>There si also a <a href="https://luxdamore.github.io/generative-art/single/three-js-starter">ThreeJS starter template</a> for the plugin.</p>\n<h4>Tensorflow - Machine Learning and face recognition with Facemesh</h4>\n<p><a href="https://github.com/tensorflow/tfjs-models/tree/master/face-landmarks-detection">Facemesh by <strong>Tensorflow</strong></a> is not included, but you can follow the installation process <a href="https://github.com/tensorflow/tfjs-models/tree/master/face-landmarks-detection#installation">here</a>.</p>\n<p>There si also an example with <a href="https://luxdamore.github.io/generative-art/experiments/facemesh-with-machine-learning">ThreeJS and Tensorflow</a> for the plugin.</p>\n<hr>\n<h3>Extra Resources</h3>\n<h4>CanvaSketch</h4>\n<ul>\n<li><a href="https://github.com/mattdesl/canvas-sketch/blob/master/docs/README.md">Documentation</a>;</li>\n<li><a href="https://github.com/mattdesl/canvas-sketch/blob/master/docs/api.md">Api</a>;</li>\n<li><a href="https://github.com/mattdesl/canvas-sketch/tree/master/examples">Examples</a>.</li>\n</ul>\n<h4>ThreeJS and Shaders</h4>\n<ul>\n<li><a href="https://thebookofshaders.com/">The Book of Shaders</a>;</li>\n<li><a href="https://thebookofshaders.com/">Three.js Fundamentals</a>.</li>\n</ul>\n<h4>Videos about creative coding and 3D art</h4>\n<ul>\n<li><a href="https://github.com/mattdesl">Matt DesLauriers</a>.</li>\n<li><a href="https://www.youtube.com/channel/UCDo7RTzizoOdPjY8A-xDR7g">Yuri Artyukh</a>;</li>\n<li><a href="https://www.youtube.com/channel/UCcAlTqd9zID6aNX3TzwxJXg">The Art of Code</a>;</li>\n<li><a href="https://www.youtube.com/channel/UCPwg5nDMQWzkAfb56_GvGpA">Tim Rodenbröker</a>;</li>\n<li><a href="https://www.youtube.com/channel/UCEwhtpXrg5MmwlH04ANpL8A">SimonDev</a>;</li>\n<li><a href="https://www.youtube.com/channel/UCdeWxKJuvtUG2xyN6pOJEvA">Interactive Developer</a>.</li>\n</ul>\n<hr>\n<h2>Development</h2>\n<ol>\n<li>Clone this repository;</li>\n<li>Install dependencies using <code>yarn install</code> or <code>npm install</code>;</li>\n<li>Start development server using <code>yarn dev</code> or <code>npm run dev</code>.</li>\n</ol>\n<blockquote>\n<p>To access camera and/or microphone from localhost, you need to enable <em><a href="https://medium.com/@Carmichaelize/enabling-the-microphone-camera-in-chrome-for-local-unsecure-origins-9c90c3149339">Unsecure Origins in Chrome</a></em>.</p>\n</blockquote>\n<h2>🐞 Issues</h2>\n<p>Please make sure to read the <a href="./.github/ISSUE_TEMPLATE/bug_report.md">Issue Reporting Checklist</a> before opening an issue. Issues not conforming to the guidelines may be closed immediately.</p>\n<h2>👥 Contribution</h2>\n<p>Please make sure to read the <a href="./.github/ISSUE_TEMPLATE/feature_request.md">Contributing Guide</a> before making a pull request.</p>\n<h2>📖 Changelog</h2>\n<p>Details changes for each release are documented in the <a href="./CHANGELOG.md"><strong>release notes</strong></a> file.</p>\n<h3>📃 License</h3>\n<p><a href="./LICENSE">MIT License</a> // Copyright (©) 2020-present <a href="https://lucaiaconelli.it">Luca Iaconelli</a></p>\n<h4>💘 Inspired by</h4>\n<blockquote>\n<p><strong>All my thanks goes to <em>Matt DesLauriers</em> and <em>Yuri Artyukh</em> for those useful libraries and tutorials</strong>.</p>\n</blockquote>\n<hr>\n<h4>💼 Hire me</h4>\n<p><a href="https://lucaiaconelli.it"><img src="https://img.shields.io/badge/Contact%20Me-Let\'s%20Talk-informational?style=social&amp;logo=minutemailer" alt="Contacts"></a></p>\n<h4>💸 Are you feeling generous today?</h4>\n<p>If You want to share a beer, we can be really good friends</p>\n<p><strong><a href="https://www.paypal.me/luxdamore">Paypal</a> // <a href="https://www.patreon.com/luxdamore">Patreon</a> // <a href="https://ko-fi.com/luxdamore">Ko-fi</a></strong></p>\n<blockquote>\n<p>☀ <em>It\'s always a good day to be magnanimous</em> - cit.</p>\n</blockquote>\n</section>\n'}},mounted:function(){var e=this;this.$nextTick((function(){e.initHighlight(),e.initReadmeLinks()}))},methods:{initHighlight:function(){Object(l.a)(document.querySelectorAll("pre")).forEach((function(e){return o.a.highlightBlock(e)}))},initReadmeLinks:function(){for(var e=Object(l.a)(document.querySelectorAll(".readme > article a, .readme > article pre")).filter((function(e){return"A"===e.tagName})),n="https://github.com/LuXDAmore/generative-art.git".replace(".git","/tree/master/"),i=0;i<e.length;i++){e[i].setAttribute("target","_blank"),e[i].setAttribute("rel","noopener"),e[i].setAttribute("title",e[i].textContent);var t=e[i].getAttribute("href");t.startsWith("./")&&e[i].setAttribute("href",t.replace("./",n))}}}},j=(t(685),t(687),t(689),t(51)),component=Object(j.a)(f,(function(){var e=this.$createElement,n=this._self._c||e;return n("main",{staticClass:"container readme"},[n("article",{staticClass:"markdown-body",domProps:{innerHTML:this._s(this.readme)}})])}),[],!1,null,"b4f6515e",null);n.default=component.exports}}]);