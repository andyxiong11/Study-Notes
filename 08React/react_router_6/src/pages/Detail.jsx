import React from 'react'
import {useSearchParams,useLocation} from 'react-router-dom'

export default function Detail() {
  const [search,setSearch] = useSearchParams()//useSearchParams返回一个数组，类似setState
  const id = search.get('id')//通过get方法取传参
  const title = search.get('title')//通过get方法取传参
  const content = search.get('content')//通过get方法取传参
  const x = useLocation()
  console.log(x);//useLocation相当于类式组件的this.props.location.searchs，用起来不如useSearchParams方便
  return (
    <div>
      <ul>
        <li>
          {/* setSearch更新search */}
          <button onClick={()=>setSearch('id=001&title=消息1&content=锄禾日当午')}>点我更新收到的参数</button>
        </li>
        <li>消息编号：{id}</li>
        <li>消息标题：{title}</li>
        <li>消息内容：{content}</li>
      </ul>
    </div>
  )
}
