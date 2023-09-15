//引入Vue
import Vue from "vue";
//引入App
import App from './App.vue'
//关闭vue的生产提示
Vue.config.productionTip = false

//在Vue的原型上添加x，让所有组件的vc都能访问，详见“BBT\07Vue\17_非单文件组件\5.一个重要的内置关系.html”
// Vue.prototype.x = {a:1, b:2} Student和School组件中有调用

//console.log(Vue.prototype);//Vue的原型对象上有$emit、$off、$on、$once

//第一种写法，在Vue原型对象上加一个vc
// const Demo = Vue.extend({})//Demo VueComponent
// const d = new Demo()//d是vc实例对象，原本是Vue.extend创建完然后注册组件使用<Demo/>才可以得到，现在直接new
// Vue.prototype.x = d //在Vue原型对象上加一个x，

//第二种写法，在Vue原型对象上加一个vm
//Vue.prototype.x = vm //此时vm没有创建，也不能放在vm创建之后，需要使用beforeCreate

//创建vm
new Vue({
  el: '#app',
  render: h => h(App),
  beforeCreate(){
    //安装全局事件总线
    Vue.prototype.$bus = this;//this指向vm实例对象
  }
})