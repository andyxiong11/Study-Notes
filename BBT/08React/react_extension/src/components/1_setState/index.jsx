import React, { Component } from 'react'

export default class Demo extends Component {
  state= {count:0}

  add = ()=>{
    //对象式的setState
    /* //1.获取原来的count值
    const {count} = this.state
    //2.更新状态
    this.setState({count:count+1},()=>{
      console.log('12行的输出',this.state.count)//该函数在状态更新完毕、界面也更新后(render调用后)才被调用，可以看到最新的count
    })
    //console.log('12行的输出',this.state.count);//setState是同步执行，但是状态的更改是异步的，此时count不会马上更新 */
  
    //函数式的setState
    // this.setState(state=>({count:state.count+1}))
    this.setState((state,props)=>{
      console.log(state,props);
      return {count:state.count+props.x}
    })
  }

  render() {
    return (
      <div>
        <h1>当前求和为：{this.state.count}</h1>
        <button onClick={this.add}>点我+1</button>
      </div>
    )
  }
}
