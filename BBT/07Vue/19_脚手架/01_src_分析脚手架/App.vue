<!-- 官方脚手架内容
  <template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->

<template>
  <div>
    <img src="./assets/logo.png" alt="">
      <School></School>
      <Student></Student>
  </div>
</template>

<script>
  //引入组件
  import School  from "./components/School.vue";
  import Student from "./components/Student.vue";
  export default {
      name: 'App',
      components:{
          School,
          Student
      }
  }
</script>

<style>

</style>