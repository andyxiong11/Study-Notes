import http from '../untils/http'

// 获取用户数据，从src\controllers\users\index.js文件移入
/* export const usersList = () => {
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
} 改用http公共方法 */
export const usersList = async () => {//因为http返回promise，所以需要使用await
  try {
    let { result } = await http({//http返回对象解构；：别名
      url:'/api/users'
    })
    return result
  } catch (error) {
    console.log(error);
  }
}