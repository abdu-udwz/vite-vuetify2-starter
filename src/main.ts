import Vue from 'vue'
import App from '@/App.vue'

import vuetify from '@/plugins/vuetify'

const app = new Vue({
  render: h => h(App),
  vuetify,
})

app.$mount('#app')
