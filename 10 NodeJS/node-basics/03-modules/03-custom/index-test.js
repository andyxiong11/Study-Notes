// 测试自定义模块，最终上传包需删除此文件
//node index-test.js

const myChunk = require('./index.js')

console.log(myChunk([4,5,6,7]));