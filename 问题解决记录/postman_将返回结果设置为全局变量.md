**Tests**

```javascript
var jsondate = pm.response.json();    //将接口返回的结果以json格式展示
var get_sessionId = jsondate.body.sessionId;
console.log(pm.environment.get('get_sessionId'));
pm.environment.set("sessionid", get_sessionId); //将变量名直接写入到环境变量里：
//pm.globals.set("sessionid", get_sessionId);    //将变量名直接写入到全局变量里：
```