<template>
  <h1>一个人的信息</h1>
  <h2 v-show="person.name">姓名：{{person.name}}</h2>
  <h2>年龄：{{person.age}}</h2>
  <h2 v-show="person.sex">性别：{{person.sex}}</h2>
  <h3>工作种类:{{ person.job.type }}</h3>
  <h3>工作薪水：{{ person.job.salary }}</h3>
  <h3>爱好：{{ person.hobby }}</h3>
  <h3>测试的数据c：{{ person.job.a.b.c }}</h3>
  <button @click="changeInfo">修改人的信息</button>
  <button @click="addSex">添加一个sex属性</button>
  <button @click="deleteName">删除一个name属性</button>
</template>

<script>
// ref响应式数据
import {ref,reactive} from 'vue'
export default {
  name: 'App',
  setup() {
    //数据 reactive里面可以再写两个对象表示两组数据
    let person = reactive({
      name : '张三',
      age : 18,
      job : {
        type: '前端工程师',
        salary: '30k',
        a:{
          b:{
            c: 666
          }
        }
      },
      hobby : ['吃饭','学习','打豆豆']// 20230806 不用reactive也可以做到数组响应式
    })

    //方法
    function changeInfo() {
      person.name = '李四';
      person.age = 48;
      person.job.type = 'UI设计师';
      person.job.salary = '60 k';  
      person.job.a.b.c = 999
      person.hobby[0] = '喝酒'
    }
    function addSex(){
      person.sex = '男'
    }
    function deleteName(){
      delete person.name
    }

    //返回一个对象（常用）
    return {
      person,
      changeInfo,
      addSex,
      deleteName
    }
  }
}
</script>