//安装ES7+ React/Redux/React-Native 插件，使用rcc、rfc快速生成代码片段 
import React, { Component } from 'react'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <div className="todo-header">
            <input type="text" placeholder="请输入你的任务名称，按回车键确认"/>
          </div>
          <ul className="todo-main">
            <li>
              <label>
                <input type="checkbox"/>
                <span>xxxxx</span>
              </label>
              <button className="btn btn-danger" style={{display:'none'}}>删除</button>
            </li>
            <li>
              <label>
                <input type="checkbox"/>
                <span>yyyy</span>
              </label>
              <button className="btn btn-danger" style={{display:'none'}}>删除</button>
            </li>
          </ul>
          <div className="todo-footer">
            <label>
              <input type="checkbox"/>
            </label>
            <span>
              <span>已完成0</span> / 全部2
            </span>
            <button className="btn btn-danger">清除已完成任务</button>
          </div>
        </div>
      </div>
    )
  }
}
