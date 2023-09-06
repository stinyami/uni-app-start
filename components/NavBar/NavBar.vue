<template>
	<view class="nav-bar" :style="{ height: getNavHeight + 'px' }">
		<uni-icons v-if="back" type="left" :style="{ top: getMenuButton.top + 3 + 'px' }" size="28" color="#ffffff"
			@click="backBtn()"></uni-icons>
		<image :src="titleLogo" :style="{ top: getMenuButton.top + 4 + 'px' }" mode="aspectFit">
		</image>
	</view>
</template>

<script>
	import {
		mapGetters
	} from "vuex"
	export default {
		name: "NavBar",
		props: {
			back: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				hasBack: this.back,
				titleLogo: "/static/img/title-logo.png"
			};
		},
		computed: {
			...mapGetters([
				"getMenuButton",
				"getNavHeight",
			])
		},
		methods: {
			backBtn() {
				uni.navigateBack()
			}
		},
		created() {

		},
	}
</script>

<style lang="scss">
	.nav-bar {
		width: 100vw;
		background: $theme-color;
		position: relative;

		uni-icons {
			position: absolute;
			top: 0;
			left: 46rpx;
			z-index: 2;
		}

		image {
			height: 54rpx;
			position: absolute;
			top: 0;
			left: 50%;
			transform: translateX(-50%);
			z-index: 1;
		}
	}
</style>