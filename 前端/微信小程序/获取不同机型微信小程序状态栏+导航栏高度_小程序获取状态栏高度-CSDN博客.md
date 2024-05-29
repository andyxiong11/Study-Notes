[获取不同机型微信小程序状态栏+导航栏高度_小程序获取状态栏高度-CSDN博客](https://blog.csdn.net/weixin_45811256/article/details/127221187) 

 [获取不同机型微信小程序状态栏+导航栏高度_小程序获取状态栏高度-CSDN博客](https://blog.csdn.net/weixin_45811256/article/details/127221187) 

 #### 一. 前言

很多时候我们开发微信小程序，都需要先知道状态栏和导航栏的高度，才能去做其他功能。

#### 二. 获取微信小程序状态栏高度

用`wx.getSystemInfoSync()`[【官方文档】](https://developers.weixin.qq.com/miniprogram/dev/api/base/system/wx.getSystemInfoAsync.html)获取系统信息，里面有个参数：`statusBarHeight（状态栏高度）`，是我们后面计算整个导航栏的高度需要用到的。

```
`let res = wx.getSystemInfoSync();
let statusHeight = res.statusBarHeight;` 

```

![](https://img-blog.csdnimg.cn/f8406a51f80f4c87a3dd26b1665c4691.png)

#### 三. 获取微信小程序导航栏高度

##### 1）方法一（个人不赞同该方法的）

很多人使用获取胶囊布局信息 ，`wx.getMenuButtonBoundingClientRect()`，**根据胶囊高度及上下位置，结合状态栏高度即可算出导航栏高度。**   
![](https://img-blog.csdnimg.cn/0858e3ca8ee344c792367c2c87dc838e.png)

```
`let res = wx.getSystemInfoSync(); 
let custom = wx.getMenuButtonBoundingClientRect() 
let navBarHeight = (custom.top - res.statusBarHeight) * 2 + custom.height` 

```

[wx.getMenuButtonBoundingClientRect()文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/menu/wx.getMenuButtonBoundingClientRect.html)  
获取菜单按钮（右上角胶囊按钮）的布局位置信息。`坐标信息以屏幕左上角为原点`  
![](https://img-blog.csdnimg.cn/2655a2c2bf844d10812857598d9ba574.png)

**该方法原理：** 

> **把微信小程序的胶囊按钮位于导航栏中间来使用，利用胶囊距离顶部的距离 \- 状态栏高度，得出胶囊距离导航栏顶部的距离，认为胶囊距离导航栏底部也是这个距离，所以乘以2；再加上胶囊按钮的高度得出导航栏整体高度**

不认可该方法原因：

> 上面方法可行的`前提是胶囊按钮位于导航栏中间`，个人认为`胶囊按钮并不位于导航栏中间`，即胶囊按钮距离导航栏顶部和导航栏底部的高度是不一样的。  
> 上面的方法，在大多数情况下得出的导航栏高度是`40px`，经测试发现，微信小程序导航栏高度在大部分机型上都是`44px`，不需要借助 wx.getMenuButtonBoundingClientRect() 该方法计算。

##### 2）方法二（个人项目中用的方法）

**计算公式：顶部导航栏总高度 = 状态栏高度 \+ 44。** 

```
`let res = wx.getSystemInfoSync()
let navBarHeight = res.statusBarHeight + 44 
uni.setStorageSync('statusBarHeight', res.statusBarHeight)  
uni.setStorageSync('navBarHeight', navBarHeight)` 

```