import Vue from "vue"
import App from "./App.vue"
import { BootstrapVue, IconsPlugin } from "bootstrap-vue"
import Clipboard from 'v-clipboard'
import 'core-js/stable'
import 'regenerator-runtime/runtime'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Clipboard)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount("#app");
