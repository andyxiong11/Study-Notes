import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {
  search = ()=>{
    //获取用户的输入
    //const {value} = this.keyWordElement
    // 下面是连续解构赋值+重命名
    const {keyWordElement:{value:keyWord}} = this //简写
    //console.log(keyWordElement);//报错
    console.log(keyWord);
    //发送网络请求 github后端有cors，所以不会产生跨域
    //axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
    //axios.get(`http://localhost:5000/search/users?q=${keyWord}`).then(//使用代理服务器，会产生跨域
    //axios.get(`http://localhost:3000/api1/search/users?q=${keyWord}`).then(//配置setupProxy.js代理避免跨域
    axios.get(`/api1/search/users?q=${keyWord}`).then(//本地服务器可以简写
      response => {
        //console.log('成功了',response.data);
        this.props.saveUsers(response.data.items)
      },
      error => {console.log('失败了',error);}
    )
  }
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索github用户</h3>
        <div>
          <input ref={c => this.keyWordElement = c} type="text" placeholder="输入关键词点击搜索"/>&nbsp;
          <button onClick={this.search}>搜索</button>
        </div>
      </section>
    )
  }
}
