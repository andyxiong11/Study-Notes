<template>
  <h3>我是App组件</h3>
</template>

<script>
  import { ref,reactive,toRefs,readonly } from "vue";
  export default {
    name:'App',
    setup(){
      let car = reactive({
        name: '奔驰',
        price: '40w'
      })
      let sum = ref(0)
      let car2 = readonly(car)

      return {
        ...toRefs(car)
      }
    }
  }
</script>

<style>
  .app{
    background-color: gray;
    padding: 10px;
  }
</style>