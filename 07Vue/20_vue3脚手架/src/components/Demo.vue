<template>
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="sum++">点我+1</button>
</template>

<script>  
  import {ref} from 'vue'
  export default {
    name: 'Demo',

    //vue2
    // watch:{
    //   // sum(newValue,oldValue){
    //   //   console.log("sum值发生变化",newValue,oldValue);
    //   // }

    //   sum:{
    //     immediate:true,
    //     deep:true,
    //     handler(newValue,oldValue){
    //       console.log("sum值发生变化",newValue,oldValue);
    //     }
    //   }

    },
    setup() {
      let sum = ref(0)

      return {
        sum,
      }
    }
  }
</script>