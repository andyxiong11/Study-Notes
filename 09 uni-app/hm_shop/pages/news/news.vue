<template>
	<view class="news">
		<view class="news_item" v-for="item in newsList" :key="item.id">
			<image :src="item.img_url"></image>
			<view class="right">
				<view class="tit">
					{{item.title}}
				</view>
				<view class="info">
					<text>发布时间：{{item.add_time}}</text>
					<text>浏览：{{item.click}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				newsList:[]//资讯数据
			}
		},
		methods: {
			async getNews(){
				const res = await this.$myRequest({
					url:'/api/getnewslist'
				})
				console.log(res);
				this.newsList = res.data.message
			},
			onLoad(){
				this.getNews()
			}
		}
	}
</script>

<style lang="scss">
	.news{
		.news_item{
			display: flex;
			padding: 10rpxd 20rpx;
			border-bottom: 1px solid $shop-color;
			image{
				// width: 200rpx;
				//  防止图片变形
				min-width: 200rpx;
				max-width: 200rpx;
				
				height: 150rpx;
				background-color: pink;//因图片失效，演示使用
			}
			.right{
				margin-left: 15rpx;
				display: flex;
				flex-direction: column;//竖轴
				justify-content: space-between;
				.tit{
					font-size: 33rpx;
				}
				.info{
					font-size: 24rpx;
					text:nth-child(2){
						margin-left: 30rpx;
					}
				}
			}
		}
	}
</style>
