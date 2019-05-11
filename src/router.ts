import Vue from 'vue';
import Router from 'vue-router';
import Catalog from './views/Catalog.vue'
import Article from './views/Article.vue'
import Love from './views/Love.vue'
Vue.use(Router);
export default new Router({
  mode: 'hash',
  base: process.env.NODE_ENV === 'development' ? '' : './dist',
  routes: [{
    path: '/themes/:title',
    name: 'themes',
    component: Catalog,
  }, {
    path: '/article/:theme/:file',
    name: 'article',
    component: Article,
  }, {
    path: '/给不开森的媛儿',
    component: Love
  }]
});
