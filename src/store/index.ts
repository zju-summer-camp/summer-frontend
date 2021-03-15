import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showLoginModal: false,
    showRegisterModal: false,
    login: {
      token: ''
    },
    accountId: 1,
    accounts: {}
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
