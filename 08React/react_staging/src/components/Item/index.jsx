import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

  state = {mouse:false}

  handleMouse = (flag) => {
    return ()=>{// 调用时传了参数，返回值必须是函数
      this.setState = ({mouse:flag})
    }
  }
  render() {
    const {name,done} = this.props
    const {mouse} = this.state
    return (
      // onMouseEnter鼠标移入事件 onmouseleave鼠标移出事件
      <li style={{backgroundColor:mouse ? '#ddd' : 'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
        <label>
          {/* <input type="checkbox" checked={done}/> */}
          {/* 使用defaultChecked 可以修改默认勾选 */}
          <input type="checkbox" defaultChecked={done}/>
          <span>{name}</span>
        </label>
        <button className="btn btn-danger" style={{display:mouse?'block':'none'}}>删除</button>
      </li>
    )
  }
}
