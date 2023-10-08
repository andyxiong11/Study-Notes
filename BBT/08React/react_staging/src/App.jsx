import React, { Component } from 'react'
import Search from "./components/Search";
import List from "./components/List";

export default class App extends Component {

  state = { //初始化状态
    users:[],
    isFarst:true,//是否第一次打开页面
    isLoading:false,//是否处于加载中
    err:''//存储请求的错误信息
  }

  // saveUsers = (users)=>{
  //   this.setState({users:users})
  // }

  // 优化添加各种效果
  updateAppState = (stateObj)=>{
    this.setState(stateObj)
  }

  render() {
    return (
      <div className="container">
        {/* <Search saveUsers={this.saveUsers}/> */}
        <Search updateAppState={this.updateAppState}/>

        {/* <List users={this.state.users}/> */}
        {/* <List users={users} isFarst={isFarst}/> */}
        <List {...this.state}/>
      </div>
    )
  }
}
