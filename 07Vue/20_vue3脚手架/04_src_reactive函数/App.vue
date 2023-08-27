<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h3>工作种类:{{ job.type }}</h3>
  <h3>工作薪水：{{ job.salary }}</h3>
  <h3>爱好：{{ hobby }}</h3>
  <h3>测试的数据c：{{ job.a.b.c }}</h3>
  <button @click="changeInfo">修改人的信息</button>
</template>

<script>
// ref响应式数据
import {ref,reactive} from 'vue'
export default {
  name: 'App',
  setup() {
    //数据
    let name = ref('张三')
    let age = ref(18)
    let job = reactive({
      type: '前端工程师',
      salary: '30k',
      a:{
        b:{
          c: 666
        }
      }
    })
    let hobby = reactive(['吃饭','学习','打豆豆'])// 20230806 不用reactive也可以做到数组响应式
    
    //可以将所有的数据放到一个对象里面let person = reactive({数据})，return{person}
    // let person = reactive({
      // name : '张三',
      // age : 18,
      // job : {
      //   type: '前端工程师',
      //   salary: '30k',
      //   a:{
      //     b:{
      //       c: 666
      //     }
      //   }
      // },
      // hobby : ['吃饭','学习','打豆豆']// 20230806 不用reactive也可以做到数组响应式
    // })

    //方法
    function changeInfo() {
      name.value = '李四';
      age.value = 48;
      // console.log(name,age);

      // job.value.type = 'UI设计师';
      // job.value.salary = '60 k';  
      // console.log(job.value);

      job.type = 'UI设计师';
      job.salary = '60 k';  
      // console.log(job);

      job.a.b.c = 999

      hobby[0] = '喝酒'
    }

    //返回一个对象（常用）
    return {
      name,
      age,
      job,
      changeInfo,
      hobby
    }
  }
}
</script>