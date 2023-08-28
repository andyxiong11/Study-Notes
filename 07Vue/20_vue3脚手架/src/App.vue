<template>
  <input type="text" v-model="keyWord">
  <h3>{{ keyWord }}</h3>
</template>

<script>
import { ref,customRef  } from "vue";
  export default {
    name: 'App',
    setup() {

      //自定义一个ref
      function myRef(value) {
        //console.log("---myRef---",value);

        // let x = customRef()
        // return x
        // 下面是简写return customRef()
        return customRef((track,trigger)=>{
          return {
            get(){//get:function(){}的简写
              console.log(`有人从myRef这个容器中读取数据了，我把${value}给他了`);
              track() //通知vue追踪value的变化(提前和get商量一下，让他认为这个value是有用的)，否则trigger没用
              return value
            },
            set(newValue){//set:function(){}的简写
              console.log(`有人把myRef这个容器中的数据改为了：${newValue}了`);
              value =  newValue
              trigger()//通知vue重新解析模板（调用get）
            }
          }
        })
      }

      //let keyWord = ref('hello') //使用Vue提供的ref
      let keyWord = myRef('hello') //使用自定义的ref
      return {keyWord}
    }
  }
</script>