/* 
  该文件专门为Count组件生成action对象
*/

function createIncrementAction(data){
  return {type:'increment',date:data}
}

const createDecrementAction = data => ({type:'decrement',date})