<template>
  <div class="app">
    <h1>{{ msg }}</h1>
    <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
    <School :getSchoolName="getSchoolName"/>
    
    <!-- <Student/> -->
    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第一种写法：@或v-on） -->
    <!--给student组件的实例对象vc绑定atguigu事件-->
    <!--<Student v-on:atguigu.once="getStudentName"/> .once 一次性-->
    <!-- <Student @atguigu.once="getStudentName"/> -->

    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第二种写法：ref） -->
    <!-- <Student ref="student"/> -->
    <!-- 第二种方法的好处是可以加上定时器 -->

    <!-- 以下代码仅用于测试解绑多个事件 -->
    <Student @atguigu="getStudentName" @demo="m1"/>
  </div>
</template>

<script>
  import School from './components/School.vue'
  import Student from "./components/Student.vue";
  export default {
    name: 'App',
    components:{
      Student,
      School
    },
    data(){
      return {
        msg: '你好啊'
      }
    },
    methods: {
      getSchoolName(name){
        console.log("App收到了学校名",name);
      },
      getStudentName(name,...params){
        console.log("App收到了学生名",name,params);
      },
      m1(){
        console.log("demo事件被触发了");
      }
    },
    mounted() {//App组件挂载完时调用
      // this.$refs.student.$on('atguigu',this.getStudentName)//绑定自定义事件

      // this.$refs.student.$once('atguigu',this.getStudentName)//绑定自定义事件（一次性）

      //下面是加上定时器的写法
      // setTimeout(() => {
      //   this.$refs.student.$on('atguigu',this.getStudentName)
      // }, 3000);
    },
  }
</script>
<style scoped>
  .app {
    background-color: gray;
    padding: 5px;
  }
</style>