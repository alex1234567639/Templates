import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showLog: true,
    isEncryption: true,

    ip: '0.0.0.0',
    browser: '',
    apiUrl: process.env.VUE_APP_API,
    photoUrl: process.env.VUE_APP_PHOTO,
    company_id: Number(process.env.VUE_APP_COMPANY_ID),
    account: '',
    isLogin: '0',
  },
  mutations: {
    setIp(state, ip) {
      state.ip = ip;
    },
    setBrowser(state, browser) {
      state.browser = browser;
    },
  },
  actions: {

  }
})
