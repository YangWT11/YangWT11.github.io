import Vue from 'vue';
import Vuex from 'vuex';
import guide from './modules/guide'
Vue.use(Vuex);

// const debug = process.env.NODE_ENV !== "production"

export default new Vuex.Store({
  modules: {
    guide: guide
  }
});
