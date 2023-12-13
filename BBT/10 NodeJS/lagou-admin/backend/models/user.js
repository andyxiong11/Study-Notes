// 数据库数据操作文件

const {Users} = require('../utils/db.js')

// 查询
const findUser = (username) => {
  return Users.findOne({username})//在Users集合中查找username，返回一个promise
}

// 新增
const signup = ({username,password}) => {
  const users = new Users({
    username,
    password
  })
  /* const result = users.save()//保存数据到数据库
  console.log(result);//result为promise的状态，所以可以直接将result返回 */
  return users.save()
}

// 查询
const findList = () => {
  return Users.find().sort({_id:-1})//查找数据库中的所有数据，并倒叙返回给前端
}

// 删除
const remove = id => {
  // return Users.deleteOne({_id:id})
  // TODO使用findByIdAndRemove报错
  return Users.findByIdAndDelete(id)//与上面效果一样
}

exports.signup = signup
exports.findUser = findUser
exports.findList = findList
exports.remove = remove