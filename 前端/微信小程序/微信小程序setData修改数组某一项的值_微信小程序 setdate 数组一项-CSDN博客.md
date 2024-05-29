[微信小程序setData修改数组某一项的值_微信小程序 setdate 数组一项-CSDN博客](https://blog.csdn.net/eva_feng/article/details/105235791) 

 官方文档示例：

```null
changeItemInArray: function() {// 对于对象或数组字段，可以直接修改一个其下的子字段，这样做通常比修改整个对象或数组更好'array[0].text':'changed data'
```

这种方法对于静态的数据设置有效，但是对于动态的数据，不起作用，会报错。

解决办法：设置数据时key需要使用中括号（\[\]）将其括起来

网上搜了下方法，在此记录一下

wxml：

```null
<block wx:for="{{list}}" wx:key="index"><view class="item" data-index="{{index}}" bindtap="changeNum">        种类： {{item.title}} \n 价格： ￥{{item.price}}元 \n 数量： {{item.num}}
```

js:

```null
//动态的更改数组中的数据，key只需要用中括号括起来就变成变量    var index = e.currentTarget.dataset.index        ['list['+ index + '].num'] : 5
```

PS: 换行符' \\n '，一定要在text标签里才起作用，写在view里无法识别