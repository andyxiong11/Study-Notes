//引入Vue
import Vue from "vue";
//引入App
import App from './App.vue'
import { mixin,mixin2 } from "./mixin.js";
//引入插件
import plugins from './plugins.js'
//关闭vue的生产提示
Vue.config.productionTip = false

//全局混合
// Vue.mixin(mixin)
// Vue.mixin(mixin2)

//应用（使用）插件
Vue.use(plugins,1,2,3)//允许自定义传参

//创建vm
new Vue({
  el: '#app',
  render: h => h(App)
})