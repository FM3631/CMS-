import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    isLogin:false,
    loginPromise:null
  },
  mutations:{
    changeIsLogin(state,{isLogin}){
      state.isLogin = isLogin
    },
    changeLoginPromise(state,{loginPromise}){
      state.loginPromise = loginPromise
    }
  },
  actions:{}
})