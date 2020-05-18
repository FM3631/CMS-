import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import HomeContainer from '../components/homecontainer/HomeContainer.vue'
export default new Router({
    routes: [
        { path: '/', redirect: '/HomeContainer' },
        { path: '/HomeContainer', component: HomeContainer }
    ]
})