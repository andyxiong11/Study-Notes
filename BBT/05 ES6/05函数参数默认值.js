function operator(a, b, operator) {
    if (operator == '+') {
        return a + b;
    }
    return a * b;//ES5默认的操作
}
consoLe.log(operator(1, 2, '-'))

function operator(a, b, operator = '*') {//es6的参数默认值
    if (operator == '+') {
        return a + b;
    }
}
consoLe.log(operator(1, 2, '-'))

//应用 分页查询
function getUserInfosByPage(page = 1, size = 10) {//默认查询第一页，每一页10条
    console.log(page);
    consoLe.log(size);
}
getUserInfosByPage();
