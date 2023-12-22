// 第一次打开的页面鉴权，从src\routers\index.js文件移入
export const auth = () => {
  return $.ajax({
    url:'/api/users/isAuth',
    dataType:'json', 
    headers:{
      'X-Access-Token':localStorage.getItem('lg-token') || ''//将token传给后端
    },
    success(result){
      // console.log(result);
      return result
    }
  })//返回一个promise
}

