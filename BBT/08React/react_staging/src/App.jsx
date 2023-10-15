//安装ES7+ React/Redux/React-Native 插件，使用rcc、rfc快速生成代码片段 
import React, { Component } from 'react'
import { Button,DatePicker } from 'antd'
// import 'antd/dist/reset.css' //antd5不需要引入css样式表
import { WechatOutlined,WeiboOutlined,SearchOutlined } from '@ant-design/icons' //antd图标库
const { RangePicker } = DatePicker

export default class App extends Component {
  render() {
    return (
      <div>
        App...
        <button>点击</button>
        <Button type="primary">按钮1</Button>
        <Button>按钮2</Button>
        <Button type="link">按钮3</Button>
        <Button type="primary" icon={<SearchOutlined/>}>
          Search
        </Button>
        <WechatOutlined/>
        <WeiboOutlined/>
        <DatePicker/>
        <RangePicker/>
      </div>  
    )
  }
}
