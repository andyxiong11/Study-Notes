import React from 'react'
import {useLocation} from 'react-router-dom'

export default function Detail() {
  const {state:{id,title,content}} = useLocation()//对象的连续解构赋值
  return (
    <div>
      <ul>
        <li>消息编号：{id}</li>
        <li>消息标题：{title}</li>
        <li>消息内容：{content}</li>
      </ul>
    </div>
  )
}
