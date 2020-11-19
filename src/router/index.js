import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/main',
    name: 'Main',
    component: () => import('../views/Main.vue')
  },
  {
    path: '/searchMovie',
    name: 'SearchMovie',
    componet: () => import('../views/SearchMovie.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
