import Vue from 'vue'
import App from '../src/page/Home.vue'


//引入路由
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
