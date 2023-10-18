import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
//引入store,用于获取redux中保存状态
import store from './redux/store'

ReactDOM.render(<App/>,document.getElementById('root'))

//检测redux中状态的变化，只要变化，就调用render
store.subscribe(()=>{
  ReactDOM.render(<App/>,document.getElementById('root'))
})