//引入Count的UI组件
import CountUI from '../../components/Count'

//引入store，不能手动引入，需要通过App.js传入
// import store from '../../redux/store'

//引入connect用于连接UI组件与redux
import {connect} from 'react-redux'

// a函数返回的对象中的key就作为传递给UI组件props的key,value就作为传递给UI组件props的value——状态
function a(state){//redux调用a函数时，就传了state,直接接收使用
  // return {count:store.getState()}//redux调用a函数时，就传了state，不用store.getState()
  return {count:state}
}//相当于<CountUI n={900}/>

// b函数返回的对象中的key就作为传递给UI组件props的key,value就作为传递给UI组件props的value——操作状态的方法
function b(){
  return {jia:()=>{console.log(1);}}
}//相当于<CountUI jia={()=>{console.log(1);}}/>

//使用connect()()创建并暴露一个Count的容器组件
// TODO connect()()不懂
/* const CountContailer = connect()(CountUI)

export default CountContailer */
export default connect(a,b)(CountUI)