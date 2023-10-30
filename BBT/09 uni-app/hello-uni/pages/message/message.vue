<template>
	<view>
		<button type="primary" @click="chooseImg">上传图片</button>
		<image v-for="img in imgArr" :src="img" @click="previewImg(img)"></image>
		<!-- #ifdef H5 -->
		<view>只在H5页面展示</view>
		<!-- #endif -->
		<!-- #ifdef MP-WEIXIN -->
		<view>只在微信小程序页面展示</view>
		<!-- #endif -->
	</view>
</template>

<script>
	export default {
		data(){
			return {
				imgArr:[]
			}
		},
		methods:{
			chooseImg(){
				uni.chooseImage({//chooseImage 上传图片
					count:5,//最大上传图片数量
					success:res => {
						console.log('图片上传成功',res);
						this.imgArr = res.tempFilePaths//tempFilePaths 图片本地文件路径；此时需要写箭头函数，否则找不到this
					}
				})
			},
			previewImg(current){
				console.log(current);
				uni.previewImage({//previewImage 预览图片
					current,//current:current, 
					urls:this.imgArr,//图片链接
					loop:true,//循环预览
					indicator:'number'//图片指示器 只适配App
				})
			},
			onLoad(){
				// #ifdef H5
				console.log('H5中打印');
				//#endif
				// #ifdef MP-WEIXIN
				console.log('微信小程序中打印');
				//#endif
			}
		}
	}
</script>

<style>
	/* H5中的样式 */
	/* 	#ifdef H5 */
	view{
		color: hotpink;
	}
	/* 	#endif */
	/* 微信小程序中的样式 */
	/* #ifdef MP-WEIXIN */
	view{
		color: #000fff;
	}
	/* #endif */
</style>