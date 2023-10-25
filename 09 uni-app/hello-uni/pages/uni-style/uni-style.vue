<template>
	<view>
		<view>样式学习</view>
		<view class="box1">
			测试文字
			<text>123</text>
		</view>
		<view class="iconfont icon-tupian"></view>
	</view>
</template>

<script>
</script>

<style lang="scss">
	// 导入外部样式
	@import url('./a.css');
	.box1{
		/* 以750宽的屏幕为基准,750rpx为屏幕宽度，rpc随屏幕等比例放大 */
		width: 375rpx;
		height: 375rpx;
		// uni.scss全局样式变量
		background-color: $global-color;
		font-size: 30rpx;
		color: #FFFF;
		text{
			color: pink;
		}
	}
</style>