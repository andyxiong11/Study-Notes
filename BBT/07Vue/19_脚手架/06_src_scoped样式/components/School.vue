<template>
  <div class="demo">
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
  export default {
    name: "School",
    data(){
      return {
        name: "光谷",
        address: '武汉',
      }
    },
  }
</script>

<style>
  /* 所有组件写的样式最后要汇总到一个文件
     如果School组件的类名与此处的类名一致，则背景色均为橙色，因为在App.vue中后引入Student.vue */
  .demo{
    background-color: skyblue;
  }
</style>