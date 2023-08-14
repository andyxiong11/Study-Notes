//该文件用于创建Vuex中最为核心的store
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//使用Vuex插件
Vue.use(Vuex)

//准备actions——用于响应组件中的动作
const actions = {
  // // jia:function() {
  // jia(context,value) {
  //   //context对象中存储actions之前的dispatch和之后的commit
  //   console.log("action中的jia被调用了",context,value);
  //   context.commit('JIA',value)
  // },
  // jian(context,value) {
  //   console.log("action中的jian被调用了",context,value);
  //   context.commit('JIAN',value)
  // },
  // 上面的函数只是传递并没有业务逻辑，可以在组件中直接调用mutations
  
  jianOdd(context,value) {
    console.log("action中的jianOdd被调用了",context,value);
    if(context.state.sum % 2){
      context.commit('JIA',value)
      //context.state.sum += value 此处也可以直接调用state操作数据
    }
  },
  //下面是context.dispatch用法的例子，需要多个地方处理
  // jianOdd(context,value) {
  //   console.log("action中的jianOdd被调用了",context,value);
  //   console.log('处理了一些事情——jianOdd');
  //   context.dispatch('demo1',value)
  // },
  // demo1(context,value) {
  //   console.log('处理了一些事情——demo1');
  //   context.dispatch('demo2',value)
  // },
  // demo2(context,value) {
  //   console.log('处理了一些事情——demo2');
  //   if(context.state.sum % 2){
  //     context.commit('JIA',value)
  //   }
  // },

  jianWait(context,value) {
    console.log("action中的jianWait被调用了",context,value);
    setTimeout(()=>{
      context.commit('JIA',value)
    },500)
  },
}

//准备mutations——用于操作数据(state)
const mutations = {
  JIA(state,value){//该函数一般大写
    //state类似_data 数据代理
    console.log("mutations中的JIA被调用了",state,value);
    state.sum += value;
  },
  JIAN(state,value){
    console.log("mutations中的JIAN被调用了",state,value);
    state.sum -= value;
  }
}

//准备state——用于存储数据
const state ={
  sum: 0
}

//准备getters——用于将state中的数据进行加工
const getters = {
  bigSum(state){
    return state.sum*10
  }
}

//创建store
// const store = new Vuex.Store({
//创建并暴露store
export default new Vuex.Store({
  // actions:actions,
  // mutations:mutations,
  // state:state,
  //下面为简写
  actions,
  mutations,
  state,
  getters
})
//暴露store
// export default store