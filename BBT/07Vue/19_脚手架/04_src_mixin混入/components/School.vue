<template>
  <div>
    <h2 @click="showName">学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
  //引入mixin
  import { mixin,mixin2 } from "../mixin.js";
  export default {
    name: "School",
    data(){
      console.log(this);//组件的实例对象
      return {
        name: "光谷",
        address: '武汉',
        x: 200//数据和函数与mixin中有冲突时，以组件中的配置为准，钩子函数则是都执行
      }
    },
    //因为Student和School组件有公共的函数，放到mixin.js中
    // methods: {
    //   showName(){
    //     alert(this.name);
    //   }
    // },
    mixins: [mixin,mixin2]
  }
</script>