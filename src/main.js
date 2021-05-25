import Vue from 'vue'
import App from './App.vue'
import MhButton from './components/button.vue'
import './assets/fonts/myfonts/iconfont.css'
Vue.config.productionTip = false

Vue.component(MhButton.name, MhButton)
new Vue({
  render: (h) => h(App)
}).$mount('#app')
