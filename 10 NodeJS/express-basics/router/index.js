const express = require('express')

// 路由中间件
const router = express.Router()

// console.log(router);
router.get('/',(req,res,next)=>{
  res.send('hello')
})

// 获取数据
// 访问localhost:8080/index?id=2
router.get('/index',(req,res,next)=>{
  const query = req.query
  console.log(query);//query={id:"2"}
  // res.send('index pages')// 不同于express.use，此处访问localhost:8080/index会匹配并打印index pages，而不是hello
  res.send(query)// 响应打印到页面自动转为json类型，{"id":"2"}，也可以使用res.json(query)
})

// 添加数据
// 使用apipost发送post请求 
// localhost:8080/index body选urlencoded 参数：username admin;password 123
// localhost:8080/index body选json 参数：{"username": "admin","password": "123"}
router.post('/index',(req,res,next)=>{
  const data = req.body
  console.log(data);//{"username": "admin","password": "123"}
  res.send(data)
})

// 修改数据（覆盖修改）
// 使用apipost发送put请求；localhost:8080/index body选urlencoded 参数：username admin;password 123
router.put('/index',(req,res,next)=>{
  res.send('put response')
})

// 修改数据（增量修改）
// 使用apipost发送patch请求；localhost:8080/index body选urlencoded 参数：username admin;password 123
router.patch('/index',(req,res,next)=>{
  res.send('patch response')
})

// 删除数据
// 使用apipost发送delete请求；localhost:8080/index body选urlencoded 参数：username admin;password 123
router.delete('/index',(req,res,next)=>{
  res.send('delete response')
})

module.exports = router