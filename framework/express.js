const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('中间件');
    next();
})

app.use('/admin', (req, res ,next) => {
    let isLogin = false;
    if (isLogin) {
        next();
    } else {
        res.send('用户未登录');
    }
})

app.get('/admin', (req, res, next) => {
    req.name = '张三';
    next();
})

app.get('/admin', (req, res) => {
    res.send(req.name);
})

app.get('/index', (req, res) => {
    throw new Error('程序发生了未知错误');
})

app.use('/index/', (err, req, res) => {
    res.status(500).send(err.message);
})

app.use((req, res ,next) => {
    res.status(404).send('访问页面不存在');
})

app.listen(3000);
console.log('服务器启动成功');