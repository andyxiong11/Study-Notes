import React from 'react'
import { useParams,useMatch } from 'react-router-dom'

export default function Detail() {
  const {id,title,content} = useParams()//useParams返回父组件传的所有参数
  const x = useMatch('/home/message/detail/:id/:title/:content')
  console.log(x.params);//useMatch相当于类式组件的this.props.match.params，用起来不如useParams方便
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
