import Vue from 'vue'
import App from './App.vue'

import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import MavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

import store from './store/index.js'
import Router from './router/index.js'
import Http from './network/index.js'

Vue.config.productionTip = false

Vue.prototype.$http = Http
Vue.use(ElementUi, { size: 'small', zIndex: 3000 })
Vue.use(MavonEditor)

new Vue({
	store,
	Router,
	render: h => h(App),
}).$mount('#app')
