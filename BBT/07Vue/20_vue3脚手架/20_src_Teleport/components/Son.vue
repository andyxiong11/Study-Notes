<template>
  <div class="son">
    <h3>我是App组件</h3>
    <Dialog/>
  </div>
</template>

<script>
  import Dialog from "../components/Dialog.vue";
  export default {
    name:'Son',
    components:{Dialog}
  }
</script>

<style>
  .son{
    background-color: orange;
    padding: 10px;
  }
</style>