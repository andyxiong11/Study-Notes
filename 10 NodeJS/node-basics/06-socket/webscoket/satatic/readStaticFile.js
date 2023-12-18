const path = require('path')
const mime = require('mime')
const fs = require('fs')

function myReadFile(file){
  /* fs.readFile(file,(err,data)=>{
    if(err){
      return '你访问的是一个文件夹，且文件夹没有index.html'
    }else{
      return data
    }
  }) */
  // 因为报错，需要改造成异步写法

  return new Promise((resolve,reject)=>{
    fs.readFile(file,(err,data)=>{
      if(err){
        // reject('你访问的是一个文件夹，且文件夹没有index.html')
        resolve('你访问的是一个文件夹，且文件夹没有index.html')//使用resolve为了返回数据给data
      }else{
        resolve(data)
      }
    })
  })
}

async function readStaticFile(filePathName){
  // return 'hello'

  let ext = path.parse(filePathName).ext//获取文件扩展名
  console.log("filePathName:"+filePathName);
  let mimeType = mime.getType(ext) || 'text/html' //获取文件类型，'text/html' 防止访问目录时打印到页面上乱码
  console.log("mimeType:"+mimeType);

  let data
  if(fs.existsSync(filePathName)){//fs.existsSync判断文件或文件夹是否存在
    if(ext){//判断有无扩展名，以此判断是否是文件
      // data = myReadFile(filePathName)
      // 因为报错，需要改造成异步写法

      // myReadFile(filePathName)
      //   .then(result => data = result)
      //   .catch((err)=> data = err)
      // 因为取不到data，所以需要使用async await

      data  = await myReadFile(filePathName)
    }else{//是目录，不是文件
      // data = myReadFile(path.join(filePathName,'./index.html'),res)
      // 因为报错，需要改造成异步写法
      
      // myReadFile(path.join(filePathName,'./index.html'))
      //  .then(result => data = result)
      //  .catch((err)=> data = err)
      // 因为取不到data，所以需要使用async await

      data  = await myReadFile(path.join(filePathName,'/index.html'))
    } 
  }else{
     data = 'file not found'
  }

  return {
    data,
    mimeType
    
  }
}

module.exports = readStaticFile