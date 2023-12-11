// nodejs加密
const bcrypt = require('bcrypt');

exports.hash = (myPlaintextPassword) => {
  return new Promise((resolve,reject)=>{//因为返回加密的数据不是promise，所以需要创建
    bcrypt.hash(myPlaintextPassword, 10, function(err, hash) {
      // console.log(hash);
      if(err){
        reject(err)
      }
      resolve(hash)//成功返回加密的数据
    });
  })
}