// nodemon server.js
const http = require('http')
const path = require('path')
const readStaticFile = require('./readStaticFile')

http.createServer(async(req,res)=>{
  let urlString = req.url
  console.log("urlString:"+urlString);
  // let filePathName = path.resolve(__dirname,'./public',`.${urlString}`)//__dirname当前文件的物理路径
  let filePathName = path.join(__dirname,'./public',urlString)//__dirname当前文件的物理路径
  console.log("filePathName:"+filePathName);//__dirname/public/urlString

  // 因为readStaticFile是异步函数所以需要await
  let {data,mimeType} = await readStaticFile(filePathName,res)//获取文件内容
  console.log(data);
  res.write(JSON.stringify(data))
 
  // res.write('hello')
  res.end()
}).listen(8080,()=>{ 
  console.log('localhost:8080');
})