<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2>性别：{{ sex }}</h2>
  <!-- vue3和vue2的数据重名，以vue3为准 -->
  <h2>a：{{ a }}</h2>
  <button @click="sayHello">说话（vue3配置的sayHello）</button>
  <button @click="sayWelcome">说话（vue2配置的sayWelcome）</button>
  <br>
  <br>
  <button @click="test1">测试一下在Vue2的配置中去读取Vue3中的数据、方法</button>
  <br>
  <br>
  <button @click="test2">测试一下在Vue3的setup配置中去读取Vue2中的数据、方法</button>
</template>

<script>
// import {h} from 'vue'
export default {
  name: 'App',

  //vue2数据和方法
  data(){
    return {
      sex:'男',
      a: 100
    }
  },
  methods: {
    sayWelcome(){
      alert('欢迎来到硅谷学习')
    },
    test1(){
      console.log(this.sex);
      console.log(this.name);//可以读取
      console.log(this.age);//可以读取
      console.log(this.sayHello);//可以读取
      this.sayHello();
    }
  },

  // 此处只是测试一下setup,暂时不考虑响应式的问题
  setup() {
    //数据
    let name = '张三'
    let age = 18
    let a = 200

    //方法
    function sayHello() {
      alert(`我叫${name}，我${age}岁了，你好啊！`)
    }
    function test2(){
      console.log(name);
      console.log(age);
      console.log(sayHello);
      console.log(this.sex);//不能读取
      console.log(this.sayWelcome);//不能读取
    }

    //第一种返回方式，返回一个对象（常用）
    return {
      name,
      age,
      sayHello,
      test2,
      a
    }

    // 第二种返回方式，返回一个渲染函数
    //return ()=>{return h('h1','硅谷')}
    // return ()=> h('h1','硅谷')
  }
}
</script>