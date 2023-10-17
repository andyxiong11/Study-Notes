import React, { Component } from 'react'

export default class Count extends Component {

  // 加法
  increment = ()=>{
    const {value} = this.selectNumber
  }
  // 减法
  decrement = ()=>{
    const {value} = this.selectNumber
  }
  // 奇数再加
  incrementIfOdd = ()=>{
    const {value} = this.selectNumber
  }
  // 异步加
  incrementAsync = ()=>{
    const {value} = this.selectNumber
  }
  render() {
    return (
      <div>
        <h1>当前求和为：???</h1>

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
