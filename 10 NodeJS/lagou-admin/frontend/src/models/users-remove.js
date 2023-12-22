// 删除用户，从src\controllers\users\index.js文件移入
export const usersRemove = (id) => {
  return $.ajax({
    url:'/api/users',
    type:'delete',
    headers:{
      'X-Access-Token':localStorage.getItem('lg-token') || ''//将token传给后端，防止外部直接请求接口
    },
    data:{
      id//当前点击的id
    },
    success(res){
      return res
    }
  })
}