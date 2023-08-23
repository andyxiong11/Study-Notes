//该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import Detail from '../pages/Detail.vue'

//创建并暴露一个路由器
const router =  new VueRouter({
  routes:[
    {
      name:'about',
      path:'/about',
      component:About,
      meta:{title:'关于'},
    },
    {
      name:'home',
      path:'/home',
      component:Home,
      meta:{title:'主页'},
      children:[
        {
          name:'news',
          path:'news',//注意不要斜杠
          component:News,
          // 只有meta中可以加属性
          meta: {isAuth:true,title:'新闻'},
          beforeEnter: (to, from, next) => {
            console.log("独享路由守卫",to,from);
            if(to.meta.isAuth){
              if (localStorage.getItem('school') === 'guanggu') {
                next()
              }else{
                alert('学校名不对，无权限查看')
              }
            }else{
              next()
            }
          }
        },
        {
          name:'message',
          path:'message',//注意不要斜杠
          component:Message,
          // 只有meta中可以加属性
          meta: {isAuth:true,title:'消息'},
          children:[
            {
              name:'detail',
              path:'detail/:id/:title',//注意不要斜杠
              component:Detail,
              // 只有meta中可以加属性
              meta: {isAuth:true,title:'详情'},

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

//全局前置路由守卫——初始化的时候被调用、每次路由切换之前被调用
// router.beforeEach((to,from,next)=>{
//   console.log("前置路由守卫",to,from);
//   // next();
  
//   // 只有需要校验的路由组件才做判断，鉴权
//   if(to.meta.isAuth){
//     if (localStorage.getItem('school') === 'guanggu') {
//       next()
//     }else{
//       alert('学校名不对，无权限查看')
//     }
//   }else{
//     next()
//   }
// })

//全局后置路由守卫——初始化的时候被调用、每次路由切换之后被调用
router.afterEach((to,from)=>{
    console.log("后置路由守卫",to,from);
    // 路由组件鉴权通过后更改页签
    document.title = to.meta.title || '光谷系统';
  }
)

export default router