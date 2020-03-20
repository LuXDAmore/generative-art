(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{279:function(e,t,n){"use strict";n.r(t);n(38),n(26),n(27);var r=n(272),o=n(267),l=n.n(o),c=n(268),h=n.n(c),m=n(269),d=n.n(m);l.a.registerLanguage("bash",h.a),l.a.registerLanguage("javascript",d.a);var f={name:"homepage",computed:{readme:function(){return'<section><h1>🎉 Generative art with Nuxt-Canvas-Sketch</h1>\n<blockquote>\n<p>Generative Art is the idea realized as genetic code of artificial events, as construction of dynamic complex systems able to generate endless variations. This is also a nuxt-module to make it easy to do.</p>\n</blockquote>\n<h2>Installation</h2>\n<pre><code class="language-bash">\n    <span class="hljs-comment"># Deps</span>\n    npm install --save @luxdamore/nuxt-canvas-sketch\n\n    <span class="hljs-comment"># Add it into your modules</span>\n    {\n        modules: [ <span class="hljs-string">\'@luxdamore/nuxt-canvas-sketch\'</span> ],\n    }\n\n</code></pre>\n<h2>Usage</h2>\n<p>Check the example folder and take a look at the <code>page-*.vue</code> for some examples.\nEvery page correspond to an example in the <a href="https://luxdamore.github.io/generative-art">website</a> of this library.</p>\n<h3>Inspired by</h3>\n<p><strong>beta</strong>: Transformed <a href="https://github.com/mattdesl/canvas-sketch">canvas-sketch</a> in a nuxt-module. <em>All my thanks goes to Matt DesLauriers for this beautiful and easy to use libraries</em>.</p>\n<h3>TODO</h3>\n<ul>\n<li>Publish the library in npm;</li>\n<li>Documentation;</li>\n<li>More examples.</li>\n</ul>\n</section>\n'}},mounted:function(){var e=this;this.$nextTick((function(){e.initHighlight(),e.initReadmeLinks()}))},methods:{initHighlight:function(){Object(r.a)(document.querySelectorAll("pre")).forEach((function(e){return l.a.highlightBlock(e)}))},initReadmeLinks:function(){for(var e=Object(r.a)(document.querySelectorAll(".readme > article a, .readme > article pre")).filter((function(e){return"A"===e.tagName})),i=0;i<e.length;i++)e[i].setAttribute("target","_blank"),e[i].setAttribute("rel","noopener"),e[i].setAttribute("title",e[i].textContent)}}},k=(n(270),n(30)),component=Object(k.a)(f,(function(){var e=this.$createElement,t=this._self._c||e;return t("main",{staticClass:"container readme canvas-container"},[t("article",{staticClass:"markdown-body",domProps:{innerHTML:this._s(this.readme)}})])}),[],!1,null,null,null);t.default=component.exports}}]);