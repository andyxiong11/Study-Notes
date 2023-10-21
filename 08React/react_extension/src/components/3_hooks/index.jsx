import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// 类式组件
/* export default class Demo extends Component {
  state = {count:0}
  myRef = React.createRef()
  add = ()=>{
    this.setState(state=>({count:state.count+1}))
  }
  unmount = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  }
  show = ()=>{
    alert(this.myRef.current.value)
  }
  componentDidMount(){
    this.timer = setInterval(() => {
      this.setState(state => ({count:state.count+1}))
    }, 1000);
  }
  componentWillUnmount(){
    clearInterval(this.timer)
  }
  render() {
    return (
      <div>
        <input type='text' ref={this.myRef}/>
        <h1>当前求和为：{this.state.count}</h1>
        <button onClick={this.add}>点我+1</button>
        <button onClick={this.unmount}>卸载组件</button>
        <button onClick={this.show}>点我提示数据</button>
      </div>
    )
  }
} */

// 函数式组件
function Demo() {

  // 下面只有第一次会调，后面不会再执行
  const [count,setCount] = React.useState(0)//初始化count为0，setCount是修改状态的方法
  const [name,setName] = React.useState('tom')
  // console.log(count,setCount);
  const myRef = React.useRef()//useRef相当于createRef
  
  React.useEffect(()=>{//useEffect相当于render
    console.log("@");
    let timer = setInterval(() => {
      setCount(count => count+1)
    }, 1000);
    return ()=>{
      console.log("##");
      clearInterval(timer)
    }//useEffect返回的函数相当于componentWillUnmount
  },[])//如果不写第二个参数([count,name])，则任何一个状态改变都执行useEffect，相当于componentDidUpdate;如果写空数组，则不监视任何状态，只在第一次render后执行，相当于componentDidMount

  // 加的回调
  function add() {
    // setCount(count+1)//第一种写法
    setCount(count => count+1)
  }
  // 修改姓名的回调
  function changeName() {
    setName('jack')
  }
  // 提示输入的回调
  function show() {
    alert(myRef.current.value)
  }
  // 卸载组件的回调
  function unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  }

  return (
    <div>
      <input type='text' ref={myRef}/>
      <h1>当前求和为：{count}</h1>
      <h1>我的名字是：{name}</h1>
      <button onClick={add}>点我+1</button>
      <button onClick={changeName}>点我修改姓名</button>
      <button onClick={unmount}>卸载组件</button>
      <button onClick={show}>点我提示数据</button>
    </div>
  )
}
export default Demo