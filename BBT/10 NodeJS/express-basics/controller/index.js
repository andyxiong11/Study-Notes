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
  let dataArray=[]

  for(var i = 0;i < 100;i++){
    dataArray.push('line'+i)
  }

  res.set('content-type','application/json;charset=utf-8')

  res.render('list',{
    data:JSON.stringify(dataArray)//此处需要字符串
  })//模板名字（自动去server.js中配置的view目录查找list.art），模板数据

}

exports.list = list