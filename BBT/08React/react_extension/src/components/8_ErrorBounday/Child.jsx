import React, { Component } from 'react'

export default class Child extends Component {
  state = {
    /* user:[
      {id:'001',name:'tom',age:18},
      {id:'002',name:'jack',age:19},
      {id:'003',name:'tom',age:20},
    ] */
    user:"1"
  }
  render() {
    return (
      <div>
        <h2>我是Child组件</h2>
        {
          this.state.user.map((uesrObj)=>{
            return <h4 key={uesrObj.id}>{uesrObj.name}---{uesrObj.age}</h4>
          })
        }
      </div>
    )
  }
}
