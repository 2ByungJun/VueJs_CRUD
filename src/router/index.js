import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Main from '../views/Main.vue'
import Movie from '../views/Movie.vue'
import Setting from '../views/Setting.vue'

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
    component: Main
  },
  {
    path: '/movie',
    name: 'Movie',
    component: Movie
  },
  {
    path: '/setting',
    name: 'Setting',
    component: Setting
  }
]

const router = new VueRouter({
  routes
})

export default router
