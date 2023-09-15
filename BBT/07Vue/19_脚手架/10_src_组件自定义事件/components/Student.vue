<template>
  <div class="student">
    <h2>学生姓名：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
    <button @click="sendStudentName">把学生名给App</button>
    <button @click="unbind">解绑atguigu事件</button>

    <!-- 以下代码仅用于验证销毁当前Student组件的实例对象VC，销毁后所有Student实例的自定义事件全都不奏效，2023年脚手架优化原生事件也不奏效 -->
    <h2>当前数值为：{{ number }}</h2>
    <button @click="add">点我数值++</button>
    <button @click="death">销毁当前Student组件的实例对象VC</button>
  </div>
</template>

<script>
  export default {
    name: "School",
    data(){
      return {
        name: "张三",
        sex: '男',
        number: 0
      }
    },
    methods: {
      sendStudentName(){
        //触发Student组件实例身上的atguigu事件
        this.$emit('atguigu',this.name,666,888,999);

        //以下代码仅用于测试解绑多个事件
        //this.$emit('demo');
      },
      unbind(){
        this.$off('atguigu') //解绑一个自定义事件

        //this.$off(['atguigu','demo']); //解绑多个自定义事件
        
        // this.$off(); //解绑所有事件
      },

      //以下代码仅用于验证销毁当前Student组件的实例对象VC，销毁后所有Student实例的自定义事件全都不奏效，2023年脚手架优化原生事件也不奏效
      //main.js中也有销毁验证
      death(){
        this.$destroy() 
      },
      add(){
        console.log("number被++");
        this.number++;
      }
    },
}
</script>

<style scoped>
  .student{
    background-color: orange;
    padding: 5px;
    margin-top: 30px;
  }
</style>