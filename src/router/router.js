import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import HomeContainer from '../components/homecontainer/HomeContainer.vue'
import TypeInfo from '../components/homeChildren/TypeInfo.vue'
import SearchContainer from '../components/search/SearchContainer.vue'
import SearchNewsList from '../components/search/SearchNewsList.vue'
import Home from '../page/Home.vue'
export default new Router({
    routes: [
        { path: '/', redirect: '/HomeContainer' },
        { path: '/Home', component: Home },
        { path: '/HomeContainer', component: HomeContainer },
        { path:'/TypeInfo/:title/:content',component:TypeInfo,name:'toTypeInfo'},
        { path:'/SearchContainer',component:SearchContainer},
        { path:'/SearchNewsList/:newsList',component:SearchNewsList,name:'toSearch'},
    ]
})