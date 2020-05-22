import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    code:''
  },
  mutations:{
    changeCode(state,code){
      state.code = code
    }
  },
  actions:{}
})