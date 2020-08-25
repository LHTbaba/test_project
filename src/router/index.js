import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'
import home from '@/pages/home'

Vue.use(Router)
Vue.use(Meta)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    }
  ]
})
