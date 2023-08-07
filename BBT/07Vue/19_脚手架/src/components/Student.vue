<template>
  <div class="student">
    <h2>学生姓名：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
    <button @click="sendStudentName">把学生名给App</button>
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
    methods: {
      sendStudentName(){
        //触发Student组件实例身上的atguigu事件
        this.$emit('atguigu',this.name,666,888,999)
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