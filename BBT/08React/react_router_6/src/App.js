import React from 'react'
import {NavLink,Routes,Route,Navigate} from 'react-router-dom' //新版本Routes替代Switch；Navigate替代Redirect
import About from './pages/About'
import Home from './pages/Home'

export default function App() {
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
            {/* 路由链接 */}
            <NavLink className="list-group-item" to="/about">About</NavLink>
            <NavLink className="list-group-item active" to="/home">Home</NavLink>
          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
              {/* 注册路由 */}
              {/* 新版本Routes替代Switch */}
              <Routes>
                {/* 新版本element替代component */}
                {/* caswSensitive开启路径匹配区分大小写 */}
                <Route path="/ABOUT" caswSensitive element={<About/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/" element={<Navigate to="/Home"/>}/>
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
