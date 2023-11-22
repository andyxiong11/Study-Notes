const express = require('express')
const app = express()

const router = require('./router/index')

// 解析body的中间件，用于解析post请求body中的json和urlencoded类型数据
app.use(express.json()); 
app.use(express.urlencoded({ extended:true })); 

// 静态资源服务中间件（内置中间件）
app.use(express.static('./public'))

app.use('/',router)

app.listen(8080,()=>{
  console.log('localhost:8080');
})