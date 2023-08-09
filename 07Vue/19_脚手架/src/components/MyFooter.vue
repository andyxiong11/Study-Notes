<template>
  <div class="todo-footer" v-show="total">
    <label>
      <input type="checkbox" v-model="isAll"/>
    </label>
    <span> 
      <span>己完成{{ doneTotal }}</span> / 全部{{ total }}
    </span>
    <button class="btn btn-danger" @click="cleanAll">清除己完成任务</button>
  </div>
</template>

<script>
  export default {
    name: "MyFooter",
    props: ['todos'],
    computed: {
      //总数
      total(){
        return this.todos.length
      },

      //统计勾选的数量
      doneTotal(){
        return this.todos.reduce((pre,current) => {
          return pre + (current.done ? 1 : 0)
        },0)
      },

      //选项全部勾选时，勾选全部
      isAll:{
        get(){
          return this.doneTotal === this.total && this.total > 0;
        },
        set(value){
          //this.checkAllTodo(value);
          this.$emit('checkAllTodo',value)
        }
      }
    },
    methods: {
      //勾选全部时，选项全部勾选
      cleanAll(){
        //this.clearAllTodo();
        this.$emit('clearAllTodo')
      }
    },
  }
</script>

<style scoped>
  .todo-footer {
    height:40px;
    line-height:40px;
    padding-left:6px;
    margin-top:5px;
  }
  .todo-footer label {
    display:inline-block;
    margin-right:20px;
    cursor:pointer;
  }
  .todo-footer label input {
    position:relative;
    top:-1px;
    vertical-align:middle;
    margin-right:5px;
  }
  .todo-footer button {
    float:right;
    margin-top:5px;
  }

</style>