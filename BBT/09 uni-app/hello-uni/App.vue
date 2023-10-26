<script>
	export default {
		// 以下四个是应用的生命周期函数
		onLaunch: function() {//uni-app初始化完成（全局只触发一次）
			console.log('App Launch')
		},
		onShow: function() {//uni-app启动或从后台进入前台
			console.log('App Show')
		},
		onHide: function() {//uni-app从前台进入后台
			console.log('App Hide')
		},
		onError:function(err){//uni-app报错
			console.log('出现异常了'.err);//删除console的某一个字母可以触发
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import url("./static/fonts/iconfont.css");
	.box1{
		/* 局部样式会覆盖全局样式 */
/* 		background-color: pink; */
	}
</style>
