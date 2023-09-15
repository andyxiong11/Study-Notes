<template>
  <div>
    <h2 @click="showName">学生姓名：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
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
        name: "张三",
        sex: '男',
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