**运行MongoDB服务器**
- 在mongdb安装目录的bin目录中执行mongod.exe或将"C:\Program Files\MongoDB\Server\7.0\bin"配置到环境变量path中
- ~~运行 mongod --dbpath C:\Program Files\MongoDB\data~~
- 新版本MongoDB需要下载mongosh，使用mongosh运行

**常用命令**
**数据库操作**
- db //查询当前数据库
- show dbs //查询所有的数据库
- use music //创建/切换数据库
- db.dropDataBase() //删除数据库

**集合操作**
- db.createCollection('collectionName') //创建一个集合
- db.getCollectionNames() //得到当前db的所有集合

**文档操作**
1. 插入数据
   - db.baoguo.insert([{name:'m1',release:'2020-12-05'}])
   - db.baoguo.insert([{name:'m2',release:'2020-12-05'},{name:'m3',release:'2020-12-06'}])
   - db.baoguo.save([{name:'m4',release:'2020-12-07'},{name:'m5',release:'2020-12-08'}])
   - TODOsave命令不能使用
   - db.baoguo.insert([{name:'m1',release:'2020-12-05',publishNum:100}])
2. 修改数据
   - db.baoguo.update({name:'m1'},{$set:{release:'2020-12-04'}})
   - db.baoguo.update({name:'m2'},{$inc:{publishNum:200}},true) //true 找不到就增加publishNum数据
   - db.baoguo.update({name:'m3'},{$inc:{publishNum:200}},false) //false 找不到就不创建
   - db.baoguo.update({name:'m1'},{$inc:{publishNum:200}},true,true) //true,true 找不到就创建且同时匹配多个数据，将publishNum+200
   - TODO新版本true false无效
3. 删除数据、
   - db.baoguo.remove({name:'m1000'})
4. 查询数据**
   - db.baoguo.find() //查询所有数据
   - db.baoguo.distinct('name') //查询去重 
   - db.baoguo.find({release:'2020-12-05'}) //查询release:'2020-12-05'的数据
   - db.baoguo.find({release:{$gt:'2020-12-05'}}) //查询release大于'2020-12-05'的数据、
   - db.baoguo.find({release:{$gte:'2020-12-05'}}) //查询release大于等于'2020-12-05'的数据
   - db.baoguo.find({release:{$lt:'2020-12-05'}}) //查询release小于'2020-12-05'的数据
   - db.baoguo.find({release:{$lte:'2020-12-05'}}) //查询release小于等于'2020-12-05'的数据
   - db.baoguo.find({release:{$gte:'2020-12-04',$lte:'2020-12-06'}}) //查询release大于等于'2020-12-04'且小于等于'2020-12-06'的数据