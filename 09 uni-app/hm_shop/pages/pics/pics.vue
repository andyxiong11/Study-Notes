<template>
	<view class="pics">
		<scroll-view class="left" scroll-y>
			<view 
				@click="leftClickHandle(index,item.id)" 
				:class="active === index ? 'active' : '' " 
				v-for="(item,index) in cates" 
				:key="item.id" 
			>{{item.title}}</view>
		</scroll-view>
		<scroll-view class="right" scroll-y >
			<view class="item" v-for="item in secondData" :key="item.id">
				<image @click="previewImg(item.img_url)" :src="item.img_url"></image>
				<text> {{item.title}}</text>
			</view>
			<text v-if="secondData.length === 0">暂无数据</text>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cates:[],//图片分类
				active:0,//高亮的分类索引
				secondData:[],//右侧的数据
			}
		},
		methods: {
			// 获取图片分类
			async getPicesCate(){
				const res = await this.$myRequest({
					url:"/api/getimgcategory"
				})
				this.cates = res.data.message
				this.leftClickHandle(0,this.cates[0].id)//页面首次加载时获取第一个分类数据
			},
			// 点击分类事件
			async leftClickHandle(index,id){
				this.active = index
				//获取右侧的数据
				console.log(id)
				const res = await this.$myRequest({
					url:'/api/getimages/'+id
				})
				console.log(res)
				this.secondData = res.data.message
			},
			previewImg(current){
				const urls = this.secondData.map(item=>{
					return item.img_url
				})
				uni.previewImage({
					current,//当前显示图片的链接
					urls,//需要预览的图片链接列表
				})
			}
		},
		onLoad() {
			this.getPicesCate()
		}
	}
</script>

<style lang="scss">
	page{
		height: 100%;
	}
	.pics{
		height: 100%;//需要修改page的高度
		display: flex;//左右侧并排
		.left{
			width: 200rpx;
			height: 100%;//不给会导致整个页面滚动
			border-right: 1px solid #eee;
			view{
				height: 60rpx;
				line-height: 60rpx;
				color: #333;
				text-align: center;
				font-size: 30rpx;
				border-top: 1px solid #eee;
			}
			.active{
				background-color: $shop-color;
				color: #fff;
			}
		}
		.right{
			height: 100%;
			width: 530rpx;
			margin: 10rpx auto;
			.item{
				image{
					width: 520rpx;
					height: 520rpx;
					border-radius: 5px;
					background-color: pink;//因服务器图片失效，演示使用
				}
				text{
					font-size: 30rpx;
					line-height: 60rpx;
				}
			}
		}
	}
</style>
