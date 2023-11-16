const http = require('http')
const url = require('url')

const server = http.createServer((req,res)=>{
  let urlStr = req.url
  let urlObj =  url.parse(urlStr,true)
  console.log(urlStr,urlObj);
  switch(urlObj.pathname){
    case '/api/data':
      // 浏览器上打开http://localhost:8080/api/data就会打印hello，但是如果index.html打开访问，把'hello'当js代码执行控制台就会报错，需要修改为alert('htllo')
      //res.write('hello')

      //res.write('getData("hello")')
      res.write(`${urlObj.query.cb}("hello")`)//利用前端传指定参数才能调用方法，解决跨域
      break
    default:
      res.write('page noe found')
  }
  res.end()
})

server.listen(8080,()=>{
  console.log('localhost:8080');
})