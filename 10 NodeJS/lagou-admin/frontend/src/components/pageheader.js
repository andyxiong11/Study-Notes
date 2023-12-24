import indexPageHeaderTpl from '../views/index-pageheader.art'

const pageheader = () => {
  const nav = {//TODO字典表
    '#/index/users':{
      mainNav: '用户管理',
      subNav:'用户列表'
    },
    '#/index/positions':{
      mainNav: '职位管理',
      subNav:'职位列表'
    }
  }

  const hash = location.hash//当前路由

  const html = indexPageHeaderTpl({
    mainNav:nav[hash]['mainNav'],//TODOjs对象两个中括号选择
    subNav:nav[hash]['subNav']
  })
  $('#content').before(html)//before渲染到content样式元素之前
}

export default pageheader