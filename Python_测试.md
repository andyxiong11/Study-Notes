**上接Python.md**
> 以下所有内容参考自https://www.bilibili.com/video/BV11g411V7Kf

## 1. UnitTest框架

> 自动化脚本（用例代码）执行框架，管理运行多个测试用例，断言，生成测试报告

### 1.1 UnitTest组成

1. TestCase（最核心的模块）
   > 测试用例，指代一个代码文件，在其中书写用例代码

2. TestSuite
   > 测试套件，用来管理组装（打包）多个TestCase（测试用例）

3. TestRunner
   > 测试执行，执行TestSuite（测试套件）

4. TestLoader
   > 测试加载，对TestRunner（测试套件）功能的补充

5. Fixture
   > 测试夹具，书写在TestCase（测试用例）代码中，是一个代码结构，在每个方法执行前后都会执行的内容

### 1.2 TestCase（测试用例）

1. 导包（unittest）
2. 自定义测试类
3. 在测试类中书写测试方法
4. 执行用例

```python
import unittest

# 自定义测试类，需要继承unittest模块中的TestCase类
class TestDemo(unittest.TestCase):
    # 书写测试方法必须以test_开头。本质是以test开头
    def test_moethod1(self):
        print('测试方法1')
    def test_moethod2(self):
        print('测试方法2')

# 将光标放在类名后面运行，会执行类中所有的测试方法；放在方法名后面只执行当前的方法
```

- 自定义测试类，需要**继承unittest模块中的TestCase类**
- 写测试方法**必须以test_开头**。本质是以test开头
- 执行用例时，需以右键**“unittest for 文件名.py”**方式执行。否则需删除pycharm右上角默认执行文件，重新执行
- 执行用例时，将光标放在类名后面运行，会执行类中所有的测试方法；放在方法名后面只执行当前的方法

### 1.3 TestSuite & TestRunner

> TestSuite（测试套件），用来管理组装（打包）多个TestCase（测试用例）
> TestRunner(测试执行)，执行TestSuite（测试套件）

1. 导包（unittest）
2. 实例化（创建对象）套件对象
3. 使用套件对象添加用例方法
4. 实例化运行对象
5. 使用运行对象执行套件对象

```python
# testcase1.py
import unittest
class TestDemo1(unittest.TestCase):
    def test_moethod1(self):
        print('测试方法1-1')
    def test_moethod2(self):
        print('测试方法1-2')
```
```python
# testcase2.py
import unittest
class TestDemo2(unittest.TestCase):
    def test_moethod1(self):
        print('测试方法2-1')
    def test_moethod2(self):
        print('测试方法2-2')
```
```python
# suite_runner.py
# 1. 导包（unittest）
import unittest
import TestDemo1
import TestDemo2
# 2. 实例化（创建对象）套件对象
suite = unittest.TestSuite()
# 3. 使用套件对象添加用例方法
# 方法1 套件对象.addTest(测试类名('方法名'))
suite.addTest(TestDemo1('test_moethod1'))
suite.addTest(TestDemo1('test_moethod2'))
suite.addTest(TestDemo2('test_moethod1'))
suite.addTest(TestDemo2('test_moethod2'))
# 方法2 套件对象.addTest(unittest.makeSuite(测试类名))
suite.addTest(unittest.makeSuite(TestDemo1))
suite.addTest(unittest.makeSuite(TestDemo2))
# 4. 实例化运行对象
runner = unittest.TextTestRunner()
# 5. 使用运行对象执行套件对象
runner.run(suite)
```

### 执行结果

.表示用例通过，F表示不通过，E表示用例代码有问题

### 练习

> 对add()函数进行测试
```python
# tools.py
def add(a,b):
    return a + b
```
```python
# test_case.py
import unittest
from tools import add
class TestCase1(unittest.TestCase):
    def test_one(self):
        if add(1,2) == 3:
            print('成功')
    def test_two(self):
        if add(10,20) == 30:
            print('成功')

    def test_three(self):
        if add(2,3) == 5:
            print('成功')
```
```python
# suite_runner.py
import unittest
from test_case import TestDemo1
suite = unittest.TestSuite()
suite.addTest(unittest.makeSuite(TestDemo1))
runner = unittest.TextTestRunner()
runner.run(suite)
```

### 1.4 TestLoader（测试加载）

> 作用与TestSuite作用一样，组装测试用例，不同的是当测试用例比较多时使用

1. 导包
2. 实例化测试加载对象并添加用例，得到suite对象
3. 实例化运行对象
4. 运行对象执行套件对象

```python
# 1. 导包
import unittest
# 2. 实例化测试加载对象并添加用例，得到suite对象
# unittest.TestLoader().discover('用例所在路径','用例的文件名')
# suite = unittest.DefaultTestLoader.discover('./case','test*.py') 默认对象
suite = unittest.TestLoader().discover('./case','test*.py')
# 3. 实例化运行对象
runner = unittest.TextTestRunner()
# 4. 运行对象执行套件对象
runner.run(suite)

# unittest.TextTestRunner().run(suite)
```

### 1.5 Fixture（测试夹具）

> 是一个代码结构,在某些特定情况自动执行

#### 1.5.1 方法级别（掌握）

> 在**每个测试方法**（用例代码）执行前后都会自动调用的结构

```python
# 方法执行之前
def setUp(self):
    #每个测试方法执行之前都会执行
    pass

# 方法执行之后
def tearDown(self):
    #每个测试方法执行之后都会执行
    pass
```
#### 1.5.2 类级别（掌握）

> 在**每个测试类**中所有方法执行前后都会自动调用的结构（一个类执行一次）

```python
# 类中所有方法之前
@classmethod
def setUpClass(self):
    pass

# 类中所有方法之后
@classmethod
def tearDownClass(self):
    pass
```

#### 1.5.3 模块级别（了解） 

> 在**每个代码文件**执行前后都会自动调用的结构

```python
# 写在类的外部，代码文件之前
def setUpModule():
    pass

# 写在类的外部，代码文件之后
def tearDownModule():
    pass
```

### 练习

```python
# 1,打开浏览器（整个测试过程中就打开一次浏览器）  类级别
# 2.输入网址（每个测试方法都需要一次）   方法级别
# 3.输入用户名密码验证码点击登录（不同的测试数据） 测试方法
# 4.关闭当前页面（每个测试方法都需要一次）   方法级别
# 5,关闭浏览器（整个测试过程中就关闭一次浏览器）  类级别
import unittest

class TestLogin(unittest.TestCase):
    def setUp(self):
        print('输入网址')
    def tearDown(self):
        print('关闭当前页面')
    @classmethod
    def setUpClass(cls):
        print('------打开浏览器-------')
    @classmethod
    def tearDownClass(cls):
        print('------关闭浏览器-------')
    def test_case1(self):
        print('输入正确的用户名密码')
    def test_case2(self):
        print('输入错误的用户名密码')
```