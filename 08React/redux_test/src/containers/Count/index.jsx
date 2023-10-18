//引入Count的UI组件
import CountUI from '../../components/Count'
// 引入action
import {createIncrementAction,createDecrementAction,createIncrementAsyncAction} from '../../redux/count_action'

//引入store，不能手动引入，需要通过App.js传入
// import store from '../../redux/store'

//引入connect用于连接UI组件与redux
import {connect} from 'react-redux'

/* 
	1.mapStateToProps函数返回的是一个对象；
	2.返回的对象中的key就作为传递给UI组件props的key,value就作为传递给UI组件props的value
	3.mapStateToProps用于传递状态
*/
function mapStateToProps(state){//redux调用mapStateToProps函数时，就传了state,直接接收使用
  // return {count:store.getState()}//redux调用mapStateToProps函数时，就传了state，不用store.getState()
  return {count:state}
}//相当于<CountUI n={900}/>

/* 
	1.mapDispatchToProps函数返回的是一个对象；
	2.返回的对象中的key就作为传递给UI组件props的key,value就作为传递给UI组件props的value
	3.mapDispatchToProps用于传递操作状态的方法
*/
function mapDispatchToProps(dispatch){//redux调用mapDispatchToProps函数时，就传了dispatch,直接接收使用
  return {jia:(number)=>{
    //通知redux执行加法
    // store.dispatch({type:'increment',data:number}) //redux调用mapDispatchToProps函数时，就传了dispatch,直接接收使用，不用store.dispatch
    // dispatch({type:'increment',data:number}) //利用count_action生成action对象，不用自己写
    dispatch(createIncrementAction(number)) 
    },
    jian: number => dispatch(createDecrementAction(number)),
    jiaAsync: (number,time) => dispatch(createIncrementAsyncAction(number,time)),
  }
}//相当于<CountUI jia={()=>{console.log(1);}}/> mapDispatchToProps函数就是给CountUI组件加了一个标签属性

//使用connect()()创建并暴露一个Count的容器组件
// TODO connect()()不懂
/* const CountContailer = connect()(CountUI)

export default CountContailer */
export default connect(mapStateToProps,mapDispatchToProps)(CountUI)