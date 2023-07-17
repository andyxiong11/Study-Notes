//日期对象 date()
Date();//'Sat Jul 08 2023 21:58:36 GMT+0800 (中国标准时间)'
var date = new Date();
// getDate()	以数值返回天（1-31）
// getDay()	以数值获取周名（0-6）
// getMonth()	获取月（0-11）
// getFullYear()	获取四位的年（yyyy）
// getHours()	获取小时（0-23）
// getMilliseconds()	获取毫秒（0-999）
// getMinutes()	获取分（0-59）
// getSeconds()	获取秒（0-59）
date.getSeconds();//因为调用的是同一个对象，所以一样
date.getSeconds();//因为调用的是同一个对象，所以一样
// getTime()	获取时间（从 1970 年 1 月 1 日至今）

var firstTime = new Date().getTime();
for(var1=0;i<100000000;i++){}
var lastTime = new Date().getTime();
console.Log(lastTime - firstTime);//运行时间

// setDate()	以数值（1-31）设置日
date.setDate(13);//'Sat Jul 13 2023 21:58:36 GMT+0800 (中国标准时间)'
// setMonth()	设置月（0-11）
// setFullYear()	设置年（可选月和日）
// setHours()	设置小时（0-23）
// setMilliseconds()	设置毫秒（0-999）
// setMinutes()	设置分（0-59）
// setSeconds()	设置秒（0-59）
// setTime()	设置时间（从 1970 年 1 月 1 日至今的毫秒数）

// toString()	将 Date 对象转换为字符串。
// toTimeString()	将 Date 对象的时间部分转换为字符串。