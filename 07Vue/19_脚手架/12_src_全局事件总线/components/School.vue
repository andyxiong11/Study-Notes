<template>
  <div class="school">
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
    mounted() {
      // console.log("School",this.x);

      //this.x.$on('hello',(data) => {
      this.$bus.$on('hello',(data) => {
        console.log("我是scholl组件，收到了数据",data);
      })
    },
  }
</script>

<style>
  .school{
    background-color: skyblue;
    padding: 5px;
  }
</style>