<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<test v-if="flag"  :title="title" @myEven="getNum"></test>
		<button @click="checkTest">切换test组件显示隐藏</button>
		这是子组件传递过来的数据{{num}}
		<test-a></test-a>
		<test-b></test-b>
	</view>
</template>

<script>
	import test from '../../components/test.vue'
	import testA from '../../components/a.vue'
	import testB from '../../components/b.vue'
	export default {
		data() {
			return {
				title: 'Hello',
				flag:true,
				num:0
			}
		},
		//监听页面加载，该钩子被调用时，响应式数据、计算属性、方法、侦听器、props、slots 已设置完成，其参数为上个页面传递的数据
		onLoad(options) {
			console.log('页面加载了',options);
		},
		//监听页面显示，页面每次出现在屏幕上都触发
		onShow() {
			console.log('页面显示了');
		},
		//监听页面初次渲染完成，此时组件已挂载完成
		onReady() {
			console.log('页面初次渲染完成');
		},
		//	监听页面隐藏
		onHide() {
			console.log('页面隐藏了');
		},
		methods: {
			checkTest(){
				this.flag = !this.flag
			},
			getNum(num){
				console.log(num);
				this.num = num
			}
		},
		components:{
			test,
			"test-a":testA,
			"test-b":testB
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
