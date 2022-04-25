const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/playground', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('数据库连接成功'))
    .catch(err => console.log(err, '数据库连接失败'));

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        // 必选字段 主键
        required: [true, '请传入文章标题'],
        // 字符串的最小长度  minlength 和 maxlength都是用在字符串属性中的
        minlength: [2, '文章长度不能小于2'],
        // 字符串的最大长度
        maxlength: [5, '文章长度不能大于5'],
        // 去除字符串两边的空格
        trim: true
    },
    age: {
        // max 和 min 都是用在数字型的属性中的
        type: Number,
        min: [18, '最小的年纪是18'],
        max: [100, '最大的年纪是100']
    },
    publishDate: {
        type: Date,
        // 没有传参时会默认给的值 当属性不是必填字段时
        default: Date.now
    },
    category: {
        type: String,
        // 列举出当前字段可以使用的值
        enum: {
            values: ['html', 'css', 'javascript', 'node.js'],
            message: '分类名称要在一定范围内'
        }
    },
    author: {
        type: String,
        validate: {
            validator: (v) => {
                //返回一个布尔值
                //true 验证成功
                //false 验证失败
                // v 要验证的值
                return v && v.length > 4
            },
            //自定义错误信息
            message: '传入的规则不符合验证规则'
        }
    }
});
const post = mongoose.model('Post', postSchema);

post.create({
        title: '验证操作',
        age: 25,
        category: 'html',
        author: 'aa'
    }).then(result => console.log(result))
    .catch(err => {
        const error = err.errors;
        for (var k in error) {
            console.log(error[k]['message']);
        }
    });