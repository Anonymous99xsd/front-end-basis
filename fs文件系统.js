//  node.js文件系统

var fs = require("fs");

//  异步读取 fs.readFile

fs.readFile('./index.txt', (err, data) => {
    if (err) {
        return console.log(err);
    }
    console.log('异步读取成功');
    console.log(data.toString());
});

//  同步读取 fs.readFileSync

var data = fs.readFileSync('./index.txt');
console.log('同步读取成功');
console.log(data.toString());

//  打开文件 fs.open

fs.open('./index.txt', 'r', function (err, fd) {
    if (err) {
        return console.log(err);
    }
    console.log('文件打开成功');
});

//  获取文件信息 fs.stat

fs.stat('./index.txt', (err, stats) => {
    if (err) {
        return console.log(err);
    }
    console.log(stats.isFile()); //1.isFile:文件   2.isDirectory:目录    3.……
});

//  写入文件 fs.writeFile

fs.writeFile('./index.txt', "通过\"fs.writeFile\"写入的", (err) => {
    if (err) {
        return console.log(err);
    }
    console.log('数据写入成功');
})

//  1.打开文件 fs.open  2.截取文件  3.读取文件 fs.read  4.关闭文件 fs.close

var buf = new Buffer.alloc(1024);

//打开文件
fs.open('index.txt', 'r+', function (err, fd) {
    if (err) {
        return console.error(err);
    }
    console.log("文件打开成功！");

    //截取文件
    fs.ftruncate(fd, 10, (err) => {
        if (err) {
            console.log(err);
        }

        //读取文件
        fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) {
            if (err) {
                console.log(err);
            }
            console.log(bytes + "字节被读取");
            // 仅输出读取的字节
            if (bytes > 0) {
                console.log(buf.slice(0, bytes).toString());
            }

            //关闭文件
            fs.close(fd, (err) => {
                if (err) {
                    console.log(err);
                }
                console.log('文件关闭成功');
            })
        });
    })
});

//  删除文件 fs.unlink

// fs.unlink('index.txt', (err) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log('文件删除成功');
// })

//  1.创建目录 fs.mkdir   2.读取目录 fs.readdir   3.删除目录 fs.rmdir

//创建目录
fs.mkdir('./new/', (err) => {
    if (err) {
        console.log(err);
    }
    console.log('目录创建成功');

    //读取目录
    fs.readdir('./new', (err, files) => {
        if (err) {
            console.log(err);
        }
        files.forEach(function (file) {
            console.log(file);
        });
    })

    //删除目录
    fs.rmdir('./new', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('目录删除成功');
    })
})