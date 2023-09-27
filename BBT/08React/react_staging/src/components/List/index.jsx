import React, { Component } from 'react'
import Item from '../Item'
import './index.css'

export default class List extends Component {
  render() {
    const {todos} = this.props
    return (
      <ul className="todo-main">
        {
          todos.map((todo)=>{
            // 建议写key
            //return <Item key={todo.id} id={todo.id} name={todo.name} done={todo.done} />
            return <Item key={todo.id} {...todo} />
          })
        }
      </ul>
    )
  }
}
