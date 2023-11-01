<template>
	<view class="goods_list">
		<good-list :goods="goods"/>
	</view>
</template>

<script>
	import goodList from '../../components/good-list/good-list.vue'
	export default {
		data() {
			return {
				goods:[]//热门商品
			}
		},
		onLoad() {
			this.getHotGoods()//获取热门商品列表数据
		},
		methods: {
			// 获取热门商品列表数据
			async getHotGoods(){
				const res = await this.$myRequest({
					url:'/api/getgoods?pageindex=1',
				})
				console.log(res);
				this.goods = res.data.message
			},
		},
		components:{"good-list":goodList}
	}
</script>

<style>
	.goods_list{
		background-color: #eee;
	}
</style>
