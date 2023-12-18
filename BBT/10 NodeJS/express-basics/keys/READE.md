**秘钥生成**
> 学习jsonwebtoken BBT\10 NodeJS\express-basics\controller\index.js
1. 使用gitbash打开该文件夹，执行openssl

2. 生成私钥： genrsa -out rsa_private_key.pem 2048

3. 根据私钥生成公钥：rsa -in rsa_private_key.pem -pubout -out rsa_public_key.pem
