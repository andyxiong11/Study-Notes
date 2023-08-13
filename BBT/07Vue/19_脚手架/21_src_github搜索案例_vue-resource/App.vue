<template>
  <div id="app">
    <div class="container">
      <Search/>
      <List/>
    </div>
  </div>
</template>

<script>
  import List from "./components/List.vue";
  import Search from "./components/Search.vue";
  //下面方法直接引入，vue检查会报错，因为bootstrap中有引入其他文件夹的字体，但是找不到这个文件夹
  // import './assets/css/bootstrap.css'
  // 需要在html中用src引入

  export default {
    name: "App",
    components: {
      List,
      Search,
    },
  };
</script>