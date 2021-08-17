# 1. 添加线程组 

> 模拟一定数量的并发用户发送请求

线程数、Ramp-Up Period(in seconds)、循环次数，其中Ramp-Up Period(in seconds)表示在这时间内创建完所有的线程。如有100个线程，Ramp-Up = 1秒，那么线程的启动时间间隔为1/100=0.01秒.
例：需要同时新建多个用户数据，设置线程数1、Ramp-Up 1s、循环次数 用户数据条数

线程组为很多线程的一个集合，在项目中可以有多个的线程组，线程组主要是建立一组线程对多个请求进行测试
例：登录请求->新增客户请求->登出请求

# 2. 添加http请求 

线程组->添加取样器->http请求

# 3. 在http请求中写入协议、接入url、路径、请求方式和参数 

url：postman-echo.com
get请求
路径：/get
参数：param1 ${param1}、param2 ${param2}

**登录**
url：${__property(url)}
post请求
路径：/login
端口：80
参数：username ${username}、password ${password}

**创建线索**
url：${__property(url)}
post请求
路径：/CrmLeads/addOrUpdate
端口：80
消息体数据：
```javascript
{
    "entity": {
	   "leads_name":"${leads_name}",
	   //${__RandomString(5,abcde,)}",
        "telephone": "${telephone}",
        "mobile": "${mobile}",
        "address": "${address}",
        "next_time": "${next_time}",
        "remark": "${remark}"
    },
    "field": [
        {"fieldId": 2,
            "formType": "select",
            "isNull": 0,
            "name": "线索来源",
            "options": "促销,搜索引擎,广告,转介绍,线上注册,线上询价,预约上门,电话咨询,邮件咨询",
            "isUnique": 0,
            "inputTips": null,
            "type": 3,
            "value": "${laiyuan}",
            "fieldType":0,
            "fieldName": "线索来源",
            "setting": ["促销","搜索引擎","广告","转介绍","线上注册","线上询价","预约上门","电话咨询","邮件咨询"
            ]},
        { },
        { }
    ]
}
```

**新增客户**
url：${__property(url)}
post请求
路径：/CrmCustomer/addOrUpdate
端口：80
消息体数据：
```javascript
{
    "entity": {
        "customer_name":"${__RandomString(5,abcde,)}",
        "mobile": "",
        "telephone": "",
        "website": "",
        "next_time": "",
        "remark": "",
        "address": ""
    },
    "field": [
        {"fieldId": 18,
            "formType": "select",
            "isNull": 0,
            "name": "客户来源",
            "options": "促销,搜索引擎,广告,转介绍,线上注册,线上询价,预约上门,陌拜,电话咨询,邮件咨询",
            "isUnique": 0,
            "inputTips": null,
            "type": 3,
            "value": "",
            "fieldType": 0,
            "fieldName": "客户来源",
            "setting": ["促销","搜索引擎","广告","转介绍","线上注册", "线上询价","预约上门","陌拜","电话咨询","邮件咨询"
            ]},
        { },
        { }
    ]
}
```

**登出**
url：${__property(url)}
post请求
路径：/logout
端口：80

## 3.1 前置处理器
### 3.1.1 用户参数

键值：param1 51zxw、param2 66666

### 3.1.2 BashShell预处理程序

> 作用等同于用户参数
```javascript
vars.put("param1","51zxw");
vars.put("param2","66666");

vars.put("username","17612345678");
vars.put("password","123456");
${__setProperty(url,192.168.200.132,)};  // 全局变量，需写在线程组中
${__setProperty(Admin-Token,${token},)}  // 全局变量，需写在线程组中
```

## 3.2后置处理器
### 3.2.1 json提取器

token：.Admin-Token

### 3.2.2 正则表达式处理器

token："Admin-Token":"(.+?)"

### 3.2.1 调试后置处理器
> debug

## 3.3 配置元件
### 3.3.1 http信息头管理器

Content-Type：application/x-www-form-urlencoded
**Admin-Token 每一次登录生成的唯一值，在登陆请求中获取，后续请求可直接使用进入系统其他路径**
Admin-Token：${token}

### 3.3.2 csv数据文件设置

> 批量导入多条数据

例：leads_name,telephone,mobile,address,next_time,remark,laiyuan,hangye,jibie 

## 3.4 断言
### 3.4.1 响应断言

1. 响应代码 包括 200
2. 响应头 包括 "code":0

### 3.4.2 json断言

$.args.param1 
value：51zxw

$.code
value:0

# 4. 监听器
## 4.1 查看结果树 

线程组->添加监听器->查看结果树 

## 4.2 聚合报告

## 4.3 jp@gc - PerfMon Metrics Collector

> 性能监控