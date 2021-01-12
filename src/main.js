import Vue from 'vue'
import App from './App.vue'

import EleUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

import store from './store/index.js'
import router from './router/index.js'
import Http from './network/index.js'


Vue.prototype.$http = Http
Vue.config.productionTip = false
Vue.use(EleUi, { size: 'small', zIndex: 3000 })
Vue.use(mavonEditor)

new Vue({
	store,
	router,
	render: h => h(App),
}).$mount('#app')
