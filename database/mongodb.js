const mongoose = require('mongoose');
mongoose.connect('mongodb://root:root@localhost/playground', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('数据库连接成功'))
    .catch(err => console.log(err, '数据库连接失败'));

// 创建规则
const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 10
    },
    age: {
        type: Number,
        min: 0,
        max: 80
    },
    password: String,
    email: String,
    hobbies: [String]
});
// 使用规则创建集合
const Course = mongoose.model('Course', courseSchema);

// 创建文档
const course = new Course({
    name: '验证规则',
    author: 'Xsd',
    age: 15,
    isPublished: true
});
// // 插入文档到数据库
course.save();

// 插入文档到数据库（回调函数方式）
// Course.create([{
//     name: '张三',
//     age: 20,
//     hobbies: ['足球', '篮球', '橄榄球'],
//     email: 'zhangsan@itcast.cn',
//     password: '123456'
// },{
//     name: '李四',
//     age: 10,
//     hobbies: ['足球' ,'篮球'],
//     email: 'lisi@itcast.cn',
//     password: '654321'
// },{
//     name: '王五',
//     age: 40,
//     hobbies: ['敲代码'],
//     email: 'wangwu@itcast.cn',
//     password: '123456'
// },{
//     name: '赵六',
//     age: 50,
//     hobbies: ['吃饭', '睡觉', '打豆豆'],
//     email: 'zhaoliu@itcast.cn',
//     password: '123456'
// },{
//     name: '王二麻子',
//     age: 32,
//     hobbies: ['吃饭'],
//     email: 'wangermazi@itcast.cn',
//     password: '123456'
// },{
//     name: '狗蛋',
//     age: 14,
//     hobbies: ['打豆豆'],
//     email: 'goudan@itcast.cn',
//     password: '123456'
// }], (err, result) => {
//     console.log(err);
//     console.log(result);
// });

// 插入文档到数据库（promise对象方式）
// Course.create({
//         name: '验证规则',
//         author: 'Xsd',
//         age: 15,
//         isPublished: true
//     }).then(result => console.log(result))
//     .catch(err => console.log(err));

// 查询文档
// Course.find({name: 'create方法'}).then(result => console.log(result));
// Course.findOne({name: 'create方法'}).then(result => console.log(result));
// Course.find({age: {$gt: 20, $lt: 40}}).then(result => console.log(result));  //$gt 大于，$lt 小于
// Course.find({name: {$in: ['create方法', 'promise创建方法']}}).then(result => console.log(result));   //查询包含
// Course.find().select('name age -_id').then(result => console.log(result));    //选择查询的字段 字段前加 “-” 表示不显示该字段
// Course.find().select('age -_id').sort('age').then(result => console.log(result));    // 升序
// Course.find().select('age -_id').sort('-age').then(result => console.log(result));   // 降序
// Course.find().skip(1).limit(2).then(result => console.log(result));  //跳过1个，只显示2个

// 删除文档（单个）
// Course.findOneAndDelete({name: '数据库操作'}).then(result => console.log(result));
// 删除文档（多个）
// Course.deleteMany({name: 'create方法'}).then(result => console.log(result));

// 更新文档（单个）
// Course.updateOne({age: 20}, {age: 25}).then(result => console.log(result));
// 更新文档（多个）
// Course.updateMany({age: {$gt: 30}}, {name: '更新操作'}).then(result => console.log(result));