/* 
  该文件专门用于暴露一个store对象，整个应用只有一个store对象
*/

//引入createStore,专门用于创建redux中最核心的store对象
import {createStore} from 'redux' //createStore 新版被弃用
import {legacy_createStore,applyMiddleware} from 'redux'
//引入为Count组件服务的reducer
import countReducer from './reducers/count'

//引入redux-thunk,用于支持异步action
import thunk from 'redux-thunk'

// 暴露store
/* const store = legacy_createStore(countReducer)

export default store */
export default legacy_createStore(countReducer,applyMiddleware(thunk))