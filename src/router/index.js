import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Layui from '@/pages/layui/index'
import LayuiWidget from '@/pages/layui/widget'
import LayuiForm from '@/pages/layui/form'
import Seamless from '@/pages/seamless/index'
import Infinite from '@/pages/infinite/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Index
    },
    {
      path: '/layui',
      name: 'layui',
      component: Layui,
      children: [
        {
          path: '/',
          name: 'layui widget',
          component: LayuiWidget
        },
        {
          path: 'form',
          name: 'layui form',
          component: LayuiForm
        }
      ]
    },
    {
      path: '/seamless',
      name: 'seamless',
      component: Seamless
    },
    {
      path: '/infinite',
      name: 'infinite',
      component: Infinite
    }
  ]
})
