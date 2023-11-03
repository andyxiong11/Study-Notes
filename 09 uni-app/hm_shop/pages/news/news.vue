<template>
	<view class="news">
		<news-item @itemClick="goDetail" :list=" newsList"/>
	</view>
</template>

<script>
	import newsItem from '../../components/news-item/news-item.vue'
	export default {
		data() {
			return {
				newsList:[]//资讯数据
			}
		},
		components:{
			"news-item":newsItem
		},
		methods: {
			// 获取资讯数据
			async getNews(){
				const res = await this.$myRequest({
					url:'/api/getnewslist'
				})
				console.log(res);
				this.newsList = res.data.message
			},
			onLoad(){
				this.getNews()
			},
			// 跳转详情页，发布消息
			goDetail(id){
				console.log(id);
				uni.navigateTo({
					url:'/pages/news-detail/news-detail?id='+id
				})
			}
		}
	}
</script>

<style>

</style>
