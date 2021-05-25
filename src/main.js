import Vue from 'vue'
import App from './App.vue'
import MhButton from './components/button.vue'
import MhDialog from './components/dialog.vue'
import MhInput from './components/myinput.vue'
import './assets/fonts/myfonts/iconfont.css'

Vue.component(MhButton.name, MhButton)
Vue.component(MhDialog.name, MhDialog)
Vue.component(MhInput.name, MhInput)
Vue.config.productionTip = false

new Vue({
  render: (h) => h(App)
}).$mount('#app')
