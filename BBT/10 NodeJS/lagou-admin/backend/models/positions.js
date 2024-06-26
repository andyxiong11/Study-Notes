// 数据库数据操作文件

const {Positions} = require('../utils/db.js')

// 新增
exports.add = (data) => {
  const positions = new Positions(data)
  return positions.save()//返回promise
}

// 查询
exports.list = () => {
  return Positions.find({}).sort({_id:-1})//查找数据库中的所有数据，并倒叙返回给前端职位
}

// 查询指定数据
exports.listone = (id) => {
  return Positions.findOne({_id:id})//查找数据库中的所有数据，并倒叙返回给前端职位
}

// 删除
exports.remove = (id) => {
  return Positions.deleteOne({_id:id})
}

// 修改
exports.update = (data) => {
  return Positions.findByIdAndUpdate(data.id,data)
}