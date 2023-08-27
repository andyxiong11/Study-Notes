<template>
  <h2>姓名：{{person.name}}</h2>
  <h2>年龄：{{person.age}}</h2>
  <h2>薪资：{{ person.job.j1.salary }}K</h2>
  <button @click="person.name+='~'">修改姓名</button>
  <button @click="person.age++">增长年龄</button>
  <button @click="person.job.j1.salary++">涨薪</button>
</template>

<script>  
  import {reactive} from 'vue'
  export default {
    name: 'Demo',

    setup() {
      //数据
      let person = reactive({
        name : '张三',
        age : 18,
        job:{
          j1:{
            salary:20
          }
        }
      })

      //返回一个对象（常用）
      return {
        person
      }
    }
  }
</script>