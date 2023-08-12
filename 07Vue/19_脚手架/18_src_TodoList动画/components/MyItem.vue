<template>
  <!-- 该过渡动画也可以加在 MyList组件 -->
  <transition name="todo" appear>
    <li>
      <label>
        <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
        <!-- 如下代码也能实现功能，但是不太推荐，因为有点违反原则，因为修改了props -->
        <!-- <input type="checkbox" v-model="todo.done"/> -->
        <span v-show="!todo.isEdit">{{ todo.title }}</span>
        <!-- blur失焦时触发 -->
        <input 
          v-show="todo.isEdit" 
          type="text" 
          :value="todo.title"
          @blur="handleBlur(todo,$event)"
          ref="inputTitle">
      </label>
      <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
      <button v-show="!todo.isEdit" class="btn btn-edit" @click="handleEdit(todo)">编辑</button>
    </li>
  </transition>
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
        if (todo.hasOwnProperty('isEdit')) {
          todo.isEdit = true;
        }else{
          console.log("todo没有isEdit");
          this.$set(todo,'isEdit',true)
        }

        //$nextTick DOM更新后再执行聚焦，也可以用定时器
        this.$nextTick(function() {
          this.$refs.inputTitle.focus()
        })
      },

      //失去焦点回调（真正实现修改逻辑）
      handleBlur(todo,event){
        todo.isEdit = false;
        //.trim去掉前后输入的空格
        if(!event.target.value.trim()) return alert('输入不能为空')
        //console.log('updateTodo',todo.id,event.target.value);
        this.$bus.$emit('updateTodo',todo.id,event.target.value)
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

  /* 进入 */
  .todo-enter-active{
    animation: atguigu 0.5s linear;
  }

  /* 离开动画 */
  .todo-leave-active{
    animation: atguigu 0.5s linear reverse;
  }

  /* 动画 */
  @keyframes atguigu{
    from{
      transform: translateX(100%);
    }
    to{
      transform: translateX(0px);
    }
  }

</style>