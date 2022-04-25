const http = require('http');
const app = require('./http');
http.createServer(function (req,res) {
    app.static(req, res)
}).listen(3000);