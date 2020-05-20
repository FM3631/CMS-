import Vue from 'vue'
import App from '../src/page/Home.vue'


//引入路由
import VueRouter from 'vue-router'
import router from './router/router.js'
Vue.use(router)
Vue.use(VueRouter)

//引入axios
import axios from 'axios'
import VueAxios from 'vue-axios'
import http from './api/http.js'
Vue.prototype.$axios = axios

Vue.use(VueAxios, http)

//引入vant库
import { NavBar,Icon,Tabbar, TabbarItem,Swipe, SwipeItem,Lazyload,Tab, Tabs,Search,Tag,  } from 'vant';
// 全局注册
Vue.use(Tag);
Vue.use(Search);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Icon);
Vue.use(NavBar);

//引入mint-ui库
import { Header } from 'mint-ui';

Vue.component(Header.name, Header);

//引入less
import less from 'less'
Vue.use(less)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
