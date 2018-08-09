import Vue from 'vue'
import Vuex from 'vuex'
import VueCookies from 'vue-cookie'
import App from './App'
import router from './router'
import {store} from './store/index'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'font-awesome/css/font-awesome.min.css'

Vue.use(Vuex)
Vue.use(VueCookies)
Vue.use(BootstrapVue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
