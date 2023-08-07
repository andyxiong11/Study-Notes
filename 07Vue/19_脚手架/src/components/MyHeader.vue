<template>
  <div class="todo-header">
    <!-- 第二种方法借助v-model 获取输入的值，建议不使用 -->
    <!-- <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="title" @keyup.enter="add"/> -->
    
    <!-- <input type="text" placeholder="请输入你的任务名称，按回车键确认"  @keyup.enter="add"/> -->

    <!-- 因为event.target.value是直接操作DOM，所以还是需要使用v-model="title" -->
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="title" @keyup.enter="add"/>
    TODO:上方输入框的暗文不显示，待排查
  </div>
</template>

<script>
  import {nanoid} from 'nanoid'
  export default {
    name: "MyHeader",
    //第二种方法借助v-model 获取输入的值，建议使用第一种
    // data() {
    //   return {
    //     title: " "
    //   }
    // },
    //因为event.target.value是直接操作DOM，所以还是需要使用v-model="title"
    data() {
      return {
        title: " "
      }
    },

    methods: {
      //以下添加的主要思路是，将MyList中的todos放到App组件上，调用App组件上的addTodo方法将新增的todoObj传给App组件，将其添加到todos

      add(event){
        //校验数据不能为空
        if(!this.title) return alert("输入不能为空");
        //第一种方法获取输入的值
        //console.log(event.target.value); 

        //将用户的输入包装成一个todo对象，需要安装"npm i nanoid"
        // const todoObj = {id: nanoid(), title: event.target.value, done: false};//实际环境，id由服务器返回；此处可以用uuid或manoid
        //因为上面event.target.value是直接操作DOM，所以还是需要使用v-model="title"
        const todoObj = {id: nanoid(), title: this.title, done: false};
        
        //此处要将新增的todoObj传给MyList，需要将MyList中的todos放到App组件上，就都可以访问了
        
        //通知App组件添加一个todo对象（接收App上的addTodo方法，调用将新增的todoObj传给App.vue）
        this.addTodo(todoObj);
        
        //清空输入框
        //event.target.value = "";//新增todo后将输入框清空，也可以使用v-model
        this.title = "";
      }
    },
    //addTodo 接收App上的addTodo方法
    props: ['addTodo']
  }
</script>

<style scoped>
  /*header*/
  .todo-header input{
    width:560px;
    height:28px;
    font-size:14px;
    border:1px solid #ccc;
    border-radius:4px;
    padding:4px 7px;
  }
  .todo-header input:focus {
    outline:none;
    border-color:rgba(82,168,236,0.8);
    box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),00 8px rgba(82,168,236,0.6);
  }

</style>