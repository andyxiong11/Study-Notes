import React from 'react'
import {NavLink,Routes,Route,Navigate} from 'react-router-dom' //新版本Routes替代Switch；Navigate替代Redirect
import About from './pages/About'
import Home from './pages/Home'

export default function App() {
  function computedClassName({isActive}) {
    return isActive ? "list-group-item atguanggu" : "list-group-item"
  }
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
            {/* <NavLink activeClassNmae = "atguanggu" className="list-group-item" to="/about">About</NavLink> */}
            {/* 上面是reactRoute5的写法 */}
            {/* reactRoute6使用函数，a是一个对象，其中有isActive属性，路由匹配上则为true */}
            {/* <NavLink className={(a)=>{console.log(a);}} to="/about">About</NavLink> */}
            <NavLink className={(isActive)=> isActive ? "list-group-item atguanggu" : "list-group-item"} to="/about">About</NavLink>
            <NavLink className={computedClassName} to="/home">Home</NavLink>
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
