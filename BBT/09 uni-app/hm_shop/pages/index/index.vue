<template>
	<view class="home">
		<!-- swiper 视图容器 轮播图 -->
		<!-- indicator-dots 是否显示指示点 -->
		<!-- circular 衔接滑动 -->
		<swiper indicator-dots="true" circular="true">
			<swiper-item v-for="item in swipers" :key="item.id">
				<image :src="item.img"></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				swipers:[]
			}
		},
		onLoad() {
			this.getSwipers()
		},
		methods: {
			//TODO 小程序渲染轮播图失败
			// 获取轮播图的数据
			async getSwipers(){
			/*	console.log('获取轮播图的数据');
				uni.request({
					url:'http://localhost:8082/api/getlunbo',
					success:res => {
						console.log(res);
						if(res.data.status !== 0){
							return uni.showToast({//showToast消息提示框
								title:"获取数据失败"
							})
						}
						this.swipers = res.data.message
					}
				})
			} */
				const res = await this.$myRequest({
					url:'/api/getlunbo',
				})
				console.log(res);
				this.swipers = res.data.message
			},
		}
	}
</script>

<style lang="scss">
	.home{
		swiper{
			width: 750rpx;//满屏
			height: 380rpx;
			image{
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
