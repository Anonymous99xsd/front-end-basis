class person {
    static resolve = () => {
        console.log('this');
    }
    use = () => {
        person.resolve()
    }
}

person.resolve()