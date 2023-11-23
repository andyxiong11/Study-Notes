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
  let dataObj = {
    ret:true,
    data:[]
  }
  for(var i = 0;i < 100;i++){
    dataObj.data.push('line'+i)
  }
  res.send(dataObj)

}

exports.list = list