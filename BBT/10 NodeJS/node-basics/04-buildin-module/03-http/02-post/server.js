//需要创建一个模拟服务器用来攻击，详见train-exporess-env文件夹
//使用postman请求 localhost:8080，“train-exporess-env”服务器打印收到的body
const http = require('http')
const querystring = require('querystring')

const postData = querystring.stringify({
  province: '上海',
  city: '上海',
  district: '宝山区',
  address: '同济支路199号智慧七立方3号楼2-4层',
  latitude: 43.0,
  longitude: 160.0,
  message: '求购一条小鱼',
  contact: '13666666',
  type: 'sell',
  time: 1571217561
})

const options = {
  protocol: 'http:',
  hostname: 'localhost',
  method: 'POST',
  port: 3000,
  path:'/data',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': Buffer.byteLength(postData)
  }
}

const server = http.createServer((req,res)=>{
  const request = http.request(options,(result)=>{

  })
  request.write(postData)
  request.end()

  res.end()
})

server.listen(8080,()=>{
  console.log('localhost:8080');
})