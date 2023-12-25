// 分页功能公共数据
class Page {
  /* static pageSize = 10
  static curPage = 1 */
  constructor(){
    this.curPage = 1//当前页码
    this.pageSize = 5//每页数据数量
    this.curRoute = '#/index/users'//初始化路由，记录上一次的路由，判断路由是否变化，以调用reset
  }

  reset(){//重置数据
    this.curPage = 1//当前页码
    this.pageSize = 5//每页数据数量
  }

  setCurRoute(route){//修改保存的路由
    this.curRoute = route
  }

  setCurPage(curPage){
    // console.log(curPage);
    this.curPage = curPage
  }
}

export default new Page()//将page的实例暴露