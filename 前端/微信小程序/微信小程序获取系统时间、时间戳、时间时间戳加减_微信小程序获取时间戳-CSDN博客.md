[微信小程序获取系统时间、时间戳、时间时间戳加减_微信小程序获取时间戳-CSDN博客](https://blog.csdn.net/UFO00001/article/details/72834437) 

 [http://blog.csdn.net/ufo00001/article/details/72834437](http://blog.csdn.net/ufo00001/article/details/72834437)

```null
var timestamp = Date.parse(new Date());    timestamp = timestamp / 1000;console.log("当前时间戳为：" + timestamp);var n = timestamp * 1000;var Y = date.getFullYear();var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();var m = date.getMinutes();var s = date.getSeconds();console.log("当前时间：" +Y+M+D+h+":"+m+":"+s);console.log(date.toDateString());console.log(date.toGMTString());console.log(date.toISOString());console.log(date.toJSON());console.log(date.toLocaleDateString());console.log(date.toLocaleString());console.log(date.toLocaleTimeString());console.log(date.toString());console.log(date.toTimeString());console.log(date.toUTCString());
```

```null
var tomorrow_timetamp = timestamp + 24 * 60 * 60;var n_to = tomorrow_timetamp * 1000;var tomorrow_date = new Date(n_to);var Y_tomorrow = tomorrow_date.getFullYear();var M_tomorrow = (tomorrow_date.getMonth() + 1 < 10 ? '0' + (tomorrow_date.getMonth() + 1) : tomorrow_date.getMonth() + 1);var D_tomorrow = tomorrow_date.getDate() < 10 ? '0' + tomorrow_date.getDate() : tomorrow_date.getDate();var h_tomorrow = tomorrow_date.getHours();var m_tomorrow = tomorrow_date.getMinutes();var s_tomorrow = tomorrow_date.getSeconds();
```