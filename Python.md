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
    - [7.1.5 拆分 split](#715-拆分-split)
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
  - [2.9 变量的引用](#29-变量的引用)
  - [2.10  可变类型和不可变类型](#210--可变类型和不可变类型)
  - [2.11 引用实例](#211-引用实例)
  - [组包和拆包（交换两个变量的值）](#组包和拆包交换两个变量的值)

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
while true:
  执行代码
  if 判断条件:
    break
  执行代码

#剪刀石头布
import random

while true:
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

while true:
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

#### 7.1.5 拆分 split

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
- 列表.sort(reverse=true)，降序

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

### 2.9 变量的引用

1. python中，变量和数据是存在不同的内存空间中
2. 给变量赋值，本质是**将数据的地址保存到变量对应的内存中**
3. 变量中存储数据地址的行为就是引用（变量引用了数据的地址），存储的地址称为引用地址
4. 可以使用id()获取变量中的引用地址（即数据地址） ，如果两个变量的id()获取的引用地址一样，即代表是同一个数据
5. 只有赋值可以改变引用地址（a=1,b=a,a=2。a的引用地址改变了，b没有变）
6. python中数据的传递，都是传递引用

### 2.10  可变类型和不可变类型

>数据所在的类型是否允许修改（不使用“=”）

可变类型：list、dict、set
不可变类型：int、float、bool、str、tuple

### 2.11 引用实例

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
### 组包和拆包（交换两个变量的值）
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
