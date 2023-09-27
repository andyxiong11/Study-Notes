//创建“外壳”组件App
import React,{Component} from'react' //{Component}不是解构赋值，而是React上有分别暴露Component
import Hello from './components/Hello/Hello'
import Welcome from './components/Welcome/Welcome'

//创建并暴露App组件
//class App extends React.Component{
//class App extends Component{
export default class App extends Component{//引入了{Component}，可以替代React.Component
  render() {
    return (
      <div>
        <Hello/>
        <Welcome/>
      </div>
    )
  }
}

//暴露App组件
// export default App