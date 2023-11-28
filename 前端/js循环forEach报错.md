报错代码:获取html dom，然后遍历dom时，报错 tabList.forEach is not a function
```js
var tabList = document.querySelectorAll('.mui-tab-item');
 
tabList.forEach(function(tabItem){
	tabItem.classList.remove('mui-active');
	if(tabItem.getAttribute('href') === activeUrl){
		tabItem.classList.add('mui-active');
	}
})
```

解决办法:加上一行代码
```js
tabList = Array.from(tabList);

var tabList = document.querySelectorAll('.mui-tab-item');
tabList = Array.from(tabList);
tabList.forEach(function(tabItem){
	tabItem.classList.remove('mui-active');
	if(tabItem.getAttribute('href') === activeUrl){
		tabItem.classList.add('mui-active');
	}
})
```

Array.from()方法就是将一个类数组对象或者可遍历对象转换成一个真正的数组。 将类数组对象转换为真正数组
————————————————
版权声明：本文为CSDN博主「徊忆羽菲」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/guo_qiangqiang/article/details/114531333