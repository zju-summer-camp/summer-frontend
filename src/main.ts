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

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
