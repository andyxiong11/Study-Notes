<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{person.name}}</h2>
  <h2>年龄：{{person.age}}</h2>
  <button @click="test">测试触发一下Demo组件的Hello事件</button>
</template>

<script>  import {reactive} from 'vue'
  export default {
    name: 'Demo',
    props:['msg','school'],

    // emits:['hello'],//声明需要用到hello自定义事件，否则会有警告，不影响

    beforeCreate() {
      console.log('---beforeCreate---');
    },
    
    setup(props,context) {
      console.log('---setup---',this);//setup执行比beforeCreate更早,this为undefined
      console.log('---props---',props);// 组件之前传参
      console.log('---context---',context);// 执行上下文
      console.log('---context.attrs---',context.attrs);//储存props中未声明接受的参数，相当于vue2 $attrs
      console.log('---context.emit---',context.emit);//触发自定义事件，相当于vue2 $emit
      console.log('---context.slots---',context.slots);//插槽，相当于vue2 $slots
      

      let person = reactive({
        name : '张三',
        age : 18,
      })

      function test() {
        context.emit('hello',666)
      }

      return {
        person,
        test
      }
    }
  }
</script>