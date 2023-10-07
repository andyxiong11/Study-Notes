import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

  state = {mouse:false} //鼠标移入移出状态

  //鼠标移入移出的回调
  handleMouse = (flag) => {
    return ()=>{// 调用时传了参数，返回值必须是函数
      this.setState({mouse:flag})
    }
  }

  //勾选取消勾选的回调
  handleCheck = (id)=>{
    return (event)=>{
      //console.log(id,event.target.checked);//checked 勾选状态

      this.props.updateTodo(id,event.target.checked)
    }
  }

  //删除一个todo的回调
  handleDelete = (id)=>{
    console.log('通知App删除',id);
    if(window.confirm('确定删除吗？')){//window.confirm 原生事件，必须加window.
      this.props.deleteTodo(id)
    }
  }

  render() {
    const {id,name,done} = this.props
    const {mouse} = this.state
    return (
      // onMouseEnter鼠标移入事件 onmouseleave鼠标移出事件
      <li style={{backgroundColor:mouse ? '#ddd' : 'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
        <label>
          {/* <input type="checkbox" checked={done}/> */}
          {/* 使用defaultChecked 可以修改默认勾选 */}
          {/* onChange 选择事件 */}
          {/* 后续将defaultChecked改为checked，因为点击全选时无法修改勾选框 */}
          <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/> 
          <span>{name}</span>
        </label>
        {/* <button className="btn btn-danger" style={{display:mouse?'block':'none'}}>删除</button> */}
        {/* <button onClick={this.handleDelete(id)} className="btn btn-danger" style={{display:mouse?'block':'none'}}>删除</button> */}
        {/* 按照下面的写法，handleDelete就不用返回函数 */}
        <button onClick={() => this.handleDelete(id)} className="btn btn-danger" style={{display:mouse?'block':'none'}}>删除</button>
      </li>
    )
  }
}
