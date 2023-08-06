<template>
  <!-- <div class="todo-footer" v-show="total"> -->
  <!-- 没有选项时不展示 -->
  <div class="todo-footer" v-show="total">
    <label>
      <!-- <input type="checkbox" /> -->
      <!-- 选项全部勾选时，勾选全部 -->
      <!-- <input type="checkbox" :checked="doneTotal === total" /> -->
      <!-- 结构中不建议用表达式 -->
      <!-- <input type="checkbox" :checked="isAll"/> -->
      <!-- 勾选全部时，选项全部勾选 -->
      <input type="checkbox" :checked="isAll" @change="checkAll"/>
      <!-- 采用下面的方法，勾选全选时会报错，因为下面的计算属性没有setter不允许修改，需要安装64行修改 -->
      <!-- <input type="checkbox" v-model="isAll"/> -->
    </label>
    <span> 
      <!-- <span>己完成0</span> / 全部2  -->
      <span>己完成{{ doneTotal }}</span> / 全部{{ total }}
    </span>
    <button class="btn btn-danger" @click="cleanAll">清除己完成任务</button>
  </div>
</template>

<script>
  export default {
    name: "MyFooter",
    props: ["todos","checkAllTodo","clearAllTodo"],
    computed: {
      total(){
        return this.todos.length
      },

      //统计勾选的数量
      doneTotal(){
        //第一种方法
        // let i = 0;
        // this.todos.forEach((todo) => {
        //   if(todo.done) i++;
        // })
        // return i

        //第二种方法
        //return this.todos.filter((todo) => todo.done).length

        //第三种方法
        return this.todos.reduce((pre,current) => {
          //todos有3个数据，运行3次
          //第一次运行的pre为第二个参数0，后面每一次的pre取第一次运行的返回值，因为没有return，所以undefined   
          //console.log('@',pre);//0 undefined undefined 
          
          //current 每一个todo对象,勾选时+1
          return pre + (current.done ? 1 : 0)
        },0)
        //精简
        //return this.todos.reduce((pre,current) => pre + (current.done ? 1 : 0),0)
      },

      //选项全部勾选时，勾选全部
      isAll(){
        // return this.doneTotal === this.total;
        //修复bug，当没有选项时不能全选
        return this.doneTotal === this.total && this.total > 0;
      },
      //以下为14行写法必须写的，且不用写checkAll方法
      // isAll:{
      //   get(){
      //     return this.doneTotal === this.total && this.total > 0;
      //   },
      //   set(value){
      //     //console.log(value);
      //     this.checkAllTodo(value);
      //   }
      // }
    },
    methods: {
      //勾选全部时，选项全部勾选
      checkAll(event){
        //是否勾选
        //console.log(event.target.checked);

        this.checkAllTodo(event.target.checked);
      },
      cleanAll(){
        this.clearAllTodo();
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