控制台报错 TypeError: Cannot read properties of undefined (reading 'map')

错误原因：第一次页面渲染的时候，map的对象是undefined或null,

解决方法：在前面加个要进行判断，当有值时再去遍历

```js
// 1、可选链式操作符  ?.
this.array?.map(()=>{ …… })
 
// 2、&& 判断
this.array&&this.array.map(()=>{ …… })
```

————————————————
版权声明：本文为CSDN博主「用户11」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/WX_nbclass/article/details/128711850