- public 静态网页
- src/assets 静态资源：图片、视频
- components 组件
- .gitignore 配置不被git识别的文件
- babel.config.js ES6转ES5，babel的配置
- package.json 包的说明
  - 短命令
    - server 启动项目
    - build 构建，转换成.html、.css、.js
    - lint 语法检查
- package-lock.json 包的版本控制
- README.md 项目说明

/*
该文件是整个项目的入口文件
件*/
//引入Vue
import Vue from 'vue'
//引入App组件，它是所有组件的父组件
import App from './App.vue'
//关闭vue的生产提示
Vue.config.productionTip = false
//创建Vue实例对象--vm
new Vue({
//下面这行代码一会解释，完成了这个功能：将App组件放入容器中
render:h => h(App),
}).$mount('#app')
