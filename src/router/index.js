import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Layui from '@/pages/layui/index'
import LayuiWidget from '@/pages/layui/widget'
import LayuiForm from '@/pages/layui/form'
import Seamless from '@/pages/seamless/index'
import Infinite from '@/pages/infinite/index'
import Xlsx from '@/pages/xlsx/index'
import DatePicker from '@/pages/iview/datepicker'
import Element from '@/pages/element/index'

Vue.use(Router)

const router = new Router({
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
      path: '/iview/datepicker',
      component:DatePicker 
    },
    {
      path: '/element',
      component: Element
    },
  ]
})

router.beforeEach((to, from, next) => {
  console.log('check path', to.path)
  next()
})

export default router
