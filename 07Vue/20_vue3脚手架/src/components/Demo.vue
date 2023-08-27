<template>
  <h4>{{ person }}</h4>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2>薪资：{{ salary }}K</h2>
  <button @click="name+='~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="salary++">涨薪</button>
</template>

<script>  
  import {ref,reactive,toRef} from 'vue'
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

      //非响应式
      // const name1 = person.name
      // console.log(name1);

      //响应式写法
      // const name2 = toRef(person,'name')
      // console.log(name2);

      //返回一个对象（常用）
      return {
        person,
        //响应式写法
        name: toRef(person,'name'),
        age: toRef(person,'age'),
        salary: toRef(person.job.j1,'salary'),

        //下面也可以修改展示在页面上的数据，但是person中的原数据没有修改
        // name: ref(person,'name'),
        // age: ref(person,'age'),
        // salary: ref(person.job.j1,'salary'),
      }
    }
  }
</script>