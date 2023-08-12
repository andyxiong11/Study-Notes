<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- 给需要动画的元素加上transition标签 -->
    <!-- appear属性 进页面就加载动画 -->

    <!-- <transition name="hello" :appear="true"> -->
    <!-- 下面是简写 appear -->
    <!-- 如果是多个元素需要同一个动画,则要使用transition-grou,且给每个标签加上key -->
    <transition-group appear 
      name="animate_animated animate_bounce" 
      enter-active-class="animate_swing" 
      leave-active-class="animate_backoutUp"
    >
      <h1 v-show="!isShow" key="1">你好啊!</h1>
      <h1 v-show="isShow" key="2">你好啊!</h1>
    </transition-group>
  </div>
</template>

<script>
  import "animate.css"
  export default {
    name:"Test",
    data() {
      return {
        isShow: true
      }
    },
  }
</script>

<style scoped>
  h1{
    background-color: orange;
  }

</style>