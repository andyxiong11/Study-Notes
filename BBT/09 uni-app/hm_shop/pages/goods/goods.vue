<template>
	<view class="goods_list">
		<good-list :goods="goods"/>
		<view class="isOver" v-if="flag">
			-----我是有底线的-----
		</view>
	</view>
</template>

<script>
	import goodList from '../../components/good-list/good-list.vue'
	export default {
		data() {
			return {
				goods:[],//热门商品
				pageindex:1,//页数
				flag:false
			}
		},
		onLoad() {
			this.getHotGoods()//获取热门商品列表数据
		},
		onReachBottom() {//上拉触底函数
			if(this.goods.length<this.pageindex*10) return this.flag=true
			console.log('触底了');
			this.pageindex++
			this.getHotGoods()
		},
		onPullDownRefresh() {//下拉刷新
			console.log('下拉刷新了');
			this.pageindex = 1
			this.goods = []
			this.flag = false
			setTimeout(()=>{
				this.getHotGoods(()=>{
					uni.stopPullDownRefresh()//停止下拉刷新
				})
			},1000)
		},
		methods: {
			// 获取热门商品列表数据
			async getHotGoods(callBack){
				const res = await this.$myRequest({
					url:'/api/getgoods?pageindex='+this.pageindex,
				})
				console.log(res);
				this.goods = [...this.goods,...res.data.message]
				callBack && callBack()//有回调函数时才调用停止下拉刷新
			},
		},
		components:{"good-list":goodList}
	}
</script>

<style>
	.goods_list{
		background-color: #eee;
	}
	.isOver{
		width: 100%;
		height: 100%;
		line-height: 50px;
		text-align: center;
		/* background-color: #fff; */
		font-size: 28rpx
	}
</style>
