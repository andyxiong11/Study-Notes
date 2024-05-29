[小程序按左上角返回键与navigateBack携带参数_微信小程序左上角返回按钮触发事件 传递参数-CSDN博客](https://blog.csdn.net/laishaojiang/article/details/81876710) 

 小程序的页面跳转方式有5种，分别为

![](https://img-blog.csdn.net/20180820194724549?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xhaXNoYW9qaWFuZw==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

其中除了`[wx.navigateBack](https://developers.weixin.qq.com/miniprogram/dev/api/ui-navigate.html#wxnavigateback)外，其他都可以在路径后面带参数。`

`页面左上角的返回箭头和安卓的物理按键都是一样触发``[wx.navigateBack](https://developers.weixin.qq.com/miniprogram/dev/api/ui-navigate.html#wxnavigateback)方法。如果我们想在页面返回时也进行参数传递该怎么做呢？今天跟大家分享两种方法`

方法一：使用小程序缓存。

api:wx.setStorage(OBJECT) / wx.setStorageSync(KEY,DATA)  或者

       wx.setStorageSync(KEY,DATA) / wx.getStorageSync(KEY)

```null
//page BnavigateBack(){  wx.setStorageSync('key', 'value')  wx.navigateBack()}
```

```null
// page A  /**   * 生命周期函数--监听页面显示   */onShow: function () {let value = wx.getStorageSync('key')    cosole.log(value )  }
```

方法二：使用小程序全局变量。

其实方法二和方法一思路是一样的，只是存储变量的方式不一样

```null
//page BnavigateBack(){getApp().globalData.value = 'value'  wx.navigateBack()}
```

```null
// page A  /**   * 生命周期函数--监听页面显示   */onShow: function () {let value = getApp().globalData.value    cosole.log(value )  }
```