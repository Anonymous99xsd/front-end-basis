const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');
const mime = require('mime');
exports.static = function (req, res) {
    let pathname = url.parse(req.url).pathname;
    pathname = pathname == '/' ? '/index.html' : pathname;
    let realpath = path.join(__dirname, 'public' + pathname);
    let type = mime.getType(realpath);
    fs.readFile(realpath, function (error, result) {
        if (error) {
            res.writeHead(404, {
                'content-type': 'text/html;charset=utf-8'
            })
            res.end('页面已丢失');
        }
        res.writeHead(200, {
            'content-type': type
        });
        res.end(result);
    })
};
console.log('服务器启动成功');