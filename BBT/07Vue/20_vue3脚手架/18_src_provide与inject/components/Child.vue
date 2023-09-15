<template>
  <div class="child">
    <h3>我是App组件（子）</h3>
    <Son/>
  </div>
</template>

<script> 
  import { inject } from "vue";
  import Son from './Son.vue'
  export default {
    name:'Child',
    components:{ Son },
    //子组件传数据建议用props
    // setup(){
    //   let x = inject('car')
    //   console.log(x,'---child---')
    // }
  }
</script>

<style>
  .child{
    background-color: skyblue;
    padding: 10px;
  }
</style>