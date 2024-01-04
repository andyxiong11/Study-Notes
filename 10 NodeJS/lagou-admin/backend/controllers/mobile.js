const mobileModel = require('../models/mobile')

// 职位列表接口请求的内容
exports.positions = async (req,res,next) => {
  let {start,pageSize} = req.query
  const result = await mobileModel.positions(~~start,~~pageSize)//查回数据库中的数据 ~~将字符串转为整型
  // console.log(result);
  if(result){
    res.json(result)
  }else{
    res.render('fail',{//succ.ejs模板
      data: JSON.stringify({
        message: '职位添加失败'
      })
    })
  }
}