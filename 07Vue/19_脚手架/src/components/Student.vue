<template>
  <div class="student">
    <h2>学生姓名：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
  </div>
</template>

<script>
  export default {
    name: "School",
    data(){
      return {
        name: "张三",
        sex: '男',
        number: 0
      }
    },
}
</script>

<style scoped>
  .student{
    background-color: orange;
    padding: 5px;
    margin-top: 30px;
  }
</style>