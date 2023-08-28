<template>
  <h4>当前的x.y值是：{{ x.y }}</h4>
  <button @click="x.y++">点我x.y+1</button>
  <!-- 下面的替换可以 -->
  <button @click="x={y:888}">点我替换x</button>
  <h4>当前的z值是：{{ z }}</h4>
  <button @click="z++">点我z+1</button>
  <hr>
  <h4>{{ person }}</h4>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2>薪资：{{ job.j1.salary }}K</h2>
  <button @click="name+='~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="job.j1.salary++">涨薪</button>
</template>

<script>  
  import {ref,reactive,toRef,toRefs,shallowReactive,shallowRef} from 'vue'
  export default {
    name: 'Demo',

    setup() {
      //数据
      // let person = shallowReactive({ //只考虑第一层数据的响应式
      let person = reactive({
        name : '张三',
        age : 18,
        job:{
          j1:{
            salary:20
          }
        }
      })

      let x = shallowRef({
        y:0
      }) 
      console.log(x); //value是object 非响应式 不对对象做响应式处理
      let z = shallowRef(0)
      console.log(z); //value是prxoy 响应式 只对基本类型做响应式处理
      // let x = ref({
      //   y:0
      // }) 
      // console.log(x); //value是prxoy 响应式

      //返回一个对象（常用）
      return {
        x,
        z,
        person,
        ...toRefs(person)
      }
    }
  }
</script>