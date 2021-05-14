import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: sessionStorage.getItem('state') ? JSON.parse(sessionStorage.getItem('state') as string):{
    showSigninModal: true,
    showSignupModal: false,
    showRegistrationForm: false,
    registrationFormType: 'newForm',
    showQueryModal: false,
    signin: {
      token: ''
    },
    accountId: 1,
    accounts: {
      accountId: '',
      phoneNumber: '',
      name: '',
      phone: ''
    }
  },
  mutations: {
    showSignin(state, payload) {
      localStorage.setItem("X-Summer-Camp-Auth-Token","")
      state.showSigninModal = payload
    },
    showSignup(state, payload) {
      state.showSignupModal = payload
    },
    reviseAccountId(state, payload) {
      state.accountId = payload
      
    },
    reviseSignin(state, payload) {
      state.signin = payload
    },
    reviseAccount(state, payload) {
      state.accounts = payload      
    },
    showRegistration(state, payload) {
      state.showRegistrationForm = payload
    },
    reviseType(state, payload){
      state.registrationFormType = payload
    },
    showQuery(state, payload){
      state.showQueryModal = payload
    }
    
  },
  actions: {
  },
  modules: {
  }
})
