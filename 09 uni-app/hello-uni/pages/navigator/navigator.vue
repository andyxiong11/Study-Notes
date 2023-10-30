<template>
	<view>
		<!-- 下面是声明式导航 -->
		<view>导航跳转学习</view>
		<!-- navigator导航  参数在detail组件接收 -->
		<navigator url="/pages/detail/detail?id=80">跳转详情页</navigator>
		<!-- switchTab 跳转tabbar页面 -->
		<navigator url="/pages/message/message" open-type="switchTab">跳转信息页</navigator>
		<!-- redirect 关闭当前页面然后跳转，左上角无法返回 -->
		<navigator url="/pages/detail/detail" open-type="redirect">跳转详情页</navigator>
		<!-- 下面是编程式导航 -->
		<button @click="goDetail">跳转详情页</button>
		<button @click="goMessage">跳转信息页</button>
		<button @click="redirectDetail">跳转详情页并关闭当前页面</button>
	</view>
</template>

<script>
	export default{
		onUnload() {
			console.log('导航页面卸载了');//验证redirect、switchTab、redirectTo跳转前关闭当前页面
		},
		methods:{
			goDetail(){
				uni.navigateTo({//保留当前页面，跳转到应用内的某个页面
					url:"/pages/detail/detail"
				})
			},
			goMessage(){
				uni.switchTab({//跳转到tabBar 页面，并关闭其他所有非 tabBar 页面
					url:"/pages/message/message"
				})
			},
			redirectDetail(){
				uni.redirectTo({//关闭当前页面，跳转到应用内的某个页面
					url:"/pages/detail/detail"
				})
			}
		}
	}
</script>

<style>
</style>