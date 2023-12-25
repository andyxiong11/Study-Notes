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

// 添加职位，复制src\models\users-add.js
export const positionsAdd = async (data) => {//因为http返回promise，所以需要使用await
  try {
    let { result:res } = await http({//http返回对象解构；：别名
      url:'/api/positions/add',
      type:'post',
      data
    })
    return res
  } catch (error) {
    console.log(error);
  }
}