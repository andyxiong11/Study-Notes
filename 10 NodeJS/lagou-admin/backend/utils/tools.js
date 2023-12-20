// nodejs加密
const bcrypt = require('bcrypt');
const fs = require('fs')
const path = require('path')
var jwt = require('jsonwebtoken');

exports.hash = (myPlaintextPassword) => {
  return new Promise((resolve,reject)=>{//因为返回加密的数据不是promise，所以需要创建
    /* bcrypt.hash(myPlaintextPassword, 10, function(err, hash) {
      // console.log(hash);
      if(err){
        reject(err)
      }
      resolve(hash)//成功返回加密的数据
    }); */
    // 下面是另外一种加密方法
    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
        if(err){
          reject(err)
        }
        resolve(hash)//成功返回加密的数据
      });
    });
  })
}

// 将传入值与已有加密的值进行比较 bcrypt.compare
exports.compare = (someOtherPlaintextPassword,hash) => {
  return new Promise((resolve,reject) => {
    bcrypt.compare(someOtherPlaintextPassword, hash, function(err, result) {
      resolve(result)//result比对结果
    });
  })
}

// 给登录用户一个token
exports.sign = (username) => {
  var privateKey = fs.readFileSync(path.join(__dirname,'../keys/rsa_private_key.pem')); //读取相对路径的私钥
  const token = jwt.sign({username},privateKey,{ algorithm: 'RS256' } );//加密
  return token
}

// 验证token是否存在
exports.verify = (token) => {
  var publicKey = fs.readFileSync(path.join(__dirname,'../keys/rsa_public_key.pem')); //读取相对路径的公钥
  const result = jwt.verify(token, publicKey);//验证
  return result
}