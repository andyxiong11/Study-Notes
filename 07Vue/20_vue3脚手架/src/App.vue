<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
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

    //方法
    function changeInfo() {
      name.value = '李四';
      age.value = 48;
      // console.log(name,age);
    }

    return {
      name,
      age,
      changeInfo,
    }
  }
}
</script>