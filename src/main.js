// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'

Vue.use(VueResource);

Vue.config.productionTip = false
Vue.http.options.root = "https://findfalcone.herokuapp.com/";

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  data: function () {
    return {
      firstName: 'Walter',
      lastName: 'White',
      alias: 'Heisenberg'
    }
  },
  components: { App }
})
