<template>
	<view class="index">
		<NavBar></NavBar>
		<view class="content" :style="[getContentHeight]"></view>
		<TabBar :title="'Index'"></TabBar>
	</view>
</template>

<script>
	import {
		mapGetters,
	} from 'vuex'
	export default {
		data() {
			return {}
		},
		computed: {
			...mapGetters([
				"getContentHeight",
			])
		},
		methods: {},
		created() {}
	}
</script>

<style lang="scss">
	.index {
		height: 100vh;
		background: $bg-color;

		.content {
			width: 100vw;
			overflow-y: scroll;
		}

	}
</style>