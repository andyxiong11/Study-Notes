<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h3>工作种类:{{ job.type }}</h3>
  <h3>工作薪水：{{ job.salary }}</h3>
  <button @click="changeInfo">修改人的信息</button>
</template>

<script>
// ref响应式数据
import {ref} from 'vue'
export default {
  name: 'App',
  // 此处只是测试一下setup,暂时不考虑响应式的问题
  setup() {
    //数据
    let name = ref('张三')
    let age = ref(18)
    let job = ref({
      type: '前端工程师',
      salary: '30k'
    })

    //方法
    function changeInfo() {
      name.value = '李四';
      age.value = 48;
      // console.log(name,age);

      job.value.type = 'UI设计师';
      job.value.salary = '60 k';  
      // console.log(job.value);
    }

    return {
      name,
      age,
      job,
      changeInfo,
    }
  }
}
</script>