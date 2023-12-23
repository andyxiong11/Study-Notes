// 职位管理 
import {auth as authModel} from '../../models/auth-index.js'

const listPositions = (router) => {
  return async (req,res,next) => {
    let result = await authModel()//ajax请求
    if(result.ret){//鉴权通过，是登录状态
      next()//因为使用异步的gp21-router替换了sme-router,所以需要next
      res.render('positions')
    }else{
      router.go('/signin')
    }
    
  }
}

export default listPositions