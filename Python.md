- [2. 变量和数据类型](#2-变量和数据类型)
  - [2.2 变量](#22-变量)
    - [变量命名](#变量命名)
  - [2.3 字符串](#23-字符串)
    - [大小写转换](#大小写转换)
    - [拼接](#拼接)
    - [删除空白](#删除空白)
  - [2.4 数字](#24-数字)
- [3. 列表](#3-列表)
  - [3.2 修改、删除和添加元素](#32-修改删除和添加元素)
  - [3.3 组织列表](#33-组织列表)
- [4. 操作列表](#4-操作列表)
  - [4.1 遍历列表](#41-遍历列表)
  - [4.3 创建数值列表](#43-创建数值列表)

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
1. 变量名只可使用下划线来分隔其中的单词。
1. 不要将Python关键字和函数名用作变量名。
1. 变量名应既简短又具有描述性。
1. 慎用小写字母l和大写字母O，因为它们可能被人错看成数字1和0。
1. 注意，应尽量使用小写的Python变量名。在变量名中使用大写字母虽然不会导致错误，但避免使用大写字母是个不错的主意。

### 2.3 字符串

#### 大小写转换

1. title()方法，将每个单词的首字母都改为大写
1. upper()方法，将字符串全部转为大写
1. lower()方法，将字符串全部转为小写

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

## 3. 列表

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

### 3.2 修改、删除和添加元素

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

### 3.3 组织列表

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

## 4. 操作列表

### 4.1 遍历列表

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

### 4.3 创建数值列表

**函数range,生成一系列数字，从左边的数开始，不包含右边的数**

```python
for value in range(1, 5):
    print(value)
```

**使用range函数创建数字列表1-4**

```python
numbers = list(range(1, 5))
print(numbers)

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