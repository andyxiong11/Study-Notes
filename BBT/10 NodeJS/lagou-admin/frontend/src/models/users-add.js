// 添加用户，从src\controllers\add-users.js文件移入
export const usersAdd = (data) => {
  return $.ajax({
    url:'/api/users',//后端接口地址
    type:'post',
    headers:{
      'X-Access-Token':localStorage.getItem('lg-token') || ''//将token传给后端，防止外部直接请求接口
    },
    data,
    success(res){
      // console.log(res);      
      return res
    }
  })
}