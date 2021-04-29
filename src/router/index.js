import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/Home.vue')
const Category = () => import('views/category/Category.vue')
const Cart = () => import('views/cart/Cart.vue')
const Profile = () => import('views/profile/Profile.vue')
const Detail = () => import('views/detail/Detail.vue')
Vue.use(VueRouter)

// push的路由跳转方法.捕获重复点击跳转报错的bug
const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
// replace的路由跳转方法.捕获重复点击跳转报错的bug
const originalReplace = VueRouter.prototype.replace

VueRouter.prototype.replace = function push(location) {
  return originalReplace.call(this, location).catch(err => err)
}

const routes = [{
  path: '/',
  redirect: '/home'
}, {
  path: '/home',
  component: Home
}, {
  path: '/category',
  component: Category
}, {
  path: '/cart',
  component: Cart
}, {
  path: '/profile',
  component: Profile
}, {
  path: '/detail/:iid',
  component: Detail
}]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
