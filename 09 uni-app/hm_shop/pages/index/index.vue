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
			<view class="nav_item" v-for="(item,index) in navs" :key="index" @click="navItemClick(item.path)">
				<view :class="item.icon"></view>
				<text>{{item.title}}</text>
			</view>
		</view>
		<!-- 推荐商品 -->
		<view class="hot_goods">
			<view class="tit">推荐商品</view>
			<view class="goods_list">
				<view class="goods_item" v-for="item in goods" :key="item.id">
					<image :src="item.img_url"></image>
					<view class="price">
						<text>￥{{item.sell_price}}</text>
						<text>￥{{item.market_price}}</text>
					</view>
					<view class="name">
						{{item.title}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				swipers:[],//轮播图
				goods:[],//热门商品
				navs:[//导航区
					{
						icon:'iconfont icon-ziyuan',
						title:'黑马超市',
						path:'/pages/goods/goods'
					},
					{
						icon:'iconfont icon-guanyuwomen',
						title:'联系我们',
						path:'/pages/contact/contact'
					},
					{
						icon:'iconfont icon-tupian',
						title:'社区图片',
						path:'/pages/pics/pics'
					},
					{
						icon:'iconfont icon-shipin',
						title:'学习视频',
						path:'/pages/videos/videos'
					}
				]
			}
		},
		onLoad() {
			this.getSwipers(),//获取轮播图的数据
			this.getHotGoods()//获取热门商品列表数据
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
			// 获取热门商品列表数据
			async getHotGoods(){
				const res = await this.$myRequest({
					url:'/api/getgoods?pageindex=1',
				})
				console.log(res);
				this.goods = res.data.message
			},
			//导航点击处理函数
			navItemClick(url){
				console.log(url);
				uni.navigateTo({
					url
				})
			}
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
				background-color: $shop-color;
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
	.hot_goods{
		background-color: #eee;
		padding: 10px 0;
		/* overflow: hidden;
		margin-top: 10px; 等同于 padding: 10px 0;*/
		.tit{
			height: 50px;
			line-height: 50px;
			color: $shop-color;
			text-align: center;
			letter-spacing: 20px;//文字间距
			background-color: #fff;
		// 	margin: 7px 0; 等同于 padding: 10px 0;
		}
	}
	.goods_list{
		padding:0 15rpx;
		display:flex;
		flex-wrap:wrap;//换行
		justify-content:space-between;//两端对齐
		.goods_item{
			background:#fff;
			width:355rpx;
			margin:10rpx 0;
			padding: 15rpx;
			box-sizing: border-box;//边框和内边距的值包含在 width 内
			image{
				width:80%;
				height:150px;
				display: block;//块级对象，方便margin: auto
				margin: auto;
				background-color: pink;//图片打不开，模拟图片
			}
		}
	}
	.price{
		color:$shop-color;
		font-size:36rpx;
		max-width: 20rpx 0 10rpx 0;
		text:nth-child(2){
			color:#ccc;
			font-size:28rpx;
			margin-left:17rpx;
			text-decoration:line-through;//文本的中间将显示一条线
		}
	}
	.name{
		font-size:28rpx;
		line-height:50rpx;
		padding-bottom:15rpx;
		padding-top:10rp×;
	}
</style>
