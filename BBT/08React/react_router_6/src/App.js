import React from 'react'
import {NavLink,useRoutes} from 'react-router-dom' //新版本Routes替代Switch；Navigate替代Redirect
import routes from './routes'
import Header from './components/Header'

export default function App() {
  // 根据路由表生成对应的规则
  const element = useRoutes(routes)
  return (
    <div>
      <div className="row">
        <Header/>
      </div>
      <div className="row">
        <div className="col-xs-2 col-xs-offset-2">
          <div className="list-group">
            {/* 路由链接 */}
            <NavLink className="list-group-item" to="/about">About</NavLink>
            {/* end 子级路由匹配上，父级路由不高亮 */}
            <NavLink className="list-group-item" end to="/home">Home</NavLink>
          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
              {/* 注册路由 */}
              {/* 路由表替代Routes */}
              {element}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) 
}
