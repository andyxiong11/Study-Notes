//安装ES7+ React/Redux/React-Native 插件，使用rcc、rfc快速生成代码片段 
import React, { Component } from 'react'
import { Link,BrowserRouter,Route,NavLink } from "react-router-dom";
import Home from './pages/Home'//路由组件
import About from './pages/About'//路由组件
import Header from "./components/Header"//一般组件

export default class App extends Component {

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <Header/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 刚好NavLink组件的作用默认是点击就加一个active样式，而bootstrap也有一个active样式 */}
              {/* <NavLink className="list-group-item" to="/about">About</NavLink>
              <NavLink className="list-group-item" to="/home">Home</NavLink> */}
              <NavLink activeClassName="atguanggu" className="list-group-item" to="/about">About</NavLink>
              <NavLink activeClassName="atguanggu" className="list-group-item" to="/home">Home</NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Route path="/about" component={About}/>
                <Route path="/home" component={Home}/>
              </div>
            </div>
          </div>
        </div>
      </div>  
    )
  }
}
