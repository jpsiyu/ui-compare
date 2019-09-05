import VueSeamless from 'vue-seamless-scroll'
import InfiniteScroll from 'vue-infinite-scroll'
import Element from '@/assets/plugins/element'
import iview from '@/assets/plugins/iview'

export default {
  install: function(Vue, options){
    Vue.use(VueSeamless)
    Vue.use(InfiniteScroll)
    Vue.use(Element)
    Vue.use(iview)
  }
}