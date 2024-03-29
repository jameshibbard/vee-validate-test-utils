import Vue from 'vue'
import VeeValidate from 'vee-validate'
import App from './App.vue'

Vue.use(VeeValidate, { inject: false })
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
