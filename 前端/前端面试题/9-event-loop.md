# 学习js event-loop的重要性
- 是作为js编程者来说不得不会的
- 前端的面试题经常喜欢考到
## js语言的特点
单线程 解释性语言
## event-loop
事件循环机制 由三部分组成

调用栈 微任务队列 消息队列

- event-loop开始的时候  会从全局一行一行的执行  遇到函数调用  会压入到调用栈中 被压入的函数 被称之为帧 当函数返回后会从调用栈中弹出
```js
function fun1() {
    console.log(1) //输出结果后，fun1()从调用栈弹出
}

function fun2() {
    console.log(2)
    fun1() //fun1()进入调用栈
    console.log(3) //输出结果后，fun2()从调用栈弹出
}
fun2() //fun2()进入调用栈
```
![](https://gitee.com/ye_xing_bear/pic-go/raw/master/%E4%B8%AA%E4%BA%BA%E5%9B%BE%E5%BA%8A/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202021-04-12%20163414.jpg)

- js中的异步操作比如fetch setTimeout setInterval 压入到调用栈中的时候里面的消息会进去到消息队列中去  消息队列中 会等到调用栈清空之后再执行
```js
function func1() {
    console.log(1)
}

function func2() {
    setTimeout(() => {
        console.log(2)
    }, 0) //setTimeout(() => {console.log(2)}, 0) 进入调用栈，console.log(2)进入消息队列
    func1()
    console.log(3)  //结果输出后，执行消息队列，弹出func2()
}
func2() 
```
![](https://gitee.com/ye_xing_bear/pic-go/raw/master/%E4%B8%AA%E4%BA%BA%E5%9B%BE%E5%BA%8A/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202021-04-12%20164355.jpg)

- promise async await的异步操作的时候会加入到微任务中去   会在调用栈清空的时候立即执行  调用栈中加入的微任务  会立马执行
```js
var p = new Promise(resolve => {
    console.log(4)
    resolve(5)
})

function func1() {
    console.log(1)
}

function func2() {
    setTimeout(() => {
        console.log(2)
    }, 0)
    fanc1() 
    console.log(3)
    p.then(resolve => {
        console.log(resolve)
    })
}
func2()
//41352
```
