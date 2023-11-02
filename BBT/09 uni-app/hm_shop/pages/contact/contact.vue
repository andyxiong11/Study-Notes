<template>
	<view class="contact">
		<image src="http://www.itcast.cn/2018czydz/images/gywmban.jpg" class="img"></image>
		<view class="info">
			<view @click="phone">联系电话：400-618-9090（点击拨打）</view>
			<view>校区地址：浙江省杭州市下沙经济开发区4号大街187号盛泰时代山</view>
		</view>
		<!-- 地图组件 -->
		<map class="map" :longitude="longitude" :scale="scale" :latitude="latitude" :markers="markers"></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 经纬度
				longitude:"120",
				latitude:"30",
				// 标记点
				markers:[
					{
						longitude:"120",
						latitude:"30",
						iconPath:"../../static/hmlogo.png",//图片
						with:30,
						height:30
					}
				],
				//缩放
				scale:13
			}
		},
		methods: {
			phone(){
				uni.makePhoneCall({
					phoneNumber:"4006189090"
				})
			}
		}
	}
</script>

<style lang="scss">
	.contact{
		.img{
			width: 750rpx;
			height: 320rpx;
		}
		.info{
			padding: 10rpx 20rpx;
			font-size: 30rpx
			view{
				line-height: 80rpx;
				border-bottom: 1px solid #eee;
			}
		}
		.map{
			width: 750rpx;
			height: 750rpx;
		}
	}
</style>
