<template>
	<view class="pics">
		<scroll-view class="left" scroll-y>
			<view 
				@click="leftClickHandle(index)" 
				:class="active === index ? 'active' : '' " 
				v-for="(item,index) in cates" 
				:key="item.id" 
			>{{item.title}}</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cates:[],//图片分类
				active:0,//高亮的分类索引
			}
		},
		methods: {
			// 获取图片分类
			async getPicesCate(){
				const res = await this.$myRequest({
					url:"/api/getimgcategory"
				})
				this.cates = res.data.message
			},
			// 点击分类事件
			leftClickHandle(index){
				this.active = index
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
	}
</style>
