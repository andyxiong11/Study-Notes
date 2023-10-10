//安装ES7+ React/Redux/React-Native 插件，使用rcc、rfc快速生成代码片段 
import React, { Component } from 'react'
import { Link,BrowserRouter,Route,NavLink,Switch } from "react-router-dom";
import Home from './pages/Home'//路由组件
import About from './pages/About'//路由组件
import Header from "./components/Header"//一般组件
import MyNavLink from './components/MyNavLink';

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
              <MyNavLink to="/about">About</MyNavLink>
              <MyNavLink to="/home">Home</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* Switch组件会将已匹配到的路由组件就不再继续匹配，一个路由只对应展示一个组件 */}
                <Switch>
                  <Route path="/about" component={About}/>
                  <Route path="/home" component={Home}/>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>  
    )
  }
}
