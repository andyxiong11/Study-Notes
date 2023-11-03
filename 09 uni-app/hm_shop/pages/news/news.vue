<template>
	<view class="news">
		<news-item :list=" newsList"/>
	</view>
</template>

<script>
	import newsItem from '../../components/news-item.vue'
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

<style>

</style>
