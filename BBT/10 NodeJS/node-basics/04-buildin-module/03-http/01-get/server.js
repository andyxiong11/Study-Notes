// node server.js后,使用浏览器打开localhost:8080
const logger = require('../../until/log')
const queryString = require('querystring')
const http = require('http')
const https = require('https')

const server = http.createServer((request,reponse)=>{
  const url = request.url
  //logger.debug(url);//例如在地址栏中输入localhost:8080/api/a,输出/api/a,用来获取url
  
  //logger.debug(request)
  //logger.debug(reponse);

  /* // node --inspect --inspect-brk server.js
  // 使用浏览器打开 chrome://inspect
  debugger;//配合浏览器断点调试 */

  //reponse.write('home!')//页面上打印home!

  //reponse.write('<div>home!</div>')//因为默认header里面的content-type是解析text/html.所以不会展示html标签,需要修改请求头

  /* reponse.writeHead(200,{
    'content-type':"text/plain"
  })
  reponse.write('<div>home!</div>')//页面上打印<div>home!</div> */

  /* reponse.writeHead(404,{
    'content-type':"text/plain"
  })
  reponse.write('<div>home!</div>')//控制台请求404 */

  /* reponse.writeHead(200,{
    'content-type':"application/json;charset=utf-8"
  })
  reponse.write('{"x":100}')//返回json格式 */

  /* reponse.writeHead(200,{
    'content-type':"application/json;charset=utf-8"
  })
  reponse.write(`{"url":"${url}}`)//将url打印到页面上 */

  // 配合postman发送请求localhost:8080/api/list
  /* let data = ''
  request.on('data',(chunk)=>{//监听data
    data += chunk
  })
  request.on('end',()=>{
    reponse.writeHead(200,{
      'content-type':"application/json;charset=utf-8"
    })
    reponse.write(JSON.stringify(queryString.parse(data)))//data是url后面的路径，转为JS对象，再转为json字符串
    reponse.end()//结束
  }) */

  // 配合postman发送请求localhost:8080/api/list
  https.get('https://www.xiaomiyoupin.com/mtop/mf/cat/list',(result)=>{
    let data = ''
    result.on('data',(chunk)=>{
      data += chunk
    })
    result.on('end',()=>{
      reponse.writeHead(200,{
        'content-type':"application/json;charset=utf-8"
      })
      reponse.write(data)//data是url后面的路径，转为JS对象，再转为json字符串
      reponse.end()//结束
    })
  })

  //reponse.end()//结束
})

server.listen(8080,()=>{
  console.log('localhost:8080');
})