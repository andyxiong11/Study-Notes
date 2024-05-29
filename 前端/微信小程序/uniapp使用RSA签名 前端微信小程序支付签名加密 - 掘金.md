[uniapp使用RSA签名 前端微信小程序支付签名加密 - 掘金](https://juejin.cn/post/7211008551761166397) 

 本人用于微信小程序唤起收银台支付签名加密
--------------------

应项目需求，将请求数据进行签名，后端接口进行验签。后端接口提供签名私钥，使用SHA256withRSA进行签名。对于js进行RSA签名，这个内容其实很早就有相关库了，大部分应该使用的都是jsrsasign。

1.  下载jsrsasign库，npm install jsrsasign走起，在项目根目录下node_modules此时应该存在jsrsasign目录了，我们所需要的资源都已经在里面了；
    
2.  看了下里面的资源，就lib文件夹下的jsrsasign.js是主要文件，于是便拷贝了该文件出来，再次对其包装下；
    
3.  签名主要用到KJUR,hextob64
    

const { KJUR ,hextob64 } = require('@/common/jsrsasign/lib/jsrsasign');

4.  私钥，因为后端接口调用的时候不需要传入pem的begin和end部分，所以为了统一，给到的也是不带begin和end部分的字符串，由前端进行处理：

const strPrivateKey="xxxxxx";const privateKey=`-----BEGIN PRIVATE KEY-----\n${strPrivateKey}\n-----END PRIVATE KEY-----`;

5.签名处理

```javascript
const rsaSign = (content, privateKey) => {
    
    const signature = new KJUR.crypto.Signature({
        alg: "SHA256withRSA",
　　　　　　　　　　
　　　　　　　　　　prvkeypem: privateKey 
　　　　　　　　});
　　　　　signature.updateString(content);
　　　　　const signData = signature.sign();
　　　　　
　　　　　return hextob64(signData)
　　　　　
}

```

6.  整个代码如下

```javascript
const {
    KJUR,hextob64
} = require('@/common/jsrsasign/lib/jsrsasign');

const rsaSign = (content, privateKey) => {
    
    privateKey=`-----BEGIN PRIVATE KEY-----\n${privateKey}\n-----END PRIVATE KEY-----`;
    const signature = new KJUR.crypto.Signature({
        alg: "SHA256withRSA",
        prvkeypem: privateKey
    })
    signature.updateString(content)
    const signData = signature.sign()
    
    return hextob64(signData)
    
}
module.exports = {
    rsaSign
}

```

7.请求rsaSign，组装成url键值对字符串，rsaSign("xxxx","xxxx")，结束。