# 一、 Java语言基础知识

## 1.1 前言

面向对象思想：
将客观事物看作具有状态和行为的对象，通过抽象找出同一类对象的共同状态和行为，构成类
面向对象基本特征：

1. 抽象和封装
1. 继承
1. 多态

Java语言特点：

1. 面向对象
1. 安全性
1. 操作平台无关性
1. 多线程
1. 内存管理

   ![image.png](https://cdn.nlark.com/yuque/0/2020/png/1120372/1586049705073-c6c0f84c-492a-40db-a686-4f481941ce99.png#align=left&display=inline&height=362&margin=%5Bobject%20Object%5D&name=image.png&originHeight=596&originWidth=814&size=59360&status=done&style=none&width=495)


```java
public class 类名{
    public static void main(String[] args){
        System.out.println("hello world");
    }
}
```

一个java文件可以有多个类，但只能有一个类定义为public且与文件名相同

---

运行

1. 编译    javac  源文件名.java

- 编译后可能产生多个字节码文件  .class

2. 解释运行    java 源文件名    

产生.exe

- 编译期就是将我们写的java源代码交给编译器执行的过程, 起翻译的作用. 主要是对java源代码的语法进行检查, 如果没有语法错误, 就将源代码编译成字节码文件(.class文件)
- 运行期则是将字节码文件(.class)加载到内存中交给java虚拟机执行, 直到程序执行结束的过程, 该过程主要是对程序的逻辑错误进行检查, 如果没有逻辑错误, 程序的功能就可以实现, 输出结果

注释

1. 单行注释：“//”

1. 多行注释：“/*

    					 *
      					  *
      					  */”

1. 文档注释：“/**

    					 *
      					  *
       					 */”

## 1.2 基本数据类型与表达式

### 1.2.1 变量与常量

1. 文字量：直接出现在程序中并被编译器直接使用，也称文字常量，不可被改变

![image.png](https://cdn.nlark.com/yuque/0/2020/png/1120372/1589684439422-eeb00163-6c19-46b7-9b28-39575bfee115.png#align=left&display=inline&height=185&margin=%5Bobject%20Object%5D&name=image.png&originHeight=275&originWidth=649&size=30241&status=done&style=none&width=436)

2. 标识符：标识符是一个名称，与内存中的某个位置（地址）相对应

   1. 第一个字符必须是以下字符之一：
      1. 大写字母
      1. 小写字母
      1. 下划线
      1. 美元符号

   1. 第二个字符及后继字符必须是：
      1. 上述列表任意字符
      1. 数字符号

2. 变量：由标识符命名；每个变量都有类型；值可以被改变

### 1.2.2 基本数据类型

![image.png](https://cdn.nlark.com/yuque/0/2020/png/1120372/1590113095315-61416ed2-89c8-4687-b027-b7756898ccdf.png#align=left&display=inline&height=321&margin=%5Bobject%20Object%5D&name=image.png&originHeight=488&originWidth=975&size=57218&status=done&style=none&width=641)

| 数据类型         | 文字量                                                       |
| ---------------- | ------------------------------------------------------------ |
| byte、short、int | 十进制数；oX跟十六进制数；o跟八进制数                        |
| long             | 同上，但后面跟l或L                                           |
| float            | 数字后面跟f或F                                               |
| double           | 后面可选d或D做后缀                                           |
| boolean          | true或flase                                                  |
| char             | 单引号括起来的字符或转义字符（用16位的Unicode字符作为编码方式） |

- 整数默认是int类型，浮点数默认是double类型
- 字符串用String类定义，可以当作一种数据类型

例：String age = "年龄";<br />转义字符：   char

| 转义字符 | 含义       | 转义字符 | 含义                                            |
| -------- | ---------- | -------- | ----------------------------------------------- |
| \’       | 单引号字符 | \t       | 水平制表符                                      |
| \”       | 双引号字符 | \b       | 退格                                            |
| \\       | 反斜杠字符 | \f       | 换页                                            |
| \r       | 回车       | \101     | 使用3位8进制表示0~377（10进制0~255）的256个字符 |
| \n       | 回车并换行 | \u4e01   | 使用4位16进制表示\u0000~\uffff范围的字符        |

### 1.2.3. 运算符与表达式

![image.png](https://cdn.nlark.com/yuque/0/2020/png/1120372/1590111390425-b3090189-57c7-4e49-a123-04bb63ba4b85.png#align=left&display=inline&height=280&margin=%5Bobject%20Object%5D&name=image.png&originHeight=395&originWidth=672&size=41203&status=done&style=none&width=476)

- 关系表达式类型永远是布尔型
- 相等关系比较：数字相等、布尔相等、引用相等

类型型比较运算符：instanceof<br />例：e instanceof Point //Point是一个类<br />位运算符：

1. & 按位与：对应的两个二进位均为1时，结果位才为1 ，否则为0
1. |  按位或：对应的两个二进位有一个为1时，结果位就为1
1. /\ 按位异或：对应的两个二进位相异时，结果为1
1. ~  求反：对二进位按位求反
1. “>>”右移：运算数的各二进位全部右移若干位，由“<<”右边的数指定移动的位数，高位丢弃，低位补0
1. << 左移：运算数的各二进位全部左移若干位，由“<<”右边的数指定移动的位数，高位丢弃，低位补0

### 1.2.4. 类型转换

==byte->short->char->int->long->float->double==

#### 1. 扩展转换

- 从整数向整数转换或float向double转换不损失任何信息，但是从整数向float或double转换会损失精度

#### 2. 窄化转换

- 高精度向低精度转换可能会丢失信息

#### 3. 隐含转换

1. 赋值转换
   - 将表达式类型转换为指定变量的类型
1. 方法调用转换
   - 适用于方法或构造方法中的每一个参数
1. 字符串转换
   - 任何类型（包括null类型）都可以转换为字符串类型
   - 只当一个操作数是String类型时，适用于+运算符的操作数

例：System.out.println(age+20);

#### 4. 强制转换

- 目标类型 变量名 = (目标类型){被强制转换的数据}
- 强制转换后的数据=原始数据%目标类型数字个数

## 1.3 数组

- 数组由同一类型的对象或者基本数据组成，并封装在同一个标识符（数组名称）下
- 数组是对象
  - 动态初始化
  - 可以复制给Object类型的变量
  - 在数组中可以调用类Object的所有方法
  - 每个数组都有一个由public final修饰的成员变量：length（数组中元素的个数，正数或零）

### 1. 数组声明的引用

- 声明数组时无需指明数组元素的个数，也不分配内存空间
- 不能直接使用，必须初始化分配内存后才能使用

例：<br />int[ ] intArray；<br />int intArray[ ]；

### 2. 数组的创建

- 用关键字new构成数组的创建表达式，可以指定数组类型和元素个数。元素个数可以是常量或变量
- new表示在运行时动态分配内存空间来创建数组
- 基本数据类型的每个元素都是一个基本类型的变量；引用类型数组的每个元素都是对象的引用

例：<br />ing[ ] ai； ai = new int[10]；<br />或者<br />int ai[ ] = new int[10]；

   1. 在栈中开启一个ai变量
   1. 在堆内存空间中开辟一个由连续10个区域组成的对象空间

- 可以在一条语句中创建多个数组

String[ ] s1 = new String[3]，s2 = new String[4]；

### 3. 数组（元素）的初始化

- 声明数组名时，如给出了数组的初始值，程序便会利用初始值创建数组并对各个元素初始化

int a[ ] = {22，33，44}；

- 如果创建数组时没有指定初始值，便赋予数组默认初始值
  1. 基本类型数据默认初始值为0
  1. boolean类型数据默认为false
  1. 引用类型元素默认为null
- 程序可以在数组构造后改变元素值（赋值......）

### 4. 使用数组

arrayName[index]

- 下标必须是int、short、byte、char，从零开始
- 可以通过arryName.length得到数组长度即元素个数
- 下标最大值为lenggth-1，如果数组越界，会产生异常（ArrayIndexOutOfBoundsException）
- 数组名只是一个引用

```java
public class Array {
    public static void main(String[] args) {
        int a1[] = {1,2,3,4,5};
        int a2[];
        a2 = a1;
        for(int i = 0;i < a2.length;i++){
            a2[i]++;
        }
        for(int i = 0;i < a1.length;i++){
            System.out.println("a1["+i+"]="+a1[i]);
        }
    }
}
```

- 字符串构成的数组，每个元素都是引用

```java
public class ArrayOfStringDemo {
    public static void main(String[] args) {
        String anArray[] = {"String One","String Two","String Stree"};
        for(int i = 0;i < anArray.length;i++){
            System.out.println(anArray[i].toLowerCase());//toLowerCase方法把字母变成小写
        }
    }
}
```

- 复制数组或数组的部分元素

public static void arraycopy(Object source , int srcIndex , Object dest , int destIndex , int length)

```java
public class ArrayCopyDemo {
    public static void main(String[] args) {
        char copyFrom[] = {'a','b','c','d','e','f','g'};
        char copyTo[] = new char[7];
        System.arraycopy(copyFrom, 2 , copyTo, 0, 4);
        System.out.println(new String(copyTo));
    }
}
```

- 遍历输出数组的每个元素

```java
public class ArrayDemo {
    public static void main(String[] args) {
        int[] a1 = new int[5]
        System.out.println(Array.toString(a1));
    }
}
```

- 输出数组长度

```java
public class ArrayDemo {
    public static void main(String[] args) {
        int[] a1 = new int[5]
        System.out.println(Array.length);
    }
}
```

### 5. 二维数组

二维数组的声明和构造：

1. int myArray[ ][ ]

一个指向2维整数数组的引用，初始值为null

2. int myArray[ ][ ] = new int [3][5]

定义引用同时构造数组并初始化引用，初始值为0

   1. 在栈中开启一个myArray变量
   1. 在堆内存空间中开辟三个由连续5个区域组成的对象空间
   1. 在堆内存空间中由一个容量为3的一维数组引用三个数组对象的首地址
   1. 容量为3的一维数组首地址传送给myArray变量

或<br />int myArray[][] = new int[1][];<br />myArray[0] = new int[10];<br />myArray[1] = new int [20];

3. int myArray[ ][ ] = {{8,1,2,2,9},{1,9,4,0,3}, {0,3,0,0,7}}

定义引用、构造数组，初始化数组元素

- 2维数组的长度是数组的行数，每一行的长度为每一行的列数（uneven[0].length）

## 1.4 算法的流程控制

### 1. if语句

```java
if(boolean-true){
...;
}
//---------------
if(boolean-true){
...;
}
else{
    ...;
}
//---------------
if(boolean-true){
...;
}
else if(boolean-true){
...;
}
else{
    ...;
}
//if-else语句简化
System.out.println("最大值为:"+(a>b)?a:b);
```

### 2. switch语句

```java
switch(int or char or byte or short){//jdk1.7后支持String类型
    case value1:
        ...;
        break;
    case value2;
        ...;
        break;
    ...
    //default可有可无
    default:
        ...;
        break;
}  
```

### 3. for语句

```java
for(start;check;update){
    ...;
}
```

### 4. 增强for循环

- 用来对数组或集合对象进行遍历

```java
for(引用名:数组或集合类型对象){
    ...;
}
```

### 5. while语句

```java
while(boolean-true){
    ...;
}
```

### 6. do-while语句

```java
do{
    ...;
}while(boolean-true继续循环)
```

### 7. break语句

- 功能：跳出循环，不再执行剩余部分
- 在for循环及while循环中，用于中止break语句所在的最内层循环
- 与标号一同使用时，跳出标号所标识的循环
- 也可用于跳出指定的代码块

### 8. continue语句

- 必须用于循环语句，用于跳出本次循环
- 带标号的continue语句用于使流程直接转入标号所在循环

## 续：变量，常量的定义

- 一个变量名只能声明一次，一个变量被一种数据类型声明后，不允许改变数据类型声明
- 在一条语句中可以同时定义并初始化多个变量
- 可以使用数学表达式进行初始化赋值
- 声明在方法中的是局部变量，在类中的是实例变量
- 在java中所有基本数据类型数据都是存储在虚拟机栈中，容量小，运算快
- 变量作用域被绑定在声明它的代码块之内“{ }”

---

常量的定义：final 数据类型 常量名 = 数值；

# 二、类与对象

## 2.1 面向对象方法的特性

- 抽象、封装、继承、多态
### 2.1.1. 抽象

- 忽略问题中与当前目标无关的方面，只关注有关的内容

例：钟表

1. 数据（属性）

小时            分                秒
int Hour；int Minute；int Second；

2. 方法（行为）

SetTime( );ShowTime( );
### 2.1.2. 封装

- 一种信息隐蔽技术；
- 利用抽象数据类型将数据和基于数据的操作封装在一起；
- 用户只能看到对象的封装界面信息，对象的内部细节对用户是隐蔽的，目的在于将对象的设计者和使用者分开，使用者不必知道行为实现的细节。
### 2.1.3. 继承

- 基于已有的类产生新类的机制；
- 是指新的类可以获得已有类（超类、基类或父类）的属性和行为，称新类为已有类的子类（派生类）；
- 在继承过程中子类继承了超类的特性（方法、实例变量）；
- 子类也可以修改继承的方法或增加新的方法；
- 有助于解决软件的可重用性问题，是程序结构清晰，降低编码和维护的工作量。

1. 单继承：一个子类只有单一的直接超类
1. 多继承：一个子类可以有一个以上的超类

**Java只支持单继承**

### 2.1.4. 多肽

> 在有继承的情况下，超类和子类的对象都可以响应同名的消息，但是这些对象对同名的消息响应的具体方式可以不同

主要实现方式：子类覆盖从超类继承过来的方法

## 2.2.1 类声明与对象创建

**类与对象的关系**

1. 类是对一类对象的描述
1. 对象是类的具体实例

* 类是一种自定义类型

### 1. 类声明

```java
[public] [abstract|final] class 类名 [extends父类名] [implements接口名称列表]{
    数据成员声明及初始化；
    方法声明及方法体；
}
```

1. class

> 表明其后声明的是一个类

2. extends

> 如果所声明的类是从某一类父类派生为来，那么父类的名称应该写在extends以后

3. implements

>如果所声明的类要实现某些接口，那么接口的名称应该写在implements以后

4. public

> 表明此类为公有类

5. abstract

> 指明此类为抽象类

6. final

> 指明此类为终结类（不可被继承）

```java
//钟表类
public class Clock{
    int hour;
    int minute;
    int second;
    public void setTimg(int newH, int newM, int newS){
        hour = newH;
        minute = newM;
        second = newS;
    }
    public void showTime(){
        System.out.println(hour+":"+minute+":"+second);
    }
}
```

### 2. 对象创建

1. 对象引用声明

   



## 1. 字符串对象和字符串常量

String myArray = {"hello world"};

String myArray = new String("helloworld")

## 2. 编译错误和运行错误

```java
public class Error{
    public static void main(String args[]){
        int a[]=new int[5];
        a.length = 10;//编译错误
        System.out.println(a.length);
    }
}
```