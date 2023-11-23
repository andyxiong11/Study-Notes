const express = require('express')
const app = express()

const path = require('path')

const router = require('./router/index')

// 解析body的中间件，用于解析post请求body中的json和urlencoded类型数据
app.use(express.json()); 
app.use(express.urlencoded({ extended:true })); 

// 静态资源服务中间件（内置中间件）
app.use(express.static('./public'))

// view engine setup art-template配置
app.engine('art', require('express-art-template'));
app.set('view options', {
    debug: process.env.NODE_ENV !== 'production'
});
app.set('views', path.join(__dirname, 'view'));//view 模板路径
app.set('view engine', 'art');

app.use('/',router)

app.listen(8080,()=>{
  console.log('localhost:8080');
})