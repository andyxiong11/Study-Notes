> [https://www.cnblogs.com/weibanggang/p/9457757.html](https://www.cnblogs.com/weibanggang/p/9457757.html)

# 简单介绍

## equals 方法是 java.lang.Object 类的方法

### 有两种用法说明:

#### 一、对于字符串变量来说，使用“==”和“equals()”方法比较字符串时，其比较方法不同。

#### 1、“==”比较两个变量本身的值，即两个对象在内存中的首地址。

#### (java 中，对象的首地址是它在内存中存放的起始地址，它后面的地址是用来存放它所包含的各个属性的地址，所以内存中会用多个内存块来存放对象的各个参数，而通过这个首地址就可以找到该对象，进而可以找到该对象的各个属性)

#### 2、“equals()”比较字符串中所包含的内容是否相同。

比如：

```java
String s1,s2,s3 = "abc", s4 ="abc" ;
s1 = new String("abc");
s2 = new String("abc");
s1==s2   是 false      //两个变量的内存地址不一样，也就是说它们指向的对象不 一样，  s1.equals(s2) 是 true    //两个变量的所包含的内容是abc，故相等。
String s1,s2,s3 = "abc", s4 ="abc" ;
s1 = new String("abc");
s2 = new String("abc");
System.out.println("s1==s2:"+(s1==s2));
System.out.println("s1==s3:"+(s1==s3));
System.out.println("s3==s4:"+(s3==s4));
System.out.println("s1.equals(s2):"+(s1.equals(s2)));
System.out.println("s1.equals(s3):"+(s1.equals(s3)));
System.out.println("s3.equals(s4):"+(s3.equals(s4)));
```

### 测试图

![](https://cdn.nlark.com/yuque/0/2021/png/1120372/1621916951022-1ccbde44-4a1a-4349-a519-292810e47968.png#clientId=u5df9e72f-a039-4&from=paste&height=274&id=u41092a4e&margin=%5Bobject%20Object%5D&originHeight=548&originWidth=1038&originalType=url&status=done&style=none&taskId=ub289caeb-8e91-431c-b989-690803c8911&width=519)

## 注意：

```java
StringBuffer s1 = new StringBuffer("a"); StringBuffer s2 = new StringBuffer("a"); System.out.println("s1.equals(s2):"+(s1.equals(s2)));//结果为 false
```

![](https://cdn.nlark.com/yuque/0/2021/png/1120372/1621916951661-3bcfe3d3-4512-4148-85fb-d41045b7f87e.png#clientId=u5df9e72f-a039-4&from=paste&height=125&id=u13ffafa4&margin=%5Bobject%20Object%5D&originHeight=250&originWidth=1127&originalType=url&status=done&style=none&taskId=u25cc752b-26c8-4c0c-b754-f4d4ce1a845&width=563.5)

## 解释：StringBuffer 类中没有重新定义 equals 这个方法，因此这个方法就来自 Object 类，

## (Object 类中的 equals 方法是用来比较“地址”的，所以等于 false)

## 注意：

### 对于 s3 和 s4 来说，有一点不一样要引起注意，由于 s3 和 s4 是两个字符，串常量所生成的变量，其中所存放的内存地址是相等的，所以 s3==s4 是 true（即使没有 s3=s4 这样一个赋值语句）

### 对于非字符串变量来说，"=="和"equals"方法的作用是相同的都是用来比较其，对象在堆内存的首地址，即用来比较两个引用变量是否指向同一个对象。

比如：

```java
class A {       
    A obj1   =   new  A();       
    A obj2   =   new  A(); 
    }      
obj1==obj2　　//结果为false      
obj1.equals(obj2)//是false 　　　
//但是如加上这样一句： 　　　
obj1=obj2;　　 　　　
//执行后 　　　
obj1==obj2  //是true     
obj1.equals(obj2) //是true
```

## 1、equals 方法对于字符串来说是比较内容的，而对于非字符串来说是比较，其指向的对象是否相同的。

## 2、 == 比较符也是比较指向的对象是否相同的也就是对象在对内存中的的首地址。

#### String 类中重新定义了 equals 这个方法，而且比较的是值，而不是地址。所以是 true。

比如：

# 关于 equals 与==的区别从以下几个方面来说：

### （1） 如果是基本类型比较，那么只能用==来比较，不能用 equals

```java
public class TestEquals {  
    public static void main(String[] args)  {  
        int a = 3;  
        int b = 4;  
        int c = 3;  
        System.out.println(a == b);//结果是false  
        System.out.println(a == c);//结果是true  
        System.out.println(a.equals(c));//错误，编译不能通过，equals方法  //不能运用与基本类型的比较  
    }  
}
```

### （2） 对于基本类型的包装类型，比如 Boolean、Character、Byte、Shot、Integer、Long、Float、Double 等的引用变量，==是比较地址的，而 equals 是比较内容的。比如：

```java
public class TestEquals {  
    public static void main(String[] args)  {
        Integer n1 = new Integer(30);  
        Integer n2 = new Integer(30);  
        Integer n3 = new Integer(31);  
        System.out.println(n1 == n2);//结果是false 两个不同的Integer对象，故其地址不同，  
        System.out.println(n1 == n3);//那么不管是new Integer(30)还是new Integer(31) 结果都显示false  
        System.out.println(n1.equals(n2));//结果是true 根据jdk文档中的说明，n1与n2指向的对象中的内容是相等的，都是30，故equals比较后结果是true  
        System.out.println(n1.equals(n3));//结果是false 因对象内容不一样，一个是30一个是31  }  }
```

## 这是 Integer 的实例，如果是其他的比如 Double、Character、Float 等也一样

### （3） 注意：对于 String(字符串)、StringBuffer(线程安全的可变字符序列)、StringBuilder(可变字符序列)这三个类作进一步的说明。

### （4）该例子是 Java 编程思想第三章的例子：

```java
class Value  {  
    int i;  
}  
public class EqualsMethod2 {  
    public static void main(String[] args) {  
        Value v1 = new Value();  
        Value v2 = new Value();  
        v1.i = v2.i = 100;  
        System.out.println(v1.equals(v2));//（1）flase  
        System.out.println(v1 == v2);//（2）true  
    }  
}
```

#### 运行结果疑问：乍一看结果，有点惊讶，为什么不是 true 呢，不是说 equals 方法是比较内容的吗？

#### 解释：不错，如果在新类中被覆盖了 equals 方法，就可以用来比较内容的。但是在上面的例子中类 Value 并没有覆盖 Object 中的 equals 方法，而是继承了该方法，因此它就是被用来比较地址的，又 v1 和 v2 的所指向的对象不相同，故标记（1）处的 v1.equals(v2)运行结果为 false，标记为（2）处的 v1 == v2 运行结果也为 false。

# 总结：

#### 如果是基本类型比较，那么只能用==来比较，不能用 equals ，如果是基本类型的包装类型,那么用 equals
