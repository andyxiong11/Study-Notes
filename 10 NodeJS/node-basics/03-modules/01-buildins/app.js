//node app.js 运行
// 演示NodeJS内置模块
const path = require('path')//NodeJS内置的path模块

console.log(__dirname);//__dirname 当前文件物理路径
console.log(path.resolve(__dirname,'../'));//当前文件上一级物理路径