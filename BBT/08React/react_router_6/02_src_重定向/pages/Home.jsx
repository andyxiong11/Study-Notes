import React,{useState} from 'react'
import {Navigate} from 'react-router-dom'

export default function Home() {
  const [sum,setSum] = useState(1)//sum初始值为1，修改sum的方法是setSum
  return (
    <div>
      <h3>我是Home的内容</h3>
      {/* replace 控制是否浏览器可以返回(历史记录push模式) */}
      {sum === 2 ? <Navigate to="/about" replace={true}/> : <h4>当前的sum值是：{sum}</h4>}
      {/* 防止函数立即执行，写成回调函数 */}
      <button onClick={()=>setSum(2)}>点我将sum变为2</button>
    </div>
  )
}
