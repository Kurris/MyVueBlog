import Vue from 'vue'
import App from './App.vue'

import Vuex from './store/index.js'
import Router from './router/index.js'

Vue.config.productionTip = false

new Vue({
	Vuex,
	Router,
	render: h => h(App),
}).$mount('#app')
