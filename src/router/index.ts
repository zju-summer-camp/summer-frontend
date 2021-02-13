import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/home/index.vue'



Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/regis',
    name: 'Registration',
    component: () => import('../views/registration/index.vue')
  },
  {
    path: '/info',
    name: 'Info',
    component: () => import('../views/info/index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
