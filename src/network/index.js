import axios from 'axios'

export default function http(config) {
	const instance = axios.create({
		baseURL: config.baseURL == null || config.baseURL == '' ? 'http://localhost:5000/api/' : config.baseURL,
		timeout: 30000,
		withCredentials: true, //携带Cookie
	})

	instance.interceptors.request.use(config => {
		this.$store.state.loading.target = config.target
		this.$store.state.loading.open()
		return config
	})

	instance.interceptors.response.use(
		result => {
			this.$store.state.loading.close()

			if (result.data.status == 4000) {
				this.$router.replace('/Login')
			} else if (result.data.status == 4002) {
				this.$message({
					tyoe: 'warning',
					message: result.data.data.map(x => x.message).join(','),
				})
			} else {
				return result.data
			}
		},
		error => {
			this.$store.state.loading.close()
			if (error.message == 'Network Error') this.$router.push('/notfound')
			return Promise.reject(error)
		}
	)

	let token = localStorage.getItem('user_access_token')
	config.headers = { user_access_token: token }

	return instance(config)
}
