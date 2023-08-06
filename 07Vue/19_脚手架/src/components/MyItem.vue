<template>
  <li>
    <label>
      <!-- 选项默认勾选 :checked="todo.done"  -->
      <!-- <input type="checkbox" :checked="todo.done" @click="handleCheck(todo.id)"/> -->
      <!-- 检测单选框的改变用@change比较好 -->
      <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
      <!-- 也可以通过v-model修改todo.done，不用调用App组件的函数，但是不建议直接修改props -->
      <!-- <input type="checkbox" :checked="todo.done" v-model="todo.done"/> -->
      
      <!-- <span>xxxxx</span> -->
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" style="display: none">删除</button>
  </li>
</template>

<script>
  export default {
    name: "MyItem",
    //声明接收todo对象
    props: ['todo','checkTodo'],
    // mounted() {
    //   //console.log(this.todo);
    // },
    methods: {
      //以下检测勾选的思路：在App组件写一个取反的函数，通过MyList传递给MyItem调用
      handleCheck(id){
        //console.log(id);

        //通知App组件将对应的todo对象的done值取反
        this.checkTodo(id);
      }
    },
  }
</script>

<style scoped>
  li {
    list-style:none;
    height:36px;
    line-height:36px;
    padding:0 5px;
    border-bottom:1px solid #ddd;
  }
  li label {
    float:left;
    cursor:pointer;
  }
  li label li input {
    vertical-align:middle;
    margin-right:6px;
    position:relative;
    top:-1px;
  }
  li button {
    float:right;
    display:none;
    margin-top:3px;
  }
  li:bofore {
    content:initial;
  }
  li:last-child {
    border-bottom:none;
  }

</style>