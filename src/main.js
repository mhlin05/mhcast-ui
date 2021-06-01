import Vue from 'vue'
import App from './App.vue'
// import MhButton from './components/button.vue'
import LButton from './components/button/button'
import MhDialog from './components/dialog.vue'
import MhInput from './components/myinput.vue'
import MhSwitch from './components/switch.vue'
import LRadio from './components/radio/radio.vue'
import LRadioGroup from './components/radio/radio-group.vue'
import LCheckBox from './components/checkbox.vue'
import LCheckBoxGroup from './components/checkboxgroup.vue'
import MhForm from './components/form/form'
import MhFormItem from './components/form/form-item'
import './assets/fonts/myfonts/iconfont.css'

Vue.component(LButton.name, LButton)
Vue.component(MhDialog.name, MhDialog)
Vue.component(MhInput.name, MhInput)
Vue.component(MhSwitch.name, MhSwitch)
Vue.component(LRadio.name, LRadio)
Vue.component(LRadioGroup.name, LRadioGroup)
Vue.component(LCheckBox.name, LCheckBox)
Vue.component(LCheckBoxGroup.name, LCheckBoxGroup)
Vue.component(MhForm.name, MhForm)
Vue.component(MhFormItem.name, MhFormItem)
Vue.config.productionTip = false

new Vue({
  render: (h) => h(App)
}).$mount('#app')
