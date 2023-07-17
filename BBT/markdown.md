**主流浏览器内核**
1. IE trident
2. Firefox Gecko
3. Google chrome Webkit/blink
4. Safari Webkit
5. Opera presto 

html 结构
css 样式
javascript 行为 

先分析有几种css样式写出来，再写html加上对应的样式,封装公共样式

a的边距4px
body的margin 8px

Mosaic 第一个浏览器

浏览器组成：shell、内核（渲染引擎、js引擎。其他模块）
2001年IE6首次实现对js引擎的优化和分离
chrome2008年发布，采用优化后的V8引擎，将js代码直接转化为机械码

**js**

1. 解释性语言

   - 编译，将一个代码文件翻译为一个机器可读执行的文件，移植性不好不能跨平台。C C++
   - 解释，解释一行执行一行，移植性好能跨平台 JS PHP
   - Java属于编译解释语言

2. 单线程
   
ECMA标准，JS三大部分(ECMA Script、DOM、BOM)

**js执行队列**
task2,1ms-task1,1ms-task1,1ms-task2,1ms-task2,1ms-task1,1ms-js执行主线程
轮转时间片，多线程轮流运行