import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: sessionStorage.getItem('state') ? JSON.parse(sessionStorage.getItem('state') as string):{
    showLoginModal: true,
    showRegisterModal: false,
    login: {
      token: ''
    },
    accountId: 1,
    accounts: {
      accountId: '',
      phoneNumber: '',
      name: ''
    }
  },
  mutations: {
    showLogin(state, payload) {
      state.showLoginModal = payload
    },
    showRegister(state, payload) {
      state.showRegisterModal = payload
    },
    reviseAccountId(state, payload) {
      state.accountId = payload
    },
    reviseLogin(state, payload) {
      console.log('login', payload)
      state.login = payload
    },
    reviseAccount(state, payload) {
      state.accounts = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
