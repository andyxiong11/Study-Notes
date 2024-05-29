[微信支付 V3 RSA 加签踩坑 - yuanbao701 - 博客园](https://www.cnblogs.com/yuanbao0701/p/15752485.html) 

 [微信支付 V3 RSA 加签踩坑](https://www.cnblogs.com/yuanbao0701/p/15752485.html "发布于 2022-01-04 11:55")
==============================================================================================

最近在做微信支付，根据微信官方文档上的要求 用RSA加签去请求支付窗口的调起，下面详细列举支付开发过程；

 当前项目的流程大概是，前端根据后端要求提交数据-------》拿到后台返回的prepay\_ID,和order\_ID,-----》前端RSA加签------》调起微信的支付窗口----》支付。

```
myOderData(options){
    const that=this;
    let params={
      datas:options,//提交订单数据的参数
      method:'POST'
     }
     let paycode,OrderNo;
 api.addorderData(params).then(res=>{
       
      if(res.data.Success==false){
        utils.msgtips(res.data.Msg);
      }else{
        paycode=res.data.Data.prepay_id;//拿到后台返回的prepay_id
        OrderNo=res.data.Data.OrderNo;//拿到后台返回的订单号
       // console.log(paycode);
        let obj= utils.paysign(paycode);  //RSA加签，此处已封装成paysign方法
        utils.processPay(obj).then(res=>{//发起支付窗体的调起，已封装成processPay方法
          if(res.errMsg=="requestPayment:ok"){//支付成功时，要传入订单号到后台改变订单状态
            that.updateorderData(OrderNo)
          }else if(res.errMsg=="requestPayment:fail cancel"){//取消支付时的操作
            utils.msgtips('您已取消支付');
            wx.navigateTo({
              url:'../mppaycancel/index'
            })
          }
        })
       }
    }).catch(err=>{
      console.log(err)
    })　
```

以上是整体使用的方法。

下面讲解加签：

根据腾讯官方文档上的要求，如图：

![](https://img2020.cnblogs.com/blog/478758/202201/478758-20220104110836858-1840936226.png)

文档原文地址：  https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter3\_5\_4.shtml

现在用的是v3 加签，以前是v2 MD5 

需要注意的是加密加签的方式， 需要和后端保持一致。

1小程序ID获取：

```
const accountInfo = wx.getAccountInfoSync();
 let appId=accountInfo.miniProgram.appId;
```

　　2.时间戳：

```
function createTimeStamp(){
  return parseInt(new Date().getTime() / 1000) + ''
}
```

　　3.32位随机数：

```
function randomString(){
  const chars='ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'; //默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1
  const len=32;
  const maxPos=chars.length;
  let pwd='';
  for(let i=0;i<len;i++){
    pwd+=chars.charAt(Math.floor(Math.random()*maxPos));
  }
  return pwd;
}
```

　　4.订单详情扩展字符prepay_id：

　　即后端返回回来的prepay_id字段数据。

　　5.加签方式：

```
signType= 'RSA'
```

　　6.签名 paysign，这里要说明一下：

 1).最好严格按照腾讯文档要求的顺序来。使用字段appId、timeStamp、nonceStr、package

2）要用‘\\n’ 连接各字段，并且结尾也要用‘\\n’ 不要用等于号。

官方文档有说明：链接：https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter3\_5\_4.shtml

如图：

![](https://img2020.cnblogs.com/blog/478758/202201/478758-20220104111848764-866406468.png)

还有一个很重要的RSA加签：

这个我搜到2个博主提供的：

1）：

demo：https://blog.csdn.net/UFO00001/article/details/72822907

github：https://github.com/UFO0001/WX_RSA

2）

https://github.com/zhangzhaopds/WeixinApp\_RSA\_Signature

 第二种需要用小程序npm构建，照着文档操作就可以了，

npm构建文档如下：

https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html

我用的是第一个，直接页面引入了wx_rsa.js

如图：

![](https://img2020.cnblogs.com/blog/478758/202201/478758-20220104113708065-888646650.png)

```
function signLong  (data) {
  let sign_rsa = new RSA.RSAKey();
  sign_rsa = RSA.KEYUTIL.getKey(privateKey);
  let hashAlg = 'sha256';//sha256//此处换成腾讯要求的方式
  let Sig = sign_rsa.signString(data, hashAlg);
  Sig = RSA.hex2b64(Sig); // hex 转 b64
  return Sig;
  }
```

_ 关于私钥：_

_一定要下载证书：_

_![](https://img2020.cnblogs.com/blog/478758/202201/478758-20220104114208161-946919079.png)
_

下载后打开此文件复制私钥粘贴到编辑器中，不能TXT 中复制，会改变编码方式，导致加签不成功。

 ![](https://img2020.cnblogs.com/blog/478758/202201/478758-20220104114219825-1814861333.png)

 腾讯官网有一个加签解签的验证工具，这个只能检测是否符合规范，不能检测值是否正确。地址：https://pay.weixin.qq.com/wiki/doc/apiv3/wechatpay/wechatpay6_0.shtml

![](https://img2020.cnblogs.com/blog/478758/202201/478758-20220104114746429-1465029230.png)

```
function paysign(options){//发起支付签的字段准备
 
  const accountInfo = wx.getAccountInfoSync();
  let appId=accountInfo.miniProgram.appId,//小程序appid
   timeStamp=createTimeStamp(),//时间戳
    nonceStr=randomString(),//32位随机数
    Ppackage= `prepay_id=${options}`,//prepay_id
    signType= 'RSA';//加签方式
  //appId、timeStamp、nonceStr、package
  let PpaySign=`${appId}\n${timeStamp}\n${nonceStr}\n${Ppackage}\n`;//需要加签的字段拼接
  let cryptStr=Rsa.signLong(PpaySign);//生成签名
  let paySign=cryptStr;
  return obj={timeStamp,nonceStr,Ppackage,signType,paySign};
}
```

```
//发起支付
function  processPay(options){
  // console.log(options)
   let that=this;
  return new Promise((resolve,reject)=>{
   wx.requestPayment({
     package:options.Ppackage,...options,
     success: (res)=>{
       resolve(res);
     },
     fail: (err)=>{
       resolve(err);
     }
   });
  })
 }
```

以上就是完整的涉及到支付的一些方法和取值过程。