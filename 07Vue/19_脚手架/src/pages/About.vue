<template>
  <h2>我是About的内容</h2>
</template>

<script>
  export default {
    name:"About",
    beforeDestroy() {
      // console.log("About组件即将被销毁了");
    },
    mounted() {
      // console.log("About组件挂载完毕了",this);
      // console.log(this.$router);
    },

    //通过路由规则(直接将组件放在App.vue不行)，进入该组件时被调用
    beforeRouteEnter (to,from,next){
      console.log('App---beforeRouteEnter',to,from);
      //next()

      if(to.meta.isAuth){
        if (localStorage.getItem('school') === 'guanggu') {
          next()
        }else{
          alert('学校名不对，无权限查看')
        }
      }else{
        next()
      }
    },
    //通过路由规则，离开该组件时被调用
    beforeRouteLeave (to,from,next){
      console.log('App---beforeRouteLeave',to,from);
      next()
    }

  }
</script>