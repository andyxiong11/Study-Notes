// Promise 是一个对象，从它可以获取异步操作的消息，保存着某个未来才会结束的事件（异步操作）
// 特点
// 1.对象的状态不受外界影响。Promise对象代表一个异步操作，有三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）。只有异步操作的结果，可以决定当前是哪一种状态
// 2.一旦状态改变，就不会再变，称为 resolved（已定型）,任何时候都可以得到这个结果。
// 如果改变已经发生了，你再对Promise对象添加回调函数，也会立即得到这个结果。
// pending->fulfilled   pending->rejected
// 缺点
// 1.无法取消Promise，一旦新建它就会立即执行，无法中途取消。
// 2.如果不设置回调函数，Promise内部抛出的错误，不会反应到外部。
// 3.当处于pending状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。


//1.基本用法
const promise = new Promise(function (resolve, reject) {//Promise构造函数
    // ... some code

    if (/* 异步操作成功 */) {
        resolve(value);//resolve函数将Promise对象的状态从“未完成”变为“成功”，在异步操作成功时将异步操作的结果作为参数传递出去
    } else {
        reject(error);//reject函数将Promise对象的状态从“未完成”变为“失败”，在异步操作失败时将异步操作报出的错误作为参数传递出去
    }
});
promise.then(function (value) {//then方法指定两种状态的回调函数
    // success
}, function (error) {
    // failure
});

//异步输出
function timeout(ms) {
    return new Promise((resolve, reject) => {//new Promise实例表示一段时间后发生
        setTimeout(resolve, ms, 'done');//过了ms秒，实例状态变为resolve，触发.then绑定的回调函数
    });
}
timeout(100).then((value) => {
    console.log(value);
});

//Permsion新建后立即执行
let promise1 = new Promise(function (resolve, reject) {
    console.log('Promise');
    resolve();
});
promise1.then(function () {
    console.log('resolved.');//所有同步任务执行完再执行
});
console.log('Hi!');
// Promise   Hi!    resolved

//异步加载图片
function loadImageAsync(url) {
    return new Promise(function (resolve, reject) {
        const image = new Image();
        image.onload = function () {//图片加载成功
            resolve(image);
        };
        image.onerror = function () {//图片加载失败
            reject(new Error('Could not load image at ' + url));
        };
        image.src = url;
    });
}
//具体例子
var url = "http://s1.hao123img.com/resource/site/img/logo.6456fa5.gif";
//img加载完成触发resolve
function load(url) {
    return new Promise(function (resolve, reject) {
        var image = new Image();
        image.onload = function () {//image加载完才会调用resolve更改Promise的状态执行.then
            resolve(image);
        };
        image.onerror = function () {
            reject(new Error('Could not load image at ' + url));
        };
        image.src = url;
    });
}
//img添加到页面
load(url).then(function (value) {//.then在最后执行
    document.body.appendChild(value);
});
alert('你先看到我，再看到图片');

//一个异步操作返回另外一个异步操作
const p1 = new Promise(function (resolve, reject) {
    setTimeout(() => reject(new Error('fail')), 3000)
})
const p2 = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(p1), 1000)//等待1s p2状态变为resolve，因为p1状态没有变，再等待2s p1状态变化
})
p2
    .then(result => console.log(result))//由于p1导致返回的状态是reject，所以执行.catch
    .catch(error => console.log(error))
// Error: fail

//调用reject或resolve，不会终止Promise函数的执行
new Promise((resolve, reject) => {
    resolve(1);//一般加上return resolve(1);
    console.log(2);
}).then(r => {
    console.log(r);
});
// 2
// 1


//2.Promise.prototype.then()

//then方法返回的是一个新的Promise实例,可以用链式写法
getJSON("/posts.json").then(function (json) {
    return json.post;//第一个回调函数完成后将返回结果作为参数，传入第二个回调函数
}).then(function (post) {
    // ...
});

//第一个回调函数完成可能返回另一个Promise对象
getJSON("/post/1.json").then(function (post) {
    return getJSON(post.commentURL);
}).then(function (comments) {//第二个回调函数会等第一个回调函数 异步操作完成后执行
    console.log("resolved: ", comments);
}, function (err) {
    console.log("rejected: ", err);
});
//改造
getJSON("/post/1.json").then(
    post => getJSON(post.commentURL)
).then(
    comments => console.log("resolved: ", comments),
    err => console.log("rejected: ", err)
);


//3.Promise.prototype.catch()
//.then(null, rejection)或.then(undefined, rejection)的别名，用于指定发生错误时的回调函数
getJSON('/posts.json').then(function (posts) {
    // ...
}).catch(function (error) {
    // 处理 getJSON()方法返回一个 Promise 对象，状态为rejected 或 前一个回调函数.then运行时发生的错误
    console.log('发生错误！', error);//
});

p.then((val) => console.log('fulfilled:', val))
    .catch((err) => console.log('rejected', err));
// 等同于
//TODO 不太懂
p.then((val) => console.log('fulfilled:', val))
    .then(null, (err) => console.log("rejected:", err));

//.catch例子
const promise2 = new Promise(function (resolve, reject) {
    throw new Error('test');
});
promise2.catch(function (error) {
    console.log(error);
});
// Error: test
// reject()方法的作用，等同于catch抛出错误
// 写法一
const promise3 = new Promise(function (resolve, reject) {
    try {
        throw new Error('test');
    } catch (e) {
        reject(e);
    }
});
promise3.catch(function (error) {
    console.log(error);
});
// 写法二
const promise4 = new Promise(function (resolve, reject) {
    reject(new Error('test'));
});
promise4.catch(function (error) {
    console.log(error);
});

//Promise状态已经变成resolved，无法再抛错
const promise5 = new Promise(function (resolve, reject) {
    resolve('ok');
    throw new Error('test');
});
promise5
    .then(function (value) { console.log(value) })
    .catch(function (error) { console.log(error) });
// ok

//Promise 对象的错误具有“冒泡”性质，会一直向后传递，直到被捕获为止。
getJSON('/post/1.json').then(function (post) {
    return getJSON(post.commentURL);
}).then(function (comments) {
    // some code
}).catch(function (error) {
    // 处理前面三个Promise产生的错误
});

//尽量使用.catch，不用then的第二个参数
// bad
promise
    .then(function (data) {
        // success
    }, function (err) {
        // error
    });

// good
promise
    .then(function (data) { //cb
        // success
    })
    .catch(function (err) {
        // error
    });

//如果没有使用catch()方法，Promise 对象抛出的错误不会传递到外层代码
const someAsyncThing = function () {
    return new Promise(function (resolve, reject) {
        // 下面一行会报错，因为x没有声明
        resolve(x + 2);
    });
};
someAsyncThing().then(function () {
    console.log('everything is great');
});
setTimeout(() => { console.log(123) }, 2000);
// Uncaught (in promise) ReferenceError: x is not defined
// 123   虽然会报错，但是2s后依然会输出123

//另外一个没有使用catch的例子
const promise6 = new Promise(function (resolve, reject) {
    resolve('ok');
    setTimeout(function () { throw new Error('test') }, 0)
});
promise6.then(function (value) { console.log(value) });
// ok
// Uncaught Error: test

//Node.js 有一个unhandledRejection事件，专门监听未捕获的reject错误
process.on('unhandledRejection', function (err, p) {//第一个是错误对象，第二个是报错的Promise实例
    //Node 有计划在未来废除unhandledRejection事件。如果 Promise 内部有未捕获的错误，会直接终止进程，并且进程的退出码不为 0。
    throw err;
});

//catch()方法返回的还是一个 Promise 对象，因此后面还可以接着调用then()方法
const someAsyncThing1 = function () {
    return new Promise(function (resolve, reject) {
        // 下面一行会报错，因为x没有声明
        resolve(x + 2);
    });
};
someAsyncThing1()
    .catch(function (error) {
        console.log('oh no', error);
    })
    .then(function () {//如果报错，catch运行完接着运行then；否则跳过catch
        console.log('carry on');
    });
// oh no [ReferenceError: x is not defined]
// carry on

Promise.resolve()
    .catch(function (error) {//没有报错 跳过catch
        console.log('oh no', error);
    })
    .then(function () {
        console.log('carry on');
    });
// carry on


//catch方法中再抛出报错
const someAsyncThing2 = function () {
    return new Promise(function (resolve, reject) {
        // 下面一行会报错，因为x没有声明
        resolve(x + 2);
    });
};

someAsyncThing2().then(function () {
    return someOtherAsyncThing();
}).catch(function (error) {
    console.log('oh no', error);
    // 下面一行会报错，因为 y 没有声明
    y + 2;//后面没有.catch捕获错误
}).then(function () {
    console.log('carry on');
});
// oh no [ReferenceError: x is not defined]
//改造
someAsyncThing().then(function () {
    return someOtherAsyncThing();
}).catch(function (error) {
    console.log('oh no', error);
    // 下面一行会报错，因为y没有声明
    y + 2;
}).catch(function (error) {//捕获报错
    console.log('carry on', error);
});
  // oh no [ReferenceError: x is not defined]
  // carry on [ReferenceError: y is not defined]