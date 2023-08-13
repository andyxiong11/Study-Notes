<template>
  <div id="app">
    <div class="container">
      <!-- <Category title="美食" :listData = "foods"/>
      <Category title="游戏" :listData = "games"/>
      <Category title="电影" :listData = "films"/> -->
      
      <!-- 使用插槽的写法 -->
      <!-- 插槽中的样式也可以直接写在App组件 -->
      <Category title="美食">
        <img slot="center" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
        <a slot="footer" href="https://www.atguigu.com">更多美食</a>
      </Category>
      <Category title="游戏">
        <ul slot="center">
          <li v-for="(g,index) in games" :key="index">{{ g }}</li>
        </ul>
        <!-- <div class="foot">
          <a slot="footer" href="https://www.atguigu.com">单机游戏</a>
          <a slot="footer" href="https://www.atguigu.com">网络游戏</a>
        </div> -->
        <!-- 下面是优化写法 -->
        <div class="foot" slot="footer">
          <a href="https://www.atguigu.com">单机游戏</a>
          <a href="https://www.atguigu.com">网络游戏</a>
        </div>
      </Category>
      <Category title="电影">
        <video slot="center" controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
        <!-- <div class="foot" slot="footer">
          <a href="https://www.atguigu.com">经典</a>
          <a href="https://www.atguigu.com">热门</a>
          <a href="https://www.atguigu.com">推荐</a>
        </div>
        <h4 slot="footer">欢迎观影</h4> -->
        <!-- 下面是优化写法 vue最新的写法v-slot:footer，但是只能用在template -->
        <template slot="footer">
          <div class="foot" >
            <a href="https://www.atguigu.com">经典</a>
            <a href="https://www.atguigu.com">热门</a>
            <a href="https://www.atguigu.com">推荐</a>
          </div>
          <h4>欢迎观影</h4>
        </template>
      </Category>
    </div>
  </div>
</template>

<script>
  import Category from "./components/Category.vue";
  export default {
    name: "App",
    components: {Category},
    data(){
      return {
        foods:['火锅','烧烤','小龙虾','牛排'],
        games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
        films:['《教父》','《拆弹专家》','《你好,李焕英》','《尚硅谷》']
      }
    }
  };
</script>
<style>
  .container,.foot{
    display: flex;
    justify-content: space-around;
  }
  h4{
    text-align: center;
  }
</style>