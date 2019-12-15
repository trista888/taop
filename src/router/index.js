import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home
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

/* 挂载路由导航守卫 
* param {to} 将要访问的路由
* param {from} 代表从哪个路径跳转而来
* param {next} 是一个函数，表示方行
*/
router.beforeEach((to, from, next) => {
  // 登陆页面没有任何权限限制
  if(to.path === '/login') return next();
  // 获取 token
  const tokenStr = window.sessionStorage.getItem('token');
  // 如果没有 token 强制跳转至登陆页面
  if(!tokenStr) return next('/login')
  next()
})

export default router
