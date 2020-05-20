import Vue from 'vue'
import App from '../src/page/home.vue'
import router from './router/router.js'

//引入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)
Vue.config.productionTip = false


//vant
import { Uploader,Divider } from 'vant';
Vue.use(Uploader);
Vue.use(Divider);

// 'mint-ui
import { Field ,Button, MessageBox } from 'mint-ui';
import '../node_modules/mint-ui/lib/style.css'
Vue.component(Field.name, Field);
Vue.component(Button.name, Button);
Vue.prototype.$messagebox = MessageBox  






new Vue({
  router,

  
  render: h => h(App),
}).$mount('#app')
