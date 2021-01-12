import vuex from 'vuex'
import vue from 'vue'
import loading from '../utils/loading'

vue.use(vuex)

const store = new vuex.Store({
	state: {
		userName: '',
		blog: {},
		loading: loading,
	},
	mutations: {},
	actions: {},
	getters: {},
	modules: {},
})

export default store
