<template>
  <div class="demo">
    <h2>我是Demo组件</h2>
    <!-- {{ $attrs.msg }}
    {{ $attrs.school }} -->
    <!-- 上面是不使用props声明接收时使用（未在props中接受的数据都在$attrs中，但不能显示数据类型 -->
    {{ msg }}
    {{ school }}

    <!-- <slot></slot> -->
  </div>
</template>
<script>
  export default {
    name: 'Demo',
    props:['msg','school'],
    mounted() {
      console.log(this);
    },
  }
</script>
<style>
  .demo{
    background-color:orange;
    padding:10px;
  }
</style>
  