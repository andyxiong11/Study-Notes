<template>
  <div>
    <!-- <h1 v-text="msg" id="title"></h1> -->
    <!-- 上面为原生的方法 -->
    <h1 v-text="msg" ref="title"></h1>

    <!-- <button @click="showDOM">点我输出上方元素</button> -->
    <button @click="showDOM" ref="btn">点我输出上方元素</button>

    <School ref="sch"/>
    <School/>
    <School/>
  </div>
</template>

<script>
import School from "./components/School.vue";
export default {
  name: 'App',
  data(){
    return {
      msg: "欢迎你！"
    }
  },
  methods: {
    showDOM(){
      // console.log(document.getElementById('title'));
      //上面为原生的方法
      console.log(this);//组件实例对象VueComponent
      console.log(this.$refs.title);//真实DOM元素
      console.log(this.$refs.btn);
      console.log(this.$refs.sch);//School组件的实例对象
    }
  },
  components:{School}
}
</script>