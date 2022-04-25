// 数据库模块
const mongoose = require('mongoose');
// express框架
const express = require('express');
// http模块
const http = require('http');
// 路径
const path = require('path');
// 日期模块
const dateformat = require('dateformat');
// 渲染模板引擎
const template = require('art-template');
// 访问静态资源
const serveStatic = require('serve-static');
// 路由模块
const router = require('router');
// 格式
const morgan = require('morgan');
// 处理post请求参数
const bodyParser = require('body-parser');
// 记录客户状态
const session = require('express-session');
// 解析url字符串
const queryString = require('querystring');
// 自动判断运行环境
const config = require('config');