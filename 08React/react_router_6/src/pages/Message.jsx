import React,{useState} from 'react'
import { Link,Outlet,useNavigate } from 'react-router-dom'

export default function Message() {
  const [messsage] = useState([
    {id:'001',title:'消息1',content:"锄禾日当午"},
    {id:'002',title:'消息2',content:"汗滴禾下土"},
    {id:'003',title:'消息3',content:"谁知盘中餐"},
    {id:'004',title:'消息4',content:"粒粒皆辛苦"},
  ])

  const navigate = useNavigate()//useNavigate实现路由跳转，也可以配置属性
  function showDetail(m){
    navigate('detail',{
      replace:false,
      state:{
        id:m.id,
        title:m.title,
        content:m.content
      }
    })
  }

  return (
    <div>
      <ul>
        {
          messsage.map((m)=>{
            return (
              // 路由链接
              <li key = {m.id}>
                <Link to = "detail" state={{
                  id:m.id,
                  title:m.title,
                  content:m.content
                }}>{m.title}</Link>
                <button onClick={()=>showDetail(m)}>查看详情</button>
              </li>
            )
          })
        }
      </ul>
      <hr/>
      {/* 指定路由组件展示位置 */}
      <Outlet/>
    </div>
  )
}
