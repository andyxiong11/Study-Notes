var template = require('art-template');
var path = require('path')
var fs = require('fs')
var jwt = require('jsonwebtoken');

const listModel = require('../model/list')

// 应用级中间件
const list = (req,res,next)=>{
  // SSR 服务端渲染
  /* let data = '<ul>'
  for(var i = 0;i < 100;i++){
    data += `<li>line${i}</li>`
  }
  data += '</ul>' 
  res.send(data)  */

  // CSR 客户端渲染
  /* let dataObj = {
    ret:true,
    data:[]
  }
  for(var i = 0;i < 100;i++){
    dataObj.data.push('line'+i)
  }
  res.send(dataObj) */

  // 模板引擎渲染
  /* let dataArray=[]

  for(var i = 0;i < 100;i++){
    dataArray.push('line'+i)
  }

  res.set('content-type','application/json;charset=utf-8')

  res.render('list',{
    data:JSON.stringify(dataArray)//此处需要字符串
  })//模板名字（自动去server.js中配置的view目录查找list.art），模板数据 */

  // 服务端使用模板引擎渲染一个页面返回给前端 使用localhost:8080/api/list访问。主要应用CMS，点击按钮，一键发布新闻静态网页
  /* let dataArray=[]
  for(var i = 0;i < 100;i++){
    dataArray.push('line'+i)
  } */ //将数据分离../model/list.js
  /* res.render('list-html',{
    data:dataArray
  })//模板名字（自动去server.js中配置的view目录查找list-html.art），模板数据 */
  // 下面是服务端直接生成html返回给前端，而不是res.render返回数据然后解析成html
  // console.log(template);
  var html = template(path.join(__dirname, '../view/list-html.art'), {
    // data:dataArray //将数据分离../model/list.js
    data : listModel.dataArray
  });
  fs.writeFileSync(path.join(__dirname, '../public/list.html'),html)//生成静态资源页面
  res.send(html)

  
}

// 用于学习jsonwebtoken
const token = (req,res,next) => {
  // res.send('ok')

  // 对称加密 HS256
  /* var tk = jwt.sign({ username: 'admin' }, 'i love you');//加密;i love you是密钥
  // res.send(tk)//可以在jsonwebtoken官网验证加密后的数据，https://jwt.io/
  var decoded = jwt.verify(tk, 'i love you');//验证;i love you是密钥
  res.send(decoded) */ 

  // 非对称加密 RS256
  var privateKey = fs.readFileSync(path.join(__dirname,'../keys/rsa_private_key.pem')); //读取相对路径的私钥
  const tk = jwt.sign({ username: 'admin' },privateKey,{ algorithm: 'RS256' } );
  // res.send(tk)//可以在jsonwebtoken官网验证公私钥是否匹配，https://jwt.io/
  var publicKey = fs.readFileSync(path.join(__dirname,'../keys/rsa_public_key.pem')); //读取相对路径的公钥
  const result = jwt.verify(tk, publicKey);
  res.send(result)
}

exports.list = list
exports.token = token