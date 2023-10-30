<template>
	<view>
		<button @click="get">发送get请求</button>
		<button type="primary" @click="setStorage">存储数据</button>
		<button type="primary" @click="getStorage">获取数据</button>
		<button type="primary" @click="removeId">移除id数据</button>
		<view>这是列表页</view>
		<view class="box-item" v-for="item in list">
			{{item}}
		</view>
		<button @click="pullDown">下拉刷新</button>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				list:[
					'前端','java','UI','测试','前端','java','UI','测试'
				]
			}
		},
		// 监听该页面用户下拉刷新事件
		onPullDownRefresh() {
			console.log('触发了下拉刷新');
			setTimeout(()=>{
				this.list = ['UI','测试','前端','java']
				uni.stopPullDownRefresh()//停止当前页面下拉刷新
			},2000)
		},
		// 监听距离页面底部距离
		onReachBottom(){
			//需要在package文件配置onReachBottomDistance
			console.log('页面触底了');
			this.list = [...this.list,['前端','java','UI','测试']]
		},
		methods:{
			pullDown(){
				uni.startPullDownRefresh()//触发下拉刷新动画
			},
			get(){
				uni.request({
					url:'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
						success(res) {
							console.log(res);
						}
				})
			},
			setStorage(){
				/* uni.setStorage({//异步存储
					key:'id',
					data:80,
					success() {
						console.log('存储成功');
					}
				}) */
				uni.setStorageSync('id',80)//同步存储
			},
			getStorage(){
				/* uni.getStorage({//异步获取
					key:'id',
					success(res) {
						console.log('获取成功',res.data);
					}
				}) */
				const res = uni.getStorageSync('id');//同步获取
				console.log(res);
			},
			removeId(){
				/* uni.removeStorage({//异步删除
					key:'id',
					success(res) {
						console.log('移除成功');
					}
				}) */
				uni.removeStorageSync('id')//同步删除
			}
		}
	}
</script>

<style>
	.box-item{
		height: 100px;
		line-height: 100px;
	}
</style>