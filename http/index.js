import ajax from '@/uni_modules/u-ajax'
import store from '@/store/index.js'

// 创建请求实例
const instance = ajax.create({
	// 初始配置
	baseURL: process.env.NODE_ENV === 'production' ? '' : '',
	timeout: 60000,
	header: {
		"content-type": "application/json"
	}
})

// 添加请求拦截器
instance.interceptors.request.use(
	config => {
		// 在发送请求前做些什么
		// 给header加上token
		// config.header.token = store.getters.getUserToken
		return config
	},
	error => {
		// 对请求错误做些什么
		return Promise.reject(error)
	}
)

// 添加响应拦截器
instance.interceptors.response.use(
	response => {
		// 对响应数据做些什么
		return response
	},
	error => {
		// 对响应错误做些什么
		if (error.data && error.data.msg) {
			uni.showToast({
				icon: "none",
				title: error.data.msg,
				duration: 3000,
				position: "bottom",
			});
		}
		return Promise.reject(error)
	}
)

// 导出 create 创建后的实例
export default instance