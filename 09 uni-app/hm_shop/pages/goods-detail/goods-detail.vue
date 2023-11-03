<template>
	<view class="goods_datails">
		<!-- 轮播图 indicator-dots指示器 -->
		<swiper indicator-dots>
			<swiper-item v-for="(item,index) in swipers" :key="index">
				<image :src="item.src"></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:0,
				swipers:[]
			}
		},
		methods: {
			async getSwipers(){
				const res = await this.$myRequest({
					url:'/api/getthumimages/'+this.id
				})
				console.log(res);
				this.swipers = res.data.message
			}
		},
		onLoad(option) {
			console.log(option);//上个页面传过来的
			this.id = option.id
			this.getSwipers()
		}
	}
</script>

<style lang="scss">
	.goods_datails{
		swiper{
			height: 700rpx;
			image{
				width: 100%;
				height: 100%;
				background-color: pink;//因图片失效，演示使用
			}
		}
	}
</style>
