import Vue from 'vue'
import App from './App.vue'
// import MhButton from './components/button.vue'
import LButton from './components/button/button'
import MhDialog from './components/dialog/dialog.vue'
import LInput from './components/input/myinput.vue'
import MhSwitch from './components/switch/switch.vue'
import LRadio from './components/radio/radio.vue'
import LRadioGroup from './components/radio/radio-group.vue'
import LCheckBox from './components/checkbox/checkbox.vue'
import LCheckBoxGroup from './components/checkbox/checkboxgroup.vue'
import MhForm from './components/form/form'
import MhFormItem from './components/form/form-item'
import LDatePicker from './components/datepicker/datepicker'
import './assets/fonts/myfonts/iconfont.css'

Vue.component(LButton.name, LButton)
Vue.component(MhDialog.name, MhDialog)
Vue.component(LInput.name, LInput)
Vue.component(MhSwitch.name, MhSwitch)
Vue.component(LRadio.name, LRadio)
Vue.component(LRadioGroup.name, LRadioGroup)
Vue.component(LCheckBox.name, LCheckBox)
Vue.component(LCheckBoxGroup.name, LCheckBoxGroup)
Vue.component(MhForm.name, MhForm)
Vue.component(MhFormItem.name, MhFormItem)
Vue.component(LDatePicker.name, LDatePicker)
Vue.config.productionTip = false

new Vue({
  render: (h) => h(App)
}).$mount('#app')
