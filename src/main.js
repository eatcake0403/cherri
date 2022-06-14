import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueI18n from 'vue-i18n'
import messages from '@/i18n'
import { searchLocalLang } from '@/i18n/loacalLang.js'
import vuetify from './plugins/vuetify'

Vue.use(VueI18n)

const lang = searchLocalLang()

const i18n = new VueI18n({
  locale: lang,
  messages
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  vuetify,
  render: h => h(App)
}).$mount('#app')
