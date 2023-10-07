import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
  // 全选checkbox的回调
  handleCheckAll = (event) => {
    // 全选框为勾选还是反选
    this.props.checkAllTodo(event.target.checked)
  }

  // 清除已完成任务的回调
  handleClearAllDone = () => {
    this.props.clearAllDone()
  }
  render() {
    const {todos} = this.props
    //TODO reduce统计 已完成的个数 
    // todo.done为真就+1
    // const doneCount = todos.reduce((pre,todo) => {return pre + (todo.done ? 1 : 0) },0)
    // 下面是简写
    const doneCount = todos.reduce((pre,todo) => pre + (todo.done ? 1 : 0),0)

    // 总数
    const  total = todos.length
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" onChange={this.handleCheckAll}  checked = {doneCount === total && total !== 0 ? true : false}/>
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{total}
        </span>
        <button onClick={this.handleClearAllDone} className="btn btn-danger">清除已完成任务</button>
      </div>
    )
  }
}
