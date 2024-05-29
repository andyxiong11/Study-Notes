[【微信小程序】swiper自定义样式：指示点样式 wx-swiper-dot_swiper指示点样式-CSDN博客](https://blog.csdn.net/sayyy/article/details/126991710) 

 前言
--

*   调试基础库：2.26.0  
    ![](https://img-blog.csdnimg.cn/33f352625401415da6f7e1d753e62923.png)
    

swiper
------

```
 `<view class="swiper">
      <swiper indicator-dots="{{indicatorDots}}" autoplay="{{autoplay}}" interval="{{interval}}" duration="{{duration}}">
        <block wx:for="{{background}}" wx:key="*this">
          <swiper-item>
            <view class="swiper-item {{item}}"></view>
          </swiper-item>
        </block>
      </swiper>
    </view>` 

*   1
*   2
*   3
*   4
*   5
*   6
*   7
*   8
*   9


```

swiper 样式
---------

*   `.wx-swiper-dots` ： 指示点容器样式
*   `.wx-swiper-dots-horizontal` ： 水平滑动的指示点容器样式，其在`.wx-swiper-dots`内。
*   `.wx-swiper-dot` ：指示点样式
*   `.wx-swiper-dot-active` ： 当前指示点样式

指示点颜色
-----

默认指示点颜色  
![](https://img-blog.csdnimg.cn/83736abfa74c43e497c38a11c1061be7.png)
  
改变指示点颜色

```
`.swiper .wx-swiper-dot {
  background-color: rgba(255,255,255,0.7);
}
.swiper .wx-swiper-dot-active {
  background-color:#ff4e5b;
}` 

*   1
*   2
*   3
*   4
*   5
*   6


```

![](https://img-blog.csdnimg.cn/4f32a8c9b17e477aa87edd28cb8f6f97.png)

指示点形状
-----

默认指示点形状  
![](https://img-blog.csdnimg.cn/0d81982bec6d4418a9a1b5b6b106209c.png)
  
改变指示点形状

```
`.swiper .wx-swiper-dots-horizontal .wx-swiper-dot {
  width: 45rpx;
  height: 8rpx;
  border-radius: 5rpx;
}` 

*   1
*   2
*   3
*   4
*   5


```

![](https://img-blog.csdnimg.cn/2520006ec6d443b5a98520ba8fcb1c21.png)

指示点位置
-----

默认指示点位置贴近底部  
![](https://img-blog.csdnimg.cn/4f32a8c9b17e477aa87edd28cb8f6f97.png)
  
改变指示点位置

```
`.swiper .wx-swiper-dots.wx-swiper-dots-horizontal {
  position: absolute;
  bottom: 40rpx;
}` 

*   1
*   2
*   3
*   4


```

*   `.wx-swiper-dots.wx-swiper-dots-horizontal`，注意中间，没有空格  
    ![](https://img-blog.csdnimg.cn/45bf0c80bb0047e99dc84c3389333c57.png)
      
    或者

```
`.swiper .wx-swiper-dots.wx-swiper-dots-horizontal {
  margin-bottom: 40rpx;
}` 

*   1
*   2
*   3


```

*   `.wx-swiper-dots.wx-swiper-dots-horizontal`，注意中间，没有空格

参考
--

https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html  
https://blog.csdn.net/qq_39399966/article/details/113342668  
https://blog.csdn.net/IT_iosers/article/details/123922736  
https://wangjiabin.blog.csdn.net/article/details/108194235  
https://blog.csdn.net/weixin_42063951/article/details/111059699