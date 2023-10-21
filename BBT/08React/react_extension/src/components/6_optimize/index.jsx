import React, { Component } from 'react'
import './index.css'

export default class Parent extends Component {

  state = {carName:"奔驰"}

  changeCar = ()=>{
    this.setState({carName:'迈巴赫'})
    // this.setState({})//即使不修改状态也会render
  }

  shouldComponentUpdate(nextProps,nextState){//shouldComponentUpdate控制组件更新
    console.log(this.props,this.state); //目前的props和state
    console.log(nextProps,nextState);//接下来要变化的目标props和state
    if(this.state.carName === nextState.carName) return false
    else return true
  }

  render() {
    console.log("Parent---render");
    const {carName} = this.state
    return (
      <div className="parent">
        <h3>我是Parent组件</h3>
        <span>我的车名字是：{carName}</span>
        <button onClick={this.changeCar}>点我换车</button>
        <Child carName={carName}/>
      </div>
    )
  }
}

class Child extends Component {
  shouldComponentUpdate(nextProps,nextState){//shouldComponentUpdate控制组件更新
    console.log(this.props,this.state); //目前的props和state
    console.log(nextProps,nextState);//接下来要变化的目标props和state
    if(this.state.carName === nextState.carName) return false
    else return true
  }

  render() {
    console.log("Child---render");
    return (
      <div className="child">
        <h3>我是Child组件</h3>
        <span>我接到的车是：{this.props.carName}</span>
      </div>
    )
  }
}
