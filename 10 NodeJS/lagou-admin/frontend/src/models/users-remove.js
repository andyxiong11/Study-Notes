import http from '../untils/http'

// 删除用户，从src\controllers\users\index.js文件移入
/* export const usersRemove = (id) => {
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
} 改用http公共方法 */
export const usersRemove = async (id) => {//因为http返回promise，所以需要使用await
  try {
    let { result:res } = await http({//http返回对象解构；：别名
      url:'/api/users',
      type:'delete',
      data:{
        id
      }
    })
    return res
  } catch (error) {
    console.log(error);
  }
}