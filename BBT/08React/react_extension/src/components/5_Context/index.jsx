import React, { Component } from 'react'
import './index.css'

// 创建 Context对象
const MyContext = React.createContext()
const {Provider,Consumer} = MyContext

export default class A extends Component {

  state = {username:'tom',age:18}

  render() {
    const {username,age} = this.state
    return (
      <div className="parent">
        <h3>我是A组件</h3>
				<h4>我的用户名是:{username}</h4>
        {/* <MyContext.Provider></MyContext.Provider> */}
        {/* 传的参数只能用value */}
				<Provider value={{username,age}}>
          <B/>
        </Provider>
      </div>
    )
  }
}

class B extends Component {
  render() {
    console.log("B",this.context);//没有声明无法接收context
    return (
      <div className="child">
        <h3>我是B组件</h3>
				<C/>
      </div>
    )
  }
}

/* class C extends Component {
  //声明接收context
	static contextType = MyContext

  render() {
    console.log(this.context);
    const {username,age} = this.context
    return (
      <div className="grand">
        <h3>我是C组件</h3>
				<h4>我从A组件接收到的用户名：{username}，年龄是{age}</h4>
      </div>
    )
  }
} */

function C() {
  return (
    <div className="grand">
      
      <h3>我是C组件</h3>
      <h4>我从A组件接收到的用户名：
        {/* <MyContext.Consumer></MyContext.Consumer> */}
        <Consumer>
          {
            value => {
              console.log(value);//传的数据
              return `${value.username},年龄是${value.age}`//也可以写标签元素
            }
          }
        </Consumer>
      </h4>
    </div>
  )
}