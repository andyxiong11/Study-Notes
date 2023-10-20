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