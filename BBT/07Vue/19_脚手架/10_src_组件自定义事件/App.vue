<template>
  <div class="app">
    <h1>{{ msg }},学生的姓名{{ studentName }}</h1>
    <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
    <School :getSchoolName="getSchoolName"/>
    
    <!-- <Student/> -->
    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第一种写法：@或v-on） -->
    <!--给student组件的实例对象vc绑定atguigu事件-->
    <!--<Student v-on:atguigu.once="getStudentName"/> .once 一次性-->
    <Student @atguigu="getStudentName"/><!--@atguigu.once 一次性-->

    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第二种写法：ref） -->
    <!-- <Student ref="student"/> -->
    <!-- 第二种方法的好处是可以加上定时器 -->


    <!-- 以下代码仅用于测试解绑多个事件 -->
    <!-- <Student @atguigu="getStudentName" @demo="m1"/> -->

    
    <!-- 给组件添加原生事件 -->
    <!-- <Student @click.native="show"/> -->
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
        msg: '你好啊',
        studentName:  ''
      }
    },
    methods: {
      getSchoolName(name){
        console.log("App收到了学校名",name);
      },
      getStudentName(name,...params){
        console.log("App收到了学生名",name,params);
        //将自定义事件的name展示到页面上，第一种写法
        this.studentName = name
      },

      // m1(){
      //   console.log("demo事件被触发了");
      // }

      // show(){
      //   alert(调用了原生事件)
      // }
    },
    mounted() {//App组件挂载完时调用
      // this.$refs.student.$on('atguigu',this.getStudentName)//绑定自定义事件

      // this.$refs.student.$once('atguigu',this.getStudentName)//绑定自定义事件（一次性）

      //下面是加上定时器的写法
      // setTimeout(() => {
      //   this.$refs.student.$on('atguigu',this.getStudentName)
      // }, 3000);

      //将自定义事件的name展示到页面上，第二种写法，但是要写成箭头函数，否则this指向有问题
      this.$refs.student.$on('atguigu',function(name,...params){
        console.log("App收到了学生名",name,params);
        // console.log(this);//student组件的vc谁触发atguigu事件，回调函数的this指向谁
        this.studentName = name;//空
      })
    },
  }
</script>
<style scoped>
  .app {
    background-color: gray;
    padding: 5px;
  }
</style>