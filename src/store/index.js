import Vue from 'vue'
import Vuex from 'vuex'
import movie from './movie'
import menu from './menu'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    movie,
    menu,
  }
})
