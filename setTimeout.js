// 利用立即执行函数把变量 i 传到定时器中
for (var i = 0; i < 5; i++) {
    (function (j) {
        setTimeout(function timer() {
            console.log(j);
        }, 1000)
    })(i)
}

// 利用定时器传入第三个参数
for (var i = 0; i < 5; i++) {
    setTimeout(function timer(j) {
        console.log(j);
    }, 1000, i)
}

// 使用 let 块级作用域
for (let i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000)
}