import Vue from 'vue'
import Vuex from 'vuex'
import reviewsModule from './modules/reviews'
import usersModule from './modules/users'
import postsModule from './modules/posts'
import errorsModule from './modules/errors'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    errorsModule: errorsModule,
    reviewsModule: reviewsModule,
    usersModule: usersModule,
    postsModule: postsModule
  }
})
