import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import AppAbout from '@/components/AppAbout'
import AppComment from '@/components/AppComment'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/about',
      name: 'AppAbout',
      component: AppAbout
    },
    {
      path: '/comment',
      name: 'AppComment',
      component: AppComment
    }
  ],
  mode: 'history'
})
