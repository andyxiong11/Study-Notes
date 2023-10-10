//引入react核心库
import React from 'react'
//引入ReactDOM
import ReactDOM from 'react-dom'
import { HashRouter } from "react-router-dom";
//引入App组件
import App from './App'

//渲染APP到页面
ReactDOM.render(
  // 如果是使用HashRouter,会多出一个#，且#后面的内容不会发送给服务器
  <HashRouter>
    <App/>
  </HashRouter>
  ,document.getElementById('root'))