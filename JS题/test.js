// 1.写一个 mySetInterVal(fn, a, b),每次间隔 a,a+b,a+2b 的时间，然后写一个 myClear，停止上面的 mySetInterVal
function mySetInterVal(fn, a, b) {
    let count = 0,
        timer
    const loop = () => {
        timer = setTimeout(() => {
            fn()
            count++
            loop()
        }, a + count * b);
    }
    loop()
    return () => {
        clearTimeout(timer)
    }
}
// const myClear = mySetInterVal(() => {console.log('test')}, 1000, 200)
// 关闭定时器
// myClear()


// 2.斐波那契数列
const fabonacci = (num) => {
    let a = 1,
        b = 1,
        n = 2
    while (n < num) {
        [a, b] = [b, a + b]
        n++
    }
    return b
}
// console.log(fabonacci(3));


// 3.字符串出现的不重复最长长度
const longestString = (str) => {
    let max = 0,
        arr = []
    for (let i = 0; i < str.length; i++) {
        let index = arr.indexOf(str[i])
        if (index !== -1) {
            arr.splice(0, index + 1)
        }
        arr.push(str[i])
        max = Math.max(max, arr.length)
    }
    return max
}
console.log(longestString('fdsadsdf'));