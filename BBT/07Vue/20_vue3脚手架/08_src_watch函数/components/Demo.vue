<template>
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="sum++">点我+1</button>
  <hr>
  <h2>当前信息为：{{ msg }}</h2>
  <button @click="msg+='!'">修改信息</button>
  <hr>
  <h2>姓名：{{person.name}}</h2>
  <h2>年龄：{{person.age}}</h2>
  <h2>薪资：{{ person.job.j1.salary }}K</h2>
  <button @click="person.name+='~'">修改姓名</button>
  <button @click="person.age++">增长年龄</button>
  <button @click="person.job.j1.salary++">涨薪</button>
</template>

<script>  
  import {ref,reactive,watch} from 'vue'
  export default {
    name: 'Demo',

    //vue2
    // watch:{
    //   // sum(newValue,oldValue){
    //   //   console.log("sum值发生变化",newValue,oldValue);
    //   // }

    //   sum:{
    //     immediate:true,
    //     deep:true,
    //     handler(newValue,oldValue){
    //       console.log("sum值发生变化",newValue,oldValue);
    //     }
    //   }

    setup() {
      //数据
      let sum = ref(0)
      let msg = ref('你好啊')
      let person = reactive({
        name : '张三',
        age : 18,
        job:{
          j1:{
            salary:20
          }
        }
      })

      //情况一：监视ref所定义的一个响应式数据
      // watch(sum,(newValue,oldValue)=>{
      //   console.log("sum值发生变化",newValue,oldValue);
      // })

      //情况二：监视ref所定义的多个响应式数据
      // watch(sum,(newValue,oldValue)=>{
      //   console.log("sum值发生变化",newValue,oldValue);
      // })
      // watch(msg,(newValue,oldValue)=>{
      //   console.log("msg值发生变化",newValue,oldValue);
      // })
      //下面是简写
      // watch([sum,msg],(newValue,oldValue)=>{
      //   console.log("sum值发生变化",newValue,oldValue);
      // },{immediate:true})

      //情况三：监视reactive所定义的一个响应式数据的全部属性
      //1.注意：此处无法正确的获取oldValue
      //2.注意：强制开启了深度监视（deep配置无效）
      // watch(person,(newValue,oldValue)=>{
      //   console.log("person发生变化",newValue,oldValue);
      // },{deep:false}) //deep配置无效

      //情况四：监视reactive所定义的一个响应式数据中的某个属性
      // watch(()=>person.age,(newValue,oldValue)=>{
      //   console.log("person的age发生变化",newValue,oldValue);
      // })

      //情况五：监视reactive所定义的一个响应式数据中的某些属性
      // watch([()=>person.age,()=>person.name],(newValue,oldValue)=>{
      //   console.log("person的age或name发生变化",newValue,oldValue);
      // })

      //特殊情况
      watch(person.job,(newValue,oldValue)=>{
        console.log("person的job发生变化",newValue,oldValue);
      },{deep:true})//此处由于监视的是reactive定义的对象中的某个属性，所以deep配置有效

      //返回一个对象（常用）
      return {
        sum,
        msg,
        person
      }
    }
  }
</script>