import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import './index.css'

export default class Header extends Component {

  handleKeyUp = (event)=>{
    // 解构赋值获取keyCode,target
    const {keyCode,target} = event
    // 判断是否回车
    if(keyCode !== 13) return
    // event.target.value 输入框输入的内容
    // event.keyCode 按下的按键
    //console.log(target.value,keyCode);

    // 添加的todo名字不能为空
    if(target.value.trim() === ''){//trim方法 去空格
      alert('输入不能为空')
      return //否则会继续执行
    }
    
    // 准备好一个todo对象
    const todoObj = {id:nanoid(),name:target.value,done:false}
    
    // 将todoObj传给App
    //this.props.addTodo(target.value)
    this.props.addTodo(todoObj)

    // 清空输入框
    target.value = ''
  }

  render() {
    return (
      <div className="todo-header">
        {/* onKeyUp键盘按键离开时触发事件 */}
        <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
      </div>
    )
  }
}
