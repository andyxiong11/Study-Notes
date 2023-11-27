var template = require('art-template');
var path = require('path')
var fs = require('fs')

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
  let dataArray=[]
  for(var i = 0;i < 100;i++){
    dataArray.push('line'+i)
  }
  /* res.render('list-html',{
    data:dataArray
  })//模板名字（自动去server.js中配置的view目录查找list-html.art），模板数据 */
  // 下面是服务端直接生成html返回给前端，而不是res.render返回数据然后解析成html
  // console.log(template);
  var html = template(path.join(__dirname, '../view/list-html.art'), {
    data:dataArray
  });
  fs.writeFileSync(path.join(__dirname, '../public/list.html'),html)//生成静态资源页面
  res.send(html)
}

exports.list = list