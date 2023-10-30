<template>
	<view id="myView"w>
		test组件{{num}}
		这是父组件传递的数据{{title}}
		<button @click="sendNum">给父组件传值</button>
	</view>
</template>

<script>
	export default {
		name:"test",
		data() {
			return {
				num:3
			};
		},
		props:['title'],
		methods:{
			sendNum(){
				console.log('给父组件传值');
				this.$emit('myEven',this.num)
			}
		},
		beforeCreate() {
			console.log('实例开始初始化');
			console.log(this.num);
		},
		created() {
			console.log('实例创建完成',this.num);
			this.intId = setInterval(()=>{
				console.log('执行定时器');
			},1000)
		},
		beforeMount() {
			console.log('挂载之前',document.getElementById('myView'));
		},
		mounted() {
			console.log('组件挂载完',document.getElementById('myView'));	
		},
		destroyed() {
			console.log('组件即将销毁');
			clearInterval(this.intId)
		}
	}
</script>

<style>

</style>