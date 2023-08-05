<template>
  <div>
    <h1>{{msg}}</h1>
    <h2>学生姓名：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
    <!-- 因为组件上传数据是用的是双引号为字符串，变成了181，在组件标签age前加:，或者对接收数据的类型进行校验 -->
    <h2>学生年龄：{{age+1}}</h2>
    <!-- <h2>学生年龄：{{myAge+1}}</h2> -->
    <!-- 尽量避免修改外部传入的数据，如果需要修改，详见data -->
    <button @click="updateAge">尝试修改传入的数据</button>
  </div>
</template>

<script>
export default {
  name: "School",
  data(){
    console.log(this);//组件的实例对象
    return {
      msg: "我是一个学生",
      // name: "张三",
      // sex: '男',
      // age: 18 //需要从外部数据传入，详见App.vue

      //当需要修改外部传入的数据时用以下写法，同时updateAge方法和div中的age都要修改为myAge
      myAge: this.age
    }
  },
  //接收组件标签传入的数据，顺序无所谓
  // props:["name","sex","age"]//1.简单接收

  //2.接收的同时对数据进行类型限制
  // props: {
  //   name: String,
  //   sex: String,
  //   age: Number
  // }

  //3.接收的同时对数据：进行类型限制+默认值的指定+必要性的限制
  props: {
    name: {
      type: String, //name的类型必须是字符串
      required: true //name是必要的
    },
    sex: {
      type: String,
      dafault: 99 //默认值
    },
    age: {
      type: Number,
      required: true
    }
  },
  methods: {
    updateAge(){
      this.age = 22;
      //当需要修改外部传入的数据时用以下写法
      //this.myAge++
    }
  },
}
</script>