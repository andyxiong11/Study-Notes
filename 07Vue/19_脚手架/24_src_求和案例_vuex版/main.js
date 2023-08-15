//引入Vue
import Vue from "vue";
//引入App
import App from './App.vue'
//关闭vue的生产提示
Vue.config.productionTip = false

//引入vuex
//import Vuex from 'vuex'
//使用插件 需要在store中使用，因为js首先执行所有的import后再执行Vue.use(Vuex)
//Vue.use(Vuex)

//引入store ./store默认引入文件夹下面的index.js
import store from './store'

//创建vm
new Vue({
  el: '#app',
  render: h => h(App),
  // store: store,
  store,
})