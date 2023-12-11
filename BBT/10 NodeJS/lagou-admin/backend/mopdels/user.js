// 向数据库存数据
const {Users} = require('../utils/db.js')

const signup = ({username,password}) => {
  const users = new Users({
    username,
    password
  })
  users.save()//保存数据到数据库
}

exports.signup = signup