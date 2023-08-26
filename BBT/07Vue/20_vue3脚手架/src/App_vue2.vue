<template>
  <div>
    <h1>我是Vue2写的效果</h1>
    <h2 v-show="person.name">姓名：{{person.name}}</h2>
    <h2>年龄：{{person.age}}</h2>
    <h2 v-show="person.sex">性别：{{person.sex}}</h2>
    <h2>爱好：{{person.hobby}}</h2>
    <button @click="addsex">添加一个sex属性</button>
    <button @click="deleteName">删除name属性</button>
    <button @click="updateHobby">修改第一个爱好的名字</button>
  </div>
</template>

<script>
  // import Vue from 'vue'
  export default {
    name:'App',
    data(){
      return {
        person:{
          name:'张三',
          age:18,
          hobby: ['吃饭','学习','打豆豆']
        }
      }
    },
    methods:{
      addsex(){
        // console.log(this.person.sex)
        // this.person.sex='女'
        // console.log(this.person.sex)

        //正确的修改方法
        this.$set(this.person,'sex','女')
        // Vue.set(this.person,'sex','女')
      },
      deleteName(){
        // console.log(this.person.name)
        // delete this.person.name
        // console.log(this.person.name)

        //正确的删除方法
        this.$delete(this.person,'name')
        // Vue.delete(this.person,'sex','女')
      },
      updateHobby(){
        //this.person.hobby[0] = '逛街'

        //正确的修改方法
        this.$set(this.person.hobby,0,'逛街')
        // this.person.hobby.splite(0,1,'逛街')
      }
    }
  }
</script>