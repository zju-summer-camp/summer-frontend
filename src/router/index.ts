import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/regis',
    name: 'Registration',
    component: () => import('../views/Form.vue')
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
        path: 'statistics',
        component: () => import('../views/management/Statistics.vue')
      },
      {
        path: 'forms',
        component: () => import('../views/management/FormList.vue')
      },
      {
        path: 'upload',
        component: () => import('../views/management/Upload.vue')
      },
      {
        path: 'articles',
        component: () => import('../views/management/Articles.vue')
      },

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
