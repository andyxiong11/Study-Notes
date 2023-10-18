import React, { Component } from 'react'
// import store from './redux/store'
import Count from './containers/Count'

export default class App extends Component {
  render() {
    return (
      <div>
        {/* 给容器组件传递store */}
        {/* <Count store={store}/> */}
        {/* index.js中Provider会给App组件下面的所有组件传递store，无需在每个组件传递store */}
        <Count/> 
      </div>
    )
  }
}
