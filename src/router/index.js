import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Layui from '@/pages/layui/index'
import LayuiWidget from '@/pages/layui/widget'
import LayuiForm from '@/pages/layui/form'
import Seamless from '@/pages/seamless/index'
import Infinite from '@/pages/infinite/index'
import Xlsx from '@/pages/xlsx/index'
import IView from '@/pages/iview/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/layui',
      component: Layui,
      children: [
        {
          path: '/',
          component: LayuiWidget
        },
        {
          path: 'form',
          component: LayuiForm
        }
      ]
    },
    {
      path: '/seamless',
      component: Seamless
    },
    {
      path: '/infinite',
      component: Infinite
    },
    {
      path: '/xlsx',
      component: Xlsx
    },
    {
      path: '/iview',
      component: IView
    }
  ]
})
