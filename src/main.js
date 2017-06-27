// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MuseUI from 'muse-ui'
import store from './store/store.js'
import ElementUI from 'element-ui'
import 'muse-ui/dist/muse-ui.css'
import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI)
Vue.use(MuseUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render:h=>h(App)
})