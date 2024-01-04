// 首页
import indexTpl from '../views/index.art'
import {auth as authModel} from '../models/auth-index.js'
import pageHeader from "../components/pageheader.js";
import page from '../databus/page.js'

import img from '../assets/user2-160x160.jpg'

const index = (router)=>{
  return async (req, res, next) => {
    let result = await authModel()//ajax请求
    if(result.ret){//鉴权通过，是登录状态
      // res.render(indexTpl())
      const html = indexTpl({
        subRouter: res.subRoute(),//子路由
        img//渲染模板时加载图片
      })
      // 渲染首页
      next(html)//因为使用异步的gp21-router替换了sme-router,所以需要next

      // window resize 让页面高度撑满整个屏幕
      $(window,'.wrapper').resize()

      // 加载页面导航
      pageHeader()

      /* $('#sidebar-menu li:not(:first-child)').on('click',function() {
        const url = $(this).attr('to')//TODO.attr获取DOM元素上的跳转路由
        router.go(url)
        // $(this).addClass('active').siblings().removeClass('active')//此处添加样式有误,改为使用路由hash判断
      })
      let hash = location.hash.slice(1)//从第二个开始切=分割
      // console.log(hash);
      $('#sidebar-menu li:not(:first-child)').filter(`[to="${hash}"]`).addClass('active').siblings().removeClass('active')//给所有兄弟节点删除active高亮样式
      // console.log($('#sidebar-menu li:not(:first-child)').filter(`[to="${hash}"]`)); */
      // 下面的切换按钮高亮更复杂
      let hash = location.hash
      $('#sidebar-menu li:not(:first-child) a')
        .filter(`[href="${hash}"]`)
        .parent()
        .addClass('active')
        .siblings()
        .removeClass('active')
        
        // 切换（职位列表和用户列表）路由时reset重置分页页数，将分页功能公共数据分开
        // console.log(hash);
        // console.log(page.curRoute);
        // 是否重置page
        if(hash === page.curRoute){
          page.reset()
        }
        page.setCurRoute(hash)// 因为切换分页时也会重新绑定事件，所以需要记录上一次的路由判断路由是否变化

      // 退出登录事件，从controllers\users\list-user.js移入
      $('#users-signout').on('click',(e) => {//给退出按钮绑定事件
        e.preventDefault()//preventDefault方法去除a标签的跳转事件
        localStorage.setItem('lg-token','')
        location.reload()//刷新页面，走app.js重新鉴权进入登录页面
      })

      // 连接socket.io服务端
      var socket = io.connect('http://localhost:3000');
      // console.log('success');
      socket.on('message', function(msg){//利用message事件 收到服务端发的消息
        // console.log(msg);
        let num = ~~$('#icon-email').text()//TODO~~将字符串转换为整数
        // console.log(num);
        $('#icon-email').text(++num)
      })
    }else{
      router.go('/signin')
    }
  }
}

export default index //登录逻辑抽离放在signin.js