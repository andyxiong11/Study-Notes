<template>
  <div>
    <h2>我是Home的内容</h2>
    <ul class="nav nav-tabs">
      <li>
        <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
      </li>
      <li>
        <router-link class="list-group-item " active-class="active" to="/home/message">Message</router-link>
      </li>
    </ul>
    <keep-alive include="News">
      <!-- 指定组件的呈现位置 -->
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name:"Home",
    beforeDestroy() {
      // console.log("About组件即将被销毁了");
    },
    mounted() {
      // console.log("Home组件挂载完毕了",this);
    },
  }
</script>