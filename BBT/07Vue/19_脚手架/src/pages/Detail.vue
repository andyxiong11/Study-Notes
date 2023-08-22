<template>
  <ul>
    <!-- <li>消息编号：{{ $route.params.id }}</li>
    <li>消息标题：{{ $route.params.title }}</li> -->

    <!-- 计算属性的写法 -->
    <!-- <li>消息编号：{{ id }}</li>
    <li>消息标题：{{ title }}</li> -->

    <!-- props 第一种写法 -->
    <!-- <li>消息编号：{{ a }}</li>
    <li>消息标题：{{ b }}</li> -->

    <!-- props 第二种写法 -->
    <li>消息编号：{{ id }}</li>
    <li>消息标题：{{ title }}</li>
  </ul>
</template>

<script>
  export default {
    name:'Detail',
    //props 第一种写法
    // props:['a','b'],

    //props 第二种写法
    props:['id','title'],

    //计算属性的写法
    // computed:{
    //   id(){
    //     return this.$route.params.id
    //   },
    //   title(){
    //     return this.$route.params.title
    //   }
    // },
    mounted() {
      console.log(this.$route);
    },
  }
</script>

<style>

</style>