// 职位管理 
import positiosTpl from '../../views/positions.art'
import positionAddTpl from '../../views/positions-add.art'
import positionListTpl from '../../views/positions-list.art'

import pagination from '../../components/pagination.js'

import {auth as authModel} from '../../models/auth-index.js'

const listPositions = (router) => {
  return async (req,res,next) => {
    let result = await authModel()//ajax请求
    if(result.ret){//鉴权通过，是登录状态
      next()//因为使用异步的gp21-router替换了sme-router,所以需要next
      res.render(positiosTpl())

      // 渲染list
      $('#positions-list').html(positionListTpl({
        data:['a','a','a','a','a',]
      }))

      //分页
      pagination(['a','b','c','d'])

      // 职位添加
      $('#positions-list-box').after(positionAddTpl)//after渲染到positions-list-box样式元素之后
      $('#positions-save').off('click').on('click',()=>{
        const formbody = $('#position-form').serialize()//serialize获取表单提交的数据
        console.log(formbody);

        $('#positions-close').click()//关闭
      })//在positions模板渲染后，绑定添加职位事件

      
    }else{
      router.go('/signin')
    }
    
  }
}

export default listPositions