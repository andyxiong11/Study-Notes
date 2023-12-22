// 获取用户数据，从src\controllers\users\index.js文件移入
export const usersList = () => {
  return $.ajax({  
    url:'/api/users',//后端接口地址
    type:'get',
    headers:{
      'X-Access-Token':localStorage.getItem('lg-token') || ''//将token传给后端，防止外部直接请求接口
    },
    success(result){
      return result
    }
  })
}