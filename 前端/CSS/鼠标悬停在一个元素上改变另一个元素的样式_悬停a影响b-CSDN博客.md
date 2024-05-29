[鼠标悬停在一个元素上改变另一个元素的样式_悬停a影响b-CSDN博客](https://blog.csdn.net/AiTingYan/article/details/89498907) 

 **css方法**  
**1.A元素是B元素的父级**

```css
`A:hover B{
  //鼠标经过A元素时，B元素背景会变成黑色
  background:#000;
}` 

```

**2.A元素与B元素相邻且A紧接着B**

```css
`A:hover +B {
  //鼠标经过A元素时，B元素背景会变成黑色
  background:#000;
}` 

```