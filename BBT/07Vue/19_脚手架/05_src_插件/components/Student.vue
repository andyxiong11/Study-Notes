<template>
  <div>
    <h2>学生姓名：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
    <!-- v-fbind plugins.js插件 -->
    <input type="text" v-fbind:value="name">
  </div>
</template>

<script>
  export default {
    name: "School",
    data(){
      return {
        name: "张三",
        sex: '男',
      }
    },
}
</script>