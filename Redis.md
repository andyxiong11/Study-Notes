# Redis的数据类型：

1. String（字符串）
Redis中的String是个字节序列。二进制安全的，意味着它们的长度不由任何特殊终止字符决定！能存512兆字节的内容。对于String，需要记住SET和GET指令。

2. Hashes（哈希）
属于散列表，比如一个用户要存储其姓名、身份证、年龄等等信息，就很适合使用哈希。每个哈希可以存40亿多个键值对。记住HMSET和HGETALL指令。

3. List（列表）
属于字符串列表，按插入顺序排序，可以向头或尾部添加元素。记住lpush和lrange指令。

1. Set（集合）
属于字符串的无序集合，集合里不能出现重复的数据，如果第二次添加相同元素，那么就会被忽略掉。集合是通过哈希表实现的，所以添加，删除，查找的复杂度都是O(1)。记住sadd和smembers指令。

5. ZSet（有序集合）
也是String类型的集合，同样不允许重复，和Set基本相似，但是ZSet是有序的集合，每个元素都关联一个double类型的分数score，并且以此为集合中的成员进行排序。分数越大！越在底下！zset成员是唯一的，但是score可以重复，多了排一起就得了。记住zadd和zrangebyscore指令

# 简单操作

启动redis
> redis-cli

输入ping会返回pong

1. String

创建
> set name hello

查看
> get name

删除
> del name

name是key，后面的数据是值,如果再set name King，那么这个就会把之前的数据给挤下去。

2. Hashed

创建
> HMSET user:001 username admin password woshimima age 34

查看
> HGETALL user:001

```
1) "username"
2) "admin"
3) "password"
4) "woshimima"
5) "age"
6) "34"
```

哈希有很多的操作HGETALL后面得写key，HDEL就是删除，HEXIST查询key是否存在。HVals是获取所有值。

3. List

创建
> lpush something java
> lpush something python
> lpush something c++

查看
> LLEN something
```
3
```
> LRange something 0 2
```
1) "python"
2) "java"
```

4. Set

创建
> SAdd things java c++ ruby
```
3
```

查看
> SCard things
```
3
```
> SMembers things
```
1) "java"
2) "c++"
3) "ruby"
```

删除
> srem things c++
```
1
```

5. ZSet

创建
> zadd zthings 1.5 java
```
1
```
> zadd zthings 3 c++ 2.33 python
```
2
```

查看
> Zcard zthings

```
3
```
