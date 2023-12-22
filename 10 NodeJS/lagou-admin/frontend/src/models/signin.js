// 登录，从src\controllers\signin.js文件移入
export const signin = (data)  => {
  /* $.ajax({
    url:'/api/users/signin',
    type:'post',
    dataType:'json',
    data,
    success: function(res,textStatus,jqXHR){
      // console.log(jqXHR);
      return {
        res,
        jqXHR
      }
    }
  }) 此处无法返回jqXHR，使用promise*/
  return new Promise((resolve)=>{
    $.ajax({
      url:'/api/users/signin',
      type:'post',
      dataType:'json',
      data,
      success: function(res,textStatus,jqXHR){
        // console.log(jqXHR);
        resolve( {
          res,
          jqXHR
        })
      }
    })
  })
}

