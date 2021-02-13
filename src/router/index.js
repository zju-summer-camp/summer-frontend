import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login'),
    hidden: true,
  },
  {
    path: '/403',
    name: '403',
    component: () => import('@/views/403'),
    hidden: true,
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404'),
    hidden: true,
  },
]
export const asyncRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/index',
    meta: {
      title: '首页',
      icon: 'home-4-line',
      affix: true,
    },
    children: [
      {
        path: 'index',
        name: 'Index',
        component: () => import('@/views/index'),
        meta: {
          title: '首页',
          icon: 'home-4-line',
          affix: true,
        },
      },
    ],
  },
  {
    path: '/info',
    component: Layout,
    redirect: '/info',
    meta: {
      title: '项目资讯',
    },
    children: [
      {
        path: '/info',
        name: 'Info',
        component: () => import('@/views/info'),
        meta: {
          title: '项目资讯',
        },
      },
    ],
  },
  {
    path: '/registration',
    component: Layout,
    redirect: '/registration',
    meta: {
      title: '学生报名',
    },
    children: [
      {
        path: '/registration',
        name: 'Registration',
        component: () => import('@/views/registration'),
        meta: {
          title: '学生报名',
        },
      },
    ],
  },
  // {
  //   path: '/result',
  //   component: Layout,
  //   redirect: '/result',
  //   meta: {
  //     title: '结果查询',
  //   },
  //   children: [
  //     {
  //       path: '/result',
  //       name: 'Result',
  //       component: () => import('@/views/result'),
  //       meta: {
  //         title: '结果查询',
  //       },
  //     },
  //   ],
  // },
  // {
  //   path: '/vab',
  //   component: Layout,
  //   redirect: '/vab/table',
  //   alwaysShow: true,
  //   meta: {
  //     title: '组件',
  //     icon: 'apps-line',
  //   },
  //   children: [
  //     {
  //       path: 'table',
  //       name: 'Table',
  //       component: () => import('@/views/vab/table'),
  //       meta: {
  //         title: '表格',
  //         icon: 'table-2',
  //       },
  //     },
  //     {
  //       path: 'icon',
  //       name: 'Icon',
  //       component: () => import('@/views/vab/icon'),
  //       meta: {
  //         title: '图标',
  //         icon: 'remixicon-line',
  //       },
  //     },
  //   ],
  // },
  // {
  //   path: '/test',
  //   component: Layout,
  //   redirect: '/test/test',
  //   meta: {
  //     title: '动态路由测试',
  //     icon: 'test-tube-line',
  //   },
  //   children: [
  //     {
  //       path: 'test',
  //       name: 'Test',
  //       component: () => import('@/views/test'),
  //       meta: {
  //         title: '动态路由测试',
  //         icon: 'test-tube-line',
  //       },
  //     },
  //   ],
  // },
  // {
  //   path: '/error',
  //   name: 'Error',
  //   component: Layout,
  //   redirect: '/error/403',
  //   meta: {
  //     title: '错误页',
  //     icon: 'error-warning-line',
  //   },
  //   children: [
  //     {
  //       path: '403',
  //       name: 'Error403',
  //       component: () => import('@/views/403'),
  //       meta: {
  //         title: '403',
  //         icon: 'error-warning-line',
  //       },
  //     },
  //     {
  //       path: '404',
  //       name: 'Error404',
  //       component: () => import('@/views/404'),
  //       meta: {
  //         title: '404',
  //         icon: 'error-warning-line',
  //       },
  //     },
  //   ],
  // },
  {
    path: '/*',
    redirect: '/404',
    hidden: true,
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
})

export default router
