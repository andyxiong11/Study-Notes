<template>
  <div class="child">
    <h3>我是App组件（子）</h3>
    <Son/>
  </div>
</template>

<script>
  import Son from './Son.vue'
  export default {
    name:'Child',
    components:{ Son }
  }
</script>

<style>
  .child{
    background-color: skyblue;
    padding: 10px;
  }
</style>