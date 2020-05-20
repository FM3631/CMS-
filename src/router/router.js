import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Login from '../components/login-register/Login.vue'
import Register from '../components/login-register/Register.vue'
import MusicList from '../components/hotMusic/MusicList.vue'

export default new Router({
    routes: [
      {path:'/',component:Login,},
      {path:'/login',component:Login,},
      {path:'/register',component:Register,},
      {path:'/hotmusic',component:MusicList,},
    ]
  })