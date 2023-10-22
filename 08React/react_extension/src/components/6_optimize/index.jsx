// import React, { Component } from 'react'
import React, { PureComponent } from 'react' //PureComponent组件，相当于shouldComponentUpdate
import './index.css'

// export default class Parent extends Component {
export default class Parent extends PureComponent {


  state = {carName:"奔驰",stus:['小郑','小李','小王']}

  addStu = ()=>{
    /* const {stus} = this.state
    stus.unshift('小刘')
    this.setState({stus}) */
    // 因为上面的写法没有更改存储地址，所以PureComponent无法检测到

    const {stus} = this.state
    this.setState({stus:['小刘',...stus]})
  }

  changeCar = ()=>{
    this.setState({carName:'迈巴赫'})
    // this.setState({})//即使不修改状态也会render

    // 因为下面的写法没有更改存储地址，所以PureComponent无法检测到
    /* const obj = this.state
    obj.carName = '迈巴赫'
    this.setState(obj) */
  }

  /* shouldComponentUpdate(nextProps,nextState){//shouldComponentUpdate控制组件更新
    console.log(this.props,this.state); //目前的props和state
    console.log(nextProps,nextState);//接下来要变化的目标props和state
    //if(this.state.carName === nextState.carName) return false //如果状态没有变化时不刷新组件
    //else return true
    return !(this.state.carName === nextState.carNam)
  } */

  render() {
    console.log("Parent---render");
    const {carName} = this.state
    return (
      <div className="parent">
        <h3>我是Parent组件</h3>
        {this.state.stus}&nbsp;
        <span>我的车名字是：{carName}</span>
        <button onClick={this.changeCar}>点我换车</button>
        <button onClick={this.addStu}>点我增加小刘</button>
        <Child carName='奥托'/>
      </div>
    )
  }
}

class Child extends PureComponent {
  /* shouldComponentUpdate(nextProps,nextState){//shouldComponentUpdate控制组件更新
    console.log(this.props,this.state); //目前的props和state
    console.log(nextProps,nextState);//接下来要变化的目标props和state
    //if(this.props.carName === nextProps.carName) return false //如果状态没有变化时不刷新组件
    //else return true
    return !(this.props.carName === nextProps.carName)
  } */

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
