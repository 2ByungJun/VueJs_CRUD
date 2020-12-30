import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Main from '../views/Main.vue'
import Movie from '../views/Movie.vue'
import Setting from '../views/Setting.vue'
import Way from '../views/Way.vue'

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
  },
  {
    path: '/way',
    name: 'Way',
    component: Way
  }
]

const router = new VueRouter({
  routes
})

export default router
