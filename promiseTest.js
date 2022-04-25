const myPromise = require("./myPormise");


// 异步调用
// const promise = new myPromise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('success')
//     }, 0);
// })
// 多个处理函数
// promise.then(success => {
//     console.log('1');
// })
// promise.then(success => {
//     console.log('2');
// })
// promise.then(success => {
//     console.log('3');
// })


// 链式调用
// const promise = new myPromise((resolve, reject) => {
//     resolve('success')
// })
// function fn() {
//     return new myPromise((resolve, reject) => {
//         resolve('链式调用2')
//     })
// }
// promise.then(success => {
//     console.log('链式调用1');
//     return fn()
// }).then(success => {
//     console.log(success);
// })


// promise返回自己
// const promise = new myPromise((resolve, reject) => {
//     resolve('success')
// })
// const p = promise.then(success => {
//     console.log(success)
//     return p
// })
// p.then(success => {
//     console.log(success);
// }, error => {
//     console.log(error);
// })


// 捕获错误
// const promise = new myPromise((resolve, reject) => {
//     throw new Error('捕获执行器错误')
// })
// promise.then(success => {
//   console.log(success)
// }, error => {
//   console.log(error.message)
// })


// then执行时错误
// const promise = new myPromise((resolve, reject) => {
//     resolve('success')
// })
// // 第一个then方法中的错误要在第二个then方法中捕获到
// promise.then(success => {
//   console.log(success, '1')
//   throw new Error('then error')
// }, error => {
//   console.log(error.message, '1')
// }).then(success => {
//   console.log(success, '2');
// }, error => {
//   console.log(error.message, '2')
// })



// 传空值
// const promise = new myPromise((resolve, reject) => {
//     resolve('resolve')
//     // reject('reject')
// })
// promise.then().then().then(success => {
//     console.log('success', success);
// }, error => {
//     console.log('error', error);
// })



// 静态方法
myPromise.resolve().then((resolve, reject) => {
    return myPromise.resolve('静态resolve')
}).then(success => {
    console.log(success)
})