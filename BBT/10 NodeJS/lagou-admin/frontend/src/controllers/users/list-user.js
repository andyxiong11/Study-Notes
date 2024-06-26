// 该文件原本是首页的逻辑,首页逻辑已抽离,现为用户列表的逻辑
import indexTpl from '../../views/index.art'
import signinTpl from '../../views/signin.art'
import usersTpl from '../../views/users.art'
import usersListTpl from '../../views/users-list.art'
// import usersListPagesTpl from '../views/uesers-pages.art'

// import router from '../../routers/index.js'
import pagination from '../../components/pagination.js'
import page from '../../databus/page.js'

import {addUser} from './add-users.js'

import {usersList as usersListModel} from '../../models/users-list.js'//as别名
import {auth as authModel} from '../../models/auth-index.js'
// import {usersRemove as usersRemoveModel} from '../../models/users-remove.js'

import {remove} from '../common/index.js'

const htmlIndex = indexTpl({})
const htmlSignin = signinTpl({})
/* const pageSize = 5 //每页10条；公共常量，从分页的逻辑模块中提取出来
let curPage = 1 //当前页码 写成公共响应式变量 databus/page.js*/

// let dataList = [] //后端用户总数 改成对象，解决删除逻辑封装后，删除最后一个用户，页面没有重新渲染数据
let state = {
  list:[]
} //后端用户总数 改成对象

const pageSize = page.pageSize//每页数据数量

// 点击登录按钮
/* 登录逻辑抽离放在signin.js
const _handleSubmit = (router) => {
  return (e)=>{
    e.preventDefault();//阻止表单跳转
    // router.go('/index')

    const data = $('#signin').serialize()
    $.ajax({
      url:'/api/users/signin',
      type:'post',
      dataType:'json',
      data,
      success: function(res){
        if(res.ret){//后端响应ret为真，数据存在
          router.go('/index')
        }
      }
    })
  }
} */

// 注册操作放在src\controllers\users\add-users.js
// // 注册表单提交事件
// const _signup = ()=>{
//   const $btnClose = $('#users-close')

//   // 提交表单
//   const data = $('#users-form').serialize()
//   console.log(data);
//   $.ajax({
//     url:'/api/users',//后端接口地址
//     type:'post',
//     headers:{
//       'X-Access-Token':localStorage.getItem('lg-token') || ''//将token传给后端，防止外部直接请求接口
//     },
//     data,
//     // success: async (res)=>{
//     success(res){//因为提交表单中await不生效，所以将_list(1)放在_loadData中
//       // console.log(res);
//       // _list(1)//重新请求用户查询接口，刷新页面数据

//       /* await _loadData()//因在_list中调用分页会有问题,将页面渲染与用户数据获取分离;因控制台提示_loadData同步请求会影响用户体验，所以做await
//       _list(1)//因在_list中调用分页会有问题,将页面渲染与用户数据获取分离 */
      
//       page.setCurPage(1)//因分页功能抽离，当前页码为公共变量，需要手动更新当前页码为1
//       _loadData()//因为提交表单中await不生效，所以将_list(1)放在_loadData中
//     }
//   })

//   // 关闭注册弹窗
//   $btnClose.click()
// }

// 将分页的两个方法抽离封装 components/pagination.js
// // 当前页码高亮
// const _setPageActive = (index)=>{
//   $('#users-page #users-page-list li:not(:first-child,:last-child)')
//     .eq(index-1)//只有index当前页高亮
//     .addClass('active')
//     .siblings()
//     .removeClass('active')
// }

// // 分页
// const _pagination = (data) => {
//   // const pageSize = 5 //每页10条
//   const total = data.length
//   const pageCount = Math.ceil(total/pageSize)//页数
//   const pageArray = new Array(pageCount)// 用页数生成一个数组
//   console.log(pageArray);

//   const htmlPage = usersListPagesTpl({
//     // pageCount
//     pageArray
//   })

//   $('#users-page').html(htmlPage)//将分页功能渲染到页面上

//   //$('#users-page-list li:nth-child(2)').addClass('active') //第一此渲染页面，第一页按钮高亮；因为将给页码绑定点击事件（高亮样式）移至index首页绑定，首页每次渲染时给当前页添加样式，所以此处不需要再单独添加样式
//   /* $('#users-page-list li:not(:first-child,:last-child').on('click',function(){//给页数绑定点击事件
//     const index = $(this).index()
//     // :not 排除第一个和最后一个li，防止前一页和后一页按钮样式变化
//     $(this).addClass('active').siblings().removeClass('active')//给当前li添加active样式，其他的兄弟节点删除active样式
//     // console.log($(this).index())//当前的页数
//     _list(index)//查询点击页数的用户列表渲染到页面
//     curPage = index //获取当前页码
//   }) //将给页码绑定点击事件（高亮样式）移至index首页绑定*/

//   _setPageActive(curPage)//页码高亮
// }

// 查询用户列表（将数据渲染到页面）
const _list = (pageNo)=>{
  /* $.ajax({
    url:'/api/users/list',//后端接口地址
    type:'get',
    success(result){
      // console.log(result);
      let start = (pageNo-1) * pageSize //当前页第一条数据序号；因为页数从1开始所以减1
      $('#users-list').html(usersListTpl({//使用usersListTpl模板将用户数据渲染到页面
        // data:result.data
        data:result.data.slice(start, start + pageSize)//当前页的数据，从第start条开始
      }))

      // 分页；此处逻辑有问题，点击非第一页时，调用_list刷新页面用户数据，然后会调用_pagination，将第一页按钮高亮
      // 解决方案，将页面渲染与用户数据获取分离
      _pagination(result.data)
    }
  }) */

  // 将页面渲染与用户数据获取分离
  let start = (pageNo-1) * pageSize //当前页第一条数据序号；因为页数从1开始所以减1
  $('#users-list').html(usersListTpl({//使用usersListTpl模板将用户数据渲染到页面
    // data:result.data
    data:state.list.slice(start, start + pageSize)//当前页的数据，从第start条开始
  }))
}

// 将页面渲染与用户数据获取分离（从后端获取数据）
const _loadData = async () => {
  /* ajax请求移出到src\models\users-list.js
  // return $.ajax({//将ajax请求返回promise，做await
  $.ajax({  //因为提交表单中await不生效，所以不做await，将_list(1)放在_loadData中
    url:'/api/users',//后端接口地址
    type:'get',
    // TODOajax属性，修改为同步请求
    // 等数据响应后再渲染
    // async: false,//因控制台提示同步请求会影响用户体验，所以不使用同步。直接将ajax请求返回promise，做await
    headers:{
      'X-Access-Token':localStorage.getItem('lg-token') || ''//将token传给后端，防止外部直接请求接口
    },
    success(result){
      dataList = result.data

      // 分页；因在_list中调用分页会有问题,将页面渲染与用户数据获取分离
      // _pagination(result.data)
      pagination(result.data,page.pageSize)//分页相关功能已抽离至components/pagination.js

      _list(page.curPage)//因为提交表单中await不生效，所以不做await，将_list(1)放在_loadData中
    }
  }) */
  let result = await usersListModel() //ajax请求

  // dataList = result.data 改成对象，解决删除逻辑封装后，删除最后一个用户，页面没有重新渲染数据
  state.list = result.data //改成对象

  pagination(result.data)//分页相关功能已抽离至components/pagination.js
  _list(page.curPage)
}

// 登录
/* 登录逻辑抽离放在signin.js
const signin = (router)=>{
  // TODO函数柯里化
  //一个函数需要接受传参时，再定义一个函数将其返回
  return (req, res, next) => {
    res.render(htmlSignin)
    
    $('#signin').on('submit',_handleSubmit(router))//给表单绑定事件
  }
} */


// 因为页面事件绑定抽离只剩删除事件，且职位管理也需要用，所以封装controllers\common\index.js
// // 页面事件绑定
// const _methods = ()=>{
//   // 事件绑定
//   $('#users-list').on('click','.remove',async function(){//TODO给#users-list下面的每一个.remove样式元素绑定删除事件
//     /* ajax请求移出到src\models\uesers-remove.js
//       $.ajax({
//       url:'/api/users',
//       type:'delete',
//       headers:{
//         'X-Access-Token':localStorage.getItem('lg-token') || ''//将token传给后端，防止外部直接请求接口
//       },
//       data:{
//         id:$(this).data('id')//$(this).data('id')可以获取当前点击的id
//       },
//       success(){
//         _loadData()//重新获取用户数据渲染到页面

//         // 解决：最后一页数据全部删除完，回到前一页
//         // 判断当前页是最后一页且当删除的是最后一条数据且当前页不是第一页；可能因为_loadData是异步，所以此时dataList是删除前的数据
//         const idLastPage = Math.ceil(dataList.length / page.pageSize) === page.curPage
//         const restOne = dataList.length % page.pageSize === 1
//         const notPageFirst = page.curPage > 0
//         if(idLastPage && restOne && notPageFirst){//Math.ceil 向最大取整
//           // curPage--
//           page.setCurPage(page.curPage-1)//因分页功能抽离，当前页码为公共变量，需要手动更新当前页码
//         }
//       }
//     }) */
//     let result = await usersRemoveModel($(this).data('id'))//$(this).data('id') 当前点击的id ajax请求
//     if(result.ret){//请求成功
//       _loadData()//重新获取用户数据渲染到页面
//       // 解决：最后一页数据全部删除完，回到前一页
//       // 判断当前页是最后一页且当删除的是最后一条数据且当前页不是第一页；可能因为_loadData是异步，所以此时dataList是删除前的数据
//       const idLastPage = Math.ceil(dataList.length / pageSize) === page.curPage
//       const restOne = dataList.length % pageSize === 1
//       const notPageFirst = page.curPage > 0
//       if(idLastPage && restOne && notPageFirst){//Math.ceil 向最大取整
//         // curPage--
//         page.setCurPage(page.curPage-1)//因分页功能抽离，当前页码为公共变量，需要手动更新当前页码
//       }
//     }
//   })
//   //将给页码绑定点击事件（高亮样式）移至index首页绑定
//   /* 分页相关事件绑定移至 components/pagination.js
//   $('#users-page').on('click','#users-page-list li:not(:first-child,:last-child)',function(){//给分页页码绑定点击事件
//     const index = $(this).index()
//     _list(index)//查询点击页数的用户列表渲染到页面
//     curPage = index //获取当前页码
//     _setPageActive(index)//页码高亮
//   })
//   $('#users-page').on('click','#users-page-list li:first-child',function(){//给前进按钮绑定事件
//     if(curPage > 1){
//       curPage--
//       _list(curPage)//重新渲染页面数据
//       _setPageActive(curPage)//页码高亮
//     }
//   })
//   $('#users-page').on('click','#users-page-list li:last-child',function(){//给后退按钮绑定事件
//     if(curPage < Math.ceil(dataList.length / pageSize)){
//       curPage++
//       _list(curPage)//重新渲染页面数据
//       _setPageActive(curPage)//页码高亮
//     }
//   }) */
//   // 退出登录事件移至controllers\index.js
//   // $('#users-signout').on('click',(e) => {//给退出按钮绑定事件
//   //   e.preventDefault()//TODOpreventDefault方法去除a标签的跳转事件
//   //   // router.go('/signin')

//   //   /* $.ajax({
//   //     url:'/api/users/signout',
//   //     dataType:'json',
//   //     success(result){
//   //       if(result.ret){//后端响应ret为真，请求成功
//   //         // console.log(result);
//   //         location.reload()//刷新页面，走app.js重新鉴权进入登录页面
//   //       }
//   //     }
//   //   }) 因为有token所以只需删除浏览器本地的token即可*/
//   //   localStorage.setItem('lg-token','')
//   //   location.reload()//刷新页面，走app.js重新鉴权进入登录页面
//   // })

//   // $('#users-save').on('click',_signup)// 点击保存，提交表单；该事件移到add-users.js
// }

// 发布pageSize,curPage数据变化消息
const _subscribe = () => {
  $('body').on('changeCurPage',(event,index)=>{//on必须给某个元素绑定事件，随机选择body
    // console.log(index);
    _list(index)//更新页面数据
    // console.log(page.curPage);
  }),
  $('body').on('addUser',()=>{//on必须给某个元素绑定事件，随机选择body
    _loadData()//向后端请求数据
  })
}

// 首页
const index = (router)=>{
  // 将首页的操作封装,在鉴权请求通过后执行，修复鉴权未通过执行首页后续操作控制台报错
  const loadIndex = async (res,next)=> {
    /* 该文件改名为有index.js改名为list-user.js,首页逻辑抽离到src\controllers\index.js
    res.render(htmlIndex)

    // window resize 让页面高度撑满整个屏幕
    $(window,'.wrapper').resize() */

    // 填充用户列表
    // $('#content').html(usersTpl())
    next()//因为使用异步的gp21-router替换了sme-router,所以需要next
    res.render(usersTpl())//首页逻辑已抽离.直接res.render
    $('#add-user-btn').on('click',addUser)//在user模板渲染后，绑定添加用户事件
    // 渲染用户列表list
    await _loadData()//需要await，否则remove方法拿不到dataList

    /* 将所有的事件绑定抽离封装 _methods
    // 事件绑定
    $('#users-list').on('click','.remove',function(){//TODO给#users-list下面的每一个.remove样式元素绑定删除事件
      $.ajax({
        url:'/api/users',
        type:'delete',
        data:{
          id:$(this).data('id')//$(this).data('id')可以获取当前点击的id
        },
        success(){
          _loadData()//重新获取用户数据渲染到页面

          // 解决：最后一页数据全部删除完，回到前一页
          // 判断当前页是最后一页且当删除的是最后一条数据且当前页不是第一页；可能因为_loadData是异步，所以此时dataList是删除前的数据
          const idLastPage = Math.ceil(dataList.length / pageSize) === curPage
          const restOne = dataList.length % pageSize === 1
          const notPageFirst = curPage > 0
          if(idLastPage && restOne && notPageFirst){//Math.ceil 向最大取整
            curPage--
          }
        }
      })
    })
    //将给页码绑定点击事件（高亮样式）移至index首页绑定
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
    $('#users-signout').on('click',(e) => {//给退出按钮绑定事件
      e.preventDefault()//TODOpreventDefault方法去除a标签的跳转事件
      // router.go('/signin')

      $.ajax({
        url:'/api/users/signout',
        dataType:'json',
        success(result){
          if(result.ret){//后端响应ret为真，请求成功
            // console.log(result);
            location.reload()//刷新页面，走app.js重新鉴权进入登录页面
          }
        }
      })
    }) */
    // _methods() 因为页面事件绑定抽离只剩删除事件，且职位管理也需要用，所以封装controllers\common\index.js
    remove({
      $box:$('#users-list'),
      // dataList, 改成state
      state,//传递一个引用类型的state，在删除组件实施获取数据条数
      url:'/api/users',
      loadData:_loadData
    })

    /* 将所有的事件绑定抽离封装 _methods
    $('#users-save').on('click',_signup)// 点击保存，提交表单 */
  
    // 订阅消息
    _subscribe()
  }

  // return async (req, res, next) => {
  return async (req, res, next) => {
    // ajax请求抽离，使用从src\routers\index.js文件移出的auth.js
    // //解决直接输入首页url进入首页，因无法渲染数据控制台报错
    // $.ajax({
    //   url:'/api/users/isAuth',
    //   dataType:'json',
    //   // async:false,//非异步请求
    //   headers:{
    //     'X-Access-Token':localStorage.getItem('lg-token') || ''//将token传给后端验证
    //   },
    //   success(result){
    //     // console.log(result);
    //     if(result.ret){//鉴权通过，是登录状态
    //       // router.go('/index')
    //       loadIndex(res)//将首页的操作封装,在鉴权请求通过后执行，修复鉴权未通过执行首页后续操作控制台报错
    //     }else{
    //       router.go('/signin')
    //     }
    //   }
    //   /* error: (e) => {
    //     console.log(e);
    //   } */
    // })
    let result = await authModel()//ajax请求
    if(result.ret){//鉴权通过，是登录状态
      // router.go('/index')
      loadIndex(res,next)//将首页的操作封装,在鉴权请求通过后执行，修复鉴权未通过执行首页后续操作控制台报错
    }else{
      router.go('/signin')
    }

    // 将首页的操作封装,在鉴权请求通过后执行，修复鉴权未通过执行首页后续操作控制台报错
    // res.render(htmlIndex)

    // // window resize 让页面高度撑满整个屏幕
    // $(window,'.wrapper').resize()

    // // 填充用户列表
    // /* let users = usersTpl
    // console.log(users); */
    // $('#content').html(usersTpl())

    // // 事件绑定
    // $('#users-list').on('click','.remove',function(){//TODO给#users-list下面的每一个.remove样式元素绑定删除事件
    //   $.ajax({
    //     url:'/api/users',
    //     type:'delete',
    //     data:{
    //       id:$(this).data('id')//$(this).data('id')可以获取当前点击的id
    //     },
    //     success(){
    //       _loadData()//重新获取用户数据渲染到页面

    //       // 解决：最后一页数据全部删除完，回到前一页
    //       // 判断当前页是最后一页且当删除的是最后一条数据且当前页不是第一页；可能因为_loadData是异步，所以此时dataList是删除前的数据
    //       const idLastPage = Math.ceil(dataList.length / pageSize) === curPage
    //       const restOne = dataList.length % pageSize === 1
    //       const notPageFirst = curPage > 0
    //       if(idLastPage && restOne && notPageFirst){//Math.ceil 向最大取整
    //         curPage--
    //       }
    //     }
    //   })
    // })
    // //将给页码绑定点击事件（高亮样式）移至index首页绑定
    // $('#users-page').on('click','#users-page-list li:not(:first-child,:last-child)',function(){//给分页页码绑定点击事件
    //   const index = $(this).index()
    //   _list(index)//查询点击页数的用户列表渲染到页面
    //   curPage = index //获取当前页码
    //   _setPageActive(index)//页码高亮
    // })
    // $('#users-page').on('click','#users-page-list li:first-child',function(){//给前进按钮绑定事件
    //   if(curPage > 1){
    //     curPage--
    //     _list(curPage)//重新渲染页面数据
    //     _setPageActive(curPage)//页码高亮
    //   }
    // })
    // $('#users-page').on('click','#users-page-list li:last-child',function(){//给后退按钮绑定事件
    //   if(curPage < Math.ceil(dataList.length / pageSize)){
    //     curPage++
    //     _list(curPage)//重新渲染页面数据
    //     _setPageActive(curPage)//页码高亮
    //   }
    // })
    // $('#users-signout').on('click',(e) => {//给退出按钮绑定事件
    //   e.preventDefault()//TODOpreventDefault方法去除a标签的跳转事件
    //   // router.go('/signin')

    //   $.ajax({
    //     url:'/api/users/signout',
    //     success(result){
    //       if(result.ret){//后端响应ret为真，请求成功
    //         console.log(result);
    //         location.reload()//刷新页面，走app.js重新鉴权进入登录页面
    //       }
    //     }
    //   })
    // })

    // // 渲染用户列表list
    // // _list(1)

    // /* await _loadData()//因在_list中调用分页会有问题,将页面渲染与用户数据获取分离;因控制台提示同步请求会影响用户体验，所以_loadData不使用同步请求，在index做await
    // _list(1)//因在_list中调用分页会有问题,将页面渲染与用户数据获取分离 */

    // _loadData()//因为提交表单中await不生效，所以将_list(1)放在_loadData中

    // $('#users-save').on('click',_signup)// 点击保存，提交表单
  }
}

/* export {
  signin,index
} */
export default index //登录逻辑抽离放在signin.js