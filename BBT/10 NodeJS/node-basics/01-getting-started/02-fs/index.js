// 演示使用nodejs读取文件
// 使用node index.js运行
const fs = require('fs')
//  文件名  文件内容 
fs.writeFile('./log.text','hello',(err,data)=>{
  if(err){

  }else{
    console.log('文件创建成功');
  }
})