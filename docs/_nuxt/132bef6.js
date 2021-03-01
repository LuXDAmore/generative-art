(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{567:function(e,n,t){var content=t(693);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(28).default)("0f1e240c",content,!0,{sourceMap:!1})},692:function(e,n,t){"use strict";t(567)},693:function(e,n,t){var r=t(27)(!1);r.push([e.i,".readme .markdown-body[data-v-aa3cc5ce]{width:100%;max-width:100%;padding:36px;overflow-x:hidden;line-height:1.5;background-color:#fff}.readme .markdown-body[data-v-aa3cc5ce] >section>p:nth-child(2){display:flex;flex:1 1 100%;flex-direction:row;flex-wrap:nowrap;justify-content:center;min-height:36px;padding:6px 12px;overflow-x:auto;font-size:0;background-color:rgba(220,230,240,.63);border-radius:5px}.readme .markdown-body[data-v-aa3cc5ce]  a{display:inline-block;margin:2px 1px}.readme .markdown-body[data-v-aa3cc5ce]  blockquote{margin:1rem auto;padding:4px 0 4px 1.5rem;color:#819198;border-left:.3rem solid #dce6f0}.readme .markdown-body[data-v-aa3cc5ce]  blockquote p{margin:0}.readme .markdown-body[data-v-aa3cc5ce]  code{display:inline-block;padding:0 3px;overflow-y:hidden;vertical-align:middle;background-color:#dce6f0;border-radius:6px}.readme .markdown-body[data-v-aa3cc5ce]  pre code{display:block;padding:.5em;overflow-x:auto;vertical-align:inherit;background-color:#f8f8f8}",""]),e.exports=r},708:function(e,n,t){"use strict";t.r(n);t(115),t(44),t(78),t(175),t(116),t(34);var r=t(4),o=t(685),l=t.n(o),c=t(686),h=t.n(c),d=t(687),m=t.n(d);function f(e,n){var t;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=function(e,n){if(!e)return;if("string"==typeof e)return j(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return j(e,n)}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,c=!1;return{s:function(){t=e[Symbol.iterator]()},n:function(){var e=t.next();return l=e.done,e},e:function(e){c=!0,o=e},f:function(){try{l||null==t.return||t.return()}finally{if(c)throw o}}}}function j(e,n){(null==n||n>e.length)&&(n=e.length);for(var i=0,t=new Array(n);i<n;i++)t[i]=e[i];return t}var y='<section><h1>🌈🎨 Generative Art || Nuxt Canvas Sketch (three-js, tensorflow-js and gsap)</h1>\n<p><a href="https://luxdamore.github.io/generative-art/"><img src="https://img.shields.io/badge/code%20quality-A-informational?style=flat" alt="Code Quality"></a><br>\n<a href="https://npmjs.com/package/@luxdamore/nuxt-canvas-sketch"><img src="https://img.shields.io/npm/dt/@luxdamore/nuxt-canvas-sketch.svg?style=flat&amp;color=darkgreen" alt="Downloads"></a><br>\n<a href="https://npmjs.com/package/@luxdamore/generative-art"><img src="https://img.shields.io/badge/dependencies-up%20to%20date-darkgreen.svg?style=flat" alt="Dependencies"></a><br>\n<a href="https://circleci.com/gh/LuXDAmore/generative-art"><img src="https://img.shields.io/circleci/project/github/LuXDAmore/generative-art.svg?style=flat&amp;color=darkgreen" alt="Circle CI"></a><br>\n<a href="https://npmjs.com/package/@luxdamore/nuxt-canvas-sketch"><img src="https://img.shields.io/npm/v/@luxdamore/nuxt-canvas-sketch/latest.svg?style=flat&amp;color=darkorange&amp;label=version" alt="Version"></a><br>\n<a href="https://www.paypal.me/luxdamore"><img src="https://img.shields.io/badge/paypal-donate-black.svg?style=flat" alt="Donate"></a></p>\n<blockquote>\n<p>Generative Art is the idea realized as genetic code of artificial events, as construction of dynamic complex systems able to generate endless variations. This is also a nuxt-module (@luxdamore/nuxt-canvas-sketch) - [three.js, tensorflow.js and gsap are not included].</p>\n</blockquote>\n<h2>💘 Motivation</h2>\n<p>I\'m introducing myself into the <strong>Generative art</strong>, <strong>3D art</strong>, <strong>Visual design</strong> and <strong>Creative coding</strong> worlds.</p>\n<p>So, why i can\'t do this with my favorite libraries and framework?<br>\nInfact, this is also a module for <a href="https://nuxtjs.org/"><strong>NuxtJS</strong></a>, it inject the <a href="https://github.com/mattdesl/canvas-sketch">canvas-sketch</a> library with <a href="https://github.com/mattdesl/canvas-sketch-util"><code>canvas-sketch-utils</code></a> and <a href="https://github.com/mattdesl/load-asset"><code>load-asset</code></a> (from the creative coder <a href="https://www.mattdesl.com/">Matt DesLauriers</a>).</p>\n<p>After installation, you have access in NuxtJS (on the <a href="https://nuxtjs.org/docs/2.x/directory-structure/plugins#client-or-server-side-only">client-side</a>) at two things, <code>$canvasSketch</code> (the main module, used internally) and at the method <code>$sketch</code> (it starts the sketch).</p>\n<p>Check out the <a href="./src/pages">src/pages</a> folder for some demos.<br>\n<em>Every page correspond to an example in the <a href="https://luxdamore.github.io/generative-art">main website</a></em>.</p>\n<blockquote>\n<p>N.B.: This is a <em>work-in-progress project</em>, I\'m learning and testing new things here.</p>\n</blockquote>\n<hr>\n<h2>Setup</h2>\n<ol>\n<li><strong>Install</strong> <code>@luxdamore/nuxt-canvas-sketch</code> as a dependency:\n<ul>\n<li><code>yarn add @luxdamore/nuxt-canvas-sketch</code>;</li>\n<li>or, <code>npm install --save @luxdamore/nuxt-canvas-sketch</code>;</li>\n</ul>\n</li>\n<li><strong>Append</strong> <code>@luxdamore/nuxt-canvas-sketch</code> to the <code>modules</code> array of your <code>nuxt.config.js</code>.</li>\n</ol>\n<h2>Configuration</h2>\n<pre><code class="language-js">\n    <span class="hljs-comment">// nuxt.config.js</span>\n    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n\n        <span class="hljs-comment">// Module injection</span>\n        <span class="hljs-attr">modules</span>: [ <span class="hljs-string">&#x27;@luxdamore/nuxt-canvas-sketch&#x27;</span> ],\n\n        <span class="hljs-comment">// Module configuration</span>\n        <span class="hljs-attr">canvasSketch</span>: {\n            <span class="hljs-attr">hideErrorsInConsole</span>: <span class="hljs-literal">false</span>,\n            <span class="hljs-attr">hideGenericMessagesInConsole</span>: <span class="hljs-literal">false</span>, <span class="hljs-comment">// `true` in production</span>\n        },\n\n    };\n\n</code></pre>\n<h2>Usage</h2>\n<blockquote>\n<p>I\'m using the <a href="https://github.com/mattdesl/canvas-sketch/blob/master/docs/api.md#sketchmanager">sketchManager</a>, because i think with <strong>VueJS</strong> it\'s the better way to remove and clean handlers during the destroy phase.</p>\n</blockquote>\n<pre><code class="language-html">\n    <span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;canvas__container&quot;</span>&gt;</span>\n\n            <span class="hljs-tag">&lt;<span class="hljs-name">canvas</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;canvas&quot;</span> /&gt;</span>\n\n        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n        <span class="hljs-comment">// Page, component or layout</span>\n        <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n            <span class="hljs-attr">data</span>: <span class="hljs-function">() =&gt;</span> (\n                {\n                    <span class="hljs-attr">sketchManager</span>: <span class="hljs-literal">null</span>,\n                }\n            ),\n            <span class="hljs-keyword">async</span> <span class="hljs-function"><span class="hljs-title">mounted</span>(<span class="hljs-params"></span>)</span> {\n\n                <span class="hljs-keyword">try</span> {\n\n                    <span class="hljs-built_in">this</span>.sketchManager = <span class="hljs-keyword">await</span> <span class="hljs-built_in">this</span>.$sketch(\n                        <span class="hljs-comment">// Settings of the sketch</span>\n                        {\n                            <span class="hljs-attr">maxPixelRatio</span>: <span class="hljs-number">3</span>,\n                            <span class="hljs-attr">hotkeys</span>: <span class="hljs-literal">false</span>,\n                            <span class="hljs-comment">// or you can pass a DOMCanvasElement ex.</span>\n                            <span class="hljs-comment">// document.querySelector( &#x27;canvas&#x27; )</span>\n                            <span class="hljs-attr">canvas</span>: <span class="hljs-built_in">this</span>.$refs.canvas,\n                        },\n                        <span class="hljs-comment">// Method for the rendering</span>\n                        <span class="hljs-built_in">this</span>.sketch,\n                    );\n\n                    <span class="hljs-comment">// Ensure every listener is removed on-component-destoy</span>\n                    <span class="hljs-built_in">this</span>.$once(\n                        <span class="hljs-string">&#x27;hook:beforeDestroy&#x27;</span>,\n                        <span class="hljs-function">() =&gt;</span> <span class="hljs-built_in">this</span>.sketchManager.unload()\n                    );\n\n                } <span class="hljs-keyword">catch</span>( e ) {\n\n                    <span class="hljs-built_in">console</span>.error(\n                        e\n                    );\n\n                }\n\n            },\n            <span class="hljs-attr">methods</span>: {\n                <span class="hljs-function"><span class="hljs-title">sketch</span>(<span class="hljs-params">{ context }</span>)</span> {\n\n                    <span class="hljs-comment">// Here you start coding-art</span>\n\n                    <span class="hljs-keyword">return</span> <span class="hljs-function">(<span class="hljs-params">{ context }</span>) =&gt;</span> {\n\n                        <span class="hljs-comment">// Here you can return some animated stuff</span>\n\n                    };\n\n                },\n            },\n        };\n    </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">scoped</span>&gt;</span><span class="css">\n        <span class="hljs-selector-tag">canvas</span> {\n\n            <span class="hljs-attribute">position</span>: absolute;\n            <span class="hljs-attribute">top</span>: <span class="hljs-number">0</span>;\n            <span class="hljs-attribute">left</span>: <span class="hljs-number">0</span>;\n            <span class="hljs-attribute">z-index</span>: <span class="hljs-number">1</span>;\n            <span class="hljs-attribute">display</span>: block;\n            <span class="hljs-attribute">width</span>: <span class="hljs-number">100vw</span>;\n            <span class="hljs-attribute">height</span>: <span class="hljs-number">100vh</span>;\n            <span class="hljs-attribute">margin</span>: <span class="hljs-number">0</span>;\n            <span class="hljs-attribute">padding</span>: <span class="hljs-number">0</span>;\n\n        }\n    </span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>\n\n</code></pre>\n<hr>\n<h3>Related things</h3>\n<h4>ThreeJS</h4>\n<p>There are lots of examples based on <a href="https://threejs.org/"><code>threejs</code></a>, but it\'s not included, You can install the library with:</p>\n<pre><code class="language-bash">\n    <span class="hljs-comment"># cmd</span>\n    yarn add three <span class="hljs-comment"># or npm install --save three</span>\n\n</code></pre>\n<p><em>There si also a <a href="https://luxdamore.github.io/generative-art/single/three-js-starter">ThreeJS starter template</a> based on the plugin.</em></p>\n<h4>Gsap (GreenSock)</h4>\n<p>There are some examples based on the <a href="https://greensock.com/"><code>gsap</code> library</a>, but it\'s not included, You can install the library with:</p>\n<pre><code class="language-bash">\n    <span class="hljs-comment"># cmd</span>\n    yarn add gsap <span class="hljs-comment"># or npm install --save gsap</span>\n\n</code></pre>\n<p><em>Check the <a href="https://luxdamore.github.io/generative-art/navigate/page-1">layout navigation example</a>.</em></p>\n<h4>Tensorflow - Machine Learning and face recognition with Facemesh</h4>\n<p><a href="https://www.tensorflow.org/js">TensorFlow.js</a> and <a href="https://github.com/tensorflow/tfjs-models/tree/master/face-landmarks-detection">Facemesh</a> are not included, but you can follow the installation process <a href="https://github.com/tensorflow/tfjs-models/tree/master/face-landmarks-detection#installation">here</a>:</p>\n<pre><code class="language-bash">\n    <span class="hljs-comment"># cmd</span>\n    yarn add @tensorflow/tfjs-backend-cpu @tensorflow/tfjs-converter @tensorflow/tfjs-core <span class="hljs-comment"># or npm install --save @tensorflow/tfjs-backend-cpu @tensorflow/tfjs-converter @tensorflow/tfjs-core</span>\n\n</code></pre>\n<p>There si also an example with <a href="https://luxdamore.github.io/generative-art/experiments/facemesh-with-machine-learning">ThreeJS and Tensorflow</a> based on the plugin.</p>\n<hr>\n<h3>Extra Resources</h3>\n<h4>CanvasSketch</h4>\n<ul>\n<li><a href="https://github.com/mattdesl/canvas-sketch/blob/master/docs/README.md">Documentation</a>;</li>\n<li><a href="https://github.com/mattdesl/canvas-sketch/blob/master/docs/api.md">Api</a>;</li>\n<li><a href="https://github.com/mattdesl/canvas-sketch/tree/master/examples">Examples</a>.</li>\n</ul>\n<h4>ThreeJS and Shaders</h4>\n<ul>\n<li><a href="https://thebookofshaders.com/">The Book of Shaders</a>;</li>\n<li><a href="https://thebookofshaders.com/">Three.js Fundamentals</a>.</li>\n</ul>\n<h4>Videos about creative coding and 3D art</h4>\n<ul>\n<li><a href="https://github.com/mattdesl">Matt DesLauriers</a>.</li>\n<li><a href="https://www.youtube.com/channel/UCDo7RTzizoOdPjY8A-xDR7g">Yuri Artyukh</a>;</li>\n<li><a href="https://www.youtube.com/channel/UCcAlTqd9zID6aNX3TzwxJXg">The Art of Code</a>;</li>\n<li><a href="https://www.youtube.com/channel/UCPwg5nDMQWzkAfb56_GvGpA">Tim Rodenbröker</a>;</li>\n<li><a href="https://www.youtube.com/channel/UCEwhtpXrg5MmwlH04ANpL8A">SimonDev</a>;</li>\n<li><a href="https://www.youtube.com/channel/UCdeWxKJuvtUG2xyN6pOJEvA">Interactive Developer</a>.</li>\n</ul>\n<hr>\n<h4>💡 Lighthouse</h4>\n<p><img src="./src/static/lighthouse/before.jpg" alt="Lighthouse Audit before"><br>\n<img src="./src/static/lighthouse/after.jpg" alt="Lighthouse Audit after"></p>\n<hr>\n<h2>👩🏻‍💻👨🏻‍💻 Development</h2>\n<ol>\n<li><strong>Clone</strong> the repository:\n<ul>\n<li><code>git clone https://github.com/LuXDAmore/generative-art.git</code>;</li>\n</ul>\n</li>\n<li><strong>Install</strong> dependencies:\n<ul>\n<li><code>yarn install</code> (or <code>npm install</code>);</li>\n</ul>\n</li>\n<li><strong>Start</strong> a development server:\n<ul>\n<li><code>yarn dev</code> (or <code>npm run dev</code>);</li>\n</ul>\n</li>\n<li><strong>Test</strong> your code:\n<ul>\n<li><code>yarn test</code> (or <code>npm run test</code>);</li>\n</ul>\n</li>\n<li><strong>Extra</strong>, generate the documentation (<a href="https://pages.github.com/"><em>Github Pages</em></a>):\n<ul>\n<li><code>yarn generate</code> (or <code>npm run generate</code>);</li>\n<li><em>the content is automatically generated into the <code>/docs</code> folder</em>.</li>\n</ul>\n</li>\n</ol>\n<h2>🐞 Issues</h2>\n<p>Please make sure to read the <a href="./.github/ISSUE_TEMPLATE/bug_report.md"><strong>issue reporting checklist</strong></a> before opening an issue.<br>\n<em>Issues not conforming to the guidelines may be closed immediately</em>.</p>\n<h2>📝 Discussions</h2>\n<p>We\'re using <a href="https://github.com/LuXDAmore/generative-art/discussions"><strong>Github discussions</strong></a> as a place to connect with other members of our community.<br>\n<em>You are free to ask questions and share ideas, so enjoy yourself</em>.</p>\n<h2>👥 Contribution</h2>\n<p>Please make sure to read the <a href="./.github/ISSUE_TEMPLATE/feature_request.md"><strong>contributing guide</strong></a> before making a pull request.</p>\n<h2>📖 Changelog</h2>\n<p>Details changes for each release are documented in the <a href="./CHANGELOG.md"><strong>release notes</strong></a>.</p>\n<h3>🆓 License</h3>\n<p><a href="./LICENSE">MIT License</a> // Copyright (©) 2019-now <a href="https://lucaiaconelli.it">Luca Iaconelli</a></p>\n<h4>💼 Hire me</h4>\n<p><a href="https://curriculumvitae.lucaiaconelli.it"><img src="https://img.shields.io/badge/Contact%20Me-Let\'s%20Talk-informational?style=social&amp;logo=minutemailer" alt="Contacts"></a></p>\n<h4>💸 Are you feeling generous today?</h4>\n<p>If You want to share a beer, we can be really good friends 😄</p>\n<p><strong><a href="https://www.paypal.me/luxdamore">Paypal</a> // <a href="https://www.patreon.com/luxdamore">Patreon</a> // <a href="https://ko-fi.com/luxdamore">Ko-fi</a></strong></p>\n<blockquote>\n<p>☀ <em>It\'s always a good day to be magnanimous</em> - cit.</p>\n</blockquote>\n<hr>\n<h4>💘 Inspired by</h4>\n<blockquote>\n<p><strong>All my thanks goes to <em>Matt DesLauriers</em> and <em>Yuri Artyukh</em> for those useful libraries and tutorials</strong>.</p>\n</blockquote>\n</section>\n'.split("./src/static/").join("");l.a.registerLanguage("bash",h.a),l.a.registerLanguage("javascript",m.a);var v={name:"homepage",computed:{readme:function(){return y}},mounted:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.$nextTick();case 2:e.initHighlight(),e.initReadmeLinks();case 4:case"end":return n.stop()}}),n)})))()},methods:{initHighlight:function(){var e,n=f(document.querySelectorAll(".readme code"));try{for(n.s();!(e=n.n()).done;){var t=e.value;l.a.highlightBlock(t)}}catch(e){n.e(e)}finally{n.f()}},initReadmeLinks:function(){var e,n=f(document.querySelectorAll(".readme a"));try{for(n.s();!(e=n.n()).done;){var link=e.value;link.setAttribute("target","_blank"),link.setAttribute("rel","noopener"),link.textContent&&link.setAttribute("title",link.textContent),link.getAttribute("href").startsWith("./")&&link.setAttribute("href",link.getAttribute("href").replace("./","https://github.com/LuXDAmore/generative-art/tree/master/"))}}catch(e){n.e(e)}finally{n.f()}}}},k=(t(688),t(690),t(692),t(20)),component=Object(k.a)(v,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("main",{staticClass:"container readme"},[t("article",{staticClass:"markdown-body",domProps:{innerHTML:e._s(e.readme)}})])}),[],!1,null,"aa3cc5ce",null);n.default=component.exports}}]);