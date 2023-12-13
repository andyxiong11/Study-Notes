import indexTpl from '../views/index.art'
import signinTpl from '../views/signin.art'
import usersTpl from '../views/users.art'
import usersListTpl from '../views/users-list.art'
import usersListPagesTpl from '../views/uesers-pages.art'

const htmlIndex = indexTpl({})
const htmlSignin = signinTpl({})
const pageSize = 5 //每页10条；公共常量，从分页的逻辑模块中提取出来
let dataList = [] //页面展示当前页的用户数据

const _handleSubmit = (router) => {
  return (e)=>{
    e.preventDefault();//阻止表单跳转
    router.go('/index')
  }
}

// 注册表单提交事件
const _signup = ()=>{
  const $btnClose = $('#users-close')

  // 提交表单
  const data = $('#users-form').serialize()
  console.log(data);
  $.ajax({
    url:'/api/users',//后端接口地址
    type:'post',
    data,
    // success: async (res)=>{
    success(res){//因为提交表单中await不生效，所以将_list(1)放在_loadData中
      // console.log(res);
      // _list(1)//重新请求用户查询接口，刷新页面数据

      /* await _loadData()//因在_list中调用分页会有问题,将页面渲染与用户数据获取分离;因控制台提示_loadData同步请求会影响用户体验，所以做await
      _list(1)//因在_list中调用分页会有问题,将页面渲染与用户数据获取分离 */
      
      _loadData()//因为提交表单中await不生效，所以将_list(1)放在_loadData中
    }
  })

  // 关闭注册弹窗
  $btnClose.click()
}

// 分页
const _pagination = (data) => {
  // const pageSize = 5 //每页10条
  const total = data.length
  const pageCount = Math.ceil(total/pageSize)//页数
  const pageArray = new Array(pageCount)// 用页数生成一个数组
  console.log(pageArray);

  const htmlPage = usersListPagesTpl({
    // pageCount
    pageArray
  })

  $('#users-page').html(htmlPage)//将分页功能渲染到页面上

  $('#users-page-list li:nth-child(2)').addClass('active') //第一个渲染页面，第一页按钮高亮
  $('#users-page-list li:not(:first-child,:last-child').on('click',function(){//给页数绑定点击事件
    // :not 排除第一个和最后一个li，防止前一页和后一页按钮样式变化
    $(this).addClass('active').siblings().removeClass('active')//给当前li添加active样式，其他的兄弟节点删除active样式
    // console.log($(this).index())//当前的页数
    _list($(this).index())//查询点击页数的用户列表渲染到页面
  })
}

// 将页面渲染与用户数据获取分离（从后端获取数据）
const _loadData = () => {
  // return $.ajax({//将ajax请求返回promise，做await
  $.ajax({  //因为提交表单中await不生效，所以不做await，将_list(1)放在_loadData中
    url:'/api/users',//后端接口地址
    type:'get',
    // TODOajax属性，修改为同步请求
    // 等数据响应后再渲染
    // async: false,//因控制台提示同步请求会影响用户体验，所以不使用同步。直接将ajax请求返回promise，做await
    success(result){
      dataList = result.data

      // 分页；因在_list中调用分页会有问题,将页面渲染与用户数据获取分离
      _pagination(result.data)

      _list(1)//因为提交表单中await不生效，所以不做await，将_list(1)放在_loadData中
    }
  })
}

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
    data:dataList.slice(start, start + pageSize)//当前页的数据，从第start条开始
  }))
}

// 登录
const signin = (router)=>{
  // TODO函数柯里化
  //一个函数需要接受传参时，再定义一个函数将其返回
  return (req, res, next) => {
    res.render(htmlSignin)
    
    $('#signin').on('submit',_handleSubmit(router))//给表单绑定事件
  }
}

// 首页
const index = (router)=>{
  // return async (req, res, next) => {
  return (req, res, next) => {
    res.render(htmlIndex)

    // window resize 让页面高度撑满整个屏幕
    $(window,'.wrapper').resize()

    // 填充用户列表
    /* let users = usersTpl
    console.log(users); */
    $('#content').html(usersTpl())
    $('#users-list').on('click','.remove',function(){//TODO给#users-list下面的每一个.remove样式元素绑定事件
      $.ajax({
        url:'/api/users',
        type:'delete',
        data:{
          id:$(this).data('id')//$(this).data('id')可以获取当前点击的id
        },
        success(){
          _loadData()//重新获取用户数据渲染到页面
        }
      })
    })

    // 渲染用户列表list
    // _list(1)

    /* await _loadData()//因在_list中调用分页会有问题,将页面渲染与用户数据获取分离;因控制台提示同步请求会影响用户体验，所以_loadData不使用同步请求，在index做await
    _list(1)//因在_list中调用分页会有问题,将页面渲染与用户数据获取分离 */

    _loadData()//因为提交表单中await不生效，所以将_list(1)放在_loadData中

    // 点击保存，提交表单
    $('#users-save').on('click',_signup)
  }
}

export {
  signin,index
}