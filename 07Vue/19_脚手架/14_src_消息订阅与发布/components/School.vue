<template>
  <div class="school">
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
  import pubsub from 'pubsub-js'
  export default {
    name: "School",
    data(){
      return {
        name: "光谷",
        address: '武汉',
      }
    },
    mounted() {
      // this.$bus.$on('hello',(data) => {
      //   console.log("我是scholl组件，收到了数据",data);
      // })

      //订阅消息
      // this.pubId = pubsub.subscribe('hello',function (msgName,data) {//msgName 消息名 data 数据
      //   console.log('有人发布了hello消息，hello消息的回调执行了',msgName,data);
      // })
      //因为用的外部库，所以this为undefined，需要写成箭头函数;或者写成this.函数名，另外写一个函数
      this.pubId = pubsub.subscribe('hello',(msgName,data) => {//msgName 消息名 data 数据
        console.log('有人发布了hello消息，hello消息的回调执行了',msgName,data);
      })

    },
    beforeDestroy() {
      //this.$sub.$off('hello')

      //销毁
      pubsub.unsubscribe(this.pubId);//自定义一个id指代订阅消息的事件
    },
  }
</script>

<style>
  .school{
    background-color: skyblue;
    padding: 5px;
  }
</style>