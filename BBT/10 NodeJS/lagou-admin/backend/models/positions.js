// 数据库数据操作文件

const {Positions} = require('../utils/db.js')

// 新增
exports.add = (data) => {
  const positions = new Positions(data)
  return positions.save()//返回promise
}

// 查询
exports.list = () => {
  return Positions.find({})
}