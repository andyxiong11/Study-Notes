<template>
	<view>
		<view class="news_item" @click="navigator(item.id)" v-for="item in list" :key="item.id">
			<image :src="item.img_url"></image>
			<view class="right">
				<view class="tit">
					{{item.title}}
				</view>
				<view class="info">
					<text>发布时间：{{item.add_time | formatDate}}</text>
					<text>浏览：{{item.click}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"news-item",
		props:['list'],
		filter:{//过滤器
			// TODO封装时间转换函数
			formatDate(date){
				console.log(date);
				const nDate = new Date(date)
				console.log(nDate);
				const year = nDate.getFullYear()
				const month = nDate.getMonth().toString().padStart(2,0)//padStart字符串补全，如果小于2位，加一个0
				const day = nDate.getDate().toString().padStart(2,0)
				return year+'-'+month+'-'+day
			}
		},
		methods:{
			// 跳转详情，订阅消息
			navigator(id){
				this.$emit('itemClick',id)
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