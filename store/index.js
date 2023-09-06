import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		menuButton: {},
		navHeight: 0, // 单位xp
		contentHeight: {},
		pageHeight: {},
		userOpenId: "",
		userToken: uni.getStorageSync("token") || "",
		userInfo: {},
	},
	getters: {
		getMenuButton: (state) => {
			return state.menuButton
		},
		getNavHeight: (state) => {
			return state.navHeight
		},
		getContentHeight: (state) => {
			return state.contentHeight
		},
		getPageHeight: (state) => {
			return state.pageHeight
		},
		getUserOpenId: (state) => {
			return state.userOpenId
		},
		getUserToken: (state) => {
			return state.userToken
		},
		getUserInfo: (state) => {
			return state.userInfo
		}
	},
	mutations: {
		SET_MENU_BUTTON: (state, params) => {
			state.menuButton = params
		},
		SET_NAV_HEIGHT: (state, params) => {
			state.navHeight = params.top + params.height + 20
		},
		SET_CONTENT_HEIGHT: (state, params) => {
			let navHeight = params.top + params.height + 20
			state.contentHeight = {
				height: `calc(100% - 100rpx - ${navHeight}px)`,
				height: `calc(100% - 100rpx - ${navHeight}px - constant(safe-area-inset-bottom))`,
				height: `calc(100% - 100rpx - ${navHeight}px - env(safe-area-inset-bottom))`,
			}
		},
		SET_PAGE_HEIGHT: (state, params) => {
			let navHeight = params.top + params.height + 20
			state.pageHeight = {
				height: `calc(100% - ${navHeight}px)`
			}
		},
		SET_USER_OPEN_ID: (state, params) => {
			state.userOpenId = params
		},
		SET_USER_TOKEN: (state, params) => {
			state.userToken = params
			if (!params) {
				uni.removeStorageSync("token")
			} else {
				uni.setStorageSync('token', params);
			}
		},
		SET_USER_INFO: (state, params) => {
			state.userInfo = params
		}
	},
	actions: {
		setMenuButton: ({
			commit,
			state
		}, params) => {
			commit("SET_MENU_BUTTON", params)
			commit("SET_NAV_HEIGHT", params)
			commit("SET_CONTENT_HEIGHT", params)
			commit("SET_PAGE_HEIGHT", params)
		},
		setUserKey: ({
			commit,
			state
		}, params) => {
			commit("SET_USER_OPEN_ID", params.openId)
			commit("SET_USER_TOKEN", params.token)
		},
		setUserInfo: ({
			commit,
			state
		}, params) => {
			commit("SET_USER_INFO", params)
		}
	},
})
export default store