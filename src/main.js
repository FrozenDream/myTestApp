import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iconFont from './assets/iconfonts/iconfont.css'
import fastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'


Vue.config.productionTip = false

// 使用懒加载插件
Vue.use(VueLazyload)
// 图片预览
Vue.use(preview)
// 自己封装的toast 弹窗插件
import toast from 'components/common/toast'
Vue.use(toast)
// 解决移动端300ms点击延迟
fastClick.attach(document.body);
// 添加事件总线
Vue.prototype.$bus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
