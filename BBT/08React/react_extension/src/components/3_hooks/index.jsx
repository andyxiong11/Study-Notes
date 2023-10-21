import React, { Component } from 'react'


// 类式组件
/* export default class Demo extends Component {
  state = {count:0}
  add = ()=>{
    this.setState(state=>({count:state.count+1}))
  }
  render() {
    return (
      <div>
        <h1>当前求和为：{this.state.count}</h1>
        <button onClick={this.add}>点我+1</button>
      </div>
    )
  }
} */

// 函数式组件
function Demo() {

  // 下面只有第一次会调，后面不会再执行
  const [count,setCount] = React.useState(0)//初始化count为0，setCount是修改状态的方法
  const [name,setName] = React.useState('tom')
  // console.log(count,setCount);

  function add() {
    // setCount(count+1)//第一种写法
    setCount(count => count+1)
  }
  function changeName() {
    setName('jack')
  }

  return (
    <div>
      <h1>当前求和为：{count}</h1>
      <h1>我的名字是：{name}</h1>
      <button onClick={add}>点我+1</button>
      <button onClick={changeName}>点我修改姓名</button>
    </div>
  )
}
export default Demo