[微信小程序获取openid的两种方法 | 微信开放社区](https://developers.weixin.qq.com/community/develop/article/doc/000c80906b4210625f3bde3775bc13) 

 **第一种：使用云开发**

这种比较简单，只需要开通云开发，创建云函数，调用云函数就可获得。

调用云函数 Promise Cloud.callFunction(Object object) 返回一个Promise对象，所以不用考虑异步问题。

> callFunction说明 [https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/functions/Cloud.callFunction.html](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/functions/Cloud.callFunction.html)

具体代码如下：

我这里云函数名为helloCloud

```
exports.main = async (event, context) => {
 let{ APPID,OPENID}=cloud.getWXContext()
  return {
    APPID,
    OPENID
  }



wx.cloud.callFunction({
  name:'helloCloud',
  data:{
    message:'helloCloud',
  }
}).then(res=>{
  console.log(res)
    
})

```

**第二种：不使用云开发**

这种方式就需要开发者有自己的后台了。

首先需要在微信小程序调用登录开放接口 wx.login() 获取用户登陆凭证code。

> wx.login()接口说明 [https://developers.weixin.qq.com/miniprogram/dev/api/open-api/login/wx.login.html](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/login/wx.login.html)

然后，向自己的服务器发送请求，并将code一起发送过去。

```
wx.login({
  success (res) {
    if (res.code) {
      
      wx.request({
        url: '自己的服务器请求接口',
        data: {
          code: res.code
        }
      })
    } else {
      console.log('登录失败！' \+ res.errMsg)
    }
  }
})

```

接下来，在自己的服务端调用auth.code2Session接口，我这里是用Java后台。

> auth.code2Session接口说明 [https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/login/auth.code2Session.html](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/login/auth.code2Session.html)

```
 @RequestMapping("/testopenid")
    public String getUserInfo(@RequestParam(name = "code") String code) throws Exception {
        System.out.println("code" \+ code);
        String url = "https://api.weixin.qq.com/sns/jscode2session";
        url += "?appid=xxxxxxxxxxxxx";
        url += "&secret=xxxxxxxxxxxxxxxxxxx";
        url += "&js_code=" \+ code;
        url += "&grant\_type=authorization\_code";
        url += "&connect_redirect=1";
        String res = null;
        CloseableHttpClient httpClient = HttpClientBuilder.create().build();
        
        HttpGet httpget = new HttpGet(url);    
        CloseableHttpResponse response = null;
        
        RequestConfig requestConfig = RequestConfig.custom()          
                .setConnectTimeout(5000)                    
                .setConnectionRequestTimeout(5000)             
                .setSocketTimeout(5000)                    
                .setRedirectsEnabled(false).build();           
        httpget.setConfig(requestConfig);                         
        response = httpClient.execute(httpget);                   
        HttpEntity responseEntity = response.getEntity();
        System.out.println("响应状态为:" \+ response.getStatusLine());
        if (responseEntity != null) {
            res = EntityUtils.toString(responseEntity);
            System.out.println("响应内容长度为:" \+ responseEntity.getContentLength());
            System.out.println("响应内容为:" \+ res);
        }
        
        if (httpClient != null) {
            httpClient.close();
        }
        if (response != null) {
            response.close();
        }
        JSONObject jo = JSON.parseObject(res);
        String openid = jo.getString("openid");
        System.out.println("openid" \+ openid);
        return openid;
    }

```

部分参考 [https://blog.csdn.net/qq\_42940875/article/details/82706638?depth\_1-utm\_source=distribute.pc\_relevant.none-task&utm\_source=distribute.pc\_relevant.none-task](https://blog.csdn.net/qq_42940875/article/details/82706638?depth_1-utm_source=distribute.pc_relevant.none-task&utm_source=distribute.pc_relevant.none-task)

这样就获得openid了。

但是在实际应用场景中，往往需要在界面展示之前获得openid来做一些操作或者什么。

用以上代码会发现，openid后台虽然获取到了，但是小程序端页面刚展示时好像并没有获取到openid,但是之后查看数据能看到openid。

这是因为wx.request()是异步请求。也就是在请求的过程中，小程序的其他工作没有因为请求而停止。

所以，我们需要将请求封装成一个返回Promise对象的函数。

> 廖雪峰老师讲的Promise使用 [https://www.liaoxuefeng.com/wiki/1022910821149312/1023024413276544](https://www.liaoxuefeng.com/wiki/1022910821149312/1023024413276544)

这样就能在请求完做一些后续操作。

代码如下：

```
function request(requestMapping, data, requestWay, contentType) {
  wx.showLoading({
    title: '请稍后',
  })
  return new Promise(function(resolve, reject) {
    console.log('请求中。。。。。')
    wx.request({
      url: '自己的服务器地址' \+ requestMapping,
      data: data,
      header: {
        'content-type': contentType 
      },
      timeout: 3000,
      method: requestWay,
      success(res) {
        
        if (res.data.success == false || res.data.statusCode == 404) {
          reject(res)
        } else {
          resolve(res)
        }
      },
      fail: (e) => {  
        wx.showToast({
          title: '连接失败',
          icon: 'none'
        })},
      complete: () => {
        wx.hideLoading()
      }
    })
  })
}

﻿
function getOpenId(app, that){
  return new Promise(function (resolve, reject) {
        wx.login({
          success: function (yes) {
            
            var requestMapping = '/testopenid'
            var data = {
              code: yes.code
            }
            var requestWay = 'GET'
            var contentType = 'application/json'
            var p =request(requestMapping, data, requestWay, contentType)
            p.then(res => {
              
              app.globalData.openId = res.data;
                    resolve(res)
            }).catch(e => {
              reject(e)  
            })
          },
          fail(e) {
            console.log(e)
          }
        })  
  })
}

```

这样就解决了因为异步获取不到数据的问题。

技术有限，欢迎交流。

觉得有用请点个赞。