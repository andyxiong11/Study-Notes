import http from '../untils/http'

// 第一次打开的页面鉴权，从src\routers\index.js文件移入
/* export const auth = () => {
  return $.ajax({
    url:'/api/users/isAuth',
    // TODO此处不能使用json 20231216长时间阻塞
    // dataType:'json', 
    headers:{
      'X-Access-Token':localStorage.getItem('lg-token') || ''//将token传给后端
    },
    success(result){
      // console.log(result);
      return result
    }
  })//返回一个promise
} 改用http公共方法*/
export const auth = async () => {//因为http返回promise，所以需要使用await
  try {
    let { result } = await http({//http返回对象解构
      url:'/api/users/isAuth'
    })
    // console.log(result);
    return result
  } catch (error) {
    console.log(error);
  }
}

