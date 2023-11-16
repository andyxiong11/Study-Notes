//nodemon server.js
const http = require('http')
const url = require('url')

const server = http.createServer((req,res)=>{
  let urlStr = req.url
  let urlObj =  url.parse(urlStr,true)
  console.log(urlStr,urlObj);
  switch(urlObj.pathname){
    case '/api/data':
      res.writeHead(200,{
        'content-type':'application/json',
        'access-control-allow-origin':'*'//cors解决跨域请求的问题，*表示所有地址均可请求该服务器
      })
      res.write('{"ret":true,"data":"hello"}')
      break
    default:
      res.write('page noe found')
  }
  res.end()
})

server.listen(8080,()=>{
  console.log('localhost:8080');
})