[CSS 子元素在父元素中水平垂直居中 - 掘金](https://juejin.cn/post/7027505510098141191) 

 > **前提：**  设置子元素在父元素中水平垂直居中，一般不做特殊说明父元素都不会是行内元素。实际开发中，不要试图使用行内元素包裹一个块元素（包括行内块元素），会有莫名其妙的现象，行内元素只应嵌套行内元素或文本（文本也相当于行内元素）。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/43586d2c0d344aafb8a4397049a10c8a~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?)

场景一：子元素是块元素
-----------

### 方法1：父元素是块元素，左右 margin auto

如果子元素是块元素（display: block）且未设置浮动，父元素是**块元素**，那么可以通过设置子元素 **[margin-left: auto; margin-right: auto;](https://link.juejin.cn/?target=http%3A%2F%2Fjs.jirengu.com%2Fkeseb%2F10%2Fedit%3Fhtml%2Ccss%2Coutput "http://js.jirengu.com/keseb/10/edit?html,css,output")** 的方式让子元素在父元素中水平居中。

```CSS
.wrapper {
  display: block;
  background-color: red;
}

.son {
  display: block;
  background-color: green;
  width: 100px;
  height: 100px;
  
  
  margin-left: auto;
  margin-right: auto;
}

```

### 方法2：父元素是表格单元格，左右 margin auto

当子元素是块元素，父元素为表格单元格时，也可以使用 **[左右 margin auto](https://link.juejin.cn/?target=http%3A%2F%2Fjs.jirengu.com%2Fkeseb%2F37%2Fedit%3Fhtml%2Ccss%2Coutput "http://js.jirengu.com/keseb/37/edit?html,css,output")** 的方法来使子元素水平居中（同方法一）。

```CSS
.wrapper {
  background-color: red;
  width: 200px;
  height: 200px;
  
  
  display: table-cell;
}

.son {
  display: block;
  background-color: green;
  width: 100px;
  height: 100px;
  
  margin-left: auto;
  margin-right: auto;
}

```

### 方法3：设置父元素相对定位，子元素绝对定位

#### 方法3.1：left + translateX

当父元素相对定位，子元素设置了绝对定位时，**[left: 50%; transform: translateX(-50%);](https://link.juejin.cn/?target=http%3A%2F%2Fjs.jirengu.com%2Fkeseb%2F14%2Fedit%3Fhtml%2Ccss%2Coutput "http://js.jirengu.com/keseb/14/edit?html,css,output")** 实现子元素水平居中。

```CSS
.wrapper {
  display: block;
  background-color: red;
  width: 200px;
  height: 200px;
  
  position: relative;
}

.son {
  display: block;
  background-color: green;
  width: 100px;
  height: 100px;
  
  
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

```

#### 方法3.2：负 margin

或者使用 **[负 margin](https://link.juejin.cn/?target=http%3A%2F%2Fjs.jirengu.com%2Fkeseb%2F15%2Fedit%3Fhtml%2Ccss%2Coutput "http://js.jirengu.com/keseb/15/edit?html,css,output")** 方法，实现子元素水平居中。此方法需要计算负 margin 的数值，因此更加推荐第一种方法。

```CSS
.wrapper {
  display: block;
  background-color: red;
  width: 200px;
  height: 200px;
  
  position: relative;
}

.son {
  display: block;
  background-color: green;
  width: 100px;
  height: 100px;
  
  
  position: absolute;
  left: 50%;
  margin-left: -50px;
}

```

#### 方法3.3：左右 margin:auto + left0 right0

还可以使用 **[左右 margin:auto 搭配 left:0; right:0;](https://link.juejin.cn/?target=http%3A%2F%2Fjs.jirengu.com%2Fkeseb%2F23%2Fedit%3Fhtml%2Ccss%2Coutput "http://js.jirengu.com/keseb/23/edit?html,css,output")** 实现绝对定位子元素的水平居中。

```CSS
.wrapper {
  display: block;
  background-color: red;
  width: 200px;
  height: 200px;
  
  position: relative;
}

.son {
  display: block;
  background-color: green;
  width: 100px;
  height: 100px;
  
  
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
}

```

场景二：子元素不是块元素
------------

### 方法1：父元素是块元素，text-align: center

如果子元素是行内块元素（display: inline-block）或行内元素（display: inline;）且未设置浮动，父元素是块元素，只需给父元素设置 **[text-align: center;](https://link.juejin.cn/?target=http%3A%2F%2Fjs.jirengu.com%2Fkeseb%2F9%2Fedit%3Fhtml%2Ccss%2Coutput "http://js.jirengu.com/keseb/9/edit?html,css,output")** 即可让子元素在父元素中水平居中。

```CSS
.wrapper {
  display: block;
  background-color: red;
  
  
  text-align: center; 
}

.son {
  display: inline-block; 
  width: 100px;
  height: 100px;
  background-color: green;
}

```

特别地，子元素为行内元素时，只有在被内容撑开时，父元素设置 **[text-align: center;](https://link.juejin.cn/?target=http%3A%2F%2Fjs.jirengu.com%2Fkeseb%2F11%2Fedit%3Fhtml%2Ccss%2Coutput "http://js.jirengu.com/keseb/11/edit?html,css,output")** 才能看到效果。另外，上面一直说的父元素是块元素的情况，其实如果父元素是行内块元素，其实对应的水平居中方法依然有效，只是需要注意由于行内块元素的特点即 **可以设置宽度，如果没有设置那么宽度默认是内部 inline 元素之和** 。所以只有在给行内块的父元素 **[设置宽度](https://link.juejin.cn/?target=http%3A%2F%2Fjs.jirengu.com%2Fkeseb%2F13%2Fedit%3Fhtml%2Ccss%2Coutput "http://js.jirengu.com/keseb/13/edit?html,css,output")** 时，以上方法才能生效！

```CSS
.wrapper {
  display: inline-block;
  background-color: red;
  
  
  width: 200px;
  text-align: center;
}

.son {
  display: inline-block;
  background-color: green;
  width: 100px;
  height: 100px;
}

```

### 方法2：父元素为表格单元格，text-align:center

如果父元素为表格单元格，子元素为行内元素（包括行内块元素），那么需要设置父元素 **[text-align:center](https://link.juejin.cn/?target=http%3A%2F%2Fjs.jirengu.com%2Fkeseb%2F37%2Fedit%3Fhtml%2Ccss%2Coutput "http://js.jirengu.com/keseb/37/edit?html,css,output")** 来实现子元素的水平居中（同方法1）。

```CSS
.wrapper {
  background-color: red;
  width: 200px;
  height: 200px;
  
  
  display: table-cell;
  
  
  text-align:center;
}

.son {
  display: inline-block;
  background-color: green;
  width: 100px;
  height: 100px;
}

```

场景三：子元素浮动
---------

如果一个子元素设置了浮动，这时候我们知道如果父元素没有设置高度的话，高度将变成 0，即高度坍塌，并且子元素的宽度由内容撑开即其本身相当于一个行内块元素（可以设置宽高）。如果在父元素和子元素都设置了宽高的情况下，需要让子元素在父元素中水平垂直居中，那么我们可以让 **[子元素变成相对定位，再设置水平居中，方法同场景一方法3](https://link.juejin.cn/?target=http%3A%2F%2Fjs.jirengu.com%2Fkeseb%2F43%2Fedit%3Fhtml%2Ccss%2Coutput "http://js.jirengu.com/keseb/43/edit?html,css,output")**，代码如下：

```CSS
.wrapper {
  display: block;
  background-color: red;
  width: 200px;
  height: 200px;
}

.son {
  display: block;
  background-color: green;
  width: 100px;
  height: 100px;
  
  
  float:left;
  position:relative;
  left: 50%;
  transform: translateX(-50%);
}

```

万金油法：父元素设为弹性盒，justify-content: center
-------------------------------------

如果父元素是弹性盒（**display: flex**），那么只需要设置 **[justify-content: center;](https://link.juejin.cn/?target=http%3A%2F%2Fjs.jirengu.com%2Fkeseb%2F28%2Fedit%3Fhtml%2Ccss%2Coutput "http://js.jirengu.com/keseb/28/edit?html,css,output")**，其内部所有子元素将会作为一个整体水平居中。另外，你会神奇的发现如果你让父元素变成弹性盒，无论如何子元素都会变成行内块元素，哪怕强制让它变成行内元素。

```CSS
.wrapper {
  background-color: red;
  width: 200px;
  height: 200px;
  
  
  display: flex;
  
  
  justify-content: center;
}

.son {
  display: block;
  background-color: green;
  width: 100px;
  height: 100px;
}

```

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1d3e6621a3124504a41fc6c4f4957693~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?)

场景一：子元素是块元素
-----------

### 方法1：父元素是表格单元格，父（vertical-align: middle） + 子（上下 margin auto）

我们知道块元素设置左右 margin auto 可以实现水平居中，但是设置上下 margin auto 却实现不了垂直居中（具体原因可参见：[margin：auto为什么只能实现水平居中，不能实现垂直居中](https://link.juejin.cn/?target=https%3A%2F%2Fwww.jianshu.com%2Fp%2F302ac93dac26 "https://www.jianshu.com/p/302ac93dac26")）。而当父元素是表格单元格（display: table-cell;）时，只要设置父元素 **[vertical-align: middle;](https://link.juejin.cn/?target=http%3A%2F%2Fjs.jirengu.com%2Fnawavaduyu%2F1%2Fedit%3Fhtml%2Ccss%2Coutput "http://js.jirengu.com/nawavaduyu/1/edit?html,css,output")** 也可以实现子元素垂直居中！

```CSS
.wrapper {
  background-color: red;
  width: 200px;
  height: 200px;
  
  
  display: table-cell;
  vertical-align: middle;
}

.son {
  display: block;
  background-color: green;
  width: 100px;
  height: 100px;
}

```

### 方法2：父元素相对定位，子元素绝对定位

同上述子元素绝对定位时设置水平居中方式，我们依然可以使用 **[transform](https://link.juejin.cn/?target=http%3A%2F%2Fjs.jirengu.com%2Fkeseb%2F17%2Fedit%3Fhtml%2Ccss%2Coutput "http://js.jirengu.com/keseb/17/edit?html,css,output")** 或者 **[负 margin](https://link.juejin.cn/?target=http%3A%2F%2Fjs.jirengu.com%2Fkeseb%2F16%2Fedit%3Fhtml%2Ccss%2Coutput "http://js.jirengu.com/keseb/16/edit?html,css,output")** 或者 **[上下 margin auto](https://link.juejin.cn/?target=http%3A%2F%2Fjs.jirengu.com%2Fkeseb%2F22%2Fedit%3Fhtml%2Ccss%2Coutput "http://js.jirengu.com/keseb/22/edit?html,css,output")** 方法实现子元素在垂直方向上的居中。

#### 方法2.1：top + translateY

```css
.wrapper {
  display: block;
  background-color: red;
  width: 200px;
  height: 200px;
  
  position: relative;
}

.son {
  display: block;
  background-color: green;
  width: 100px;
  height: 100px;
  
  
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

```

#### 方法2.2：负 margin

```CSS
.wrapper {
  display: block;
  background-color: red;
  width: 200px;
  height: 200px;
  
  position: relative;
}

.son {
  display: block;
  background-color: green;
  width: 100px;
  height: 100px;
  
  
  position: absolute;
  top: 50%;
  margin-top: -50px;
}

```

#### 方法2.3：上下 margin auto + top0 bottom0

```CSS
.wrapper {
  display: block;
  background-color: red;
  width: 200px;
  height: 200px;
  
  position: relative;
}

.son {
  display: block;
  background-color: green;
  width: 100px;
  height: 100px;
  
  
  position: absolute;
  top: 0;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;
}

```

场景二：子元素是行内元素（单行文本）
------------------

### 方法1：父元素的行高和高度保持一致

以上三种场景下，子元素是块元素或者**行内块元素**，方法皆有效。但如果子元素是行内元素，想要在一个块元素中垂直居中，则只需让 **[父元素的行高和高度保持一致](https://link.juejin.cn/?target=http%3A%2F%2Fjs.jirengu.com%2Fkeseb%2F30%2Fedit%3Fhtml%2Ccss%2Coutput "http://js.jirengu.com/keseb/30/edit?html,css,output")** 即可。

```CSS
.wrapper {
  display: block;
  background-color: red;
  height: 200px;
  line-height: 200px;
}

.son {
  display: inline;
  background-color: green;
}

```

### 方法2：上下等大小的 padding

或者你也可以给父元素添加 **[上下等大小的 padding](https://link.juejin.cn/?target=http%3A%2F%2Fjs.jirengu.com%2Fkeseb%2F32%2Fedit%3Fhtml%2Ccss%2Coutput "http://js.jirengu.com/keseb/32/edit?html,css,output")** 来实现行内元素的垂直居中，但是这种方法就不能再设置父元素的高度了，需要让父元素由内部的行内元素高度撑开。

```CSS
.wrapper {
  display: block;
  background-color: red;
  padding-top: 100px;
  padding-bottom: 100px;
}

.son {
  display: inline;
  background-color: green;
}

```

场景三：子元素浮动
---------

和浮动子元素水平居中方法类似，想要一个浮动子元素在父元素中垂直居中，也需要让 **[子元素变成相对定位，再设置垂直居中，方法同场景一方法2](https://link.juejin.cn/?target=http%3A%2F%2Fjs.jirengu.com%2Fkeseb%2F44%2Fedit%3Fhtml%2Ccss%2Coutput "http://js.jirengu.com/keseb/44/edit?html,css,output")**，代码如下：

```CSS
.wrapper {
  display: block;
  background-color: red;
  width: 200px;
  height: 200px;
}

.son {
  display: block;
  background-color: green;
  width: 100px;
  height: 100px;
  
  
  float:left;
  position:relative;
  top: 50%;
  transform: translateY(-50%);
}

```

万金油法：父元素设为弹性盒，align-items: center
---------------------------------

如果父元素是弹性盒，那么只需要设置 **[align-items: center;](https://link.juejin.cn/?target=http%3A%2F%2Fjs.jirengu.com%2Fkeseb%2F29%2Fedit%3Fhtml%2Ccss%2Coutput "http://js.jirengu.com/keseb/29/edit?html,css,output")**，其内部所有子元素将会作为一个整体垂直居中。

```CSS
.wrapper {
  background-color: red;
  width: 200px;
  height: 200px;
  
  
  display: flex;
  
  
  align-items: center;
}

.son {
  display: block;
  background-color: green;
  width: 100px;
  height: 100px;
}

```

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/86bd8446c81c4ce481156db443ff5859~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?)

综合上面的情况，我们很容易组合出下面几种让子元素水平垂直居中的方法：

方法1：父相子绝 + top 50% + left 50% + translate -50%
----------------------------------------------

结合 [translateX 和 translateY](https://link.juejin.cn/?target=http%3A%2F%2Fjs.jirengu.com%2Fkeseb%2F25%2Fedit%3Fhtml%2Ccss%2Coutput "http://js.jirengu.com/keseb/25/edit?html,css,output")，我们可以得出如下水平垂直居中方法：

```CSS
.wrapper {
  display: block;
  background-color: red;
  width: 200px;
  height: 200px;
  
  position: relative;
}

.son {
  display: block;
  background-color: green;
  width: 100px;
  height: 100px;
  
  
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

```

方法2：子相 + top 50% + left 50% + translate -50%
--------------------------------------------

和方法一类似，如果子元素不是绝对定位，而是相对定位，也可以通过[同样的方法](https://link.juejin.cn/?target=http%3A%2F%2Fjs.jirengu.com%2Fkeseb%2F24%2Fedit%3Fhtml%2Ccss%2Coutput "http://js.jirengu.com/keseb/24/edit?html,css,output")设置水平垂直居中。

```CSS
.wrapper {
  display: block;
  background-color: red;
  width: 200px;
  height: 200px;
}

.son {
  display: block;
  background-color: green;
  width: 100px;
  height: 100px;
  
  
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

```

方法3：父元素表格单元格 + margin auto
--------------------------

如果父元素是表格，我们也可以通过[以下方法](https://link.juejin.cn/?target=http%3A%2F%2Fjs.jirengu.com%2Fkeseb%2F26%2Fedit%3Fhtml%2Ccss%2Coutput "http://js.jirengu.com/keseb/26/edit?html,css,output")实现水平垂直居中：

```CSS
.wrapper {
  background-color: red;
  width: 200px;
  height: 200px;
  
  
  display: table-cell;
  vertical-align: middle;
}

.son {
  display: block;
  background-color: green;
  width: 100px;
  height: 100px;
  
  
  margin: auto;
}

```

特别地，如果子元素是行内块或者行内元素时，父元素需要设置 **[text-align:center](https://link.juejin.cn/?target=http%3A%2F%2Fjs.jirengu.com%2Fkeseb%2F36%2Fedit%3Fhtml%2Ccss%2Coutput "http://js.jirengu.com/keseb/36/edit?html,css,output")**，才能实现水平垂直居中。

```CSS
.wrapper {
  background-color: red;
  width: 200px;
  height: 200px;
  
  
  display: table-cell;
  vertical-align: middle;
  
  
  text-align:center;
}

.son {
  display: inline-block;
  background-color: green;
  width: 100px;
  height: 100px;
}

```

方法4：子元素是浮动元素的居中方式
-----------------

如果一个子元素设置了浮动，这时候我们知道如果父元素没有设置高度的话，高度将变成 0，即高度坍塌，并且子元素的宽度由内容撑开即其本身相当于一个行内块元素（可以设置宽高）。如果在父元素和子元素都设置了宽高的情况下，需要让子元素在父元素中水平垂直居中，那么我们可以让 **[子元素变成相对定位，再设置水平垂直居中](https://link.juejin.cn/?target=http%3A%2F%2Fjs.jirengu.com%2Fkeseb%2F39%2Fedit%3Fhtml%2Ccss%2Coutput "http://js.jirengu.com/keseb/39/edit?html,css,output")**，具体方法如下：

```CSS
.wrapper {
  display: block;
  background-color: red;
  width: 200px;
  height: 200px;
}

.son {
  display: block;
  background-color: green;
  width: 100px;
  height: 100px;
  
  
  float:left;
  position:relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  
  margin-top: -50px;
  margin-left:-50px; 
  */
}

```

方法5（万金油）：flex 布局
----------------

父元素设置为弹性盒，并设置 **[justify-content: center; align-items: center;](https://link.juejin.cn/?target=http%3A%2F%2Fjs.jirengu.com%2Fkeseb%2F27%2Fedit%3Fhtml%2Ccss%2Coutput "http://js.jirengu.com/keseb/27/edit?html,css,output")** 即可同时实现子元素水平垂直居中。

```CSS
.wrapper {
  background-color: red;
  width: 200px;
  height: 200px;
  
  
  display: flex;
  
 
  justify-content: center;
  align-items: center;
}

.son {
  display: block;
  background-color: green;
  width: 100px;
  height: 100px;
}

```
