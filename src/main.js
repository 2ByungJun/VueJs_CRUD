import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import Vuetify from '@/plugins/vuetify'

Vue.config.productionTip = false

Vue.use(Vuetify)
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
