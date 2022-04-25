function Parent(name, age) {
    this.name = name;
    this.age = age;
    this.fn = function () {
        console.log('fn');
    }
}

function Child() {
    Parent.call(this);
    this.type = 'child';
}

// 让 Child.prototype 的原型( __proto__ )指向 Parent.prototype
Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;


console.log(Child.prototype.__proto__ === Parent.prototype); // true
let child = new Child('xsd', 22);
child.fn();