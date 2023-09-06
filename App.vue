<script>
	import {
		mapActions
	} from 'vuex'
	export default {
		methods: {
			...mapActions([
				"setMenuButton",
			])
		},
		onLaunch: function() {
			console.log('App Launch')
			let _this = this
			let menuButtonInfo = uni.getMenuButtonBoundingClientRect()
			_this.setMenuButton(menuButtonInfo)
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">

</style>