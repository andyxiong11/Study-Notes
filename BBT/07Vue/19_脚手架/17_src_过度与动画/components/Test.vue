<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- 给需要动画的元素加上transition标签 -->
    <!-- 如果给transition标签加上name属性，则样式中名字中的v要替换成name的值 -->
    <!-- appear属性 进页面就加载动画 -->

    <!-- <transition name="hello" :appear="true"> -->
    <!-- 下面是简写 appear -->
    <transition name="hello" appear>
      <h1 v-show="isShow">你好啊!</h1>
    </transition>
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
  }

  /* 进入 */
  /* .v-enter-active{ */
  .hello-enter-active{
    /* css3 */
    animation: atguigu 0.5s linear;
  }

  /* 离开动画 */
  /* .v-leave-active{ */
  .hello-leave-active{
    animation: atguigu 0.5s linear reverse;
  }

  /* 动画 */
  @keyframes atguigu{
    from{
      transform: translateX(-100%);
    }
    to{
      transform: translateX(0px);
    }
  }
</style>