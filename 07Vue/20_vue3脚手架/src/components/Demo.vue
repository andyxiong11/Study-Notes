<template>
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="sum++">点我+1</button>
  <hr>
  <h2>当前信息为：{{ msg }}</h2>
  <button @click="msg+='!'">修改信息</button>
</template>

<script>  
  import {ref,watch} from 'vue'
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

    setup() {
      //数据
      let sum = ref(0)
      let msg = ref('你好啊')

      //情况一：监视ref所定义的一个响应式数据
      // watch(sum,(newValue,oldValue)=>{
      //   console.log("sum值发生变化",newValue,oldValue);
      // })
      //情况二：监视ref所定义的多个响应式数据
      // watch(sum,(newValue,oldValue)=>{
      //   console.log("sum值发生变化",newValue,oldValue);
      // })
      // watch(msg,(newValue,oldValue)=>{
      //   console.log("msg值发生变化",newValue,oldValue);
      // })
      //下面是简写
      watch([sum,msg],(newValue,oldValue)=>{
        console.log("sum值发生变化",newValue,oldValue);
      },{immediate:true,deep:true})


      //返回一个对象（常用）
      return {
        sum,
        msg
      }
    }
  }
</script>