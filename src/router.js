import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Subscription from './views/Subscription.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/subcsription',
      name: 'subscription',
      component: Subscription
    }
  ]
})
