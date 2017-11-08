// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import Vuex from 'vuex'
import { store } from './store.js';

Vue.use(Vuex)
Vue.use(VueResource);

Vue.config.productionTip = false
Vue.http.options.root = "https://findfalcone.herokuapp.com/";

/* eslint-disable no-new */

new Vue({
  store,
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
