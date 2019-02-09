import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import Contact from '@/pages/contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
