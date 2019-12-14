import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Index from '../views/Index.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/index',
    component: Index
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/',
    redirect: '/login'
  }
]
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err);
};//可能是引入了elementUI的原因，不重写此方法在引用路由时会报错Navigating to current location ("/xxxx")
const router = new VueRouter({
  routes
})

export default router
