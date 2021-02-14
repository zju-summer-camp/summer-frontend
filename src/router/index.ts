import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/regis',
    name: 'Registration',
    component: () => import('../views/Registration.vue')
  },
  {
    path: '/info',
    name: 'Info',
    component: () => import('../views/Info.vue')
  },
  {
    path: '/management',
    name: 'Management',
    component: () => import('../views/management/index.vue'),
    children: [
      {
        path: 'a',
        component: () => import('../views/Info.vue')
      },
      {
        path: 'forms',
        component: () => import('../views/management/Forms.vue')
      }
    ]
  },
  {
    path: '/*',
    name: '404',
    component: Home
  }
]

const router = new VueRouter({
  routes
})

export default router
