import Vue from 'vue'
import App from './App.vue'

import EleUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import Vuex from './store/index.js'
import Router from './router/index.js'
import Http from './network/index.js'

Vue.prototype.$http = Http
Vue.config.productionTip = false
Vue.use(EleUi, { size: 'small', zIndex: 3000 })

new Vue({
	Vuex,
	Router,
	render: h => h(App),
}).$mount('#app')
