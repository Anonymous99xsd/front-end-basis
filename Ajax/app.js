const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
// 创建web服务器
const app = express();
// 解析 'application/x-www-form-urlencoded' 参数
app.use(bodyParser.urlencoded());
// 解析 'application/json' 参数
app.use(bodyParser.json());
// 静态资源访问功能
app.use(express.static(path.join(__dirname, 'public')));

// CORS跨域资源共享
app.use((req, res, next) => {
    // 允许哪些客户端访问我
    res.header('Access-Control-Allow-Origin', '*');
    // 允许客户端通过哪些方式访问我
    res.header('Access-Control-Allow-Methods', 'get, post');
    // 允许客户端跨域请求时携带cookie信息
    res.header('Access-Control-Allow-Credentials', true);
    next();
})

app.get('/first', (req, res) => {
    res.send('Hello,getAjax');
})
app.post('/first', (req, res) => {
    res.send('Hello,postAjax');
})
app.get('/responseDate', (req, res) => {
    res.send({"name": "xsd"});
})
app.get('/get', (req, res) => {
    res.send(req.query);
})  
app.post('/post', (req, res) => {
    res.send(req.body);
})
app.post('/json', (req, res) => {
    res.send(req.body);
})
app.get('/better', (req, res) => {
    // let fnName = req.query.callback;
    // let data = JSON.stringify({name: "xsd"})
    // let result = fnName + '(' + data + ')';
    // res.send(result);
    res.jsonp();
})



// 监听端口
app.listen(3000);
console.log('服务器启动成功');