//安装ES7+ React/Redux/React-Native 插件，使用rcc、rfc快速生成代码片段 
import React, { Component } from 'react'
import { Link,BrowserRouter,Route } from "react-router-dom";
import Home from './components/Home'
import About from './components/About'

export default class App extends Component {

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
              {/* 原生html靠<a>跳转不同的页面 */}
              {/* <a className="list-group-item active" href="./about.html">About</a>
              <a className="list-group-item" href="./home.html">Home</a> */}

              {/* react靠路由链接实现切换组件--编写链接路由 */}
              {/* 操作历史记录路由有两种方式createBrowserHistory和createHashHistory，详见BBT\08React\react_staging\前端路由的基石_history.html */}
              {/* 为了实现路由间通信，需要将Link和Route包在一起，就直接将App组件放在BrowserRouter标签中 */}
              {/* <BrowserRouter> */}
                <Link className="list-group-item active" to="/about">About</Link>
                <Link className="list-group-item" to="/home">Home</Link>
              {/* </BrowserRouter> */}
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
