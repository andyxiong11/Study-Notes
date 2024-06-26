//求和相关的配置
// const countOptions = {
export default {
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

// export default countOptions