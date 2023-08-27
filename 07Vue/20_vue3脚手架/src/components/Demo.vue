<template>
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="sum++">点我+1</button>
</template>

<script>  
  import {ref} from 'vue'
  export default {
    name: 'Demo',
    setup() {
      //数据
      let sum = ref(0)

      //返回一个对象（常用）
      return {
        sum,
      }
    },
  }
</script>