// nodemon server.js

const express = require('express')

const app = express()

// 回调函数又被称为中间件
/* app.use('/',(req,res,next)=>{//路由
  console.log(0);
  res.send('hello')//打印到页面。如果没有send,页面请求不会结束
  next()// 如果没有next，不会执行下面一个中间件（中间件栈）
},(req,res,next)=>{
  console.log(1);
  next()// 如果没有next，不会执行下面一个中间件（中间件栈）
},(req,res)=>{
  console.log(2);
}) */

const middlewares = [(req,res,next)=>{
  console.log(0);
  next()
},(req,res,next)=>{
  console.log(1);
  next()
},(req,res,next)=>{
  console.log(2);
  next()// 如果没有next，localhost:8080/api 不会匹配下一个路由 /api
}]
app.use('/',middlewares)

app.use('/api',(req,res)=>{
  res.send('world')
})

app.listen(8080,()=>{
  console.log('localhost:8080');
})