// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Components from './components/index'
import store from './store/index'
import router from './router/index'

Vue.config.productionTip = false

Components.forEach((component) => {
  Vue.component(component.name, component.template)
})

/**
 * When user tries to access 'home' view,
 * Check for user settings in localStorage.
 * If there are none, redirects to settings view.
 */
router.beforeEach((to, from, next) => {
  if (to.name === 'home') {
    if (store.state.userSettings == null || store.state.cityDatas == null) {
      next('/settings')
    } else {
      next()
    }
  } else {
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  store,
  router
})
