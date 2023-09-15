/*
该文件是整个项目的入口文件
件*/
//引入Vue
import Vue from 'vue'
//引入App组件，它是所有组件的父组件
import App from './App.vue'

//如果使用原始的方法注册引用组件，则需要修改
//import Vue from 'vue/dist/vue.js'

// 关于不同版本的Vue:
//   1.vue,js与vue,runtime.xxx,js的区别：
//   (1).vue.js是完整版的Vue,包含：核心功能+模板解析器。
//   (2).vue.runtime.xxx.js是运行版的Vue,只包含：核心功能：没有模板解析器。
//   2.因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要使用
//     render函数接收到的createElement函数去指定具体内容，


//关闭vue的生产提示
Vue.config.productionTip = false
//创建Vue实例对象--vm
new Vue({
  el: "#app",
  //下面这行代码完成了这个功能：将App组件放入容器中
  //render: h => h(App), //官方写法
  render(createElement) {//自己写,最后可以简写为官方写法的箭头函数，因为是组件所以不用写两个参数及引号
    console.log('rander');
    console.log(typeof(createElement));//createElement是个函数,作用创建元素
    //createElement('h1','你好啊'); //还需要将其返回
    
    //return null;//必须有一个返回值
    //return createElement('h1','你好啊');
    return createElement(App);
  },

  //如果使用下面方法注册使用会报错，需要使用第8行引入，因为脚手架引入的是精简版的vue（避免webpack打包时将模板解析器加进去徒增大小），缺少模板解析器
  //node_modules\vue\package.json中配置了"module": "dist/vue.runtime.esm.js"
  //可以在vue.runtime.esm.js第一行加入console.log验证引用了
  // template: "<App></App>",
  // components:{App}
})
//.$mount('#app') 用el: "#app"代替