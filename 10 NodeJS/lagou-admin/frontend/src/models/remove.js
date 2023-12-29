// 删除数据请求由users-remove.js改造为一个公共方法
import http from '../untils/http'

export const remove = async ({url,id}) => {//因为http返回promise，所以需要使用await
  try {
    let { result:res } = await http({//http返回对象解构；：别名
      url,
      type:'delete',
      dataType:'json',
      data:{
        id
      }
    })
    return res
  } catch (error) {
    console.log(error);
  }
}