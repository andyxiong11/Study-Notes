<template>
	<view>
		<view>
			<text>唱歌跳舞篮球</text>
		</view>
		<view>
			<!-- selectable 文字是否可选 -->
			<text selectable>唱歌跳舞篮球</text>
		</view>
		<view>
			<!-- space 显示连续空格(钉钉小程序不支持) -->
			<!-- ensp  中文字符空格一半大小-->
			<text selectable space="ensp">唱歌    跳舞篮球</text>
		</view>
		<view>
			<!-- emsp  中文字符空格大小-->
			<text selectable space="emsp">唱歌    跳舞篮球</text>
		</view>
		<view>
			<!-- nbsp  根据字体设置的空格大小-->
			<text selectable space="nbsp" style="font-style: 100px;">唱歌    跳舞篮球</text>
		</view>
		<view>
			<!-- decode 是否解码（百度、钉钉小程序不支持）-->
			<text decode>&amp;</text>
		</view>
		<!-- hover-class 指定按下去的样式 -->
		<view class="box2" hover-class="box2-active">
			<!-- hover-stop-propagation 阻止冒泡 
				 hover-start-time 按住后多久出现点击样式
				 hover-stay-time 手指松开后点击样式保留时间-->
			<view class="box" :hover-start-time="2000" hover-stay-time="2000" hover-class="box-active" hover-stop-propagation>我是一个大盒子</view>
		</view>
		<button>按钮</button>
		<button size="mini">按钮</button>
		<!-- type 按钮样式 -->
		<button type="primary">按钮</button>
		<!-- plain 按钮镂空 -->
		<button type="primary" plain>按钮</button>
		<!-- disabled 按钮禁用 -->
		<button type="primary" disabled>按钮</button>
		<!-- loading图标 -->
		<button loading></button>
	</view>
</template>

<script>
</script>

<style>
	.box{
		width: 100px;
		height: 100px;
		background-color: green;
	}
	.box2{
		width: 200px;
		height: 200px;
		background-color: blue;
	}
	.box-active{
		background-color: red;
	}
	.box2-active{
		background-color: pink;
	}
</style>