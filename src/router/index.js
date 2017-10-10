import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '@/pages/index/index'
import Home from '@/pages/app/app'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    { path: '/', name: 'index', component: Index },
    { path: '/home', name: 'home', component: Home }
  ]
})

