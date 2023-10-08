import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.css'

export default class List extends Component {
  state = { //初始化状态
    users:[],
    isFarst:true,//是否第一次打开页面
    isLoading:false,//是否处于加载中
    err:''//存储请求的错误信息
  }

  //组件挂载
  componentDidMount(){
    // 订阅消息 消息名atguanggu
    this.token = PubSub.subscribe('atguanggu',(_,dataObj)=>{
      console.log('List组件收到消息了',dataObj);
      this.setState(dataObj)
    })
  }

  //组件将卸载
  componentWillUnmount(){
    PubSub.unsubscribe(this.token)
  }

  render() {
    const {users,isFirst,isLoading,err} = this.state
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
