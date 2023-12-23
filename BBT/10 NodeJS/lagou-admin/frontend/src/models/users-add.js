import http from '../untils/http'

// 添加用户，从src\controllers\add-users.js文件移入
/* export const usersAdd = (data) => {
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
} 改用http公共方法 */
export const usersAdd = async (data) => {//因为http返回promise，所以需要使用await
  try {
    let { result:res } = await http({//http返回对象解构；：别名
      url:'/api/users',
      type:'post',
      data
    })
    return res
  } catch (error) {
    console.log(error);
  }
}