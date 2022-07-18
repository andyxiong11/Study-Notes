**上接Python.md**
> 以下所有内容参考自https://www.bilibili.com/video/BV11g411V7Kf

- [1. UnitTest框架](#1-unittest框架)
  - [1.1 UnitTest组成](#11-unittest组成)
    - [1.1.1 TestCase（测试用例）](#111-testcase测试用例)
    - [1.1.2 TestSuite & TestRunner](#112-testsuite--testrunner)
    - [执行结果](#执行结果)
    - [练习](#练习)
    - [1.1.3 TestLoader（测试加载）](#113-testloader测试加载)
    - [1.1.4 Fixture（测试夹具）](#114-fixture测试夹具)
        - [1.1.4.1 方法级别（掌握）](#1141-方法级别掌握)
      - [1.1.4.2 类级别（掌握）](#1142-类级别掌握)
      - [1.1.4.3 模块级别（了解）](#1143-模块级别了解)
    - [练习](#练习-1)
  - [1.2 UnitTest断言](#12-unittest断言)
  - [pycharm运行框右侧Export Test Results按钮可以导出测试报告](#pycharm运行框右侧export-test-results按钮可以导出测试报告)
  - [1.3 参数化](#13-参数化)
  - [1.4 跳过](#14-跳过)
  - [1.5 测试报告](#15-测试报告)

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

#### 1.1.1 TestCase（测试用例）

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

#### 1.1.2 TestSuite & TestRunner

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

#### 执行结果

.表示用例通过，F表示不通过，E表示用例代码有问题

#### 练习

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

#### 1.1.3 TestLoader（测试加载）

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

#### 1.1.4 Fixture（测试夹具）

> 是一个代码结构,在某些特定情况自动执行

###### 1.1.4.1 方法级别（掌握）

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
##### 1.1.4.2 类级别（掌握）

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

##### 1.1.4.3 模块级别（了解） 

> 在**每个代码文件**执行前后都会自动调用的结构

```python
# 写在类的外部，代码文件之前
def setUpModule():
    pass

# 写在类的外部，代码文件之后
def tearDownModule():
    pass
```

#### 练习

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

### 1.2 UnitTest断言

- 断言的结果有True、False
- unittest中使用断言都需要通过self.断言方法

1. assertEqual

    语法：self.assertEqual(预期结果，实际结果)
    - 预期结果与实际结果相等，用例通过
    - 预期结果与实际结果不相等，用例不通过，抛出异常

2. assertln

    语法：self.assertln(预期结果，实际结果)
   - 预期结果包含在实际结果中，用例通过（assertln('admin','admin')、assertln('admin','admin**nnn**')、assertln('admin','**aaaa**admin')、assertln('admin','**aaa**admin**nnn**')）
   - 预期结果不包含在实际结果中，用例不通过，抛出异常（assertln('admin','adm**mmm**min')）

```python
# login.py
def login(username,password):
    if username == 'admin' and password == '123456':
        return '登录成功'
    else:
        return '登录失败'

# assert.py

import unittest
import login

class TestLogin(unittest.TestCase):
    def test_username_password_ok(self):
        """正确的用户名和密码：admin,123456,登录成功"""
        self.assertEqual('登录成功',login('admin','123456'))
        # if login('admin','123456') == '登录成功':
        #     print('pass')
        # else:
        #     print('fail')
    def test_username_error(self):
        """错误的用户名：root,123456,登录失败"""
        self.assertEqual('登录失败',login('root','123456'))
        # if login('root','123456') == '登录失败':
        #     print('pass')
        # else:
        #     print('fail')
    def test_password_error(self):
        """错误的密码：admin,123123,登录失败"""
        self.assertEqual('登录失败',login('admin','123123'))
        # if login('admin','123123') == '登录失败':
        #     print('pass')
        # else:
        #     print('fail')
    def test_username_password_error(self):
        """错误的用户名和密码：aaa,123456,登录失败"""
        self.assertEqual('登录失败',login('aaa','123123'))
        # if login('aaa','123123') == '登录失败':
        #     print('pass')
        # else:
        #     print('fail')
```
### pycharm运行框右侧Export Test Results按钮可以导出测试报告

### 1.3 参数化

> 使用变量代替具体的测试数据，使用传参的方法将json文件中的测试数据传递给方法变量

- unittest框架本身不支持参数化，需要安装parameterized插件(pip3 install parameterized -i http://pypi.douban.com/simple/ --trusted-host pypi.douban.com)
- from parameterized import parameterized

1. 导包 unittest、parameterized
2. 定义测试类
3. 书写测试方法（测试数据使用变量代替）
4. 组织测试数据并传参

```python
# 1. 导包 unittest、parameterized
import unittest
from tools import login
from parameterized import parameterized

# 组织测试数据 [(),(),()] or [[],[],[]]
data = [('admin', '123456', '登录成功'), ('root', '123456', '登录失败'), ('admin', '123123', '登录失败')]


# 2. 定义测试类
class TestLogin(unittest.TestCase):
    # 4. 组织测试数据并传参（装饰器@）
    @parameterized.expand(data)
    # 3. 书写测试方法（测试数据使用变量代替）
    def test_login(self, username, password, expect):
        self.assertEqual(expect, login(username, password))

```

**从json文件取测试数据**
```python
# data.json
[
  {
    "username": "admin",
    "password": "123456",
    "except": "登录成功"
  },
  {
    "username": "root",
    "password": "123456",
    "except": "登录失败"
  }
]

# 1. 导包 unittest、parameterized
import json
import unittest
from tools import login
from parameterized import parameterized

# 组织测试数据 [(),(),()] or [[],[],[]]
def build_data():
    with open('date.json', encoding='utf-8') as f:
        result = json.load(f)  # [{},{}]
        data = []
        for i in result:
            data.append((i.get('username'), i.get('password'), i.get('except')))
    return data

# 2. 定义测试类
class TestLogin(unittest.TestCase):
    # 3. 书写测试方法（测试数据使用变量代替）
    @parameterized.expand(build_data())
    def test_login(self, username, password, expect):
        self.assertEqual(expect, login(username, password))
# 4. 组织测试数据并传参（装饰器@）
```

### 1.4 跳过

> 对于一些未完成或不满足测试条件的测试函数和测试类，不想执行，可以使用跳过

- 代码写在test_case文件中

```python
# 直接将测试函数标记成跳过
@unittest.skip('跳过的原因')
# 根据条件判断测试函数是否跳过，判断成立，跳过
@unittest.skipIf(判断条件,'跳过原因')

```python
from ensurepip import version
import unittest

version = 30
class TestDemo(unittest.TestCase):
    @unittest.skip('跳过test1') 
    def test1():
        pass
    @unittest.skipIf(version >= 30,'版本大于等于30不用测试')
    def test2():
        pass
    def test3():
        pass
```

### 1.5 测试报告

1. 自带测试报告：只有单独运行TestCase代码才会生成测试报告
2. 第三方测试报告
   1. 获取第三方测试运行类模块，放在代码目录中（HTMLTestRunner.py HTMLTestRunnerCN.py）
   2. 导包unittest
   3. 使用套件对象，加载对象 添加用例方法
   4. 实例化第三方运行对象，运行套件对象

```python
# 测试执行套件文件 run_casae.py
from cProfile import run
import unittest
from unittest import suite
# 实例化测试加载对象并添加用例
suite = unittest.defaultTestLoader.discover('./case','case_*.py')
# 实例化运行对象并执行套件对象
unittest.TextTestRunner().run(suite)

# 生成第三方测试报告文件
# 2. 导包unittest
import unittest
from HTMLTestRunner import HTMLTestRunner
# 3. 使用套件对象，加载对象 添加用例方法
suite = unittest.defaultTestLoader.discover('.','run_case.py')
# 4. 实例化第三方运行对象，运行套件对象
#HTMLTestRunner()
# stream=:sys.stdout,必填，测试报告的文件对象(open),注意点要使用wb打开
# verbosity=1,可选，报告的详细程度，默认1简略，2详细
# title=None,可选，测试报告的标题
# description=Wone可选，描述信息，Python的版本，pycharm版本

file = 'report.html'
with open(file,'wb')as f:
    runner = HTMLTestRunner(f,2,'测试报告','python3.9')
    # 运行套件对象
    runner.run(suite)
```