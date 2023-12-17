// 从controllers/index.js 抽离分页的方法

import usersListPagesTpl from '../views/uesers-pages.art'
import page from '../databus/page'

// 当前页码高亮
const _setPageActive = (index)=>{
  $('#users-page #users-page-list li:not(:first-child,:last-child)')
    .eq(index-1)//只有index当前页高亮
    .addClass('active')
    .siblings()
    .removeClass('active')
}

// 分页
const pagination = (data,pageSize) => {
  const total = data.length
  const pageCount = Math.ceil(total/pageSize)//页数
  const pageArray = new Array(pageCount)// 用页数生成一个数组
  console.log(pageArray);

  const htmlPage = usersListPagesTpl({
    pageArray
  })

  $('#users-page').html(htmlPage)//将分页功能渲染到页面上

  _setPageActive(page.curPage)//页码高亮

  _bindEvent(data,pageSize) //修复分页功能绑定事件失败（如果不在此处绑定，那么在首页导入该文件时就绑定事件，此时页面渲染未结束）
}

const _bindEvent = (data,pageSize) => {
  $('#users-page').on('click','#users-page-list li:not(:first-child,:last-child)',function(){//给分页页码绑定点击事件
    const index = $(this).index()
    /* _list(index)//查询点击页数的用户列表渲染到页面；更新页面数据放在changeCurPage消息发布中调用
    curPage = index //获取当前页码 */
    page.setCurPage(index)//更新当前页面页数
    $('body').trigger('changeCurPage',index)//trigger 触发changeCurPage事件
    _setPageActive(index)//页码高亮
  })
  $('#users-page').on('click','#users-page-list li:first-child',function(){//给前进按钮绑定事件
    if(page.curPage > 1){
      // curPage--
      page.setCurPage(page.curPage-1)//更新当前页面页数

      // _list(curPage)//重新渲染页面数据；更新页面数据放在changeCurPage消息发布中调用
      $('body').trigger('changeCurPage',page.curPage)//trigger 触发changeCurPage事件

      _setPageActive(page.curPage)//页码高亮
    }
  })
  $('#users-page').on('click','#users-page-list li:last-child',function(){//给后退按钮绑定事件
    if(page.curPage < Math.ceil(data.length / pageSize)){
      // curPage++
      page.setCurPage(page.curPage+1)//更新当前页面页数

      // _list(curPage)//重新渲染页面数据；更新页面数据放在changeCurPage消息发布中调用
      $('body').trigger('changeCurPage',page.curPage)//trigger 触发changeCurPage事件

      _setPageActive(page.curPage)//页码高亮
    }
  })
}

export default pagination