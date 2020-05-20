import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Mycontaner from '../components/imgupload/Mycontaner.vue'
import mylove from '../components/mycenter/Mylove.vue'
import personaldetails from '../components/mycenter/Personaldetails.vue'

import changedetails from '../components/mycenter/Changedetails.vue'


export default new Router({
    routes: [
        { path: '/', component: Mycontaner },
        { path: '/mylove', component: mylove },
        { path: '/personaldetails', component: personaldetails },
        { path: '/changedetails', component: changedetails },
    ]
})