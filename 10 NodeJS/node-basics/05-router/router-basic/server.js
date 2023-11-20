// nodemon app.js

const fs = require('fs')
const mime = require('mime')

require('http')
  /* .createServer((req,res)=>{
    // res.end('ok')

    const urlString = req.url//浏览器输入的url
    console.log(urlString);//实际上发了三次请求，localhost:8080——>/home——>/app.js

    switch(urlString){
      case '/':
        res.end('hello')
        break;
      case '/home':
        fs.readFile('./home.html',(err,content)=>{//fs.readFile内置模块，读取完文件内容
          res.end(content)
        })
        break;
      case '/app.js'://因为home页面请求了app.js所以需要加上
        fs.readFile('./app.js',(err,content)=>{//fs.readFile内置模块，读取完文件内容
          res.end(content)
        })
        break;
      case '/abc.png'://因为home页面请求了abc.png所以需要加上
        fs.readFile('./abc.png',(err,content)=>{//fs.readFile内置模块，读取完文件内容
          res.end(content)
        })
        break;
      default:
        res.end('page 404')
    }
  }) */

  .createServer((req,res)=>{
    
    const urlString = req.url
    // console.log(urlString);
    const type = mime.getType(urlString.split('.'[1]))
    console.log(type);//请求类型
    res.writeHead(200,{
      'content-type':type
    })
    const file = fs.readFileSync(`.${urlString}`)
    res.end(file)
  })
  .listen(8080,()=>{
    console.log('localhost:8080');
  })