<template>
  <div class="student">
    <h2>学生姓名：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
    <button @click="sendStudentName">把学生名给School组件</button>
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
    mounted() {
      // console.log("Student",this.x);
    },
    methods: {
      sendStudentName(){
        //this.x.$emit('hello',666)
        this.$bus.$emit('hello',this.name)
      }
    },
    //一般加上在组件用完之后，解绑加在总线上的事件
    beforeDestroy() {
      this.$bus.$off('hello')
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