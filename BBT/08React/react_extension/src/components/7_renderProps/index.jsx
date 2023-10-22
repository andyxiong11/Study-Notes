import React, { Component } from 'react'
import './index.css'
import C from '../1_setState'

export default class Parent extends Component {
  render() {
    return (
      <div className='parent'>
        <h3>我是Parent组件</h3>
        {/* <A>hello!</A>
        // 下面相当于在A组件里面写B组件，但是下面的方法需要在A组件写this.props.children
        <A>
          <B/>
        </A> */}

        <A render={(name)=><B name={name}/>}/>
        <A render={(name)=><C name={name}/>}/>
      </div>
    )
  }
}

class A extends Component {
  render() {
    console.log(this.props);
    const name = this.state
    return (
      <div className='a'>
        <h3>我是A组件</h3>
        {/* 下面的写法让<A>hello!</A>、<A><B/></A>生效 */}
        {/* {this.props.children}  */}
        
        {/* 下面的写法可以在Parent组件随意控制展示的组件（获取render返回的内容} */}
        {this.props.render(name)}
      </div>
    )
  }
}

class B extends Component {
  render() {
    return (
      <div className='b'>
        <h3>我是B组件</h3>
      </div>
    )
  }
}
