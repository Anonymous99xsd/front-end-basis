const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({        //创建规则
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 10
    },
    age: {
        type: Number,
        min: 18,
        max: 80
    },
    password: String,
    email: String,
    hobbies: [String]
});

const user = mongoose.model('User', userSchema);
module.exports = user;