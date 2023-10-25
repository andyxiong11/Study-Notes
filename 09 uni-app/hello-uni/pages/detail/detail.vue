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
	</view>
</template>

<script>
</script>

<style>
</style>