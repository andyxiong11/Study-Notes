<template>
  <h4>当前求和为：{{ sum }}</h4>
  <button @click="sum++">点我++</button>
  <hr>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2>薪资：{{ job.j1.salary }}K</h2>
  <button @click="name+='~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="job.j1.salary++">涨薪</button>
</template>

<script>  
  import {ref,reactive,toRefs,readonly,shallowReadonly} from 'vue'
  export default {
    name: 'Demo',

    setup() {
      //数据
      let sum = ref(0)
      let person = reactive({
        name : '张三',
        age : 18,
        job:{
          j1:{
            salary:20
          }
        }
      })

      //将person变为只读
      // person = readonly(person)
      //将person第一层的数据变为只读
      person = shallowReadonly(person)
      //将sum变为只读
      // sum = readonly(sum)
      sum = shallowReadonly(sum)

      //用法，当其他组件传入数据，先用readonly加工下避免篡改数据

      //返回一个对象（常用）
      return {
        sum,
        ...toRefs(person)
      }
    }
  }
</script>