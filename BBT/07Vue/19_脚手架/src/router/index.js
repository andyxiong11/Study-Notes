//该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import Detail from '../pages/Detail.vue'

//创建一个路由器
// const router = new VueRouter({
//创建并暴露一个路由器
export default new VueRouter({
  routes:[
    {
      path:'/about',
      component:About
    },
    {
      path:'/home',
      component:Home,
      children:[
        {
          path:'news',//注意不要斜杠
          component:News
        },
        {
          path:'message',//注意不要斜杠
          component:Message,
          children:[
            {
              path:'detail',//注意不要斜杠
              component:Detail
            },
          ]
        }
      ]
    },
  ]
})

// export default router