import React, { Component } from 'react'

// 引入action
import {createIncrementAction,createDecrementAction,createIncrementAsyncAction} from '../../redux/actions/count'

//引入connect用于连接UI组件与redux
import {connect} from 'react-redux'

// 定义UI组件
class Count extends Component {

  // 加法
  increment = ()=>{
    const {value} = this.selectNumber
    this.props.jia(value*1) //value*1 将字符转为数字
  }
  // 减法
  decrement = ()=>{
    const {value} = this.selectNumber
    this.props.jian(value*1) //value*1 将字符转为数字
  }
  // 奇数再加
  incrementIfOdd = ()=>{
    const {value} = this.selectNumber
    if(this.props.count % 2 !== 0){
      this.props.jia(value*1) //value*1 将字符转为数字
    }
  }
  // 异步加
  incrementAsync = ()=>{
    const {value} = this.selectNumber
    this.props.jiaAsync(value*1,500) //value*1 将字符转为数字
  }
  render() {
    console.log('UI组件接收到的props是',this.props);
    return (
      <div>
        <h2>我是count组件,下方组件总人数为{this.props.renshu}</h2>
        <h4>当前求和为：{this.props.count}</h4>

        {/* ref 用于取当前元素，c代指当前DOM节点 */}
        <select ref={c => this.selectNumber = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>
      </div>
    )
  }
}

//使用connect()()创建并暴露一个Count的容器组件
export default connect(
  //映射状态
  state => ({count:state.he,renshu:state.rens.length}),

  //映射操作状态的方法
  //mapDispatchToProps的简写
  {
    jia: createIncrementAction,//react-redux会自动调用dispatch
    jian: createDecrementAction,//react-redux会自动调用dispatch
    jiaAsync: createIncrementAsyncAction,
  }
)(Count)