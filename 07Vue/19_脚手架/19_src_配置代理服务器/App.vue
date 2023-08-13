<template>
  <div id="root">
    <button @click="getStudents">获取学生信息</button>
    <button @click="getCars">获取汽车信息</button>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "App",
    methods:{
      getStudents(){
        //axios.get('http://localhost:5000/students').then(
        //上面请求会报错，需要通过代理服务器
        // axios.get('http://localhost:8080/students').then(
        // 下面需要修改代理配置，不然找不到localhost:5000/atguigu/students
        axios.get('http://localhost:8080/atguigu/students').then(
          response => {
            console.log('请求成功了',response.data);
          },
          error => {
            console.log('请求失败了',error.message);
          }
        )
      },
      getCars(){
        axios.get('http://localhost:8080/demo/cars').then(
          response => {
            console.log('请求成功了',response.data);
          },
          error => {
            console.log('请求失败了',error.message);
          }
        )
      }
    }
  };
</script>