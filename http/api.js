import http from './index.js'

export const postUserLogin = (data) => {
	// 登录
	return http({
		url: '/api/v1/user/login',
		method: 'POST',
		data: data
	})
}