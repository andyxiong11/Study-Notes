// 职位管理 
import positiosTpl from '../../views/positions.art'
import positionAddTpl from '../../views/positions-add.art'
import positionListTpl from '../../views/positions-list.art'

import pagination from '../../components/pagination.js'
import page from '../../databus/page.js'

import {auth as authModel} from '../../models/auth-index.js'
import {positionsList,positionsAdd} from '../../models/positions.js'

import {addPosition} from '../positions/add-position.js'
import {updatePosition,fillPositionUpdateTpl} from '../positions/update-position.js'
import {remove} from '../common/index.js'

// let dataList = [] //后端用户总数 改成对象，解决删除逻辑封装后，删除最后一个用户，页面没有重新渲染数据
let state = {
  list:[]
} //后端用户总数 改成对象
const pageSize = page.pageSize//每页数据数量

// 将数据渲染到页面
const _list = (pageNo)=>{
  let start = (pageNo-1) * pageSize //当前页第一条数据序号；因为页数从1开始所以减1
  $('#positions-list').html(positionListTpl({//使用usersListTpl模板将用户数据渲染到页面
    data:state.list.slice(start, start + pageSize)//当前页的数据，从第start条开始
  }))
}

// 从后端获取数据
const _loadData = async () => {
  const list = await positionsList() //ajax请求
  state.list = list

  //分页
  pagination(list)

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
  $('body').off('addPositionUser').on('addPosition',()=>{//on必须给某个元素绑定事件，随机选择body
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

      addPosition()//职位添加

      /* 职位添加抽离到add-position.js
      // 职位添加
      $('#positions-list-box').after(positionAddTpl)//after渲染到positions-list-box样式元素之后
      $('#positions-save').off('click').on('click',async ()=>{
        const formbody = $('#position-form').serialize()//serialize获取表单提交的数据
        // console.log(formbody);
        let result = await positionsAdd(formbody)

        $('#positions-close').click()//关闭
      })//在positions模板渲染后，绑定添加职位事件 */

      // 职位删除
      remove({
        $box:$('#positions-list'),
        // dataList, 改成state
        state,//传递一个引用类型的state，在删除组件实施获取数据条数
        url:'/api/positions/remove',
        loadData:_loadData
      })

      // 职位编辑
      /* $('#positions-list')
        .off('click')
        .on('click','.positions-update',function(){
          updatePosition($(this).data('id'))//职位修改
        }) */
      // 改造解决弹窗没有渲染,第一次点击编辑无法打开
      updatePosition()
      $('#positions-list')
        .off('click','.positions-update')//'.positions-update'防止将删除事件也解绑
        .on('click','.positions-update',function(){
          fillPositionUpdateTpl($(this).data('id'))//职位修改
        })

    }else{
      router.go('/signin')
    }
    
  }
}

export default listPositions