<template>
	<view class="goods_datails">
		<!-- 轮播图 indicator-dots指示器 -->
		<swiper indicator-dots>
			<swiper-item v-for="(item,index) in swipers" :key="index">
				<image :src="item.src"></image>
			</swiper-item>
		</swiper>
		<!-- 价格 -->
		<view class="box1">
			<view class="price">
				<text>￥{{info.sell_price}}</text>
				<text>￥{{info.market_price}}</text>
			</view>
			<!-- 商品标题 -->
			<view class="goods_name">{{info.title}}</view>
		</view>
		<!-- 分割线 -->
		<view class="line"></view>
		
		<view class="box2">
			<view>货号：{{info.goods_no}}</view>
			<view>库存：{{info.stock_quantity}}</view>
		</view>
		<!-- 分割线 -->
		<view class="line"></view>
		
		<view class="box3">
			<view class="tit">详情介绍</view>
			<view class="content">
				<!-- rich-text富文本  nodes内容-->
				<rich-text :nodes="content"></rich-text>
			</view>
		</view>
		<!-- 底部 -->
		<view class="goods_nav">
			<uni-goods-nav :fill="true"  :options="options" :button-group="buttonGroup"  @click="onClick" @buttonClick="buttonClick" ></uni-goods-nav>
		</view>
	</view>
</template>

<script>
	// uni-goods-nav 插件市场的导航插件
	import uniGoodsNav from '@/components/uni-goods-nav/uni-goods-nav.vue'
	export default {
		data() {
			return {
				id:0,
				swipers:[],//轮播图数据
				info: {},//商品数据
				content: '',//商品介绍富文本
				// uni-goods-nav插件数据
				options: [
					{
						icon: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/uni-ui/goodsnav/kefu.png',
						text: '客服'
					}, {
						icon: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/uni-ui/goodsnav/dianpu.png',
						text: '店铺'
					}, {
						icon: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/uni-ui/goodsnav/carts.png',
						text: '购物车',
						info: 12
					},
				],
				buttonGroup: [
					{
						text: '加入购物车',
						backgroundColor: '#ff0000',
						color: '#fff'
					},
					{
						text: '立即购买',
						backgroundColor: '#ffa200',
						color: '#fff'
					}
				]
			}
		},
		methods: {
			// 获取详情轮播图
			async getSwipers(){
				const res = await this.$myRequest({
					url:'/api/getthumimages/'+this.id
				})
				console.log('获取详情轮播图',res);
				this.swipers = res.data.message
			},
			// 获取详情参数
			async getDetailInfo () {
				const res = await this.$myRequest({
					url: '/api/goods/getinfo/'+this.id
				})
				console.log('获取详情参数',res);
				// if res === 
				this.info = res.data.message[0]
			},
			// 获取详细介绍
			async getDetailContent () {
				const res = await this.$myRequest({
					url: '/api/goods/getdesc/'+this.id
				})
				console.log('获取详细介绍',res);
				this.content = res.data.message[0].content
			},
			// uni-goods-nav插件函数
			onClick (e) {
				uni.showToast({
				  title: `点击${e.content.text}`,
				  icon: 'none'
				})
				console.log(e);
			},
			buttonClick (e) {
				console.log(e)
				this.options[2].info++
			}
		},
		onLoad(option) {
			console.log(option);//上个页面传过来的
			this.id = option.id
			this.getSwipers()
			this.getDetailInfo()
			this.getDetailContent()
		},
		components: {uniGoodsNav}
	}
</script>

<style lang="scss">
	.goods_datails{
		swiper{
			height: 700rpx;
			image{
				width: 100%;
				height: 100%;
				background-color: pink;//因图片失效，演示使用
			}
		}
		.box1 {
			padding: 10px;
			.price {
				font-size: 35rpx;
				color: $shop-color;
				line-height: 80rpx;
				text:nth-child(2){
					color: #ccc;
					font-size: 28rpx;
					text-decoration: line-through;//删除线
					margin-left: 20rpx;
				}
			}
			.goods_name{
				font-size: 32rpx;
				line-height: 60rpx;
			}
		}
		.box2 {
			padding: 0 10px;
			font-size: 32rpx;
			line-height: 70rpx;
		}
		.box3 {
			padding-bottom: 50px;
			.tit{
				font-size: 32rpx;
				padding-left: 10px;
				border-bottom: 1px solid #eee;
				line-height: 70rpx;
			}
			.content {
				padding: 10px;
				font-size: 28rpx;
				color: #333;
				line-height: 50rpx;
				// /deep/修改请求返回数据的样式
				/deep/ .gomeImgLoad{
					width: 750rpx !important;
					height: auto;
				}
			}
		}
	}
	.goods_nav {
		position: fixed;//固定定位，否则无法显示
		bottom:0;
		width: 100%;
	}
</style>
