<template>
  <div class="app">
    <h1>我是Vue2写的效果</h1>
    <Demo/>
  </div>
</template>
<script>
  import Demo from './components/Demo'
  export default {
    name:'App',
    components:{Demo}
  }
</script>
<style>
  .app{
    background-color:gray;
    padding:10px;
  }
</style>  