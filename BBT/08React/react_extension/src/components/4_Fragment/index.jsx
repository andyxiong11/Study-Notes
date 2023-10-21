import React, { Component,Fragment } from 'react'

export default class Demo extends Component {
  render() {
    return (
      // 也可以使用<></>替代，但是不能接收key
      <Fragment key={1}>
        <input type='text'></input>
        <input type='text'></input>
      </Fragment>
    )
  }
}
