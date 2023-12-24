const moment = require('moment')//时间戳
const positionsModel = require('../models/positions')

// 新增职位接口请求的内容
exports.add = async (req,res,next) => {
  res.set('content-type','application/json;charset=utf-8')//修改响应数据类型为json

  /* console.log(req.body);
  console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
  res.send('ok') */
  let result = await positionsModel.add({
    ...req.body,
    createTime:moment().format('YYYY年MM月DD日 HH:mm')
  })

  // console.log(result);

  if(result){
    res.render('succ',{//succ.ejs模板
      data: JSON.stringify({
        message: '职位添加成功'
      })
    })
  }else{
    res.render('fail',{//succ.ejs模板
      data: JSON.stringify({
        message: '职位添加失败'
      })
    })
  }
}

// 职位列表接口请求的内容
exports.list = async (req,res,next) => {
  const result = await positionsModel.list()//查回数据库中的数据
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
  // res.render('succ',{//succ.ejs模板
  //   data:JSON.stringify(result)
  // })
}