import http from '../untils/http'

// 登录，从src\controllers\signin.js文件移入
// 改用http公共方法
// export const signin = (data)  => {
//   /* $.ajax({
//     url:'/api/users/signin',
//     type:'post',
//     dataType:'json',
//     data,
//     success: function(res,textStatus,jqXHR){
//       // console.log(jqXHR);
//       return {
//         res,
//         jqXHR
//       }
//     }
//   }) 此处无法返回jqXHR，使用promise*/
//   return new Promise((resolve)=>{
//     $.ajax({
//       url:'/api/users/signin',
//       type:'post',
//       dataType:'json',
//       data,
//       success: function(res,textStatus,jqXHR){
//         // console.log(jqXHR);
//         resolve( {
//           res,
//           jqXHR
//         })
//       }
//     })
//   })
// }
export const signin = async (data) => {//因为http返回promise，所以需要使用await
  try {
    let { result:res,jqXHR } = await http({//http返回对象解构；：别名
      url:'/api/users/signin',
      type:'post',
      dataType:'json',
      data
    })
    return {
      res,
      jqXHR
    }   
  } catch (error) {
    console.log(error);
  }
}