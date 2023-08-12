<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- 给需要动画的元素加上transition标签 -->
    <!-- 如果给transition标签加上name属性，则样式中名字中的v要替换成name的值 -->
    <!-- appear属性 进页面就加载动画 -->

    <!-- <transition name="hello" :appear="true"> -->
    <!-- 下面是简写 appear -->
    <!-- 如果是多个元素需要同一个动画,则要使用transition-grou,且给每个标签加上key -->
    <transition-group name="hello" appear>
      <h1 v-show="!isShow" key="1">你好啊!</h1>
      <h1 v-show="isShow" key="2">你好啊!</h1>
    </transition-group>
  </div>
</template>

<script>
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
    /* transition: 0.5s linear; */
  }

  /* 进入的起点 */
  /* .hello-enter{
    transform: translateX(-100%);
  } */

  /* 进入的终点 */
  /* .hello-enter-to{
    transform: translateX(0);
  } */

  /* 离开的起点 */
  /* .hello-leave{
    transform: translateX(0);
  } */

  /* 离开的终点 */
  /* .hello-leave-to{
    transform: translateX(-100%);
  } */

  /* 优化 */
  /*进入的起点、离开的终点*/
  .hello-enter,.hello-leave-to{
    transform: translatex(-100%);
  }
  /* 动画 */
  .hello-enter-active,.hello-leave-active{
    transition:0.5s linear;
  } 
  /* 进入的终点、离开的起点 */
  .hello-enter-to,.hello-leave{
    transform:translatex(0);
  }

</style>