const express = require('express');
const http = require('http');
const path = require('path');
const dateformat = require('dateformat');
const template = require('art-template');
const serveStatic = require('serve-static');
const router = require('./route/index');
const morgan = require('morgan');

const App = express();
//获取系统环境变量
if (process.env.NODE_ENV == 'development') {
    console.log('当前是开发环境');
    App.use(morgan('dev'));
} else {
    console.log('当前是生产环境');
}
// 静态资源目录 
const serve = serveStatic(path.join(__dirname, 'public'));
// 设置页面目录
template.defaults.root = path.join(__dirname, 'views');
// 设置日期格式
template.defaults.imports.dateformat = dateformat;

require('./model/connect');

const app = http.createServer();
app.on('request', (req, res) => {
    // 设置路由
    router(req, res, () => {})
    // 访问静态资源
    serve(req, res, () => {})
});
app.listen(80);
console.log('服务器启动成功');