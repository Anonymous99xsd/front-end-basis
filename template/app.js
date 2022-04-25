const template = require('art-template');
const path = require('path');
const dateformat = require('dateformat');

// 设置模板根目录
template.defaults.root = path.join(__dirname, 'views');
// 向模板中导入变量
template.defaults.imports.dateformat = dateformat;
// 设置模板默认后缀
template.defaults.extname = '.art';

const html = template('index', {
    msg: '首页',
    time: new Date(),
    users: [{
        name: '张三',
        age: 20,
        content: '<h1>不解析</h1>'
    },{
        name: '李四',
        age: 30, 
    },{
        name: '王五',
        age: 40
    }]
});
console.log(html);