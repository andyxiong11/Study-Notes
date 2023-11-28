这里注意，如果简写里要写background-size，则这里必须写 /  ,否则整个背景图片样式没有解析出来。

它和font以及border-radius里简写方式使用的/用法相似。/可以在支持这种写法的浏览器里在background-position后面接着写background-size。

```js
<div style={{
    display: 'inline-block',
    width: '208px',
    height: '100%',
    background: `url("${thumb[0]}") center center / cover no-repeat`,
}}>
</div>
```

如果分开写background其他设置，会出现一个问题，就是第一次加载图片是cover覆盖的，no-repeat，center center，但是打开其他页面再回来这些样式就都不生效了，只剩一个背景图片了。

本文参与 腾讯云自媒体分享计划，分享自作者个人站点/博客。
原始发表：2018-08-22 ，如有侵权请联系 cloudcommunity@tencent.com 删除