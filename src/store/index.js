import Vue from 'vue'
import Vuex from 'vuex'

import reviewsModule from './modules/reviews'
import usersModule from './modules/users'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    reviewsModule: reviewsModule,
    usersModule: usersModule
  }
})
