<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" />
    </label>
    <span> 
      <!-- <span>己完成0</span> / 全部2  -->
      <span>己完成{{ doneTotal }}</span> / 全部{{ todos.length }}
    </span>
    <button class="btn btn-danger">清除己完成任务</button>
  </div>
</template>

<script>
  export default {
    name: "MyFooter",
    props: ["todos"],
    computed: {
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
          
          //current 每一个todo对象
          return pre + (current.done ? 1 : 0)
        },0)
        //精简
        //return this.todos.reduce((pre,current) => pre + (current.done ? 1 : 0),0)
      }
    }
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