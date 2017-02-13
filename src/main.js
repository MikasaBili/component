// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import xRadio from './components/radio'
import xAlert from './components/alert'
import xradioGroup from './components/radio-group'
import xRadioButton from './components/radio-button'
import xCheckBox from './components/checkbox'
import xCheckboxGroup from './components/checkbox-group'
Vue.use(xCheckboxGroup)
Vue.use(xCheckBox)
Vue.use(xRadioButton)
Vue.use(xradioGroup)
Vue.use(xRadio)
Vue.use(xAlert)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
