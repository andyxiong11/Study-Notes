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
      name:'about',
      path:'/about',
      component:About
    },
    {
      name:'home',
      path:'/home',
      component:Home,
      children:[
        {
          name:'news',
          path:'news',//注意不要斜杠
          component:News
        },
        {
          name:'message',
          path:'message',//注意不要斜杠
          component:Message,
          children:[
            {
              name:'detail',
              path:'detail/:id/:title',//注意不要斜杠
              component:Detail,

              //props的第一种写法，值为对象，该对象中的所有key-value都会以props的形式传给Detail组件.
              // props:{a:'1',b:'hello'},

              //props的第二种写法，值为布尔值，若布尔值为真，就会把该路由组件收到的所有params参数，以props的形式传给Detail组件，
              // props:true

              //props的第三种写法，值为函数,message组件中要改为query。该函数返回的对象中每一组key-value都会通过props传给Detail组件
              props($route){
                return {id:$route.query.id,title:$route.query.title}
              }
            },
          ]
        }
      ]
    },
  ]
})

// export default router