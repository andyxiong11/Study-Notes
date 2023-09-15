//引入Vue
import Vue from "vue";
//引入App
import App from './App.vue'
//关闭vue的生产提示
Vue.config.productionTip = false

//创建vm
new Vue({
  el: '#app',
  render: h => h(App),

  //以下代码仅用于验证销毁后所有组件实例的自定义事件全都不奏效，2023年脚手架优化原生事件也不奏效
  // mounted() {
  //   setTimeout(() => {
  //     this.$destroy()
  //   }, 3000);
  // },

})