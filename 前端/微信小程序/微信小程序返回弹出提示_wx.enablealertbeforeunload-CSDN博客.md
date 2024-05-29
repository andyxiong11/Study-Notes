[微信小程序返回弹出提示_wx.enablealertbeforeunload-CSDN博客](https://blog.csdn.net/qq_39109182/article/details/117920683) 

 当用户进入页面，编辑后没有保存直接返回，这时需要给用户提示是否需要保存在返回，如果保存了，则不提示

主要用到 

**wx.enableAlertBeforeUnload(Object object)**开启小程序页面返回询问对话框

**wx.disableAlertBeforeUnload** 关闭小程序页面返回询问对话框

![](https://img-blog.csdnimg.cn/20210615111559756.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5MTA5MTgy,size_16,color_FFFFFF,t_70)

官方api 

 [wx.enableAlertBeforeUnload(Object object) | 微信开放文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.enableAlertBeforeUnload.html "wx.enableAlertBeforeUnload(Object object) | 微信开放文档")

[wx.disableAlertBeforeUnload(Object object) | 微信开放文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.disableAlertBeforeUnload.html "wx.disableAlertBeforeUnload(Object object) | 微信开放文档")

如果用户点击dddd则不需要在弹提示框

```null
<view bindtap="zuzhi">dddddddddddddd</view>
```

```null
//isAlert:true// 通过此字段判断是否需要隐藏弹窗，默认true显示，false隐藏onLoad: function (options) {    wx.enableAlertBeforeUnload({success: function (res) {    wx.disableAlertBeforeUnload() //关闭小程序页面返回询问对话框
```