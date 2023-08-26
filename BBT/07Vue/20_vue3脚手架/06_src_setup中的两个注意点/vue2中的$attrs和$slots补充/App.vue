<template>
  <div class="app">
    <h1>我是Vue2写的效果</h1>
    <Demo msg="你好啊" school="硅谷">
      <template slot="test1">
        <span>硅谷</span>
      </template>  
      <template slot="test2">
        <span>硅谷12</span>
      </template>
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