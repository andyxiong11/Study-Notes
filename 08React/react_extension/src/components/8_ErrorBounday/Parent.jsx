import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {
  render() {
    return (
      <div>
        <h2>我是Parent组件</h2>
        <Child/>
      </div>
    )
  }
}
