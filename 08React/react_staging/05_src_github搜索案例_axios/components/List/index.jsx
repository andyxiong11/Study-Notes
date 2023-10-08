import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
  render() {
    const {users,isFirst,isLoading,err} = this.props
    return (
      <div className="row">
        {/* 遍历用户数组 */}
        {
          isFirst ? <h2>欢迎使用，输入关键字，随后点击搜索</h2> :
					isLoading ? <h2>Loading......</h2> :
					err ? <h2 style={{color:'red'}}>{err}</h2> :
          users.map((userObj)=>{
            return (
              // 必须有唯一的key
              <div key={userObj.id} className="card">
                <a rel="noreferrer" href={userObj.html_url} target="_blank">
                  <img alt="head_portrait" src={userObj.avatar_url} style={{width: '100px'}}/>
                </a>
                <p className="card-text">{userObj.login}</p>
              </div>
            )
          })
        }
      </div>
    )
  }
}
