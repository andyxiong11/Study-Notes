// 获取职位数据，复制src\models\users-list.js
import http from '../untils/http'

export const positionsList = async () => {//因为http返回promise，所以需要使用await
  try {
    let { result } = await http({//http返回对象解构；：别名
      url:'/api/positions/list'
    })
    return result
  } catch (error) {
    console.log(error);
  }
}