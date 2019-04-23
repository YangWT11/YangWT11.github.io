(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22d5fa"],{f6e9:function(s,n){s.exports='<h2 id="前言">前言</h2>\n<p>上一个项目<strong>android-test-front-end</strong>中，由于缺乏<strong>Vuex</strong>对状态的集中管理，导致子组件和父组件中产生了许多不必要，也不应该有的通信。同时，有些情况下，原本应该属于父组件的状态，却又决定着子组件的render，因此这部分的state应该交给<strong>Vuex</strong>来进行统一管理。使用<strong>Vuex</strong>的好处和弊端，接下来我都会一一尝试。</p>\n<h2 id="使用vuex">使用Vuex</h2>\n<p>使用<strong>Vuex</strong>的方式很简单，你可以直接下载<a href="https://unpkg.com/vuex@3.1.0/dist/vuex.js">vuex.js</a>，然后用script引入；也可以直接使用cdn的方式引入。在一个使用<strong>vue-cli</strong>打包的项目中，只需要在初始化项目的时候选择使用<strong>Vuex</strong>，脚手架会在你的项目中使用<strong>Vuex</strong>。在初始情况下，<code>src/</code>目录中会出现一个<code>store.ts</code>文件，这个文件中存放着全局的<strong>state</strong>。文件如下</p>\n<pre><code class="language-javascript"><span class="hljs-keyword">import</span> Vue <span class="hljs-keyword">from</span> <span class="hljs-string">\'vue\'</span>;\n<span class="hljs-keyword">import</span> Vuex <span class="hljs-keyword">from</span> <span class="hljs-string">\'vuex\'</span>;\nVue.use(Vuex);\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">new</span> Vuex.Store({\n    <span class="hljs-attr">state</span>: {\n    },\n    <span class="hljs-attr">mutations</span>: {\n    },\n    <span class="hljs-attr">actions</span>: {\n    },\n});</code></pre>\n'}}]);
//# sourceMappingURL=chunk-2d22d5fa.39f85ce9.js.map