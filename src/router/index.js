import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import FindFalcone from '@/components/FindFalcone'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
    	path: '/findfalcone',
    	name: 'FindFalcone',
    	component: FindFalcone
    }
  ]
})
