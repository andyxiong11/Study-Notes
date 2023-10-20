//安装ES7+ React/Redux/React-Native 插件，使用rcc、rfc快速生成代码片段 
import React, { Component } from 'react'
import { NavLink,Route } from "react-router-dom";
import Home from './Home'
import About from './About'

export default class Demo extends Component {

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header"><h2>React Router Demo</h2></div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* react靠路由链接实现切换组件--编写链接路由 */}
              <NavLink className="list-group-item" to="/about">About</NavLink>
              <NavLink className="list-group-item" to="/home">Home</NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
                {/* 为了实现路由间通信，需要将Link和Route包在一起，就直接将App组件放在BrowserRouter标签中 */}
                {/* <BrowserRouter> */}
                  <Route path="/about" component={About}/>
                  <Route path="/home" component={Home}/>
                {/* </BrowserRouter> */}
              </div>
            </div>
          </div>
        </div>
      </div>  
    )
  }
}
