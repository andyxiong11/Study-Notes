import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    console.log("Home收到的props",this.props);
    return (
      <h3>我是Home的内容</h3>
    )
  }
}
