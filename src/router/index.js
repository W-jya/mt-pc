import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from '@/layout/default.vue'
import blankPage from '@/layout/blank.vue'
import Index from '@/page/index.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'defaultPage',
      component: defaultPage,
      redirect: '/index',
      children: [{
          path: 'index',
          name: 'index',
          component: Index,
        },
        {
          path: 'changeCity',
          name: 'changeCity',
          component: () => import('@/page/changeCity')
        },
        {
          path: 's/:name',
          name: 'goodlist',
          component: () => import('@/page/goodList')
        }]
    },{
      path: '/blank',
      name: 'blank',
      component: blankPage,
      children:[
        {
          path: 'login',
          name: 'login',
          component: () => import('@/page/login')
        },
        {
          path: 'register',
          name: 'register',
          component: () => import('@/page/register')
        }]
    }
  ]
})
