import React, { Component } from 'react'
import {nanoid} from 'nanoid'

export default class Person extends Component {

  addPerson= ()=>{
    const name = this.nameNode.value
    const age = this.ageNode.value
    //console.log(name,age);
    const personObj = {id:nanoid(),name,age}
    console.log(personObj);
  }

  render() {
    return (
      <div>
        <h2>我是person组件</h2>
        <input ref={c => this.nameNode = c} type="text" placeholder='输入名字'></input>
        <input ref={c => this.ageNode = c} type="text" placeholder='输入年龄'></input>
        <button onClick={this.addPerson}>添加</button>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </div>
    )
  }
}
