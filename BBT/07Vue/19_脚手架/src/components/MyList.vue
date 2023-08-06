<template>
  <ul class="todo-main">
    <!-- 第三步将MyList.vue中的li标签替换为<MyItem/> -->
    <!-- <li>
      <label>
        <input type="checkbox" />
        <span>xxxxx</span>
      </label>
      <button class="btn btn-danger" style="display: none">删除</button>
    </li>
    <li>
      <label>
        <input type="checkbox" />
        <span>yyyy</span>
      </label>
      <button class="btn btn-danger" style="display: none">删除</button>
    </li> -->
    <!-- checkTodo函数 勾选功能用到，通过MyList传递给MyItem -->
    <MyItem
      v-for="todoObj in todos"
      :key="todoObj.id"
      :todo="todoObj"
      :checkTodo="checkTodo"
    /><!--加上冒号，将todoObj识别为表达式-->
  </ul>
</template>

<script>
import MyItem from "./MyItem.vue";
export default {
  name: "MyList",
  components: {
    MyItem,
  },
  //因为需要将MyHeader新增的todoObj传给MyList，需要将MyList中的todos放到App组件上，就都可以访问了
  // data(){
  //   return {
  //     //用数组中对象的方式存储选项，id、名、是否勾选
  //     todos: [
  //       //id number类型有尽头，所以用字符串
  //       {id: '001', title: "吃饭", done: true},
  //       {id: '002', title: "睡觉", done: false},
  //       {id: '003', title: "打豆豆", done: false},
  //     ]
  //   }
  // }
  props: ["todos", "checkTodo"],
};
</script>

<style scoped>
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}
.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>