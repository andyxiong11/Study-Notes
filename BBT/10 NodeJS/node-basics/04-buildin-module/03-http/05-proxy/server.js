//nodemon server.js
//需要安装 npm i http-proxy-middleware
// apipost模拟请求 http://localhost:8080/ajax
const http = require('http')
const url = require('url')
const { createProxyMiddleware } = require('http-proxy-middleware')


const server = http.createServer((req,res)=>{
  const urlStr = req.url
  if(/\/ajax/.test(urlStr)){
    console.log(urlStr);
    const proxy = createProxyMiddleware('/ajax',{
      target:'https://lady.vip.com',//代理的地址
      changeOrigin:true
    })

    proxy(req.res)
  }else{
    console.log('error');
  }
})

server.listen(8080,()=>{
  console.log('localhost:8080');
})