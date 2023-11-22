const express = require('express')

// 路由中间件
const router = express.Router()

// console.log(router);
router.get('/',(req,res,next)=>{
  res.send('hello')
})

router.get('/index',(req,res,next)=>{
  res.send('index pages')// 不同于express.use，此处访问localhost:8080/index会匹配并打印index pages，而不是hello
})

modules.exports(router)