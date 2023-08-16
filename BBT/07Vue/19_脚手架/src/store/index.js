//该文件用于创建Vuex中最为核心的store
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//使用Vuex插件
Vue.use(Vuex)

//求和相关的配置
const countOptions = {
  namespaced:true,//开启后。Count组件才能通过mapState取到countOptions中state的数据
  //准备actions——用于响应组件中的动作
  actions: {
    jianOdd(context,value) {
      console.log("action中的jianOdd被调用了",context,value);
      if(context.state.sum % 2){
        context.commit('JIA',value)
      }
    },
    jianWait(context,value) {
      console.log("action中的jianWait被调用了",context,value);
      setTimeout(()=>{
        context.commit('JIA',value)
      },500)
    },
  },
  //准备mutations——用于操作数据(state)
  mutations: {
    JIA(state,value){//该函数一般大写
      //state类似_data 数据代理
      console.log("mutations中的JIA被调用了",state,value);
      state.sum += value;
    },
    JIAN(state,value){
      console.log("mutations中的JIAN被调用了",state,value);
      state.sum -= value;
    },
  },
  //准备state——用于存储数据
  state: {
    sum: 0,
    school: '光谷',
    subject: '前端',
  },
  //准备getters——用于将state中的数据进行加工
  getters: {
    bigSum(state){
      return state.sum*10
    }
  }
}

//人员管理相关的配置
const personOptions = {
  namespaced:true,//开启后。Count组件才能通过mapState取到countOptions中state的数据
  //准备actions——用于响应组件中的动作
  actions: { 
    addPersonWang(context,value){
      if (value.name.indexOf('王') === 0) {
        context.commit('ADD_PERSON',value)
      }else{
        alert('添加的人必须姓王')
      }
    }
   },
  //准备mutations——用于操作数据(state)
  mutations: {
    ADD_PERSON(state,value){
      console.log("mutations中的ADD_PERSON被调用了",state,value);
      state.personList.unshift(value)
    }
  },
  //准备state——用于存储数据
  state: {
    personList:[
      {id:'001',name:'张三'}
    ]
  },
  //准备getters——用于将state中的数据进行加工
  getters: { 
    firstPersonName(state){
      return state.personList[0].name
    }
   }
}


//创建store
// const store = new Vuex.Store({
//创建并暴露store
export default new Vuex.Store({
  modules:{
    countAbout:countOptions,
    personAbout:personOptions
  }
})
//暴露store
// export default store