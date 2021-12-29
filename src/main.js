import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSession from 'vue-session'
import Navbar from './Navbar.vue'
import Edit from './components/Edit.vue'

Vue.use(VueSession)
Vue.component('Navbar', Navbar)
Vue.component('Edit', Edit)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
