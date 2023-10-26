<template>
	<view>
		<view>这是列表页</view>
		<view v-for="item in list">
			{{item}}
		</view>
		<button @click="pullDown">下拉刷新</button>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				list:[
					'前端','java','UI','测试'
				]
			}
		},
		// 监听该页面用户下拉刷新事件
		onPullDownRefresh() {
			console.log('触发了下拉刷新');
			setTimeout(()=>{
				this.list = ['UI','测试','前端','java']
				uni.stopPullDownRefresh()//停止当前页面下拉刷新
			},2000)
		},
		methods:{
			pullDown(){
				uni.startPullDownRefresh()//触发下拉刷新动画
			}
		}
	}
</script>

<style>
</style>