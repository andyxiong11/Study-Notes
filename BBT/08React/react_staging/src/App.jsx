//安装ES7+ React/Redux/React-Native 插件，使用rcc、rfc快速生成代码片段 
import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
  getStudentData = ()=>{
    // 在package.json配置代理后就不能发到端口为5000，需要发到3000，不然还是跨域。且优先会在本地寻找是否存在该路径
    axios.get('http://localhost:3000/students').then(
      response => {console.log('成功了',response.data);},
      error => {console.log('失败了',error);}
    )
  }
  render() {
    return (
      <div>
        <button onClick={this.getStudentData}>点我获取学生数据</button>
      </div>
    )
  }
}
