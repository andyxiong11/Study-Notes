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
    <MyItem/>
    <MyItem/>
</ul>
</template>

<script>
  import MyItem from './MyItem.vue';
  export default {
    name: "MyList",
    components:{
      MyItem
    }
  }
</script>

<style scoped>
  .todo-main {
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
  }

</style>