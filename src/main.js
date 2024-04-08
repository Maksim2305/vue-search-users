import Vue from 'vue'
import App from './App.vue'
import './assets/styles/main.scss'
import router from './router'
import store from './store'

Vue.prototype.$store = store;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
