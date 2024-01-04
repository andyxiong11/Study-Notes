// 数据库数据操作文件

const {Positions} = require('../utils/db.js')

// 查询
exports.positions = (start,pageSize) => {
  return Positions.find({}).skip(start).limit(pageSize).sort({_id:-1})//查找数据库中；skip跳过多少条数据；limit取多少条数据
}