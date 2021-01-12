import { Loading } from 'element-ui'

const loading = {
	requestCount: 0,
	instance: null,
	target: 'body',
	open() {
		this.requestCount++
		if (this.instance === null && this.requestCount == 1) {
			this.instance = Loading.service({
				lock: true,
				text: '等待中...',
				background: 'rgba(255, 255, 255, 0.5)',
				target: this.target,
			})
		}
	},
	close() {
		this.requestCount--
		if (this.requestCount != 0) return

		if (this.instance != null) {
			this.instance.close()
		}
		this.instance = null
	},
}

export default loading
