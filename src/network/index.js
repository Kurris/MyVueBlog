import axios from 'axios'
import { Loading, Message } from 'element-ui'

const loading = {
	loadingInstance: null,
	open() {
		if (this.loadingInstance === null) {
			this.loadingInstance = Loading.service({
				text: '加载中...',
				spinner: 'el-icon-loading',
				background: 'rgba(0, 0, 0, 0.1)',
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

export default function http(config) {
	const instance = axios.create()

	instance.interceptors.request.use(config => {
		loading.open()
		return config
	})

	instance.interceptors.response.use(
		res => {
			loading.close()
			if (res.data.Status > 1001) {
				Message({
					message: res.data.Message,
					type: 'error',
					duration: 5000,
				})
			} else {
				return res.data
			}
		},
		err => {
			loading.close()
			let msg = err.message == 'Network Error' ? '无法连接网络' : err.message
			Message({
				message: msg,
				type: 'error',
				duration: 5000,
			})
		}
	)

	return instance(config)
}
