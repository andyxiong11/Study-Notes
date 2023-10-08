import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
  render() {
    return (
      <div className="row">
        {/* 遍历用户数组 */}
        {this.props.users.map((userObj)=>{
          return (
            // 必须有唯一的key
            <div key={userObj.id} className="card">
              <a rel="noreferrer" href={userObj.html_url} target="_blank">
                <img alt="head_portrait" src={userObj.avatar_url} style={{width: '100px'}}/>
              </a>
              <p className="card-text">{userObj.login}</p>
            </div>
          )
        })}
      </div>
    )
  }
}
