[CSS transition 小技巧！如何保留 hover 的状态？-51CTO.COM](https://www.51cto.com/article/719690.html) 

 通常情况下，hover 是无法保存状态的。鼠标移入触发额外样式，一旦移出就还原了。

```
`:hover{
  color: red
}`

*   1.
*   2.
*   3.


```

这就意味着，如果需要保留hover的状态，可能就不得不借助JS了，比如下面是\[1\]的首页排行榜效果。

![](https://s7.51cto.com/oss/202209/26/51599fc73f1c5658653439724817b747144591.gif)

这里的主要交互有以下几个：

*   鼠标滑过触发选中态。
*   鼠标移出列表后仍然保留上一次的选中态（重点）。
*   默认列表的第一项为选中态。

目前官网的实现也是通过JS实现的，事实上，仅仅通过 CSS也是可以完全做到的，需要用到transition延时的一些小技巧，一起看看吧！

### 一、鼠标滑过触发选中态

所有的一切都离不开布局。

假设列表HTML是这样的。

```
`<ul class="list">
    <li class="item">
      <h3 class="title">将军，夫人喊你种田了</h3>
      <p class="sumary">只是在休息室里打了个盹儿，一睁眼，竟然穿成了古代目不识丁的乡下胖丫头。 好吃懒做不说，还在村里横行霸道。 十里八乡没人愿意娶她，好不容易买了个金龟婿，大婚之日竟让人逃了。 恶霸老爹一怒之下去道上掳了个夫君给她。 就是……爹你掳的是不是有点不太对呀？ ＊ 婚后的苏胖丫很忙。 忙着改造恶霸爹爹与恶霸弟弟。 忙着抢救貌美如花的神将夫君。 忙着养育三个小小恶霸小豆丁。 一不小心，将自己忙成了大燕最位高权重的一品女侯！</p>
    </li>
  <li class="item">
      <h3 class="title">被夺一切后她封神回归</h3>
      <p class="sumary">【甜爽燃，团宠，玄学】 司扶倾一睁眼，不仅被夺了气运，人人还让她滚出娱乐圈。 重活一次，她只想咸鱼躺，谁知现在圈内人只知拉踩营销，没点真本事，不好好磨炼演技，这样下去还能行？怎么也得收拾收拾。 司扶倾捏了捏手腕，动了。 后来，网上疯狂骂她不自量力倒贴郁曜，造谣她私生活不检点，而—— 国际天后：今天我能站在这里，多亏了倾倾 top1男顶流：离我妹妹远点@郁曜 就连国际运动会官方：恭喜司扶倾拿下第13枚个人金牌，等一个退圈 当天，全网瘫痪。 · 史书记载，胤皇年少成名，八方征战，平天下，安宇内，是大夏朝最年轻的帝王，他完美强大，心怀天下，却因病死于27岁，一生短暂，无妻无妾，无子无孙，是无数人的白月光男神。 无人知晓，他再睁开眼，来到了1500年后。 这一次，他看见了他遥想过的盛世大夏。 · 不久后胤皇身份曝光，司扶倾得知偶像竟然就在身边，她敬佩万分，只想—— 司扶倾：努力奋斗，报效大夏！ 胤皇：以身相许 司扶倾：？？？ 我一心奋发上进你却想要我？ · 全能颜巅女神×杀伐清贵帝王 从全网黑到封神顶流，顺便和男神1v1</p>
    </li>
  ...
</ul>`

```

简单修饰一下：

```
`.list{
  list-style: none;
  margin: 0;
  padding: 0;
  width: 400px;
}
.item{
  position: relative;
  padding: 10px 10px 10px 34px;
  cursor: pointer;
  counter-increment: num;
}
.title::before{
  content: counter(num) ' ';
  width: 25px;
  line-height: 30px;
  text-align: center;
  color: #fff;
  position: absolute;
  font-size: 14px;
  font-family: fantasy;
  left: 4px;
  background: center/100% 100% url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA8CAMAAAAe9Wm0AAAAbFBMVEUAAACaov2SnPKXnvaXofiyuvuCjPOgqvi4vfiBjPSyuf6Ml/a0u/21vPtte/F/i/WTnfWNmPiyuv6Ik/Zue/GRnPinr/Wfp/Gyuv6Ml/ebo/KTnfOutfqEj/W3vvpue/G/xfd1gvN8iPRodfBFzp+BAAAAF3RSTlMAECA7U2BgdIiTn6Wsvr+/v9Df39/s/o6+GugAAAGPSURBVHjazdZhk4IgEAZgpS6z8iotPEBF8P//x1tJrTxQlrm5uff7MxubLBtF9sQfp+ywjRCJk+zLhPq6SUwuxokhp4/YT1SUVtWam4nSZObImyA2YXHZ022cYsirOzwYoYti7nJzuMOqeHPNvke5jxgP2DRNNqLSMzQQtXjUtv8cBTWiwqOqohcsKikt8ajkHI+4EGjEBWNnNGJ1jUe1Vp9YJLSSeKRkh0eyC0BdEJIBZ5J/h1TA/6SUOgcgjUdaT6gJQA0CjV85jFrq/ZU/UYtA7HFzG5iA1PcOMnbs0b7tU/mcCAhjO/NE52A8jmXKMHYdnukTzE141vhyGWaSTq97ksMQhOnEF8qYFJvXneDO++lU82VznG0giYDppBVzTTvIffdjZSGFVjA2JHeVuRDbopOC6TrJ7GUSx0a1vYGR8u1kQ5krce5hJAUjlRbuRtuyu8GFVopxZ6OtxW5wObU2P3Ewaby+jya6R7UYO+C3xpICbk3NFhptTToaZ6OtzS/WGm39iUdkmdFFv5pvdNPREWjicTcAAAAASUVORK5CYII=);
}
.title{
  margin: 0;
  padding: 8px 0;
  font-weight: normal;
}
.sumary{
  margin: 0;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  color: #666;
  font-size: 14px;
  color: 20px;
  height: 0;
}

.item::before{
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 8px;
  opacity: 0;
  z-index: -1;
  background: linear-gradient(270deg, rgb(241, 236, 249) 0%, rgba(241, 236, 249, 0) 100%);
}`

```

效果如下：

![](https://s8.51cto.com/oss/202209/26/b8c473c9673aa0b2840707fb196a6240c73742.jpg)

现在加上hover的效果：

```
`.item:hover .title{
  color: rebeccapurple;
}
.item:hover .sumary{
  height: 40px;
}
.item.item:hover::before{
  opacity: 1;
}`

```

效果如下：

![](https://s2.51cto.com/oss/202209/26/42c4cf69115aef7394516974d51277e3db0027.gif)

很正常的hover效果，没什么特别的，那如何在移出后仍然保留最后的状态呢？接着往下看。

### 二、保留 hover 的状态

实现hover保留状态需要用到这样一个小技巧。

比如，给一个元素添加hover样式。

```
`el:hover{
  color: red
}`

```

![](https://s9.51cto.com/oss/202209/26/86e86cb474b83f2491f241f350cb75297aac5a.gif)

如果我们给这个元素加一个延时。

```
`el{
  transition-delay: 1s;
}`

```

那么，在鼠标移入和移出时都会有延迟。

![](https://s4.51cto.com/oss/202209/26/56600d580e5962217a1648cbe77a1228544265.gif)

接着，我们在 hover的时候取消延时。

```
`el:hover{
  color: red;
  transition-delay: 0s;
}`

```

那么，在鼠标移入的时候会迅速响应，移出的时候仍然会有延迟。

![](https://s3.51cto.com/oss/202209/26/f6137fe88ad868c1cd0515e27cb249ef7b8363.gif)

到这里相信大家都明白了吧，如果把延时设置为足够大，比如：

```
`el{
  transition-delay: 9999s;
}`

```

这样鼠标在移出后，需要经历9999s后才会变为原状，也就相当于保留了hover状态

![](https://s2.51cto.com/oss/202209/26/316a15f4072647afb19701140c8726a2340df7.gif)

原理就是这样，接下来看看实际应用吧！

### 三、鼠标移出列表后仍然保留上一次的选中态

根据上面的原理，我们可以轻松的实现在hover后保留状态，如下：

```
 `.item::before,
.item .sumary,
.item .title{
  transition: 0s 9999s;
}

.item:hover .title{
  color: rebeccapurple;
  transition: none;
}
.item:hover .sumary{
  height: 40px;
  transition: none;
}
.item.item:hover::before{
  opacity: 1;
  transition: none;
}`

```

需要注意的是，由于是transition，所以所有的状态变化都是需要支持过渡属性的，比如隐藏sumary这里用的是height: 0而不是display:none，还有选中的背景色变化，由于background-image不支持过渡，所以换成了::before，然后单独用opacity控制等等一些细节，效果如下：

![](https://s4.51cto.com/oss/202209/26/793740437f1ecaf219a856aca115acda08ddc3.gif)

这样在鼠标离开后，之前状态仍然是保留的。但是我们只需要保留上一次的，而不是所有的，如何处理呢？

这里需要换一种思路，可以这么做，鼠标在移入整个列表的时候就清除所有的状态，这样就只有当前hover的选项才会保留下来，有点类似于JS中的思维，先把所有的.current都移除，再给当前项添加.current，实现如下

```
 `.list:hover .title{
  transition: none;
  color: #333;
}
.list:hover .sumary{
  transition: none;
  height: 0;
}
.list:hover .item::before{
  transition: none;
  opacity: 0;
}`

```

这样就实现了鼠标移出列表后仍然保留上一次的选中态的功能，有点像单选框的效果，只不过是hover触发的，效果如下：

![](https://s7.51cto.com/oss/202209/26/5790e6a36ecb00fee508757df5025340b9a86c.gif)

### 四、默认列表的第一项为选中态

下面来实现最后一个功能。

这个相对而言比较容易，需要用到:first-child伪类，可以匹配到第一个元素。

不过需要考虑的是优先级的问题，这个是默认状态，权限应该是最低的，其他hover样式都应该可以覆盖它，所以可以放在最前面，如下：

```
`/* 初始状态（第一个选中） */
.item:first-child .sumary{
  height: 40px;
}
.item:first-child .title{
  color: rebeccapurple;
}
.item:first-child::before{
  opacity: 1;
}

/* 清除所有hover */

/* 每一项hover */`

```

这样就完美实现了文章开头的效果。

![](https://s5.51cto.com/oss/202209/26/08455a5909f36aa08f493714dbf879251416b9.gif)

由于是 CSS 实现，多个列表也是完全复用的。

![](https://s2.51cto.com/oss/202209/26/7949fb3736284495f310775aed6112f8b25aa1.gif)

完整代码可以查看线上 demo：\[2\] 或者\[3\]

### 五、总结一下

以上就是通过纯 CSS 实现保留鼠标滑过样式的全部技巧了，主要还是对transition-delay的灵活运用，下面总结一下：

*   实现原理的利用transition-delay​，让“还原”的时间足够长，这样就实现了保留hover状态的效果了。
*   单选效果可以在鼠标移入整个列表的时候就清除所有的状态，这样就只有当前hover​的选项才会保留下来，有点类似于JS中的思维。
*   需要注意所有属性必须是支持transition​的，比如display：none​就不支持transition，需要用其他样式代替。

当然，整个实现对于 CSS 以及选择器要求是相当高的，实际项目过程中可能并不如 JS 实现来的快，但是，CSS能够实现的又何必动用 JS呢？在我看来，JS就应该回归本职，专心处理数据逻辑交互，视觉方面全部交给CSS就行了，只是现在CSS还不够强大，实现需要用到很多奇技淫巧，但是，CSS现在已经在变得足够强大，比如:has伪类，相信未来CSS会越来越美好。