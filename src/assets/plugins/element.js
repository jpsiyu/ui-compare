import ElementUI from 'element-ui'
import { Loading, MessageBox, Notification, Message } from 'element-ui'
import '../theme-zeroborder/index.css'

export default {
  install: function (Vue, options) {
    Vue.use(ElementUI)
    Vue.prototype.$loading = Loading.service;
    Vue.prototype.$msgbox = MessageBox;
    Vue.prototype.$alert = MessageBox.alert;
    Vue.prototype.$confirm = MessageBox.confirm;
    Vue.prototype.$prompt = MessageBox.prompt;
    Vue.prototype.$notify = Notification;
    Vue.prototype.$message = Message
  }
}