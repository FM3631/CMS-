import Vue from 'vue'
import App from '../src/page/Home.vue'


//引入路由
import router from './router/router.js'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
Vue.config.productionTip = false

// 引入vant
import { Form } from 'vant';
Vue.use(Form);
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
import { Field } from 'vant';
Vue.use(Field);

// 引入mint-ui
// import Mint from 'mint-ui';
// Vue.use(Mint);
// import { Field } from 'mint-ui';
// Vue.component(Field.name, Field);
import store from './store/index.js'

// 导入axios
import axios from 'axios'
import VueAxios from 'vue-axios'
import http from './api/http.js'
Vue.prototype.$axios = axios
// Vue.use(VueAxios, axios)
Vue.use(VueAxios, http)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
