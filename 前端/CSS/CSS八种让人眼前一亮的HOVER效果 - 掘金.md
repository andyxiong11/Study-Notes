[CSS八种让人眼前一亮的HOVER效果 - 掘金](https://juejin.cn/post/6861501624993447950) 

 本文是译文，原文链接请戳文末链接。

### 一.发送效果

#### HTML

```html
<div id="send-btn">
  <button>
    // 这里是一个svg的占位
    Send
  </button>
</div>

```

#### CSS

```css
#send-btn{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

button {
  background: #5f55af;
  border: 0;
  border-radius: 5px;
  padding: 10px 30px 10px 20px;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
}

button svg {
  display: inline-block;
  vertical-align: middle;
  padding-right: 5px;
}

button:hover svg {
  animation: fly 2s ease 1;
}

@keyframes fly {
  0% {
    transform: translateX(0%);
  }

  50% {
    transform: translateX(300%);
  }

  100% {
    transform: translateX(0);
  }
}

```

#### GIF图

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ba88b49b984a48b2adc72db1b62049c7~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

### 二.霓虹效果

#### HTML

```html
<div id="neon-btn">
  <button class="btn one">Hover me</button>
  <button  class="btn two">Hover me</button>
  <button  class="btn three">Hover me</button>
</div>

```

#### CSS

```css
#neon-btn {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
  background: #031628; 
}

.btn {
  border: 1px solid;
  background-color: transparent;
  text-transform: uppercase;
  font-size: 14px;
  padding: 10px 20px;
  font-weight: 300;
}

.one {
  color: #4cc9f0;
}

.two {
  color: #f038ff; 
}

.three {
  color: #b9e769;
}

.btn:hover {
  color: white;
  border: 0;
}

.one:hover {
  background-color: #4cc9f0;
  -webkit-box-shadow: 10px 10px 99px 6px rgba(76,201,240,1);
  -moz-box-shadow: 10px 10px 99px 6px rgba(76,201,240,1);
  box-shadow: 10px 10px 99px 6px rgba(76,201,240,1);
}

.two:hover {
  background-color: #f038ff;
  -webkit-box-shadow: 10px 10px 99px 6px rgba(240, 56, 255, 1);
  -moz-box-shadow: 10px 10px 99px 6px rgba(240, 56, 255, 1);
  box-shadow: 10px 10px 99px 6px rgba(240, 56, 255, 1);
}

.three:hover {
  background-color: #b9e769;
  -webkit-box-shadow: 10px 10px 99px 6px rgba(185, 231, 105, 1);
  -moz-box-shadow: 10px 10px 99px 6px rgba(185, 231, 105, 1);
  box-shadow: 10px 10px 99px 6px rgba(185, 231, 105, 1);
}

```

#### GIF图

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/63bd83b42ff94b6a8d645a6d564c3ca8~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

### 三.边框效果

#### HTML

```html
<div id="draw-border">
  <button>Hover me</button>
</div>

```

#### CSS

```css
#draw-border {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

button {
  border: 0;
  background: none;
  text-transform: uppercase;
  color: #4361ee;
  font-weight: bold;
  position: relative;
  outline: none;
  padding: 10px 20px;
  box-sizing: border-box;
}

button::before, button::after {
  box-sizing: inherit;
  position: absolute;
  content: '';
  border: 2px solid transparent;
  width: 0;
  height: 0;
}

button::after {
  bottom: 0;
  right: 0;
}

button::before {
  top: 0;
  left: 0;
}

button:hover::before, button:hover::after {
  width: 100%;
  height: 100%;
}

button:hover::before {
  border-top-color: #4361ee;
  border-right-color: #4361ee;
  transition: width 0.3s ease-out, height 0.3s ease-out 0.3s;
}

button:hover::after {
  border-bottom-color: #4361ee;
  border-left-color: #4361ee;
  transition: border-color 0s ease-out 0.6s, width 0.3s ease-out 0.6s, height 0.3s ease-out 1s;
}

```

#### GIF效果

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/295e3b962d9b4b08b34226604343d256~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

### 四.圆形效果

#### HTML

```html
<div id="circle-btn">
  <div class="btn-container">
    // 这里有一个svg元素
    <button>Hover me</button>
  </div>
</div>

```

#### CSS

```css
#circle-btn { 
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.btn-container {
  position: relative;  
}

button {
  border: 0;
  border-radius: 50px;
  color: white;
  background: #5f55af;
  padding: 15px 20px 16px 60px;
  text-transform: uppercase;
  background: linear-gradient(to right, #f72585 50%, #5f55af 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition:all 2s ease;
}

svg {
  background: #f72585;
  padding: 8px;
  border-radius: 50%;
  position: absolute;
  left: 0;
  top: 0%;
}

button:hover {
   background-position: left bottom;
}

```

#### GIF图

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4719262123064ff683dfdff17555efde~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

### 五.圆角效果

#### HTML

```html
<div id="border-btn">
  <button>Hover me</button>
</div>

```

#### CSS

```css
#border-btn { 
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

button {
  border: 0;
  border-radius: 10px;
  background: #2ec4b6;
  text-transform: uppercase;
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 15px 30px;
  outline: none;
  position: relative;
  transition: border-radius 3s;
  -webkit-transition: border-radius 3s;
}

button:hover {
   border-bottom-right-radius: 50px;
   border-top-left-radius: 50px;
   border-bottom-left-radius: 10px;
   border-top-right-radius: 10px;
}

```

#### GIF图

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/514387debb8643a19bf3311bb1b735c1~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

### 六.冰冻效果

#### HTML

```html
<div id="frozen-btn">
  <button class="green">Hover me</button>
  <button class="purple">Hover me</button>
</div>

```

#### CSS

```css
#frozen-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

button {
  border: 0;
  margin: 20px;
  text-transform: uppercase;
  font-size: 20px;
  font-weight: bold;
  padding: 15px 50px;
  border-radius: 50px;
  color: white;
  outline: none;
  position: relative;
}

button:before{
  content: '';
  display: block;
  background: linear-gradient(to left, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.4) 50%);
  background-size: 210% 100%;
  background-position: right bottom;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  bottom:0;
  right:0;
  left: 0;
  border-radius: 50px;
  transition: all 1s;
  -webkit-transition: all 1s;
}

.green {
   background-image: linear-gradient(to right, #25aae1, #40e495);
   box-shadow: 0 4px 15px 0 rgba(49, 196, 190, 0.75);
}

.purple {
   background-image: linear-gradient(to right, #6253e1, #852D91);
   box-shadow: 0 4px 15px 0 rgba(236, 116, 149, 0.75);
}
  
.purple:hover:before {
  background-position: left bottom;
}

.green:hover:before {
  background-position: left bottom;
}

```

#### GIF图

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b8572b77cd25496d85655d4d6fb12a7d~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

### 七.闪亮效果

#### HTML

```html
<div id="shiny-shadow">
  <button><span>Hover me</span></button>
</div>

```

#### CSS

```css
#shiny-shadow {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #1c2541;
}

button {
  border: 2px solid white;
  background: transparent;
  text-transform: uppercase;
  color: white;
  padding: 15px 50px;
  outline: none;
  overflow: hidden;
  position: relative;
}

span {
  z-index: 20;  
}

button:after {
  content: '';
    display: block;
    position: absolute;
    top: -36px;
    left: -100px;
    background: white;
    width: 50px;
    height: 125px;
    opacity: 20%;
    transform: rotate(-45deg);
}

button:hover:after {
  left: 120%;
  transition: all 600ms cubic-bezier(0.3, 1, 0.2, 1);
   -webkit-transition: all 600ms cubic-bezier(0.3, 1, 0.2, 1);
}

```

#### GIF图

![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e6e909e04d0a4b878ef48889fe147765~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

### 八.加载效果

#### HTML

```html
<div id="loading-btn">
  <button><span>Hover me</span></button>
</div>

```

#### CSS

```css
#loading-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

button {
  background: transparent;
  border: 0;
  border-radius: 0;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 20px;
  padding: 15px 50px;
  position: relative;
}

button:before {
  transition: all 0.8s cubic-bezier(0.7, -0.5, 0.2, 2);
  content: '';
  width: 1%;
  height: 100%;
  background: #ff5964;
  position: absolute;
  top: 0;
  left: 0;
}

button span {
  mix-blend-mode: darken;
}

button:hover:before {
  background: #ff5964;
  width: 100%;
}

```

#### GIF图

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/eee9698995b9441ba3fa622780e5cba8~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

### 总结

巧用伪元素`:before`、`:after`等，让你的页面按钮眼前一亮。原文链接：[8 amazing HTML button hover effects, that will make your website memorable](https://link.juejin.cn/?target=https%3A%2F%2Fwww.blog.duomly.com%2Fhtml-button-hover-effects%2F "https://www.blog.duomly.com/html-button-hover-effects/")。更多内容：[github.com/reng99/blog…](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Freng99%2Fblogs "https://github.com/reng99/blogs")

本文将同步到个人微信公众号：前端回眸

欢迎👏各位关注

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a6f401f13c7e4ccbb408d5a46851f8e6~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?)