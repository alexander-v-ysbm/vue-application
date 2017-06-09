import Vue from 'vue'
import Vuex from 'vuex'
import VueCookies from 'vue-cookie'
import App from './App'
import router from './router'
import {store} from './store/index'

Vue.use(Vuex)
Vue.use(VueCookies)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
