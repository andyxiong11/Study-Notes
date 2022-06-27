- [2. 变量和数据类型](#2-变量和数据类型)
  - [2.2 变量](#22-变量)
    - [变量命名](#变量命名)
  - [2.3 字符串](#23-字符串)
    - [大小写转换](#大小写转换)
    - [拼接](#拼接)
    - [删除空白](#删除空白)
  - [2.4 数字](#24-数字)
  - [2.5 列表](#25-列表)
    - [2.5.1 修改、删除和添加元素](#251-修改删除和添加元素)
    - [2.5.2 组织列表](#252-组织列表)
    - [2.5.3 操作列表](#253-操作列表)
      - [2.5.3.1 遍历列表](#2531-遍历列表)
      - [2.5.3.2 创建数值列表](#2532-创建数值列表)
  - [2.6 元组](#26-元组)
  - [2.7 字典](#27-字典)
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
  - [7.2 列表](#72-列表)
  - [7.3 元组](#73-元组)
  - [7.4 字典](#74-字典)

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

### 2.3 字符串

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

{'name':'小明', 'age':'18'}

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
my_str = 'I\'m 小明'
my_str = 'I\\\'m 小明'
my_str = r'I\'m 小明'
```
- 字符串前面加上r""变成**原生字符串**，常用于文件路径
### 7.2 列表
### 7.3 元组
### 7.4 字典