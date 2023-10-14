import React, { Component } from 'react'
import qs from 'qs' //也可以安装querysrting npm i -save-dev query-srting，import QueryString from 'query-string'

const DetailData = [
  {id:'001',content:'消息1'},
  {id:'002',content:'消息2'},
  {id:'003',content:'消息3'},
]
export default class Detail extends Component {
  render() {
    console.log(this.props);
    // 接收params参数
    // const {id,title} = this.props.match.params 

    //接收search参数
    const {search} = this.props.location
    const {id,title} = qs.parse(search.slice(1))//.slice为了去除search前面的“？”；qs.parse将search分割为对象

    const findResult = DetailData.find((detailObj)=>{
      return detailObj.id === id
    })
    return (
      <ul>
        <li>
          ID:{id}
        </li>
        <li>
          TITLE:{title}
        </li>
        <li>
          CONTENT:{findResult.content}
        </li>
      </ul>
    )
  }
}
