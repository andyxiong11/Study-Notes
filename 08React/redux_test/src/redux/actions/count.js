/* 
  该文件专门为Count组件生成action对象
*/

import {INCREMENT,DECREMENT} from '../constant' //使用常量定义，防止写错（写错会有补全）

import store from '../store'

//同步action,就是指action的值为Object类型的一般对象
/* function createIncrementAction(data){
  return {type:'increment',date:data}
} */
// 下面是简写
export const createIncrementAction = data => ({type:INCREMENT,data})//'increment'修改为INCREMENT，使用常量定义，防止写错（写错会有补全）
export const createDecrementAction = data => ({type:DECREMENT,data})//'decrement'修改为DECREMENT，使用常量定义，防止写错（写错会有补全）

// 异步action,就是指action的值为函数,异步action中一般都会调用同步action,异步action不是必须要用的。
// 此处必须安装redux-thunk，在store.js引入
export const createIncrementAsyncAction = (data,time) => {
  return ()=>{
    setTimeout(() => {
      store.dispatch(createIncrementAction(data)) //*1将字符串转为数字
    }, time);
  }
}