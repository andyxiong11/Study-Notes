> 以下所有内容参考自https://www.bilibili.com/video/BV11g411V7Kf

- [2. 变量和数据类型](#2-变量和数据类型)
  - [2.2 变量](#22-变量)
    - [变量命名](#变量命名)
  - [2.8 数据类型转换](#28-数据类型转换)
- [3. 输入和输出](#3-输入和输出)
  - [3.1 输入](#31-输入)
  - [3.2 格式化输出](#32-格式化输出)
  - [3.3 F-string](#33-f-string)
  - [3.4 字符串格式化补充](#34-字符串格式化补充)
- [4. 运算符](#4-运算符)
  - [4.1 算数运算符](#41-算数运算符)
  - [4.2 比较运算符](#42-比较运算符)
  - [4.3 逻辑运算符](#43-逻辑运算符)
  - [4.4 赋值运算符](#44-赋值运算符)
- [5. 判断](#5-判断)
  - [5.1 if](#51-if)
  - [5.2 if-else](#52-if-else)
  - [5.3 if-elif-else](#53-if-elif-else)
  - [5.4 if嵌套](#54-if嵌套)
- [6.循环](#6循环)
  - [6.1 while](#61-while)
  - [6.2 无限循环](#62-无限循环)
  - [6.3 for](#63-for)
  - [6.4 break和continue](#64-break和continue)
- [7. 容器](#7-容器)
  - [7.1 字符串](#71-字符串)
    - [7.1.2 下标（索引）](#712-下标索引)
    - [7.1.3 切片](#713-切片)
    - [7.1.3 查找方法 find](#713-查找方法-find)
    - [7.1.4 替换方法 replace](#714-替换方法-replace)
    - [7.1.5 拆分 split(转换成列表)](#715-拆分-split转换成列表)
    - [7.1.6 链接 join](#716-链接-join)
  - [7.2 列表](#72-列表)
    - [7.2.1 初始化](#721-初始化)
    - [7.2.2 下标与切片](#722-下标与切片)
    - [7.2.3 查找方法 index](#723-查找方法-index)
    - [7.2.4 判断**容器**中是否存在数据](#724-判断容器中是否存在数据)
    - [7.2.5 统计出现的次数](#725-统计出现的次数)
    - [7.2.6 添加数据](#726-添加数据)
    - [7.2.7 修改数据](#727-修改数据)
    - [7.2.8 删除数据](#728-删除数据)
    - [7.2.9 列表反转](#729-列表反转)
    - [7.2.10  列表复制](#7210--列表复制)
    - [7.2.11 列表排序](#7211-列表排序)
    - [7.2.12 列表嵌套](#7212-列表嵌套)
    - [7.2.13 列表去重](#7213-列表去重)
  - [7.3 元组](#73-元组)
    - [7.3.1 初始化](#731-初始化)
    - [7.3.2 常用方法](#732-常用方法)
  - [7.4 字典](#74-字典)
    - [7.4.1 初始化](#741-初始化)
    - [7.4.2 增加和修改操作](#742-增加和修改操作)
    - [7.4.3 删除](#743-删除)
    - [7.3.4 查询](#734-查询)
    - [7.3.5 遍历](#735-遍历)
  - [7.5 容器总结](#75-容器总结)
- [8. 函数](#8-函数)
  - [8.1 变量进阶](#81-变量进阶)
    - [8.1.1 变量引用](#811-变量引用)
    - [8.1.2 可变类型和不可变类型](#812-可变类型和不可变类型)
- [组包和拆包](#组包和拆包)
  - [8.2 局部变量和全局变量](#82-局部变量和全局变量)
  - [8.3 函数返回多个值](#83-函数返回多个值)
  - [8.4 函数参数](#84-函数参数)
    - [8.4.1 函数的传参方式](#841-函数的传参方式)
    - [8.4.2 缺省参数](#842-缺省参数)
    - [8.4.3 多值参数（可变参数/不定长参数）](#843-多值参数可变参数不定长参数)
    - [8.4.4 参数顺序](#844-参数顺序)
    - [8.4.5 print函数](#845-print函数)
    - [8.4.6 将列表、字典拆包传参](#846-将列表字典拆包传参)
    - [8.4.7 匿名函数](#847-匿名函数)
    - [8.4.8 对列表中按字典排序](#848-对列表中按字典排序)
- [9. 面向对象](#9-面向对象)
  - [9.1 定义创建调用](#91-定义创建调用)
  - [9.2 对象的属性操作](#92-对象的属性操作)
    - [9.2.1 添加属性](#921-添加属性)
    - [9.2.2 获取属性](#922-获取属性)
  - [9.3 魔法方法](#93-魔法方法)
    - [9.3.1 \_\_init__方法](#931-__init__方法)
    - [9.3.2 \_\_str__方法](#932-__str__方法)
    - [9.3.3 \_\_del__方法（了解）](#933-__del__方法了解)
  - [9.4 实例练习](#94-实例练习)
  - [9.5 私有和公有](#95-私有和公有)
  - [9.6 继承](#96-继承)
    - [9.6.1 重写](#961-重写)
  - [9.7 多态](#97-多态)
  - [9.8 属性和方法](#98-属性和方法)
- [is和==的区别](#is和的区别)
- [10. 文件操作](#10-文件操作)
  - [10.1 文件操作的步骤](#101-文件操作的步骤)
    - [10.1.1 打开文件](#1011-打开文件)
    - [10.1.2 读或写文件](#1012-读或写文件)
    - [10.1.3 关闭文件](#1013-关闭文件)
  - [10.2 使用with open打开文件](#102-使用with-open打开文件)
  - [10.3 按行读取文件内容](#103-按行读取文件内容)
  - [10.4 json文件操作](#104-json文件操作)
    - [10.4.1 读取文件](#1041-读取文件)
    - [10.4.2 写入文件](#1042-写入文件)
  - [读写文件实例练习](#读写文件实例练习)
- [11. 异常](#11-异常)
  - [11.1 异常捕获](#111-异常捕获)
  - [异常捕获练习](#异常捕获练习)
  - [11.2 异常传递](#112-异常传递)
  - [11.3 抛出raise异常](#113-抛出raise异常)
- [12. 模块和包](#12-模块和包)
  - [12.1 模块的导入](#121-模块的导入)
  - [12.2 \_\_name__的作用](#122-__name__的作用)
  - [练习](#练习)
  - [12.3 包](#123-包)

## 2. 变量和数据类型
### 2.2 变量

**Python将始终记录变量的最新值**

```python
message = "Hello Python world!"
print(message)

# Python将始终记录变量的最新值
message = "Hello Python Crash Course world!"
print(message)
```

#### 变量命名

1. 变量名只能包含字母、数字和下划线。以字母或下划线打头，不能以数字打头。
2. 变量名只可使用下划线来分隔其中的单词。
3. 不要将Python关键字和函数名用作变量名。
4. 变量名应既简短又具有描述性（驼峰命名法、下划线连接法）。
5. 慎用小写字母l和大写字母O，因为它们可能被人错看成数字1和0。
6. 注意，应尽量使用小写的Python变量名。在变量名中使用大写字母虽然不会导致错误，但避免使用大写字母是个不错的主意。

- 使用type(变量)函数**获取变量类型**

<!-- ### 2.3 字符串

```python
name = '小明'
print(type(name)) #str
age = '18'
print(type(age)) #str
bol = 'true'
print(type(bol)) #str
```

#### 大小写转换

1. title()方法，将每个单词的首字母都改为大写
2. upper()方法，将字符串全部转为大写
3. lower()方法，将字符串全部转为小写

```python
name = 'ada lovelace'
# title()方法，将每个单词的首字母都改为大写
print(name.title())

name = 'Ada Lovelace'
# upper()方法，将字符串全部转为大写
print(name.upper())
# lower()方法，将字符串全部转为小写
print(name.lower())
```

#### 拼接

**变量 + " " + 变量**

```python
first_name = "ada"
last_name = "lovelace"
# 拼接字符串
full_name = first_name + " " + last_name
message = "Hello, " + full_name.title() + "!"
print(message)
```

**转义字符**

#### 删除空白

1. rstrip()方法，删除字符串末尾的空白
1. lstrip()方法，删除字符串开头的空白
1. strip()方法，删除字符串两端的空白

```python
favorite_language = '   python   '
print(favorite_language)
# rstrip()方法，删除字符串末尾的空白
print(favorite_language.rstrip())
# lstrip()方法，删除字符串开头的空白
print(favorite_language.lstrip())
# strip()方法，删除字符串两端的空白
print(favorite_language.strip())

# 正确使用单双引号
# message = 'One of Python's strengths is its diverse community.'
message = "One of Python's strengths is its diverse community."
print(message)
```

**注：Pyton2 print无需括号**

```python
print "Hello Python2.7"
```

### 2.4 数字

> 可直接在终端中输入

- 整数和浮点数都可以直接输出结果

- 两个**表示乘方

- 函数str()将非字符串值表示为字符串

```python
# 以下运算皆可直接在终端输入
print(2 + 3)
print(3 - 2)
print(2 * 3)
print(3 / 2)
# python2中 3/2=1 3.0/2=1.5 3.0/2.0=1.5
# 两个**表示乘方
print(3 ** 2)
# 运算次序修改
print(2 + 3 * 4)
print((2 + 3) * 4)

print(0.1 + 0.1)
print(0.2 * 2)

# 函数str()将非字符串值表示为字符串
age = 23
message = "Happy" + str(age) + "rd Birthday!"
print(message)
```

### 2.5 列表

可使用“-1”角标访问最后一个元素

```python
bicycles = ['trek', 'cannondale', 'redline', 'specialized']
print(bicycles)
print(bicycles[0])
print(bicycles[0].title())
print(bicycles[-1].title())
print(bicycles[-2].title())
message = "My first bicycle was a " + bicycles[0].title() + "."
print(message)
```

#### 2.5.1 修改、删除和添加元素

```python
motorcycles = ['honda', 'yamaha', 'suzuki']
print(motorcycles)
motorcycles[0] = 'ducati'
print(motorcycles)
```

**append方法，在列表末尾添加元素**

```python
motorcycles.append('ducati')
print(motorcycles)

motorcycles = [];
motorcycles.append('honda')
motorcycles.append('yamaha')
motorcycles.append('suzuki')
print(motorcycles)
```

**insert方法，在列表的某个位置插入元素**

```python
motorcycles = ['honda', 'yamaha', 'suzuki']
motorcycles.insert(0, 'ducati')
```

**del，删除列表某个位置的元素**

```python
motorcycles = ['honda', 'yamaha', 'suzuki']
del motorcycles[0]
```

**pop方法，删除列表的元素并获取元素值**
> 列表就像一个栈，删除末尾的元素即弹出栈顶元素

```python
motorcycles = ['honda', 'yamaha', 'suzuki']
print(motorcycles)
last_motorcycles = motorcycles.pop()
print(last_motorcycles)
print("The last motorcycle I owned was a " + last_motorcycles.title() + ".")

# pop方法加入角标，删除列表的某个元素并获取元素值。
# pop方法和del的区别在于是否需要获取已删除的元素的值
print(motorcycles)
first_motorcycles = motorcycles.pop(0)
print(last_motorcycles)
print('The first motorcycle I owned was a ' + first_motorcycles.title() + '.')
```

**remove方法，根据元素值删除列表中的元素**

```python
motorcycles = ['honda', 'yamaha', 'suzuki']
print(motorcycles)
too_expensive = 'yamaha'
motorcycles.remove(too_expensive)
print(motorcycles)
print("\nA " + too_expensive.title() + " is too expensive for me.")
```

**3.2 小练习**

```python

list = ['1', '2', '3']
# python无法在拼接是将其他类型自动转换成字符串，需要加str()
print("嘉宾名单：" + str(list))
print('无法赴约的嘉宾：' + list[1])
list[1] = '4'
print("嘉宾名单：" + str(list))
print("找到了一个更大的餐桌，可容纳更多的嘉宾。")
list.insert(0, '5')
list.insert(2, '6')
list.append('7')
print("嘉宾名单：" + str(list))
print("新购买的餐桌无法及时送达，因此只能邀请两位嘉宾.")
pop1 = list.pop(0)
print("很抱歉，无法邀请" + pop1 + "他来共进晚餐。")
pop2 = list.pop(0)
print("很抱歉，无法邀请" + pop2 + "他来共进晚餐。")
pop3 = list.pop(0)
print("很抱歉，无法邀请" + pop3 + "他来共进晚餐。")
pop4 = list.pop(0)
print("很抱歉，无法邀请" + pop4 + "他来共进晚餐。")
print(list[0] + "依然在受邀人之列。")
print(list[1] + "依然在受邀人之列。")
del list[0]
del list[1]
print("嘉宾名单：" + str(list))
```

#### 2.5.2 组织列表

**sort方法，对列表进行永久性排序**

```python
cars = ['bmw','audi','toyota','subaru']
cars.sort()
print(cars)
```

**sort方法参数reverse=True,对列表反向排序，同样是永久性的**

```python
cars.sort(reverse=True)
print(cars)
```

**sorted函数，对列表进行临时排序**

```python
cars = ['bmw','audi','toyota','subaru']
print("Here is the original list:" )
print(cars)
print(sorted(cars))
print(cars)
```

**sorted函数参数reverse=True,对列表反向排序**

print(sorted(cars,reverse=True))
print(cars)

**reverse()反转打印列表**

cars = ['bmw','audi','toyota','subaru']
print(cars)
cars.reverse()
print(cars)

**len函数获取列表的长度**

cars = ['bmw','audi','toyota','subaru']
len(cars)

#### 2.5.3 操作列表

##### 2.5.3.1 遍历列表

**每个缩进的代码行都是循环的一部分，且将针对列表中的每个值都执行一次。**

```python
magicians = ['alice', 'david', 'carolina'] 
for magician in magicians:
    print(magician)
```

单个列表元素命名建议：

for cat in cats:
for dog in dogs:
for item in items:

**在for循环后面，没有缩进的代码都只执行一次，而不会重复执行。**

```python
for magician in magicians:
    print(magician.title() + ',that was a great trick!')
    print("I can't wait to see your next trick," + magician.title() + '\n')

print('Thank you, everyone. That was a great magic show!')
```

##### 2.5.3.2 创建数值列表

**函数range,生成一系列数字，从左边的数开始，不包含右边的数**

```python
for value in range(1, 5):
    print(value)
```

**使用range函数创建数字列表1-4**

```python
numbers = list(range(1, 5))
print(numbers)
```

**打印1-10的偶数**

```python
even_numbers = list(range(2, 11, 2))
print(even_numbers)
```

**打印1-10的平方**

```python
squares = []
for value in range(1,11):
    square = value**2
    squares.append(square)
print(squares)
```

max(squares)
min(squares)
sum(squares)

**列表解析**

```python
squares = [value**2 for value in range(1,11)]
print(squares)
```

### 2.6 元组

(1,2,3,4)

### 2.7 字典

{'name':'小明', 'age':'18'} -->旧笔记

### 2.8 数据类型转换

变量 = 要转换的类型（原数据）

- 数据类型转换**不会改变原数据的数据类型**

```python
age = input('请输入您的年龄：')
print('age本来的数据类型',type(age)) # str
age1 = int(age)
print('转换后age的数据类型',type(age)) #str
print('转换后age1的数据类型',type(age1)) #int
```

1. 可转**int类型**的数据类型：float、**整数类型**的字符串
2. 可转**float类型**的数据类型：int、**数字类型**的字符串
3. 可转**str类型**的数据类型：任何数据类型（一般不使用转换，直接加引号）

## 3. 输入和输出

### 3.1 输入

**input()**

变量 = input('提示的内容')

```python
result = input('请输入内容：')
print(type(result),result)
```
- 左边的变量类型一定是字符串

### 3.2 格式化输出

- '字符串%s'% (变量名)
- **%s**可以填充任意类型的数据

```python
name = input('请输入名字：')
age = int(input('请输入年龄：'))
height = float(input('请输入身高:'))
print('我的名字是 %s，年龄 %d,身高 %.2f m' % (name, age, height))
# 小数默认显示6位，%.nf

# %0nd n需要换成具体的整数数字，表示整数一共占几位
stu_num = 1
print('我的学号是： %06d' % stu_num) #000001

# %% = %
num = 90
print('考试的及格率： %d%%' % num)
```

### 3.3 F-string

- f'字符串{变量名}'、F'字符串{变量名}'
- Python版本需大于等于3.6

```python
name = '小明'
age = 18
height = 1.73
stu_num = 1
num = 90
print(f'我的名字是{name}，年龄{age},身高{height}m,学号{stu_num}\n及格率{num}%')
# 一般不会有这种需求
print(f'我的名字是{name}，年龄{age},身高{height:.2f}m,学号{stu_num:06d},及格率{num}%')
```

### 3.4 字符串格式化补充

- '字符串{}'.format(变量名)
```python
name = '小明'
age = 18
height = 1.73
stu_num = 1
num = 90
print('我的名字是{}，年龄{},身高{}m,学号{}\n及格率{num}%'.format(name,age,height,stu_num))
# 一般不会有这种需求
print(f'我的名字是{}，年龄{},身高{:.2f}m,学号{:06d},及格率{}%'.format(name,age,height,stu_num))
```

## 4. 运算符
### 4.1 算数运算符
- +、-、*
- ‘/’除操作得到的是浮点类型
- ‘//’、‘*’求商求余，得到整数类型
- ‘**’，幂运算
```python
2**3 = 2*2*2
```
### 4.2 比较运算符
```python
>、<、>=、<=、==

!= 判断两个数是否不相等，不相等为true
```
### 4.3 逻辑运算符
- and、or、not

**非空字符串为true，空字符串和0为flase**
### 4.4 赋值运算符
- +=、-=、*=、/=、//=、%=  

## 5. 判断
### 5.1 if

```python
if 判断条件：
  执行代码 #注意缩进
非判断执行代码
```
### 5.2 if-else

```python
if 判断条件:
  执行代码
else:
  执行代码

user = input('请输入用户名：')
passwd = input('请输入密码：')
if (user == 'admin' or user == 'test' ) and passwd =='123456':
  print('欢迎{}登录'.format(user))
else:
  print('登录信息错误,查无此人')
```
### 5.3 if-elif-else

```python
if 判断条件1:
  执行代码
elif 判断条件2:
  执行代码
else:
  执行代码
```
### 5.4 if嵌套

```python
user = input('请输入用户名：')
passwd = input('请输入密码：')
num = input('请输入验证码888：')
if num == '888':
  if user == 'admin' and passwd == '123456':
    print('登录成功')
  else:
    print('用户信息不正确')
else:
  print('验证码不正确')
```

**剪刀石头布**
```python
import random

player = input('请出拳剪刀（1）、石头（2）、布（3）：')
computer = random.randint(1, 3)

if (player == 'jd' and computer == 3) or (player == 'st' and computer == 1) or (player == 'b' and computer == 2):
  print('赢局')
elif (player == computer):
  print('平局')
else:
  print('输局')
```

## 6.循环
### 6.1 while

```python
循环初始条件
while 循环判断条件:
  执行代码
  改变初始条件
```

python**不支持i++**

### 6.2 无限循环

```python
while True:
  执行代码
  if 判断条件:
    break
  执行代码

#剪刀石头布
import random

while True:
  player = int(input('请出拳剪刀（1）、石头（2）、布（3）、退出（0）：'))
  if player == 0:
    break
  computer = random.randint(1, 3)
  if (player == 'jd' and computer == 3) or (player == 'st' and computer == 1) or (player == 'b' and computer == 2):
    print('赢局')
  elif (player == computer):
    print('平局')
  else:
    print('输局')

#猜随机数
import random

num = random.randint(1, 100)

while True:
  my_num = int(input('请输入一个整数：'))
  if (my_num == num): #首先判断结束循环的条件
    print('正确')
    break
  elif (my_num < numr):
    print('输入的数小了')
  else:
    print('输入的数大了')
```

### 6.3 for

```python
for 变量名 in 容器:
  执行代码

my_str = 'hello'
for i in my_str:
  print('你好',i`)
```

1. 容器中有多少数据，循环会执行多少次
2. 每次循环，会将容器中数据取一个保存到in关键字前面的变量中

**指定循环次数**

```python
for 变量 in range(n):
  执行代码

# range（）函数可以生成[0,n)之间的整数
for i in range(5):
  print(i) #0 1 2 3 4

for 变量 in range(a.b):
  执行代码

# range（）函数可以生成[a,b)之间的整数
```

### 6.4 break和continue

continue：跳过本次循环
break：结束循环

```python
result = input('请输入一个字符串：')
for i in result:
  if i == 'e':
    continue
  # 可替换成 if i != 'e':
  print (i)
```

## 7. 容器

> 也称为数据序列，或者高级数据类型，也是python中的数据类型

### 7.1 字符串

```python
my_str = "I'm 小明"
my_str = '"I'm 小明"' 
#I'm 小明
my_str = 'I\'m 小明'
#I'm 小明
my_str = 'I\\\'m 小明'
#I\'m 小明
my_str = r'I\'m 小明'
#I\'m 小明
```
- 字符串前面加上r""变成**原生字符串**，常用于文件路径

#### 7.1.2 下标（索引）
```python
my_str = "I'm 小明"
print(my_str[0]) # I
print(my_str[-1]) # 明
```

- 获取字符串长度 len(字符串)
```python
print(len(my_str))
print(my_str[len(my_str)-1])
```

#### 7.1.3 切片
>获取字符串中多个字符

语法：字符串[start:end:step]
1. start，开始位置的下标
2. end，结束位置的下标（该位置字符取不到）
3. step，步长，等差数列的差值，取相邻字符下标之间的差值，默认1，可不写

```python
str = 'abcdefg'
print(str[0:3:1]) # abd
# 步长为1可以不写冒号
print(str[0:3]) # abd
# 开始位置为0可以不写
print(str[:3]) # abd

print(str[4:7]) # efg
print(str[-3:7]) # efg
# 如果最后一个字符也要取，可不写
print(str[4:]) # efg

# 如果获取全部字符
print(str[:])

# 获取有差值的部分字符
print(str[::2]) # aceg

# 步长为负数，反转数组
print(str[::-1]) #gfedcba
```

#### 7.1.3 查找方法 find

语法：字符串.find(sub_str,start,end)
1. sub_str，要查找的字符串
2. start,开始位置，一般不写，默认0
3. end，结束位置，一般不写，默认len（）
4. 如果找到了sub_str，返回sub_str第一次出现的下标（第一个字符出现的下标）；如果没有找到，返回-1

```python
str = 'hello world and itcast and itcast'
num = str.find('and')
print(num)
# 查找字符串中第二个and出现的位置
num1 = str.find('and',num+1)
print(num1)
# 查找字符串中第三个and出现的位置
num2 = str.find('and',num1+1)
print(num2) # -1
```

#### 7.1.4 替换方法 replace

```yacas
语法：字符串.replace(old_str,new_str,count)
1. old_str，被替换的内容
2. new_str，替换的内容
3. count，替换的次数，默认不写，全部替换
4. 原字符串的内容没有改
```

```python
str = 'good good study'
str.replace('g', 'G')
# 将第一个good替换成GOOD
str2 = str.replace('good', 'GOOD', 1)
print(str2)
# 将第二个good替换成GOOD
str3 = str.replace('good', 'GOOD')
str3 = str3.replace('GOOD', 'good', 1)
print(str3)
```

#### 7.1.5 拆分 split(转换成列表)

语法：字符串.split(sep, maxsplit)
1. sep，字符串按照什么进行拆分，默认是空白字符（空格、换行\n、tab键\t）
2. max_split，分割次数，一般不写，默认全部分割
3. 返回：将一个字符串分为多个，存在列表中
4. 如果不写sep，字符串.split(maxsplit = n)

```python
str = 'hello world and itcast and itcast'
result = str.split('and') #['hello world','itcast','itcast']
result = str.split('and',1) #['hello world','itcast and itcast']
result = str.split() # ['hello','world','and','itcast','and', 'itcast']
result = str.split(maxsplit=1) # ['hello','world and itcast and itcast']
```

#### 7.1.6 链接 join

语法：字符串.join(列表)
1. 括号中主要是列表，也可以是其他容器
2. 作用：将字符串插入到列表中每相邻的两个数据之间，组成一个新的字符串
3. 列表中**必须都是字符串**

```python
list = ['hello','world','and','itcast','and', 'itcast']
str = ' '.join(list)
print(str)
list1 = ['hello world','itcast','itcast']
str1 = ' and '.join(list1)
```

### 7.2 列表
#### 7.2.1 初始化
1. 类实例化的方法（不常用）
   1. 定义空列表
      变量 = list()
   2. 类型转换
      list(容器)
      > list1 = list('hello')   ['h','e','l','l','o']
2. 直接使用[]定义
  my_list = []
  my_list = [1, '小明', 3.14, false]

#### 7.2.2 下标与切片

>操作与字符串一致

```python
list1[0]
list1[-1]
list1[0:2]
lesn(list1)
```
- 列表切片得到列表

#### 7.2.3 查找方法 index

>操作与字符串find基本一致

语法：列表.index(数据,start,end)
- 返回找到第一次出现的下标，没有找到直接报错

#### 7.2.4 判断**容器**中是否存在数据

语法：数据 in 容器
- 存在返回true，不存在返回flase 

#### 7.2.5 统计出现的次数

语法：列表.count(数据)
- 返回数据出现的次数

#### 7.2.6 添加数据

1. 尾部添加（常用）
    语法：列表.append(数据)
    - 返回None（空）
    - 可以将一个列表作为一个整体添加到另一个列表后面

2. 指定下标位置添加
    语法：列表.insert(下标，数据 )
    - 如果插入位置有数据，则原数据向后移。比较消耗性能
    - 返回None（空）

3. 列表合并
    语法：列表1.extend(列表2)
    - 将列表2中的数据逐个添加到列表1后面

#### 7.2.7 修改数据

语法：列表[下标] = 数据

#### 7.2.8 删除数据

- 在列表中删除数据，后面的数据会向前移动

1. 根据下标删除
    语法：列表.pop(下标)
    - 常用：不写下标，默认删除最后一个数据
    - 返回：删除的数据

2. 根据数据值删除
    语法：列表.remove(数据值)
    - 返回：none
    - 删除第一个找的对应值
    - 删除的值不存在，报错
3. 清空数据（一般不用）
    语法：列表.clear()

#### 7.2.9 列表反转

语法：列表.reverse()
- 等同于列表[::-1]，reverse()是直接修改原列表，返回None

#### 7.2.10  列表复制

语法：列表.copy()
- 等同于 变量=列表[:]
- 与“列表1=列表”的区别是，“列表1=列表”并没有复制数据，指向的是同一个列表

#### 7.2.11 列表排序

语法：列表.sort()
- 一般是对数字排序
- 按照升序排序
- 列表.sort(reverse=True)，降序

#### 7.2.12 列表嵌套

>类似多维数组

- person_info[0][0]
- len(person_info)
- person_info[0].append()
- person_info[0]remove()

#### 7.2.13 列表去重

1. 遍历原列表；判断在新列表中是否存在；存入数据；
```python
def quchong(old_list):
    new_list = []
    for l in old_list:
        if (l in new_list):
            continue
        else:
            new_list.append(l)
    print(new_list)
```
2. 集合（set），自动去重。将列表转换为集合类型，将集合类型转换为列表。list(set())
  - 不保证数据的顺序

### 7.3 元组

1. 可以存放任意类型的数据
2. 可以存放任意多个数据
3. 元组中的**数据不能改变**
4. 使用()
5. 应用：函数的传参或返回值

#### 7.3.1 初始化
1. 类实例化的方法（不用）
   1. 定义空列表
      my_tuple = tuple()
      - 没有意义
   2. 类型转换
      my_tuple1 = tuple([1,2,3])   (1,2,3)
      my_tuple1 = tuple('hello')   ('h','e','l','l','o')
2. 直接使用()定义
    my_list = (1, '小明', 3.14, false)

- 定义只有一个数据的元组时，**数据后必须有一个逗号**，否则是int 

#### 7.3.2 常用方法

1. index 查找
2. count 统计次数
3. in 判断是否存在

### 7.4 字典

>字典（dict），由键（key）值（value）对组成

语法：变量 = {key:value, key:value}

1. 一个字典中的**键是唯一的**，值可以为任意数据
2. 键一般是字符串，可以是数字，**不能是列表**

#### 7.4.1 初始化
1. 类实例化的方法
   1. 定义空字典
      my_dict = dict()
   2. 类型转换
      - dict()不能转列表和元组、字符串
2. 直接使用{}定义
   my_dict = {}
   my_dict = {'name':'小明','age':18,'height':1.71,'like':['xx','yy']}
   len(my_dict)

#### 7.4.2 增加和修改操作

语法：字典[key] = value
1. 如果键存在，则为修改数据
2. 如果键不存在，则为添加数据

- 向**值为列表**的字典添加数据：my_dict['like'].append('study')

#### 7.4.3 删除

1. 删除指定键值对
   语法：del 字典[键]
   - 字典.pop(键)
   - 字典[键].remove(),删除**值为列表**中的数据
2. 清空
   语法：字典.clear()

#### 7.3.4 查询

1. 字典[键]
   - 键存在，返回对应的值
   - 不存在，报错
2. 字典.get(键,值)
   - 值一般不写，默认是none
   - 键存在，返回对应的值
   - 键不存在，返回括号中书写的值（none）

- 获取**值为列表**中的第2个数据，my_dict['like'][1],my_dict.get('like')[1]

#### 7.3.5 遍历

1. 对字典的键进行遍历

```python
for 变量 in 字典:
  print(变量) #变量就是键

for 变量 in 字典.keys(): #字典.keys()可以获取字典中所有的键
  print(变量)
```

2. 对字典的键进行遍历

```python
for 变量 in 字典.values(): #字典.values()可以获取字典中所有的值
  print(变量)
```

3. 对字典的键值对进行遍历

```python
for 变量1，变量2 in 字典.items() #字典.items()获取键值对
  print(变量1,变量2) #变量1就是键，变量2就是值
```

```python
#存储学生信息
list1 = []

for i in range(3):
    dict1 = {}
    name = input('请输入姓名：')
    age = input('请输入年龄：')
    dict1['name'] = name
    dict1['age'] = age
    list1.append(dict1)
for item in list1: #item是字典
    print(item['name'],item['age'])

#id为偶数加10，为奇数减10
list1 = [{'id':1,'num':10},{'id':2,'num':20},{'id':3,'num':30},{'id':4,'num':40}]
for item in list1:
  if item.get('id')%2 ==0:
    item['num'] = item.get('num') + 10
  else:
    item['num'] = item.get('num') - 10
print(list1)

# 1.自定义以程序，实现如下要求
# 2.能够获取测试人员输入的信息（登录/注册）
# 3.获取每组测试数据的用户名，密码和预期结果组成一下的数据格式进行打印
# [(),(),()]或者[[]，[]，[]]
# 比如：
# 输入登录组成的列表为
# [("admin","123456","登录成功")，("root","123456","登录失败")]
# 或者
# [["admin'","123456","登录成功"]，["root","123456","登录失败"]]
# 输入注册组成的列表为
# [("abcd","123456"),("xyz","123456")]

my_dict={'登录':[{'desc':'正确的用户名密码','username':
'admin','password':'123456','expect':'登录成功'},{'desc':
'错误的用户名','username':'root','password':'123456',
'expect':'登录失败'},{'desc':'错误的密码','username':
'admin','password':'123123','expect':'登录失败'},{'desc':
'错误的用户名和密码','username':'aaaa','password':'123123',
'expect':'登录失败'}],
'注册':[{'desc':'注册1','username':'abcd',
'password':'123456'},{'desc':'注册1','username':'xyz',
'password':'123456'}]}

str1 = input('请输入登录/注册：')
my_list = list()
if str1 == '登录':
    for dict1 in my_dict.get('登录'): #遍历key为登录的值（列表），dict1为列表中的字典
        my_tuple = (dict1.get('username'),dict1.get('password'),dict1.get('expect'))
        my_list.append(my_tuple)
    print(my_list)
elif str1 == '注册':
    for dict1 in my_dict.get('注册'):
        my_tuple = (dict1.get('username'),dict1.get('password'))
        my_list.append(my_tuple)
    print(my_list)
else:
    pass
```

### 7.5 容器总结

1. 字符串、列表、元组支持拼接
```python
str1 = 'hello' + 'world'
list1 = [1,2] + [3,4]
tuble1 = (1,2) + (3,4)
```
2. 字符串、列表、元组支持乘一个数字
```python
'hello'*3 # ==> 'hello hello hello'
[1,2]*3 # ==> [1,2,1,2,1,2]
(1,2)*3 # ==> (1,2,1,2,1,2)
```
3. len()在容器中都可以使用
4. in在容器中都可以使用，在字典中是判断键是否存在

## 8. 函数

语法：
def 函数名():
  执行代码

**文档注释**：在定义的函数名下方使用三对双引号进行注释（说明函数的作用）。选中调用的函数后面的括号，使用ctrl+q（windows）ctrl+j（mac）可查看注释

### 8.1 变量进阶
#### 8.1.1 变量引用

1. python中，变量和数据是存在不同的内存空间中
2. 给变量赋值，本质是**将数据的地址保存到变量对应的内存中**
3. 变量中存储数据地址的行为就是引用（变量引用了数据的地址），存储的地址称为引用地址
4. 可以使用id()获取变量中的引用地址（即数据地址） ，如果两个变量的id()获取的引用地址一样，即代表是同一个数据
5. 只有赋值可以改变引用地址（a=1,b=a,a=2。a的引用地址改变了，b没有变）
6. python中数据的传递，都是传递引用

#### 8.1.2 可变类型和不可变类型

  >数据所在的类型是否允许修改（不使用“=”）

  可变类型：list、dict、set
  不可变类型：int、float、bool、str、tuple

**引用实例**

```python
def func(list1):
  list1.append(10)
my_list = [1,2]
func(my_list)
print(my_list)# 1,2,10

def func(list1):
  list1[0] = 10 # 修改的是列表中下标为0位置的数据，没有修改列表的引用
my_list = [1,2]
func(my_list)
print(my_list)# 10,2

def func(list1):
  list1 = [2,1] # list1变量的引用发生了改变
my_list = [1,2]
func(my_list)
print(my_list)# 1,2

#列表的+=操作本质是extend操作
def func(list1):
  list1 += [2,1] # list1.extend([1,2])
my_list = [1,2]
func(my_list)
print(my_list)# 1,2,2,1
```

## 组包和拆包
1. c = a,a = b,b = a
2. 数学方法
a = a + b
b = b - a
a = a - b
3. python特有
a,b = b,a
- 组包(pack):将多个数据值使用逗号连接，组成元组
- 拆包(unpack):将容器中的数据值使用多个变量分别保存的过程，注意：变量的个数和容器中数据的个数要保持一致

```python
# 组包
c = b,a
print(type(c),c) # <class'tuple'> (10,20)
# 拆包
a,b = c
print(a,b)  # 20,10

x,y,z = [1,2,3]
```

### 8.2 局部变量和全局变量

1. 局部变量：函数中定义的变量，如果想在函数外使用，需要使用return
2. 局部变量生命周期为函数从调用到调用结束
3. 如果局部变量名和全局变量一致，在函数中优先使用局部变量的值（就近）
4. 在函数内部修改全局变量的引用，需要添加关键字global进行声明

```python
num = 10
def func1():
  print(f'func1的值{num}')

def func2():
  num = 20
  print(f'func2的值{num}')

def func3():
  global num
  num = 20
  print(f'func3的值{num}')

# func1()
# func2()
# func1()
# func3()
# func1()
print(num) #10
```

### 8.3 函数返回多个值

```python
def calc(a,b):
    num = a + b
    num1 = a - b
    return num,num1
# 方法一
result = calc(1, 2)
print(result,result[0],result[1])

#方法二，拆包
x,y = calc(1, 2)
print(x,y)
```

### 8.4 函数参数
#### 8.4.1 函数的传参方式

1. 位置传参：按照形参的顺序将实参传给形参
2. 关键字传参：指定数据给某个形参
3. 混合传参：关键字传参必须写在位置传参后面，且不要给一个形参传多个数据

```python
def func(a,b,c):
    print(f'a:{a},b:{b},c:{c}')
func(1, 2, 3)
func(a=2, b=3, c=1)
func(1, 3, c=5)
```

#### 8.4.2 缺省参数

> 在函数定义的时候，给形参一个默认的数值

例如：列表.pop()

- 缺省参数要放在普通参数后面
- 在函数调用时，可传参，也可不

```python
def show_info(name,sex='保密'):
    print(name,sex)
show_info('小王')
```

#### 8.4.3 多值参数（可变参数/不定长参数）

例如：print（1，2，3，4，5，6）
- 不确定参数的具体个数时，可使用不定长参数

1. 不定长位置参数（不定长元素参数）
   - 在普通参数前加上*
   - 一个形参可以接受任意多个位置传参的数据
   - 形参的数据类型是元组
   - 不定长位置参数要写在普通参数后面
   - 一般不定长位置参数的名字为args，即*args   arguments
2. 不定长关键字参数（不定长字典参数）
   - 在普通参数前加上**
   - 一个形参可以接受任意多个关键字传参的数据
   - 形参的数据类型是字典
   - 不定长关键字参数要写在所有参数后面
   - 一般不定长关键字参数的名字为kwargs，即**kwargs  keyword arguments

#### 8.4.4 参数顺序

普通参数 -> *args -> 缺省参数 -> **kwargs

```python
def func(*args,**kwargs):
    print(type(args),args)
    print(type(kwargs),kwargs)
func(1,2,3,a=4,b=5,c=6)
```

#### 8.4.5 print函数

```python
def print(self,*args,sep='',end='\n',file=None)

print(1,end='') #end传值时，不会自动换行
print(1,2,3,4,sep='_*_') # 1_*_2_*_3_*_4
```

```python
# 求1+2+3+...+n
def my_sum(n):
    num = 0
    for i in range(n+1):
        num += i
    print(f'结果：{num}')

#传值求和
def my_sum(*args,**kwargs):
    num = 0
    for i in args:
        num += i
    for j in kwargs.values():
        num += i
    print(f'结果：{num}')
```
#### 8.4.6 将列表、字典拆包传参

> 将列表（元组）中的数据作为位置参数或将字典中的数据作为关键字参数，须在前面加上*拆包

```python
my_list = [1,2,3,4]
my_dict = {'a':1,'b':2,'c':3,'d':4}
my_sum(*my_list)
my_sum(**my_dict)
```

#### 8.4.7 匿名函数

> 使用lambda关键字定义的函数

语法：lambda 参数:表达式

- 只能书写一行代码
- 返回值不需要return，一行代码的结果就是返回值
- 一般不需要主动调用，一般作为函数的参数调用

```python
# 1. 无参无返回值
lambda :print('hello lamdba')
# 2. 无参有返回值
lambda :10
# 3. 有参无返回值
lambda a,b:print(a+b)
# 4. 有参有返回值
lambda a,b:a+b

lambda my_dict:my_dict[age]
```

#### 8.4.8 对列表中按字典排序

```python
user_list = [
{"name":"zhangsan","age":18},
{"name":"1i5i","age":19},
{"name":"wangwu","age":17}
]
user_list.sort(key=lambda x:x['age'],reverse=True)
```
- 说明：匿名函数中的参数是列表中的数据，在sort函数内部，会调用key函数（将列表中的每个数据作为实参传递给形参），从列表中获取函数的返回值，对返回值进行比大小

**字符串比大小**

> 比较对应下标位置字符的ASCII码大小

- ord(字符)，获取字符对应的ASCII值
- chr(ASCII值)，获取对应的字符

## 9. 面向对象
### 9.1 定义创建调用

```python
#1. 定义类
class 类名:
    def 方法名(self):
        pass
#2. 创建对象
变量 = 类名() #变量中保存的是对象的地址，一个类创建多个对象，每个对象的地址不一样
#3. 调用方法
对象.方法名

class Cat:
    def eat(self):
        print('吃饭')
    def drink(self):
        print('喝水')
blue_cat = Cat()
blue_cat.drink()
blue_cat.eat()
```

**self**

> self的本质是对象，python解释器在执行代码的时候自动将调用这个方法的对象传递给了self

- 相当于java的this

### 9.2 对象的属性操作
#### 9.2.1 添加属性

对象.属性名 = 属性值

1. 类内部添加
   self.属性名 = 属性值
   一般写在__init__方法中

2. 类外部添加
   对象.属性名 = 属性值

#### 9.2.2 获取属性

对象.属性名

1. 类内部添加
   self.属性名

2. 类外部添加
   对象.属性名
```python
class Cat:
    def eat(self):
        print(f'{self.name}吃饭')
blue_cat = Cat()
blue_cat.name = '蓝猫'
blue_cat.drink()
```

### 9.3 魔法方法
> 以两个下划线开头，两个下划线结尾，并且在满足某个条件的情况下，会自动调用的方法

#### 9.3.1 \_\_init__方法

1. 创建对象时自动调用
2. 给对象添加属性（初始化方法、构造方法）
3. 某些代码在每次创建对象之后都要执行，可将其写在\_\_init__方法中

```python
class Cat:
    def __init__(self):
        self.name = '蓝猫'
        self.age = 12
    def show_info(self):
        print(f'name:{self.name},age:{self.age}')

blue_cat = Cat()
blue_cat.show_info()

class Cat:
    def __init__(self,name,age):
        self.name = name #此处self.name的name是属性名，后面的name是形参，形参名可以任意修改
        self.age = age
    def show_info(self):
        print(f'name:{self.name},age:{self.age}')

blue_cat = Cat('蓝猫',12)
blue_cat.show_info()
```

#### 9.3.2 \_\_str__方法

1. 使用print（对象）打印对象的时候会自动调用
2. 在这个方法一般书写对象的属性信息
3. 如果类中没有定义\_\_str__方法，print对象默认输出对象的引用地址
4. \_\_str__方法必须返回一个字符串

```python
class Cat:
    def __init__(self,name,age):
        self.name = name
        self.age = age
    def __str__(self):
        return f'name:{self.name},age:{self.age}'

blue_cat = Cat('蓝猫',12)
blue_cat.show_info()
print(blue_cat)
```

#### 9.3.3 \_\_del__方法（了解）

1. 对象被删除销毁时，自动调用。析构方法
2. 调用场景：程序运行结束，所有对象被销毁；直接使用del删除对象（如果对象有多个引用，需要把所有的对象都删除）

```python
class Cat:
    def __init__(self,name):
        self.name = name
    def __del__(self):
        print(f'{self.name}对象删除了')

blue_cat = Cat('blue_cat')
black_cat = Cat('black_cat')
# n = blue_cat 此时只删除了对象blue_cat
del black_cat
print('代码运行结束')
```

### 9.4 实例练习

**实例：小明爱跑步**
```python
class Person:
    def __init__(self,name,wegith):
        self.name = name
        self.wegith = wegith
        print(f'{self.name}的体重：{self.wegith}公斤')
    def __str__(self):
        return f'{self.name}的体重：{self.wegith}公斤'
    def run(self):
        print('跑步,减0.5')
        self.wegith -= 0.5
    def eat(self):
        print('吃东西,加1')
        self.wegith += 1

xm = Person('小明', 120)

xm.eat()
xm.run()
print(xm)
```

1. 房子(House)有户型、总面积和家具名称列表
   - 新房子没有任何的家具
2. 家具(Houseltem)有名字和占地面积，其中
   - 席梦思(bed)占地4平米
   - 衣柜(chest)占地2平米
   - 餐桌(table)占地1.5平米
3. 将以上三件家具添加到房子中
4. 打印房子时，要求输出：户型、总面积、剩余面积、家具名称列表
剩余面积：
1. 在创建房子对象时，定义一个剩余面积的属性，初始值和总面积相等
2. 当调用add_item方法，向房间添加家具时，让剩余面积-=家具面积
```python
class HouseItem:
    def __init__(self,name,area):
        self.name = name
        self.area = area

class House:
    def __init__(self,house_type,area):
        self.house_type = house_type
        self.area = area
        self.free_area = self.area
        self.item_list = []
        print(f'户型：{self.house_type},面积：{self.area}')
    def __str__(self):
        return f'户型：{self.house_type},面积：{self.area},剩余面积：{self.free_area},家具列表:{self.item_list}'
    def add_item(self, item):
        self.item_name = item.name
        self.item_area = item.area
        # if free_area >= self.item_area
        self.item_list.append(self.item_name)
        self.free_area -= self.item_area
        print(f'添加成功家具:{self.item_name}')
        print(f'剩余面积：{self.free_area}')

home = House('一居室', 50)
bed = HouseItem('席梦思', 4)
chest = HouseItem('衣柜', 2)
table = HouseItem('餐桌', 1.5)
home.add_item(bed)
home.add_item(chest)
home.add_item(table)
```

### 9.5 私有和公有

1. 公有权限：直接书写的方法和属性，在任意地方访问和使用
2. 私有权限：在类内部，属性名或方法名前面加上两个下划线，只能在当前类使用

```python
class Person:
    def __init__(self,name,age):
        self.name = name
        # 私有的本质是python解释器执行代码，发现属性名或方法名前有两个下划线，会将名字重命名为“_类名__属性名”
        # self._Person__age
        self.__age = age
    def __str__(self):
        return f'名字：{self.name},年龄：{self.__age}'

xm = Person('小明',18)
print(xm)
xm.__age = 20 #此时是重新定义了一个公有属性
print(xm)
```

### 9.6 继承

```python
class 子类(父类):
    pass

class A: #没有写父类，也有父类object,class A(object):
  pass
class B(A):
  pass
```

- 继承后，可以直接使用父类中的**公有属性和方法**
- python**只支持单继承**，一个类只能继承一个父类

```python
class DongWu:
    def eat(self):
        pass
class Dog(DongWu):
    def jiao(self):
        pass
class XiaoTianQuan(Dog):
    pass

xtq = XiaoTianQuan()
xtq.eat()
xtq.jiao()
```

#### 9.6.1 重写

> 在子类中定义了和父类名字相同的方法

- 父类的方法不能满足子类对象的需求
- 重写后，不再调用父类中的方法
- 重写方法：覆盖；扩展

1. 覆盖

> 直接在子类中定义和父类中名字相同的方法，直接在方法中书写新代码

```python
class Dog:
    def jiao(self):
        print(f'汪汪汪')
class XiaoTianQuan(Dog):
    def jiao(self):
        print(f'嗷嗷嗷')
xtq = XiaoTianQuan()
xtq.jiao()
```

2. 扩展

> 直接在子类中定义和父类中名字相同的方法，在合适的地方调用父类中的方法super().方法()书写新功能

```python
class Dog:
    def jiao(self):
        print(f'汪汪汪')
class XiaoTianQuan(Dog):
    def jiao(self):
        super().jiao()
        print(f'嗷嗷嗷')
xtq = XiaoTianQuan()
xtq.jiao()
```

### 9.7 多态

> 同一个方法，传入不同的对象，执行得到不同的结果的现象

```python
# 人类 类
class Person:
    def work(self):
        print('人需要工作')
# 开发 类
class Coder(Person):
    def work(self):
        print('开发人员-->工作是写代码')
# 测试 类      
class Tester(Person):
    def work(self):
        print('测试人员-->工作是测试')
# 公司 类，查看不同岗位的工作
class Company:
    def show_work(self,worker):
        worker.work()
c = Company()
xw = Coder()
xh = Tester()
c.show_work(xw)
c.show_work(xh)
```

### 9.8 属性和方法

> python中一切都是对象，class定义的类也是对象

**对象的划分**：
1. 实例对象：通过类名()创建的对象，**每个对象都有自己的内存空间**
2. 类对象：python解释器在执行代码过程中创建的，**一个类只有一份内存空间**

**属性的划分**：
1. 实例属性：实例对象具有的属性。在init方法中使用“**self.属性名=属性值**”定义，在方法中使用“**sefl.属性名**”调用。实例属性**在每个实例中都存在一份**
2. 类属性：类对象具有的属性。在类内部、方法外部定义的变量（“**属性名 = 属性值**），使用“**类对象（即类名）.属性名**”调用。类属性**只有在类对象中存在一份**

```python
class Dog:
    count = 0
    def __init__(self,name):
        self.name = name
        Dog.count += 1
print(Dog.count)
blue = Dog('blue')
write = Dog('write')
print(Dog.count)
print(blue.count) #可以使用实例对象.类属性，优先查找实例属性
```

**方法的划分**：
1. 实例方法：在类中直接定义的方法。在需要使用实例属性（self）时定义。使用**对象.方法名**调用
2. 类方法：在**方法名上方写@classmethod装饰器**。参数一般写作**cls**，而不是self，表示类对象（即类名）。在不需要使用实例属性，又用到了类属性时定义（也可以定义为实例方法）。使用“**类对象（即类名）.方法名**”或“**实例对象.方法名**”调用
   ```python
   class Demo:
        @classmethod
        def func(cls):
          pass
    ```
3. 静态方法（基本不用）：在**方法名上方写@staticmethod装饰器**。参数一般不写。在不需要使用实例属性，又不需要使用类属性时定义（也可以定义为实例方法）。如多态中的公司类的show_work方法。使用“**类对象（即类名）.方法名**”或“**实例对象.方法名

```python
# 定义一个游戏类Game,包含属性玩家名字(name)
# 1.要求记录游戏的最高分(top_score类属性)，
# 2.定义方法：show help显示游戏的帮助信息输出“这是游戏的帮助信息”
# 3.定义方法：show top score,打印输出游戏的最高分
# 4.定义方法：start_game,开始游戏，规则如下
    # 1.使用随机数获取本次游戏得分范围(10-100)之间
    # 2.判断本次得分和最高分之间的关系
    # ■如果本次得分比最高分高，修改最高分
    # ■如果分数小于等于最高分，则不操作
    # 3.输出本次游戏得分
# 5.主程序步骤
#1)创建一个Game对象小王
#2)小王玩一次游戏，
#3)查看历史最高分
#4)小王再玩一次游戏
#5)查看历史最高分
#6)查看游戏的帮助信息

import random
class Game:
    top_score = 0
    def __init__(self,name):
        self.game_name = name
    @classmethod
    def show_help(self):
        print('这是游戏的帮助信息')
    @classmethod
    def show_top_score(cls):
        print(f'游戏的最高分：{Game.top_score}')
    def start_gam(self):
        num = random.randint(10,101)
        if num > Game.top_score:
            Game.top_score = num
        print(f'本次游戏得分：{num}')
xiaowang = Game('xiaowang')
xiaowang.start_gam()
Game.show_top_score()
xiaowang.start_gam()
Game.show_top_score()
Game.show_help()
```

## is和==的区别

==只判断数值是否相同，is判断引用是否相同

a is b ==> id(a) == id(b)

## 10. 文件操作

### 10.1 文件操作的步骤

#### 10.1.1 打开文件

open(file,mode = 'r',encoding = None)

- file：要打开的文件，字符串类型，建议使用相对路径（./ ../
- mode：缺省参数，文件的打开方式。'r'只读；'w'只写；'a'追加（append）
- encoding：编码方式，gbk（将一个汉字转换为2个字节二进制）、utf-8（将一个汉字转换为3个字节二进制）
- 返回值：文件对象

#### 10.1.2 读或写文件

1. 写文件

前提是**文件的打开方式是w或a**

文件对象.write('写入文件的内容')
- 返回值：写入文件的字符数，一般不用
- w方式打开文件，文件不存在会直接创建文件
- w方式打开文件，文件存在，会覆盖原文件（将原文件内容清空）

2. 读文件

前提是**文件的打开方式是r**

文件对象.read(n)
- n：表示读取多少字符，一般不写，默认读取全部内容
- 返回值：读取到的文件内容，字符串类型

#### 10.1.3 关闭文件

文件对象.close()

```python
w = open('a.txt','w',encoding='utf-8')
w.write('好好学习')
w.close()
r = open('a.txt','r',encoding='utf-8')
#r方式打开文件，文件不存在会报错
buf = r.read()
print(buf)
r.close()
```

### 10.2 使用with open打开文件

with open(file,mode,encoding = 'utf-8') as 变量
- 不用书写关闭文件代码

```python
with open('a.txt','a',encoding='utf-8') as f:
    f.write('good')
#a方式打开文件，文件不存在会创建，存在会在末尾加上
```

### 10.3 按行读取文件内容

文件对象.readline()
- 一次读取一行内容

```python
with open('a.txt',encoding='utf-8') as f:
    buf = f.readline()
    print(buf) #读第一行
    print(f.readline()) #读第一行
#a方式打开文件，文件不存在会创建，存在会在末尾加上

# 读取所有行
with open('a.txt',encoding='utf-8') as f:
    for i in f:
      print(i,end = '')# end=''去掉读取的空行
# 读取所有行,read()和readling()读到文件末尾返回一个空字符串
with open('a.txt',encoding='utf-8') as f:
    while True:
      buf = f.readling()
      if len(buf) == 0: # 容器为空，即数据个数为0，表示false      if buf:print(buf,end = '')
        break
      else:
        print(buf,end = '')
```

### 10.4 json文件操作

1. json主要数据类型是对象{}和数组[]
2. 一个json文件要么是一个对象或数组（最外层要么是{}，要么是[]）
3. json中的对象由键值对组成，每个数据由逗号隔开
4. json中的字符串必须使用双引号
5. json的其他数据类型：int、float、string、true（小写）、false（小写）、null

```json
{
    "name":"小明",
    "age":18,
    "isMan": true,
    "like":["听歌","游戏","购物"],
    "address":{
        "country":"中国",
        "city":"上海"
    }
}
```

#### 10.4.1 读取文件
1. 导包 import json
2. 读打开文件
3. 读文件：json.load(文件对象)
   - 返回值：字典（文件中是对象）或列表（文件中是数组）

```json
{
    "name":"小明",
    "age":18,
    "isMan": true,
    "like":["听歌","游戏","购物"],
    "address":{
        "country":"中国",
        "city":"上海"
    }
}
```
```python
import json
with open('info.json',encoding='utf-8') as f:
    # buf = f.read()
    # print(buf) #返回的是字符串，不便于操作
    result = json.load(f)
    print(result.get('name'))
    print(result.get('address').get('city'))
```

```json
[{
    "name":"小明",
    "age":18,
    "isMan": true,
    "like":["听歌","游戏","购物"],
    "address":{
        "country":"中国",
        "city":"上海"
    }
},
{
    "name":"小红",
    "age":18,
    "isMan": false,
    "like":["听歌","游戏","购物"],
    "address":{
        "country":"中国",
        "city":"上海"
    }
}]
```
```python
import json
with open('info.json',encoding='utf-8') as f:
    info_list = json.load(f)
    for info in info_list
    print(info.get('name'),info.get('address').get('city'))
```

```json
[
  {
    "desc": "正确用户名密码",
    "username": "admin",
    "password": "123456",
    "expect": "登录成功"
  },
  {
    "desc": "错误的用户名",
    "username": "root",
    "password'": "123456",
    "expect": "登录失败"
  },
  {
    "desc": "错误的密码",
    "username": "admin",
    "password": "123123",
    "expect": "登录失败"
  }
]
```
```python
import json
test_list = []
with open('info.json',encoding='utf-8')as f:
    info_list = json.load(f)
    for info in info_list:
        username = info.get('username')
        password = info.get('password')
        _except = info.get('except')
        tuple_list = (username, password, _except)
        test_list.append(tuple_list)
        # new_list.append((i.get('username')),(i.get('password')),(i.get('except')))
    print(test_list)
```

#### 10.4.2 写入文件

1. 导包 import json
2. 写（w）方式打开文件
3. 写入，json.dump(python中的数据类型，文件对象)

```python
import json
my_list = [
  {
    "desc": "正确用户名密码",
    "username": "admin",
    "password": "123456",
    "expect": "登录成功"
  },
  {
    "desc": "错误的用户名",
    "username": "root",
    "password'": "123456",
    "expect": "登录失败"
  },
  {
    "desc": "错误的密码",
    "username": "admin",
    "password": "123123",
    "expect": "登录失败"
  }
]
with open('info.json','w',encoding='utf-8') as f:
    json.dump(my_list, f,ensure_ascii=False,indent=4)
    # ensure_ascii=False显示中文，不以ascii显示。缩进4
```

### 读写文件实例练习

随机生成1-20之间的10个数字存入文件,进行降序排列，取最大的五个数字存入另一个文件
1. 普通文件操作
```python
import random

with open('date.txt', 'w') as f:
    for i in range(0, 10):
        num = random.randint(1, 20)
        f.write(f'{str(num)} ')
with open('date.txt', 'r') as f:
    num_str = f.read()
    print(num_str)
    num_list = num_str.split()
    new_num_list = []
    for i in num_list:
        new_num_list.append(int(i))
    new_num_list.sort(reverse=True)
    print(new_num_list)
with open('date1.txt', 'w') as f:
    for i in range(0,5):
        f.write(f'{new_num_list[i]} ')
with open('date1.txt', 'r') as f:
    num_str = f.read()
    print(num_str)
```
2. json操作
```python
import json
import random

with open('date.json', 'w') as f:
    num_list = []
    for i in range(0, 10):
        num = random.randint(1, 20)
        num_list.append(num)
    json.dump(num_list,f)
with open('date.json', 'r') as f:
    print(json.load(f))
with open('date1.json', 'w') as f:
    num_list.sort(reverse=True)
    for i in range(0,5):
        f.write(f'{num_list[i]} ')
with open('date1.json', 'r') as f:
    num_str = f.read()
    print(num_str)
```


## 11. 异常

> 程序在运行时，python解释器遇到一个错误，会停止程序的执行，并提示错误信息
 
### 11.1 异常捕获

> 程序遇到异常，默认动作是终止程序的执行，可以使用异常捕获，让程序继续运行，不会继续执行

语法：
```python
try:
  书写可能发生异常的代码
except:# 任何异常类型都能捕获
  发生了异常执行的代码

try:
  书写可能发生异常的代码
except 异常类型:# 只捕获指定的异常类型及其子类，否则依旧报错
  发生了异常执行的代码
```
```python
try:
  num = input('请输入数字：')
  num = int(num)
  print(num)
  num1 = 10/num
  print(f'10/num:{num1}')
except ValueError:
  print('发生了异常，请输入数字!')
except ZeroDivisionError:
  print('请勿输入0!')
```

**异常捕获的完整版本**

```python
try:
  可能发生异常的代码
except 异常类型1:
  发生异常类型1执行的代码
# Exception是常见异常类型的父类，可以捕获常见类型，变量是一个异常类的对象，pritn(变量)可以打印异常信息
except Exception as 变量:
  发生其他类型异常，执行的代码
else:
  没有发生异常会执行的代码
finally:
  不管有没有发生异常都会执行的代码
```
```python
try:
  num = input('请输入数字：')
  num = int(num)
  print(num)
  num1 = 10/num
  print(f'10/num:{num1}')
except Exception as e:
  print(f'错误信息：{e}')
else:
  print('没有发生异常会执行')
finally:
  print('不管有没有发生异常都会执行')
```

**常用异常捕获**

```python
try:
  可能发生异常的代码
except Exception as 变量:
  发生其他类型异常，执行的代码
```

### 异常捕获练习

1. 判断用户输入的数字
2. 判断数字是否为整数
3. 不是整数，提示输入错误
4. 是整数，判断是奇数还是偶数
5. 最终提示：程序结束

```python
try:
  num = input('请输入数字：')
  num = int(num) #num.isdigit() 检查字符串是否由数字组成
except Exception as e:
  print(f'输入错误，错误信息：{e}')
else:
  if num%2 == 0:
    print('偶数')
  else:
    print('奇数')
finally:
  print('程序结束')
```

### 11.2 异常传递

> 当函数/方法执行出现异常时，会将异常传递给函数/方法调用的一方，如果传递到主函数仍然没有异常处理，程序才会终止

```python
def func1():
  num = 10 /0
  print(num)
def func2():
  print('1111')
  func1()
try:
  func2()
except Exception as e:
  print(e)
```

### 11.3 抛出raise异常

主动抛出异常

## 12. 模块和包
### 12.1 模块的导入

```python
#方法一
import 模块名
模块名.工具名

import random
import json
random.randint(a,b)
json.load()

#方法二
from random import randint
from json import load
randint(a,b)
load()

# 方法三
from random import *
from json import *
```

- 导入的模块额工具可以使用as关键字给其起别名，原名失效
- **优先在当前目录**找模块，其次在系统目录中查找

### 12.2 \_\_name__的作用

- 直接执行当前代码时，\_\_name__的值是\_\_main__；导入当前文件时，\_\_name__的值是包名

**tools.py**
```python
def add(a,b):
  return a + b
# if __name__ == __main__: 当直接调用时，才执行下方代码。快捷键 main
  print(add(1,2))
  print(add(10,20))
  print('tools:',__name__)
  # 3
  # 30
  # tools:__main__
```
**demo.py**
```python
import tools

print(tools.add(100,200))
# 3
# 30
# tools:tools
# 300
```

### 练习
**tools.py**
```python
def func():
    print('我是tools模块中的func函数')


class Dog:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def play(self):
        print(f'{self.name}在快乐的玩耍')
```
```python
import tools

tools.func()

blue_dog = tools.Dog('blue_dog', 12)

blue_dog.play()
```

### 12.3 包

> python中包是一个目录，只不过这个目录存在一个文件__init__.py（可以为空)，将功能相近或相似的代码放在一起

- python中不需要区分包和模块，使用方法一样

**下接Python_测试.md**