// 职位管理 
import positiosTpl from '../../views/positions.art'
import positionAddTpl from '../../views/positions-add.art'
import positionListTpl from '../../views/positions-list.art'

import pagination from '../../components/pagination.js'
import page from '../../databus/page.js'

import {auth as authModel} from '../../models/auth-index.js'
import {positionsList,positionsAdd} from '../../models/positions.js'

let dataList = [] //后端用户总数
const pageSize = page.pageSize//每页数据数量

// 将数据渲染到页面
const _list = (pageNo)=>{
  let start = (pageNo-1) * pageSize //当前页第一条数据序号；因为页数从1开始所以减1
  $('#positions-list').html(positionListTpl({//使用usersListTpl模板将用户数据渲染到页面
    data:dataList.slice(start, start + pageSize)//当前页的数据，从第start条开始
  }))
}

// 从后端获取数据
const _loadData = async () => {
  const list = await positionsList() //ajax请求
  dataList = list

  //分页
  pagination(dataList)

  //将数据渲染到页面
  _list(page.curPage)
}

// 发布pageSize,curPage数据变化消息
const _subscribe = () => {
  $('body').off('changeCurPage').on('changeCurPage',(event,index)=>{//on必须给某个元素绑定事件，随机选择body
    // console.log(index);
    _list(index)//更新页面数据
    // console.log(page.curPage);
  }),
  $('body').off('addUser').on('addUser',()=>{//on必须给某个元素绑定事件，随机选择body
    _loadData()//向后端请求数据
  })
}

const listPositions = (router) => {
  return async (req,res,next) => {
    let result = await authModel()//ajax请求
    if(result.ret){//鉴权通过，是登录状态
      next()//因为使用异步的gp21-router替换了sme-router,所以需要next
      res.render(positiosTpl())

      /* const list = await positionsList()//查询接口返回的数据
      console.log(list);

      // 渲染list
      $('#positions-list').html(positionListTpl({
        data:list
      }))

      //分页
      pagination(list) */
      // 将用户管理的分页渲染数据逻辑复制过来，采用下面的方式
      _loadData()// 渲染职位列表list
      _subscribe()// 订阅消息

      // 职位添加
      $('#positions-list-box').after(positionAddTpl)//after渲染到positions-list-box样式元素之后
      $('#positions-save').off('click').on('click',async ()=>{
        const formbody = $('#position-form').serialize()//serialize获取表单提交的数据
        // console.log(formbody);
        let result = await positionsAdd(formbody)

        $('#positions-close').click()//关闭
      })//在positions模板渲染后，绑定添加职位事件

      
    }else{
      router.go('/signin')
    }
    
  }
}

export default listPositions