import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {

  state = {
    hasError:""//用于表示子组件是否产生错误
  }

  // 当Parent的子组件出现报错时候，会触发getDerivedStateFromError调用，并携带错误信息
  static getDerivedStateFromError(error){//getDerivedStateFromError只在生产环境有效，需要打包部署后使用
    console.log(error);
    return {hasError:error}
  }

  componentDidCatch(){
    console.log('此处统计错误，反馈给服务器，用于通知编码人员进行ug的解决');
  }

  render() {
    return (
      <div>
        <h2>我是Parent组件</h2>
        {this.state.hasError ? <h2>网络不稳定，请稍后再试</h2> : <Child/>}
      </div>
    )
  }
}
