## 前言
上一个项目**android-test-front-end**中，由于缺乏**Vuex**对状态的集中管理，导致子组件和父组件中产生了许多不必要，也不应该有的通信。同时，有些情况下，原本应该属于父组件的状态，却又决定着子组件的render，因此这部分的state应该交给**Vuex**来进行统一管理。使用**Vuex**的好处和弊端，接下来我都会一一尝试。

## 使用Vuex
#### 1. 初步使用vuex
使用**Vuex**的方式很简单，你可以直接下载[vuex.js](https://unpkg.com/vuex@3.1.0/dist/vuex.js)，然后用script引入；也可以直接使用cdn的方式引入。在一个使用**vue-cli**打包的项目中，只需要在初始化项目的时候选择使用**Vuex**，脚手架会在你的项目中使用**Vuex**。在初始情况下，`src/`目录中会出现一个`store.ts`文件，这个文件中存放着全局的**state**。文件如下：

```javascript
//store.ts
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

现在简单地添加一些属性，例如：
```javascript
//store.ts
export default new Vuex.Store({
    state:{
        count:0
    },
    mutations:{
        increase(state){
            state.count++;
        }
    },
    actions: {
    },
});
```
<blockquote class='warn'>
获取<strong>count</strong>属性时通过<code>store.state.count</code>来获取，而改变<strong>state</strong>时，不能通过<code>store.state.count++</code>来修改，而是要调用<code>stroe.commit('increase')</code>来调用<strong>mutations</strong>里的函数来改变。这样做的好处是能够一眼看出哪里修改了<strong>state</strong>，同时也方便在<strong>mutations</strong>的方法中添加监听和日志。
 </blockquote>

#### 2. state
使用store的方法是在需要用的地方，先将**store**通过**import**的方式引入，然后直接调用。
```javascript
//someComponent.vue
import store from 'somePath';
export default {
    computed:{
        count(){
            return store.state.count;
        }
    }
};
```
然而这种方式的弊端就是，你必须在所有需要用到**全局state**的地方引入**store**，这样使用**webpack**打包时，每个用到**store**的组件都需要将其打包进来。因此[官方](https://vuex.vuejs.org/zh/guide/state.html#在-vue-组件中获得-vuex-状态)给出了一个更好的方式，将**store**注入到vue的根节点中。

```javascript
//main.ts
import store from 'somePath';
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
```
这样一来就可以通过`this.$store.state.count`以及`this.$store.commit('increase')`来操作全局**state**。

#### 3.getter
有时候会需要获取某个属性的**计算属性**，例如需要通过文章标签来筛选相应的文章。以往的处理方式是调用的地方自行处理，做的好一点就是将其抽象成一个公共函数，需要的地方就调用这个公共函数来筛选结果。不过这种做法也不是很方便，需要修改某个**state**的方法时，发现数据和方法不在一个文件里，这给后期的修改和维护增加了困难。因此出现了**getter**属性。可以将**getter**属性理解为**类**中公开暴露的**方法**，例如`getDoneTodos`，这样能使得数据和方法在一起，利于维护。**getter**有两种访问方式。
```javascript
//store.ts
const store = new Vuex.Store({
  state: {
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ]
  } 
})
```

1. **通过属性访问**<br>
    **state**作为其第一个参数：
    ```javascript
    //store.ts定义
    getters: {
        getDoneTodos: state => {
            return state.todos.filter(todo => todo.done) //-> [{ id: 1, text: '...', done: true}]
        }
    }
    //someComponents.vue调用
    store.getters.getDoneTodos // -> [{ id: 1, text: '...', done: true }]
    ```
    **getters**作为其第二个参数：
    ```javascript
    //store.ts定义
    getters: {
        getDoneTodosCount: (state, getters) => {
            return getters.getDoneTodos.length //参考上面的getDoneTodos
        }
    }
    //someComponents.vue调用
    store.getters.getDoneTodosCount // -> 1
    ```
2. **通过函数访问**<br>
    通过让**getter**返回一个函数，就能够实现传递参数给**getter**
    ```javascript
    //store.ts定义
    getters: {
        getTodosById: (state) =>(id)=> {
            return state.todos.find(todo => todo.id==id) //-> [{ id: 1, text: '...', done: true}]
        }
    }
    //someComponents.vue调用
    store.getters.getTodosById(1) // -> [{ id: 1, text: '...', done: true }]
    ```
3. **计算属性缓存**<br>
当通过函数访问**getter**时，**getter**是无法缓存的；当通过属性访问时，倘若对应的**state**没有发生变化，类似于**计算属性**，它会被作为vue的一部分缓存起来，实验一下：
```javascript
//store.ts
mutations:{
    addTodo:(state: any, todo: Object)=> {
        state.todos.push(todo)
    }
}
getters:{
    getTodoList: (state: any) => {
        console.log('call getTodoList')
        return state.todos
    },
    getTodoListById: (state: any) => {
        return (id: String) => {
            console.log('call getTodoListById');
            return state.todos.find((todo: any) => todo.id == id);
        }
    }
}
//someComponents.vue
this.$store.getters.getTodoList //->call getTodoList
this.$store.getters.getTodoListById(1) //->call getTodoListById
this.$store.getters.getTodoList
this.$store.getters.getTodoListById(1) //->call getTodoListById
this.$store.commit("addTodo", { id: 3, text: "...", done: true });
this.$store.getters.getTodoList //->call getTodoList
this.$store.getters.getTodoListById(1) //->call getTodoListById
```
可以看到，即使是调用`getTodoListById`接口传入的参数一样，函数还是会被执行一次，而通过属性访问，那么`getTodoList`会被缓存起来，直到`todos`改变