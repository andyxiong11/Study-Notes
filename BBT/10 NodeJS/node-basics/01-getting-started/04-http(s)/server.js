// node server.js运行，页面上展示“localhost:8090”后面的内容，“localhost:8090/213”
// 用于演示网络通信
const http = require('http')

const server = http.createServer((request,response)=>{
  // 拿取前端的数据
  let url = request.url
  response.write(url)
  response.end()
})

server.listen(8090,'localhost',()=>{
  console.log('localhost:8090');
})