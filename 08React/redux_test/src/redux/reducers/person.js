import { ADD_PERSON } from "../constant"

// 初始化人的列表
const initState = [{id:'001',name:"tom",age:18}]

export default function personReducer(preState=initState,action){//第一次调用preState为undefined，需要初始化
  const {type,data} = action
  switch(type){
    case ADD_PERSON://若是添加一个人
      // preState.unshift(data) //此处不可以这样写，这样会导致preState被改写了，personReducer就不是纯函数
      // console.log(preState);
      // return preState//redux认为返回的preState与转入的preState存储地址一样，所以不会更新页面数据
      return [data,...preState]
    default:
      return preState
  }
}