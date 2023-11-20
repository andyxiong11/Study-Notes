const crypto = require('crypto')

const password = 'abc123'

const hash = crypto
  .createHash('sha1')//加密算法sha1 md5
  .update(password)//加密内容
  .digest('hex')//以十六进制返回加密后的值

console.log(hash);