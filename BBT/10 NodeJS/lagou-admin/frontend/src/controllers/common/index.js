// 页面事件绑定，从controllers\users\list-user.js抽离,改造为公共方法
import * as removeModel from '../../models/remove.js'//TODOimport * as给所有包起别名
import page from '../../databus/page.js'

const pageSize = page.pageSize//每页数据数量

const remove = ({
  $box,
  url,
  loadData,
  state
})=>{
  // 事件绑定
  $box.on('click','.remove',async function(){//给$box样式下面的每一个.remove样式元素绑定删除事件
    length = state.list.length
    let result = await removeModel.remove({
      url,
      id: $(this).data('id')
    })//$(this).data('id') 当前点击的id ajax请求
    if(result.ret){//请求成功
      loadData()//重新获取用户数据渲染到页面
      const idLastPage = Math.ceil(length / pageSize) === page.curPage
      const restOne = length % pageSize === 1
      const notPageFirst = page.curPage > 0
      if(idLastPage && restOne && notPageFirst){//Math.ceil 向最大取整
        // curPage--
        page.setCurPage(page.curPage-1)//因分页功能抽离，当前页码为公共变量，需要手动更新当前页码
      }
    }
  })
}

export{
  remove
}