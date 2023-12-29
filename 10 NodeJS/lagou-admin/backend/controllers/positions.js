const moment = require('moment')//时间戳
const positionsModel = require('../models/positions')

// 新增职位接口请求的内容
exports.add = async (req,res,next) => {
  // console.log(req.companyLogo);
  res.set('content-type','application/json;charset=utf-8')//修改响应数据类型为json

  /* console.log(req.body);
  console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
  res.send('ok') */
  let result = await positionsModel.add({
    ...req.body,
    companyLogo:req.companyLogo,//图片文件名
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

// 删除职位接口请求内容
exports.remove = async(req,res,next) => {
  let result = await positionsModel.remove(req.body.id)
  console.log(result);
  try{
    if(result.deletedCount > 0){
      res.render('succ',{//succ.ejs模板
        data: JSON.stringify({
          message: '职位删除成功'
        })
      })
    }else{
      res.render('fail',{//succ.ejs模板
        data: JSON.stringify({
          message: '职位添加失败,ID错误'
        })
      })
    }
  }catch(err){
    res.render('fail',{//succ.ejs模板
      data: JSON.stringify({
        message: '职位删除失败'
      })
    })
    console.log(err);
  }
}

// 修改职位接口请求内容
exports.update = async (req,res,next) => {
  res.set('content-type','application/json;charset=utf-8')//修改响应数据类型为json

  let result = await positionsModel.update({
    ...req.body,
    companyLogo:req.companyLogo,//图片文件名
  })

  if(result){
    res.render('succ',{//succ.ejs模板
      data: JSON.stringify({
        message: '职位编辑成功'
      })
    })
  }else{
    res.render('fail',{//succ.ejs模板
      data: JSON.stringify({
        message: '职位编辑失败'
      })
    })
  }
}