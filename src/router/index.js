import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import AppAbout from '@/components/AppAbout'
import AppComment from '@/components/AppComment'
import AppLogin from '@/components/AppLogin'
import AppRegister from '@/components/AppRegister'
import AppLogout from '@/components/AppLogout'

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
    },
    {
      path: '/login',
      name: 'AppLogin',
      component: AppLogin
    },
    {
      path: '/register',
      name: 'AppRegister',
      component: AppRegister
    },
    {
      path: '/logout',
      name: 'AppLogout',
      component: AppLogout
    }
  ],
  mode: 'history'
})
