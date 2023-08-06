<!-- 第一步将写好的html页面中的body结构和样式放入App.vue -->
<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <!-- 第二步 将header结构拿走替换为组件 <MyHeader/> -->
        <!-- <div class="todo-header">
          <input type="text" placeholder="请输入你的任务名称，按回车键确认"/>
        </div> -->
        <MyHeader/>
        <!-- 第二步 将list结构拿走替换为组件 <MyList/> -->
        <!-- 第三步将MyList.vue中的li标签替换为<MyItem/> -->
        <!-- <ul class="todo-main">
          <li>
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
          </li>
        </ul> -->
        <MyList/>
        <!-- 第二步 将footer结构拿走替换为组件 <MyFooter/> -->
        <!-- <div class="todo-footer">
          <label>
            <input type="checkbox" />
          </label>
          <span> 
            <span>己完成0</span> / 全部2 
          </span>
          <button class="btn btn-danger">清除己完成任务</button>
        </div> -->
        <MyFooter/>
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
//MyList组件里面包含MyItem所以不用引入
//import MyItem from './components/MyItem.vue'
import MyList from "./components/MyList.vue";
import MyFooter from "./components/MyFooter.vue";

export default {
  name: "App",
  components: {
    MyHeader,
    //MyItem,
    MyList,
    MyFooter,
  },
};
</script>
<style>
  /* base 公共样式 */
  body {
    background: #fff;
  }
  .btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
  }
  .btn-danger {
    color:#fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
  }
  .btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
  }
  .btn:focus {
    outline: none;
  }
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding:10px;
    border:1px solid #ddd;
    border-radius:5px;
  }
  
  /*header 下面是header的样式 放到MyHeader组件 */
  /* .todo-header input{
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
  } */
  
  /*main 下面是list的样式 放到MyList组件 */
  /* .todo-main {
    margin-left:0px;
    border:1px solid #ddd;
    border-radius:2px;
    padding:0px;
  }
  .todo-empty {
    height:40px;
    line-height:40px;
    border:1px solid #ddd;
    border-radius:2px;
    padding-left:5px;
    margin-top:10px;
  } */
  
  /*item 下面是item的样式 放到MyItem组件 */
  /* li {
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
  } */
  
  /*footer  下面是footer的样式 放到MyFooter组件 */
  /* .todo-footer {
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
  } */
</style>