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
      target:'https://lady.vip.com',//反向代理的地址，将前端请求url“/ajax”前面的部分替换为'https://lady.vip.com'
      changeOrigin:true
    })

    proxy(req.res)
  }else if(/\/api/.test(urlStr)){
    console.log(urlStr);
    const proxy2 = createProxyMiddleware('/api',{
      target:'https://m.lagou.com',//反向代理的地址，将前端请求url“/api”前面的部分替换为'https://m.lagou.com'
      changeOrigin:true,
      pathRewrite:{
        '^/api':''//转发时将url中的“/api”删掉
      }
    })

    proxy2(req.res)
  }else{
    console.log('error');
  }
})

server.listen(8080,()=>{
  console.log('localhost:8080');
})