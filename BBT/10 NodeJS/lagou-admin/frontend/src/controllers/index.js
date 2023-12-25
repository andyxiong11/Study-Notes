// 首页
import indexTpl from '../views/index.art'
import {auth as authModel} from '../models/auth-index.js'
import pageHeader from "../components/pageheader.js";

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

    }else{
      router.go('/signin')
    }
  }
}

export default index //登录逻辑抽离放在signin.js