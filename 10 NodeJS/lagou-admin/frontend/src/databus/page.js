class Page {
  /* static pageSize = 10
  static curPage = 1 */
  constructor(){
    this.curPage = 1//当前页码
    this.pageSize = 5//每页数据数量
  }

  setCurPage(curPage){
    // console.log(curPage);
    this.curPage = curPage
  }
}

export default new Page()//将page的实例暴露