//该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import About from '../components/About.vue'
import Home from '../components/Home.vue'

//创建一个路由器
// const router = new VueRouter({
//创建并暴露一个路由器
export default new VueRouter({
  routers:[
    {
      path:'/abput',
      comment:About
    },
    {
      path:'/home',
      comment:Home
    },
  ]
})

// export default router