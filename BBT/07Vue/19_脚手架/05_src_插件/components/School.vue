<template>
  <div>
    <!-- filter plugins.js插件 -->
    <h2>学校名称：{{name | filter}}</h2>
    <h2>学校地址：{{address}}</h2>
    <!-- 原型上的方法 plugins.js插件 -->
    <button @click="test">点我测试hello方法</button>
  </div>
</template>

<script>
  export default {
    name: "School",
    data(){
      return {
        name: "光谷gunaggu",
        address: '武汉',
      }
    },
    methods: {
      test(){
        this.hello();
      }
    },
  }
</script>