[微信小程序border-bottom 的长度解决方法 - 面向对象爱好者社区 - 博客园](https://www.cnblogs.com/QW-lzm/p/12940738.html) 

 效果如下图：

![](https://img2020.cnblogs.com/blog/1161017/202005/1161017-20200523012322623-198921225.png)

```css
.nav-item.active{
  position: relative;
}

.nav-item.active:after {
  content: " ";
  width: 0.8rem;
  height: 0.12rem;
  background: #fff;
  position: absolute;
  /\* bottom: -0.1rem; */
  bottom: 0.2rem;
  left: 50%;
  transform: translateX(-50%);
}