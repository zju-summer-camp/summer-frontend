import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
require('../mock/index.ts')
import axios from 'axios'

axios.interceptors.request.use(
  config => {
    console.log('in interceptors, what is config', config)
    const token = localStorage.getItem("X-Summer-Camp-Auth-Token")
    if(token){
      config.headers['X-Summer-Camp-Auth-Token'] = token
      console.log('hello i got token', token)
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
