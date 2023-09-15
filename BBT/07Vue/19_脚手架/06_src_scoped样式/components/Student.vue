<template>
  <div class="test">
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
      }
    },
}
</script>

<style scoped>/* 加上scoped解决样式冲突 */
  /* 所有组件写的样式最后要汇总到一个文件
     如果此处的类名跟School组件的类名一致，则背景色均为橙色，因为在App.vue中后引入Student.vue */
  .test{
    background-color: orange;
  }
</style>

<!-- <style lang=""> 
lang中可以写 css less，但是用less，脚手架会报错
需要安装 npm i less-loader
可能会因为安装需要webpack5，而“node_modules\webpack\package.json”中使用的webpack版本为最新的稳定版4.46，安装失败
npm view webpack versions查看webpack所有的版本
npm view webpack less-loader查看webpack所有的版本
npm i less-loader@7 安装7中最新的版本
</style> -->