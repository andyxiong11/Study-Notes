[微信小程序 识别换行符_小程序可以做到根据文本识别是否换行-CSDN博客](https://blog.csdn.net/m0_37865510/article/details/113244401) 

 微信小程序<text>和<view>标签并不能让文本自动换行，  
微信小程序也不支持 <br/>换行，很纠结。

处理方法：  
替换<br/>标签 为 \\n  
使用 css 属性 ：white-space:pre-wrap 

<view style=”white-space:pre-wrap”>  
文本保留空格和回车   
</view>