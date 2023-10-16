/* 
  该文件专门为Count组件生成action对象
*/

import {INCREMENT,DECREMENT} from './constant' //使用常量定义，防止写错（写错会有补全）

/* function createIncrementAction(data){
  return {type:'increment',date:data}
} */
// 下面是简写
export const createIncrementAction = data => ({type:INCREMENT,data})//'increment'修改为INCREMENT，使用常量定义，防止写错（写错会有补全）
export const createDecrementAction = data => ({type:DECREMENT,data})//'decrement'修改为DECREMENT，使用常量定义，防止写错（写错会有补全）