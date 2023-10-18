import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
//引入store,用于获取redux中保存状态
import store from './redux/store'
import {Provider} from 'react-redux'

ReactDOM.render(
  // Provider 会给App组件下面的所有组件传递store，无需在每个组件传递store
  <Provider store ={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)

/* //检测redux中状态的变化，只要变化，就调用render
store.subscribe(()=>{
  ReactDOM.render(<App/>,document.getElementById('root'))
}) */ //react-redux会自动检测状态的变化，不需要store.subscribe