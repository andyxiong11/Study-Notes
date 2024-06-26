> 转载自：https://zhuanlan.zhihu.com/p/39590678

使用import命令的时候，用户需要知道所要加载的变量名或函数名，否则无法加载。但是，用户肯定希望快速上手，未必愿意阅读文档，去了解模块有哪些属性和方法。为了给用户提供方便，让他们不用阅读文档就能加载模块，就要用到export default命令，为模块指定默认输出。

1、基本用法例如

```js
//export-default.js 这是一个模块文件export-default.js，它的默认输出是一个函数
export default function () {
  console.log('foo');
}
//import-default.js
import customName from './export-default';
customName();  //'foo'
//这是的import命令，可以用任意名称指向export-default.js输出的方法，这时就不需要知道原模块输出的函数名。
需要注意的是，这时import命令后面，不使用大括号。
其他模块加载该模块时，import命令可以为该匿名函数指定任意名字。
```

2、export default命令用在非匿名函数前

```js
// export-default.js
export default function foo() {  
    console.log('foo');
}
// 或者写成
function foo() {  
    console.log('foo');
}
export default foo;//上面代码中，foo函数的函数名foo，在模块外部是无效的。加载的时候，视同匿名函数加载。
```

3、export 加default和不加的区别

```js
// 第一组
export default function crc32() { // 输出
  // ...}
import crc32 from 'crc32'; // 输入


// 第二组
export function crc32() { // 输出
  // ...};
import {crc32} from 'crc32'; // 输入


第一组是使用export default时，对应的import语句不需要使用大括号；

第二组是不使用export default时，对应的import语句需要使用大括号。

export default命令用于指定模块的默认输出。显然，一个模块只能有一个默认输出，因此export default命令只能使用一次。所以，import命令后面才不用加大括号，因为只可能唯一对应export default命令。
```

4、export default就是输出一个叫做default的变量或方法，然后系统允许你为它取任意名字

```js
// 正确export var a = 1;
// 正确var a = 1;export default a;
// 错误export default var a = 1;//上面代码中，export default a的含义是将变量a的值赋给变量default。所以，最后一种写法会报错。
```

5、因为export default 命令的本质是将后面的值，赋给default变量，所以可以直接将一个值写在export default之后

```js
// 正确export default 42;
// 报错 原因这一句报错是因为没有指定对外的接口，而前一句指定外对接口为default。export 42;
```


6、export default命令，输入模块时就非常直观了，以输入 lodash 模块为例

```js
import _ from 'lodash';
如果想在一条import语句中，同时输入默认方法和其他接口，可以写成下面这样

import _, { each, each as forEach } from 'lodash';
对应上面代码的export语句如下。

export default function (obj) {  // ···}

export function each(obj, iterator, context) {  // ···}

export { each as forEach };//暴露出forEach接口，默认指向each接口，即forEach和each指向同一个方法。
```

7、export default也可以用来输出类

```js
// MyClass.js
export default class { ... }

// main.js
import MyClass from 'MyClass';
let o = new MyClass();
```

