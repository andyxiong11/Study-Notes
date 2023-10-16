import React, { Component } from 'react'

//引入store,用于获取redux中保存状态
import store from '../../redux/store'

export default class Count extends Component {
  // state = {count:0}

  // 下面的检测redux变化可以写在index.js，因为有diff算法，不会更新一个组件导致所有组件重新渲染
  /* componentDidMount(){
    //检测redux中状态的变化，只要变化，就调用render
    store.subscribe(()=>{
      console.log('redux中状态变化');
      this.setState({})//this执行组件的实例对象 导致页面更新
    })
  } */

  // 加法
  increment = ()=>{
    const {value} = this.selectNumber
    /* const {count} = this.state
    this.setState({count:count+value*1}) //*1将字符串转为数字 */

    store.dispatch({type:'increment',data:value*1}) //*1将字符串转为数字
  }
  // 减法
  decrement = ()=>{
    const {value} = this.selectNumber
    /* const {count} = this.state
    this.setState({count:count-value*1}) */

    store.dispatch({type:'decrement',data:value*1}) //*1将字符串转为数字
  }
  // 奇数再加
  incrementIfOdd = ()=>{
    const {value} = this.selectNumber
    /* const {count} = this.state
    if(count % 2 !== 0){
      this.setState({count:count+value*1})
    } */

    const count = store.getState()
    if(count % 2 !== 0){
      store.dispatch({type:'increment',data:value*1}) //*1将字符串转为数字
    }
  }
  // 异步加
  incrementAsync = ()=>{
    const {value} = this.selectNumber
    /* const {count} = this.state
    setTimeout(() => {
      this.setState({count:count+value*1})
    }, 500); */

    setTimeout(() => {
      store.dispatch({type:'increment',data:value*1}) //*1将字符串转为数字
    }, 500);
  }
  render() {
    return (
      <div>
        {/* <h1>当前求和为：{this.state.count}</h1> */}
        <h1>当前求和为：{store.getState()}</h1>

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
