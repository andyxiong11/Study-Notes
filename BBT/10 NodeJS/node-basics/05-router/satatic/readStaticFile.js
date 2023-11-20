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
        reject('你访问的是一个文件夹，且文件夹没有index.html')
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
  let mimeType = mime.getType(ext) //获取文件类型
  console.log("mimeType:"+mimeType);

  let data
  if(fs.existsSync(filePathName)){//fs.existsSync判断文件或文件夹是否存在
    if(ext){//判断是否文件
      // data = myReadFile(filePathName)
      // 因为报错，需要改造成异步写法

      // myReadFile(filePathName)
      //   .then(result => data = result)
      //   .catch((err)=> data = err)
      // 因为取不到data，所以需要使用async await

      data  = await myReadFile(filePathName)
    }else{//目录
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