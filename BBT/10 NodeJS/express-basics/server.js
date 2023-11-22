const express = require('express')
const app = express()

const router = require('./router/index')

// 解析body的中间件，用于解析post请求body中的json和urlencoded类型数据
app.use(express.json()); 
app.use(express.urlencoded({ extended:true })); 

app.use('/',router)

app.listen(8080,()=>{
  console.log('localhost:8080');
})