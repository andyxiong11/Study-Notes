import React, { Component } from 'react'
// import axios from 'axios'
import PubSub from 'pubsub-js'

export default class Search extends Component {
  search = ()=>{
    // 发布消息
    console.log('Search组件发布消息了');

    //获取用户的输入
    const {keyWordElement:{value:keyWord}} = this //简写
    //console.log(keyWordElement);//报错
    console.log(keyWord);

    //发送请求前通知List更新状态
    PubSub.publish('atguanggu',{isFirst:false,isLoading:true})

    //发送网络请求--使用axios发送(github后端有cors，所以不会产生跨域。)
    /*
    axios.get(`/api1/search/users?q=${keyWord}`).then(//本地服务器可以简写
      response => {
        //console.log('成功了',response.data);

        //请求成功后通知List更新状态
        PubSub.publish('atguanggu',{isLoading:false,users:response.data.items})
      },
      error => {
        //console.log('失败了',error);

        //请求失败后通知List更新状态
        PubSub.publish('atguanggu',{isLoading:false,err:error.message})
      }
    )
    */

    //发送网络请求--使用fetch发送(未优化)
    /* fetch(`/api1/search/users2?q=${keyWord}`).then(//本地服务器可以简写
      response => {
        console.log('联系服务器成功了',response);//只要服务器有返回，不管是200或404都算联系成功
        console.log('联系服务器成功了',response.json());//json方法返回Promise实例对象中存储成功的数据或失败的原因
        return response.json()
      },
      // error => {
      //   console.log('联系服务器失败了',error);
      //   return new Promise(()=>{});//返回一个初始化状态的promise，防止执行第二个.then
      // }
    ).then(//如果第一个.then返回非promise，则第二个then为成功
      response => {
        console.log('获取数据成功了',response);
      },
      // error => {
      //   console.log('获取数据失败了',error);
      // }
    ).catch(//使用catch统一处理两个.then的错误
      (error) => {console.log(error);}
    ) */

    //发送网络请求--使用fetch发送(优化)
    fetch(`/api1/search/users2?q=${keyWord}`).then(
      response => {
        console.log('联系服务器成功了');
        return response.json()
      },
    ).then(
      response => {
        console.log('获取数据成功了',response);
      },
    ).catch(
      error => {console.log('请求出错',error);}
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
