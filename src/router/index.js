import Vue from 'vue'
import VueRouter from 'vue-router'

import Settings from '@/pages/settings/settings'
import Home from '@/pages/app/app'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    { path: '/settings', name: 'settings', component: Settings },
    { path: '/', name: 'home', component: Home }
  ]
})

