## 前言
上一个项目**android-test-front-end**中，由于缺乏**Vuex**对状态的集中管理，导致子组件和父组件中产生了许多不必要，也不应该有的通信。同时，有些情况下，原本应该属于父组件的状态，却又决定着子组件的render，因此这部分的state应该交给**Vuex**来进行统一管理。使用**Vuex**的好处和弊端，接下来我都会一一尝试。

## 使用Vuex

使用**Vuex**的方式很简单，你可以直接下载[vuex.js](https://unpkg.com/vuex@3.1.0/dist/vuex.js)，然后用script引入；也可以直接使用cdn的方式引入。在一个使用**vue-cli**打包的项目中，只需要在初始化项目的时候选择使用**Vuex**，脚手架会在你的项目中使用**Vuex**。在初始情况下，`src/`目录中会出现一个`store.ts`文件，这个文件中存放着全局的**state**。文件如下

```javascript
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
    },
    mutations: {
    },
    actions: {
    },
});
```
