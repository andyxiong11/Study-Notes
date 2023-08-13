<template>
  <div class="row">
    <!-- 展示用户列表 users.length ！== 0 -->
    <div v-show="info.users.length" class="card" v-for="user in info.users" :key="user.id">
      <a :href="user.html_url" target="_blank">
        <!-- <img src="https://cn.vuejs.org/images/logo.svg" style='width: 100px'/> -->
        <img :src="user.avatar_url" style='width: 100px'/>
      </a>
      <p class="card-text">{{ user.login }}</p>
    </div>
    <!-- <div class="card">
      <a href="https://github.com/xxxxxx" target="_blank">
        <img src="https://cn.vuejs.org/logo.svg" style='width: 100px'/>
      </a>
      <p class="card-text">xxxxxx</p>
    </div>
    <div class="card">
      <a href="https://github.com/xxxxxx" target="_blank">
        <img src="https://cn.vuejs.org/logo.svg" style='width: 100px'/>
      </a>
      <p class="card-text">xxxxxx</p>
    </div>
    <div class="card">
      <a href="https://github.com/xxxxxx" target="_blank">
        <img src="https://cn.vuejs.org/logo.svg" style='width: 100px'/>
      </a>
      <p class="card-text">xxxxxx</p>
    </div>
    <div class="card">
      <a href="https://github.com/xxxxxx" target="_blank">
        <img src="https://cn.vuejs.org/logo.svg" style='width: 100px'/>
      </a>
      <p class="card-text">xxxxxx</p>
    </div> -->
    <!-- 展示欢迎词 isFirst: true -->
    <h1 v-show="info.isFirst">欢迎使用！</h1>
    <!-- 展示加载中 isLoading: true -->
    <h1 v-show="info.isLoading">加载中.....</h1>
    <!-- 展示错误信息 errMsg !== null -->
    <h1 v-show="info.errMsg">{{ info.errMsg }}</h1>
 </div>
</template>

<script>
  export default {
    name: "List",
    data(){
      return{
        info: {
          //页面是否是第一次加载
          isFirst: true,
          //是否已点击搜索，为加载中状态
          isLoading: false,
          //报错信息
          errMsg: '',
          users:[]
        }
      }
    },
    mounted() {
      //更新用户数据
      // this.$bus.$on('getUsers',(users)=>{
      //   console.log('我是List组件，收到了数据',users);
      //   this.users = users;
      // })

      //更新列表数据
      // this.$bus.$on('updateListData',(isFirst,isLoading,errMsg,users)=>{
      //   this.isFirst = isFirst;
      //   this.isLoading = isLoading;
      //   this.errMsg = errMsg;
      //   this.users = users;
      // })
      // 简化上面的写法
      this.$bus.$on('updateListData',(dataObj)=>{
        //this.info = dataObj;
        this.info = {...this.info,...dataObj};
      })
    },
  }
</script>

<style scoped>
  .album {
    min-height: 50rem; /* Can be removed; just added for demo purposes */
    padding-top: 3rem;
    padding-bottom: 3rem;
    background-color: #f7f7f7;
  }

  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }
</style>