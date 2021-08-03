1.设置环境变量
```
postman.setEnvironmentVariable("key", "value");
或
pm.environment.set("key","value");
```
2.设置全局变量
```
postman.setGlobalVariable("key", "value");
或
pm.globals.set("key", value);
```
3.检查响应中包含string
```
tests["Body matches string"] = responseBody.has("string_you_want_to_search");
或
pm.expect(pm.response.text()).to.include("string_you_want_to_search")
```
4.转化XML格式的响应成JSON对象
```
var jsonObject = xml2Json(responseBody);
```
5.检查响应body中等于指定string
```
tests["Body is correct"] = responseBody === "response_body_string";
```
6.检查JSON某字段值
```
var data = JSON.parse(responseBody);
tests["Your test name"] = data.value === 100;
```
7.检查Content-Type是否包含在header返回（大小写不敏感）
```
tests["Content-Type is present"] = postman.getResponseHeader("Content-Type");
```
8.检查Content-Type是否包含在header返回（大小写敏感）
```
tests["Content-Type is present"] = responseHeaders.hasOwnProperty("Content-Type");
```
9.检查请求耗时时间小于200ms
```
tests["Response time is less than 200ms"] = responseTime < 200;
或
pm.expect(pm.response.responseTime).to.be.below(200);
```
10.检查Status code为200
```
tests["Status code is 200"] = responseCode.code === 200;
或
pm.response.to.have.status(200);
```
11.检查Code name是否指定string
```
tests["Status code name has string"] = responseCode.name.has("Created");
```
12.检查成功post的请求status code
```
tests["Successful POST request"] = responseCode.code === 201 || responseCode.code === 202;
```