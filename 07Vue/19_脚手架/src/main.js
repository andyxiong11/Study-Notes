/*
该文件是整个项目的入口文件
件*/
//引入Vue
import Vue from 'vue'
//引入App组件，它是所有组件的父组件
import App from './App.vue'

//如果使用原始的方法注册引用组件，则需要修改
//import Vue from 'vue/dist/vue.js'

//关闭vue的生产提示
Vue.config.productionTip = false
//创建Vue实例对象--vm
new Vue({
  el: "#app",
  //下面这行代码一会解释，完成了这个功能：将App组件放入容器中
  render: h => h(App),

  //如果使用下面方法注册使用会报错，因为脚手架引入的是精简版的vue，缺少模板解析器
  //node_modules\vue\package.json中配置了"module": "dist/vue.runtime.esm.js"
  //可以在vue.runtime.esm.js第一行加入console.log验证引用了
  // template: "<App></App>",
  // components:{App}
})
//.$mount('#app')
