import axios from 'axios'
import { Loading, Message } from 'element-ui'

const loading = {
	//loading加载对象
	loadingInstance: null,
	//打开加载
	open() {
		if (this.loadingInstance === null) {
			// 如果实例 为空，则创建
			this.loadingInstance = Loading.service({
				text: '加载中...', //加载图标下的文字
				spinner: 'el-icon-loading', //加载图标
				background: 'rgba(0, 0, 0, 0.8)', //背景色
				customClass: 'loading', //自定义样式的类名
			})
		}
	},
	//关闭加载
	close() {
		// 不为空时, 则关闭加载窗口
		if (this.loadingInstance !== null) {
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
			return res.data
		},
		err => {
			loading.close()
			console.log(2222)
			console.log(err)
			Message({
				//elemen组件库中的提示组件
				message: '后台错误',
				type: 'error',
				duration: 5000,
			})
			return
		}
	)

	return instance(config)
}
