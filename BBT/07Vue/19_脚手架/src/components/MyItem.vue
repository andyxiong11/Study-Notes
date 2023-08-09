<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
      <span v-show="!todo.isEdit">{{ todo.title }}</span>
      <input v-show="todo.isEdit" type="text" :value="todo.title">
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
    <button class="btn btn-edit" @click="handleEdit(todo)">编辑</button>
  </li>
</template>

<script>
  import pubsub from 'pubsub-js'
  export default {
    name: "MyItem",
    props: ['todo'],
    methods: {
      //勾选or取消勾选
      handleCheck(id){
        //通知App组件将对应todo对象的done取反
        // this.checkTodo(id)
        this.$bus.$emit('checkTodo',id)
      },
      //删除
      handleDelete(id){
        if(confirm('确定删除吗？')){
          //通知App组件将对应todo对象删除
          // this.deleteTodo(id)
          // this.$bus.$emit('deleteTodo',id)
          pubsub.publish('deleteTodo',id)
        }
      },

      //编辑
      handleEdit(todo){
        //todo.isEdit = true;
        //上面写不是响应式的，强行加入一个isEdit属性
        this.$set(todo,'isEdit',true)
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
  li:hover {
    background-color: #ddd;
  }
  /* 鼠标悬停，按钮显示 */
  li:hover button {
    display: block;
  }

</style>