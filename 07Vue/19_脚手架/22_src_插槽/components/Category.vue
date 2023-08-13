<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <!-- <ul v-show="title !== '美食' ">
      <li v-for="(item,index) in listData" :key="index">{{ item }}</li>
    </ul>
    <img  v-show="title === '美食' " src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt=""> -->
    
    <!-- 使用插槽的写法 -->
    <slot name="center">我是一些默认值，当使用者没有传递具体结构时，我会出现</slot>
    <slot name="footer">我是一些默认值，当使用者没有传递具体结构时，我会出现</slot>
</div>
</template>
<script>
  export default {
    name: "Category",
    //props: ["listData",'title']
    props: ['title']
  };
</script>
<style scoped>
  .category {
    background-color: skyblue;
    width: 200px;
    height: 300px;
  }
  h3{
    text-align: center;
    background-color: orange;
  }
  img{
    width: 100%;
  }
  video{
    width: 100%;
  }
</style>
  