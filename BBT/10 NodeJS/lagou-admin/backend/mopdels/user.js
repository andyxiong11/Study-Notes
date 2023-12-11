// 向数据库存数据
const {Users} = require('../utils/db.js')

const findUser = (username) => {
  return Users.findOne({username})//在Users集合中查找username，返回一个promise
}

const signup = ({username,password}) => {
  const users = new Users({
    username,
    password
  })
  /* const result = users.save()//保存数据到数据库
  console.log(result);//result为promise的状态，所以可以直接将result返回 */
  return users.save()
}

exports.signup = signup
exports.findUser = findUser