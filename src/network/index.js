import axios from 'axios'
import { Loading, Message } from 'element-ui'

const loading = {
	loadingInstance: null,
	open() {
		if (this.loadingInstance === null) {
			this.loadingInstance = Loading.service({
				text: '等待中...',
				spinner: 'el-icon-loading',
				background: 'rgba(0, 0, 0, 0.01)',
				customClass: 'loading',
			})
		}
	},
	close() {
		if (this.loadingInstance != null) {
			this.loadingInstance.close()
		}
		this.loadingInstance = null
	},
}

axios.defaults.baseURL = 'http://localhost:5000/api/'
axios.defaults.withCredentials = true
axios.defaults.timeout = 5000

export default function http(config) {
	const instance = axios.create()

	instance.interceptors.request.use(config => {
		loading.open()
		return config
	})

	instance.interceptors.response.use(
		res => {
			loading.close()
			if (res.data.status == 4000) {
				this.$router.replace('/Login')
			}

			return res.data
		},
		err => {
			loading.close()
			let msg = err.message == 'Network Error' ? '无法连接到服务器' : err.message
			Message({
				message: msg,
				type: 'error',
				duration: 5000,
			})
			return Promise.reject(err)
		}
	)

	let token = window.localStorage.getItem('user_access_token')
	config.headers = {
		user_access_token: token,
	}

	return instance(config)
}
