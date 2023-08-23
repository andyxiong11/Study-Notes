1. npm i vue-router@3  vue3默认安装vue-router4

1. 新建文件夹
2. 运行
- npm init
- npm i express
3. 新建server.js
   ```javascript
    const express = require('express')

    const app = express()
    app.use(express.static(__dirname+'/static'))

    app.get('/person',(req,res)=>{
      res.send({
      name:'tom',
      age:18
      })
    })

    app.listen(5005,(err)=>{
      if(!err)console.log('服务器启动成功了！')
    })
  ```
4. 运行node serve
5. 打开localhost:5005/person
6. 新建static文件夹
7. 将打包后的资源放到static文件夹
---
解决history问题
1. npm i connect-history-api-fallback
2. 修改serve.js
  ```javascript
    const express = require('express')
    const history = require('connect-history-api-fallback');

    const app = express()
    app.use(express.static(__dirname+'/static'))
    app.use(history())

    app.get('/person',(req,res)=>{
      res.send({
      name:'tom',
      age:18
      })
    })

    app.listen(5005,(err)=>{
      if(!err)console.log('服务器启动成功了！')
    })
  ```