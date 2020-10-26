import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Subscription from './views/Subscription.vue'
import Stepper from './views/Stepper.vue'
import TablePage from './views/TablePage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/elements',
      name: 'Home',
      component: Home
    },
    {
      path: '/subcsription',
      name: 'Subscription',
      component: Subscription
    },
    {
      path: '/',
      name: 'Stepper',
      component: Stepper
    },
    {
      path: '/table',
      name: 'TablePage',
      component: TablePage
    }
  ]
})
