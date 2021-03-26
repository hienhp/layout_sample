import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import LayoutB from '@/layouts/LayoutB'
import LayoutA from '@/layouts/LayoutA'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'home',
    component: LayoutA,
    children: [{
      path: '/',
      name: 'home-page',
      component: Home
    }]
  },
  {
    path: '',
    name: 'Root',
    component: LayoutB,
    redirect: 'about',
    children: [
      {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/About.vue')
      },
      {
        path: '/contact',
        name: 'Contact',
        component: () => import('../views/Contact.vue')
      }
    ]
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
