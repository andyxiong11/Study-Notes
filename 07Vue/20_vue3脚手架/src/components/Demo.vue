<template>
  <h4>{{ person }}</h4>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2>薪资：{{ job.j1.salary }}K</h2>
  <button @click="name+='~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="job.j1.salary++">涨薪</button>
</template>

<script>  
  import {ref,reactive,toRef,toRefs} from 'vue'
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
        person,
        ...toRefs(person)
      }
    }
  }
</script>