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

const router = new VueRouter({
  routes
})

export default router
