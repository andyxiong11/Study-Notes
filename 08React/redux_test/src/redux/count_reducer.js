/* 
  1.该文件是用于创建一个为Count组件服务的reducer,reducer的本质就是一个函数
  2.reduceri函数会接到两个参数，分别为：之前的状态(preState),动作对象(action)
*/

const initState = 0//形参默认值的写法，初始化时preState为undefined
export default function countReducer(preState=initState,action){

  console.log(preState,action);

  // if(preState === undefined) preState = 0 //不使用形参默认值，判断初始化时preState为undefined
  
  //从action.对象中获取：type、data
  const {type,data} = action  // 取出操作和数值
  //根据type决定如何加工数据
  switch (type) {
    case 'increment':
      return preState + data
    case 'decrement':
      return preState - data
    default://reducer初始化时执行
      return preState
  }
}