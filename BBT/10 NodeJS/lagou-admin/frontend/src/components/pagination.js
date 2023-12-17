// 从controllers/index.js 抽离分页的方法

import usersListPagesTpl from '../views/uesers-pages.art'

// 当前页码高亮
const _setPageActive = (index)=>{
  $('#users-page #users-page-list li:not(:first-child,:last-child)')
    .eq(index-1)//只有index当前页高亮
    .addClass('active')
    .siblings()
    .removeClass('active')
}

// 分页
const pagination = (data) => {
  const total = data.length
  const pageCount = Math.ceil(total/pageSize)//页数
  const pageArray = new Array(pageCount)// 用页数生成一个数组
  console.log(pageArray);

  const htmlPage = usersListPagesTpl({
    pageArray
  })

  $('#users-page').html(htmlPage)//将分页功能渲染到页面上

  _setPageActive(curPage)//页码高亮
}

$('#users-page').on('click','#users-page-list li:not(:first-child,:last-child)',function(){//给分页页码绑定点击事件
  const index = $(this).index()
  _list(index)//查询点击页数的用户列表渲染到页面
  curPage = index //获取当前页码
  _setPageActive(index)//页码高亮
})
$('#users-page').on('click','#users-page-list li:first-child',function(){//给前进按钮绑定事件
  if(curPage > 1){
    curPage--
    _list(curPage)//重新渲染页面数据
    _setPageActive(curPage)//页码高亮
  }
})
$('#users-page').on('click','#users-page-list li:last-child',function(){//给后退按钮绑定事件
  if(curPage < Math.ceil(dataList.length / pageSize)){
    curPage++
    _list(curPage)//重新渲染页面数据
    _setPageActive(curPage)//页码高亮
  }
})

export default pagination