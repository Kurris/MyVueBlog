import vuex from 'vuex'
import vue from 'vue'

vue.use(vuex)

const store = new vuex.Store({
	state: {
		userName: '',
		blog: {},
	},
	mutations: {},
	actions: {},
	getters: {},
	modules: {},
})

export default store
