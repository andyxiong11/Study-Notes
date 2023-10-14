import React, { Component } from 'react'
import {Route,Switch,Redirect} from "react-router-dom"
import MyNavLink from '../../components/MyNavLink'
import News from './News'
import Message from './Message';

export default class Home extends Component {
  render() {
    console.log("Home收到的props",this.props);
    return (
      <div>
        <h3>我是Home的内容</h3>
        <div>
          <ul className="nav nav-tabs">
            <li>
              {/* 如果不加/home，因为路由匹配先匹配上一级app.js，匹配不到/news，直接重定向Redirect */}
              {/* 模糊匹配到了/home，接着挂载Home组件，匹配/home/news */}
              <MyNavLink replace to="/home/news">News</MyNavLink>
            </li>
            <li>
              <MyNavLink replace to="/home/message">Message</MyNavLink>
            </li>
          </ul>
          {/* 注册路由 */}
          <Switch>
            <Route path="/home/news" component={News}/>
            <Route path="/home/message" component={Message}/>
            <Redirect to="/home/news"></Redirect>
          </Switch>
        </div>
      </div>
    )
  }
}
