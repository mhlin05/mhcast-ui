import Vue from 'vue'
import App from './App.vue'
// import MhButton from './components/button.vue'
import LButton from './components/button/button'
import MhDialog from './components/dialog.vue'
import MhInput from './components/myinput.vue'
import MhSwitch from './components/switch.vue'
import MhRadio from './components/radio.vue'
import MhRadioGroup from './components/radio-group.vue'
import MhCheckBox from './components/checkbox.vue'
import MhCheckBoxGroup from './components/checkboxgroup.vue'
import MhForm from './components/form/form'
import MhFormItem from './components/form/form-item'
import './assets/fonts/myfonts/iconfont.css'

Vue.component(LButton.name, LButton)
Vue.component(MhDialog.name, MhDialog)
Vue.component(MhInput.name, MhInput)
Vue.component(MhSwitch.name, MhSwitch)
Vue.component(MhRadio.name, MhRadio)
Vue.component(MhRadioGroup.name, MhRadioGroup)
Vue.component(MhCheckBox.name, MhCheckBox)
Vue.component(MhCheckBoxGroup.name, MhCheckBoxGroup)
Vue.component(MhForm.name, MhForm)
Vue.component(MhFormItem.name, MhFormItem)
Vue.config.productionTip = false

new Vue({
  render: (h) => h(App)
}).$mount('#app')
