import Toast from './Toast.vue'
import {
  createApp,
} from 'vue'
const obj = {}
obj.install = function (Vue) {
  const constructor = createApp(Toast)
  const toast = new constructor()
  toast.$mount(document.createElement('div'))
  document.body.appendChild(toast.$el)
  Vue.config.globalProperties.$toast = toast
  // console.log(Vue);
}
export default obj
