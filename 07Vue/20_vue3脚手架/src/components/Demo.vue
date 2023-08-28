<template>
  <h4>当前求和为：{{ sum }}</h4>
  <button @click="sum++">点我++</button>
  <hr>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2>薪资：{{ job.j1.salary }}K</h2>
  <h3 v-show="person.car">座驾信息：{{ person.car }}</h3>
  <button @click="name+='~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="job.j1.salary++">涨薪</button>
  <button @click="showRawPeron">输出最原始的person</button>
  <button @click="addCar">给人添加一台车</button>
  <button @click="person.car.name+='!'">换车名</button>
  <button @click="person.car.price++">换价格</button>
</template>

<script>  
  import {ref,reactive,toRefs,toRaw,markRaw} from 'vue'
  export default {
    name: 'Demo',

    setup() {
      //数据
      let sum = ref(0)
      let person = reactive({
        name : '张三',
        age : 18,
        job:{
          j1:{
            salary:20
          }
        }
      })

      function showRawPeron() {
        const p = toRaw(person)
        p.age++ //页面上的age不变
        console.log(p);

        console.log(toRaw(sum));//不能处理ref数据
      }

      function addCar() {//该函数失效，因为...toRefs(person)已经将person分解传输，再添加car不会重新执行...toRefs(person)
        let car = { name:'奔驰',price:'40' }
        // person.car = car

        //将car改为非响应式数据，数据变化不展示在页面上
        person.car = markRaw(car)
      }

      //返回一个对象（常用）
      return {
        sum,
        showRawPeron,
        addCar,
        ...toRefs(person),
        person
      }
    }
  }
</script>