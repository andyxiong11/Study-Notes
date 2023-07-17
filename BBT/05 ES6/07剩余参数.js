function es5Sum() {
    consoLe.log(arguments);
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
es5Sum(1, 2, 2, 3, 45, 46);


function es6Sum(a,b,...ret) {
    console.log(a);//1
    console.log(b);//2
    console.log(ret);//[2, 3, 45, 46]
    console.log(ret.length);//4
}
es6Sum(1, 2, 2, 3, 45, 46);

function es6Sum(...ret) {
    let len = ret.length;
    for (let i = 0; i < len; i++) {
        sum += ret[i];
    }
    return sum;
}
es6Sum(1, 2, 2, 3, 45, 46);

function es6Sum(...ret) {
    console.log(ret.join('+'));//1+2+2+3+45+46
    var sum = eval(ret.join('+'));//eval 把符合js语法规范的代码放到全局执行
    return sum;
}
es6Sum(1, 2, 2, 3, 45, 46);