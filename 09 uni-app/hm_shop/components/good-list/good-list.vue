<template>
	<view class="goods_list">
		<view class="goods_item" v-for="item in goods" :key="item.id" @click="navigator(item.id)">
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
</template>

<script>
	export default{
		props:['goods'],
		methods:{
			// 订阅消息
			navigator(id){
				this.$emit('goodsItemClick',id)
			}
		}
	}
</script>

<style lang="scss">
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