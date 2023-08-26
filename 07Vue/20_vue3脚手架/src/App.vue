<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{person.name}}</h2>
  <h2>年龄：{{person.age}}</h2>
</template>

<script>
  import {reactive} from 'vue'
  export default {
    name: 'App',
    setup() {
      let person = reactive({
        name : '张三',
        age : 18,
      })

      return {
        person,
      }
    }
  }
</script>