<template>
  <li>
    <label>
      <!-- 选项默认勾选 :checked="todo.done"  -->
      <input type="checkbox" :checked="todo.done"/>
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
    props: ['todo'],
    mounted() {
      //console.log(this.todo);
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