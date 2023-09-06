<template>
	<view class="tab-bar">
		<view @click="jumpTab(item.title, item.url)" class="bar-box" :class="{ active: item.title == pageTitle }"
			v-for="(item, index) in tabName" :key="index">
			<img src="../../static/img/logo.png"></img>
			<text>{{ item.name }}</text>
		</view>
	</view>
</template>

<script>
	export default {
		name: "TabBar",
		props: {
			title: {
				type: String,
			}
		},
		data() {
			return {
				pageTitle: this.title,
				tabName: [{
						title: "Index",
						name: "首页",
						url: "/pages/Index/Index"
					},
					{
						title: "Index2",
						name: "首页2",
						url: "/pages/Index2/Index2"
					},
					{
						title: "Mine",
						name: "我的",
						url: "/pages/Mine/Mine"
					}
				],
			};
		},
		methods: {
			jumpTab(title, url) {
				let _this = this
				if (_this.pageTitle != title) {
					uni.switchTab({
						url: url
					});
				}
			},
		},
		created() {
			uni.hideTabBar()
		}
	}
</script>

<style lang="scss">
	.tab-bar {
		height: 100rpx;
		width: 100vw;
		display: flex;
		background: #ffffff;
		position: fixed;
		left: 0;
		bottom: 0;
		padding-bottom: constant(safe-area-inset-bottom);
		padding-bottom: env(safe-area-inset-bottom);

		.bar-box {
			width: 33.33%;
			padding-top: 10rpx;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			img {
				display: block;
				width: 60rpx;
				height: 60rpx;
			}

			text {
				font-size: $second-title-size;
				line-height: $second-title-size;
				font-weight: bold;
				color: $minor-title-color;
				padding-top: 10rpx;
			}

			&.active {
				text {
					color: $theme-color;
				}
			}
		}
	}
</style>