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
		<!-- 导航区 -->
		<view class="nav">
			<view class="nav_item">
				<!-- class="iconfont icon-ziyuan" 图标引入 -->
				<view class="iconfont icon-ziyuan"></view>
				<text>黑马超市</text>
			</view>
			<view class="nav_item">
				<!-- class="iconfont icon-ziyuan" 图标引入 -->
				<view class="iconfont icon-guanyuwomen"></view>
				<text>联系我们</text>
			</view>
			<view class="nav_item">
				<!-- class="iconfont icon-ziyuan" 图标引入 -->
				<view class="iconfont icon-tupian"></view>
				<text>社区图片</text>
			</view>
			<view class="nav_item">
				<!-- class="iconfont icon-ziyuan" 图标引入 -->
				<view class="iconfont icon-shipin"></view>
				<text>学习视频</text>
			</view>
		</view>
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
	.nav{
		display: flex;
		.nav_item{
			width: 25%;
			text-align: center;
			view{
				width: 120rpx;
				height: 120rpx;
				background-color: #b50e03;
				border-radius: 60rpx;
				margin: 10px auto;
				line-height: 120rpx;
				color: #fff;
				font-size: 50rpx;
			}
			.icon-tupian{
				font-style: 45rpx;
			}
			text{
				font-size: 30rpx;
			}
		}
	}
</style>
