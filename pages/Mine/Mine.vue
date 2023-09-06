<template>
	<view class="mine">
		<NavBar></NavBar>
		<view class="content" :style="[getContentHeight]"></view>
		<TabBar :title="'Mine'"></TabBar>
	</view>
</template>

<script>
	import {
		mapGetters
	} from 'vuex'
	export default {
		data() {
			return {};
		},
		computed: {
			...mapGetters([
				"getContentHeight",
			])
		},
		methods: {}
	}
</script>

<style lang="scss">
	.mine {
		height: 100vh;
		background: $bg-color;

		.content {
			width: 100vw;
			overflow-y: scroll;
		}
	}
</style>