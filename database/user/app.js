const http = require('http');
const url = require('url');
const querystring = require('querystring');

require('./model/index');
const user = require('./model/user');

const app = http.createServer();
app.on('request', async (req, res) => {
    const method = req.method;
    const {pathname, query}= url.parse(req.url, true);
    if (method == 'GET') {
        if (pathname == '/list') {
            let users = await user.find();
            let list = `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>用户列表</title>
                <link rel="stylesheet" href="http://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css">
                <link rel="icon" href="data:;base64,=">
            </head>
            <body>
                <div class="container">
                    <h6>
                        <a href="add" class="btn btn-primary">添加用户</a>
                    </h6>
                    <table class="table table-striped table-bordered">
                        <tr>
                            <td>用户名</td>
                            <td>年龄</td>
                            <td>爱好</td>
                            <td>邮箱</td>
                            <td>操作</td>
                        </tr>`;
            users.forEach(item => {
                list += `<tr>
                <td>${item.name}</td>
                <td>${item.age}</td>
                <td>`;
                item.hobbies.forEach(item => {
                    list += `<span>${item}&nbsp</span>`;
                })
                list += `</td>
                <td>${item.email}</td>
                <td>
                    <a href="remove?id=${item._id}" class="btn btn-danger btn-xs">删除</a>
                    <a href="modify?id=${item._id}" class="btn btn-success btn-xs">修改</a>
                </td>
            </tr>`;
            })
            list += `</table>
            </div>
        </body>
        </html>`;
            res.end(list);
        } else if (pathname == '/add') {        //发送添加请求
            let add = `<!DOCTYPE html>
            <html lang="en">
            
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>用户列表</title>
                <link rel="stylesheet" href="http://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css">
                <link rel="icon" href="data:;base64,=">
            </head>
            
            <body>
                <div class="container">
                    <h3>添加用户</h3>
                    <form method="post" action="/add">
                        <div class="form-group">
                            <label>用户名</label>
                            <input name="name" type="text" class="form-control" placeholder="请填写用户名">
                        </div>
                        <div class="form-group">
                            <label>密码</label>
                            <input name="password" type="password" class="form-control" placeholder="请输入密码">
                        </div>
                        <div class="form-group">
                            <label>年龄</label>
                            <input name="age" type="text" class="form-control" placeholder="请输入年龄">
                        </div>
                        <div class="form-group">
                            <label>邮箱</label>
                            <input name="email" type="text" class="form-control" placeholder="请输入邮箱">
                        </div>
                        <div class="form-group">
                            <label>请选择爱好</label>
                            <div>
                                <label class="checkbox-inline">
                                    <input type="checkbox" value="足球" name="hobbies">足球
                                </label>
                                <label class="checkbox-inline">
                                    <input type="checkbox" value="篮球" name="hobbies">篮球
                                </label>
                                <label class="checkbox-inline">
                                    <input type="checkbox" value="橄榄球" name="hobbies">橄榄球
                                </label>
                                <label class="checkbox-inline">
                                    <input type="checkbox" value="敲代码" name="hobbies">敲代码
                                </label>
                                <label class="checkbox-inline">
                                    <input type="checkbox" value="吃饭" name="hobbies">吃饭
                                </label>
                                <label class="checkbox-inline">
                                    <input type="checkbox" value="睡觉" name="hobbies">睡觉
                                </label>
                                <label class="checkbox-inline">
                                    <input type="checkbox" value="打豆豆" name="hobbies">打豆豆
                                </label>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary">添加用户</button>
                    </form>
                </div>
            </body>
            
            </html>`;
            res.end(add);
        } else if (pathname == '/modify') {     //发送修改请求
            let users = await user.findOne({_id: query.id});
            let hobbies = ['足球', "篮球", "橄榄球", "敲代码", "吃饭", "睡觉", "打豆豆"];
            let modify = `<!DOCTYPE html>
            <html lang="en">
            
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>用户列表</title>
                <link rel="stylesheet" href="http://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css">
                <link rel="icon" href="data:;base64,=">
            </head>
            
            <body>
                <div class="container">
                    <h3>修改用户</h3>
                    <form method="post" action="/modify?id=${users._id}">
                        <div class="form-group">
                            <label>用户名</label>
                            <input value="${users.name}" name="name" type="text" class="form-control" placeholder="请填写用户名">
                        </div>
                        <div class="form-group">
                            <label>密码</label>
                            <input value="${users.password}" name="password" type="password" class="form-control" placeholder="请输入密码">
                        </div>
                        <div class="form-group">
                            <label>年龄</label>
                            <input value="${users.age}" name="age" type="text" class="form-control" placeholder="请输入年龄">
                        </div>
                        <div class="form-group">
                            <label>邮箱</label>
                            <input value="${users.email}" name="email" type="text" class="form-control" placeholder="请输入邮箱">
                        </div>
                        <div class="form-group">
                            <label>请选择爱好</label>
                            <div>`;
            hobbies.forEach(item => {
                let isHobby = users.hobbies.includes(item);
                if (isHobby) {
                    modify += `<label class="checkbox-inline">
                    <input type="checkbox" value="${item}" name="hobbies" checked>${item}
                </label>`;
                } else {
                    modify += `<label class="checkbox-inline">
                    <input type="checkbox" value="${item}" name="hobbies">${item}
                </label>`;
                };
            })
            modify += `</div>
                            </div>
                            <button type="submit" class="btn btn-primary">修改用户</button>
                        </form>
                    </div>
                </body>
                
                </html>`;
            res.end(modify);
        } else if (pathname == '/remove') {     //发送删除请求
            await user.findOneAndDelete({_id: query.id});
            res.writeHead(301, {
                Location: '/list'
            });
            res.end();
        };
    } else if (method == 'POST') {
        if (pathname == '/add') {               //反馈添加结果
            let formData = '';
            req.on('data', param => {
                formData += param;
            });
            req.on('end', async () => {
                let users = querystring.parse(formData);
                await user.create(users);
                res.writeHead(301, {
                    Location: '/list'
                });
                res.end();
            });
        } else if (pathname == '/modify') {     //反馈删除结果
            let formData = '';
            req.on('data', param => {
                formData += param;
            });
            req.on('end', async () => {
                let users = querystring.parse(formData);
                await user.updateOne({_id: query.id}, users);
                res.writeHead(301, {
                    Location: '/list'
                });
                res.end();
            });
        }
    };
})
app.listen(3000);