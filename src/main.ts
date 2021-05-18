import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
require('../mock/index.ts')
import axios from 'axios'

axios.interceptors.request.use(
  config => {
    // 在请求头中添加 X-Summer-Camp-Auth-Token 请求头
    const token = localStorage.getItem("X-Summer-Camp-Auth-Token")
    if(token){
      config.headers['X-Summer-Camp-Auth-Token'] = token
    }
    return config
  }, 
  err => {
    console.log(err)
  }
)

axios.interceptors.response.use(
  response => {
    
    console.log('统一拦截数据', response)
    return response
  },
  error => {
    console.log('统一拦截错误',error.response.status)
    if(error && error.response && error.response.status === 401){
      alert('未登录或当前用户无操作权限')
    }
    return Promise.reject(error)
  }
)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
