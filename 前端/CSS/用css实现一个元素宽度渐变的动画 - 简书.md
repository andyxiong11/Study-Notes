[用css实现一个元素宽度渐变的动画 - 简书](https://www.jianshu.com/p/7a2a3c7a8c26) 

假设需求是鼠标移动到一个宽度为100px的div上时宽度渐变为200px，变化过程持续2s。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>test</title>
    <style> .box {
        width: 100px;
        height: 100px;
        background-color: pink;
    } </style>
</head>
<body>
    <div class="box"></div>
</body>
</html> 
```

### 1.用transition实现

```css
.box {
    transition: width 2s;
    -webkit-transition: width 2s;
}
.box:hover {
    width: 200px;
} 
```

`transition`过渡指的是元素从一种样式逐渐改变为另一种的效果。它的典型事件是鼠标指针位于元素上时。它有4个过渡属性：

*   `transition-property`（规定设置过渡效果的 CSS 属性的名称。）
*   `transition-duration`（规定完成过渡效果需要多少秒或毫秒。）
*   `transition-timing-function`（规定速度效果的速度曲线。）
*   `transition-delay`（定义过渡效果何时开始。）

可以简写成`transition: property duration timing-function delay;`的形式。其中的属性名称和效果时长是必须要写的；也可以给它添加多个样式的过渡效果，写的时候要用逗号隔开。例如：

```css
.box {
    transition: width 2s, height 2s, background-color, 2s;
    -webkit-transition: width 2s, height 2s, background-color, 2s;
}
.box:hover {
    width: 200px;
    height: 200px;
    background-color: green;   
} 
```

### 2.用animation实现

```css
.box:hover {
    animation: changeStyle 2s;
    -webkit-animation: changeStyle 2s;
}
@keyframes changeStyle {
    0% {width: 100px}
    100% {width: 200px}
}
@-webkit-keyframes changeStyle {
    0% {width: 100px}
    100% {width: 200px}
} 
```

`animation`用来给元素创建动画。它有8个属性：

*   `animation-property`（ 规定 @keyframes 动画的名称。）
*   `animation-duration`（规定动画完成一个周期所花费的秒或毫秒。默认是 0。）
*   `animation-timing-function`（规定动画的速度曲线。默认是 "ease"。）
*   `animation-delay`（规定动画何时开始。默认是 0。）
*   `animation-iteration-count`（规定动画被播放的次数。默认是 1。）
*   `animation-direction`（规定动画是否在下一周期逆向地播放。默认是 "normal"。）
*   `animation-play-state`（规定动画是否正在运行或暂停。默认是 "running"。）
*   `animation-fill-mode`（规定对象动画时间之外的状态。）  
    以上属性可以简写成`animation: name duration timing-function delay iteration-count direction play-state fill-mode;`的形式。其中@keyframes 动画名称和动画时长是必须要写的；也可以给它添加多个样式的动画效果，写法如下：

```css
.box:hover {
    animation: changeStyle 2s;
    -webkit-animation: changeStyle 2s;
}
@keyframes changeStyle {
    0% {width: 100px; height: 100px; background-color: pink;}
    100% {width: 200px; height: 200px; background-color: green;}
}
@-webkit-keyframes changeStyle {
    0% {width: 100px; height: 100px; background-color: pink;}
    100% {width: 200px; height: 200px; background-color: green;}
} 
```

### 3.transition和animation的区别

*   `transition`一般用来实现比较简单的动画效果，比如本文最开始说得这种需求。`animation`属性可以像Flash制作动画一样，通过控制关键帧来控制动画的每一步，实现更为复杂的动画效果。
*   `transition`需要触发一个事件才会随着时间改变其css属性；`animation`在不需要触发任何事件的情况下，也可以显式的随时间变化来改变元素css属性，达到一种动画的效果。
