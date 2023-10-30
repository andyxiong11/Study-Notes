<template>
	<view>
		<button type="primary" @click="chooseImg">上传图片</button>
		<image v-for="img in imgArr" :src="img" @click="previewImg(img)"></image>
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
			}
		}
	}
</script>

<style>
</style>