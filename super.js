class A {
    constructor(n) {
        console.log(n); //=>100;
        this.x = 100;
    }
    getX() {
        console.log(this.x);
    }
}

class B extends A {
    constructor() {
        super(100);
        this.y = 200;
    }
    getY() {
        console.log(this.y);
    }
}

let b = new B();
b.getY()
b.getX()