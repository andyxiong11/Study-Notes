// 演示自定义模块
//node index.js

/* const _ = require('lodash')
let arr = [4,5,6,7]
let arr2 = _.chunk(arr,2)//lodash模块的chunk方法
console.log(arr2); */

function myChunk(arr){
  let arr2 = _.chunk(arr,2)
  return arr2
}

modules.exports = myChunk