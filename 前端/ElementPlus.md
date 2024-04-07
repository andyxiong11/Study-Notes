走马灯组件的样式

```css
/* 走马灯每个item */
.el-carousel__item{}

/* 走马灯当前展示的item */
.is-active{}

/* 走马灯item的容器 */
.el-carousel__container{}

/* 整个走马灯的容器，包含指示器等其它组件在内 */
.el-carousel{}
```



当设置走马灯垂直排列时，如果下一个内容显示在页面上，可使用

```css
::v-deep .el-carousel__container{
	overflow: hidden;
}
```

