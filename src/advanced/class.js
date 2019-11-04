class Animal {
    constructor(name) {
        this.name = name;
    }

    get name() {
        return 'Jack';
    }

    set name(value) {
        console.log('setter: ' + value);
    }

    sayHi() {
        return `My name is ${this.name}`;
    }

    static isAnimal(a) {
        return a instanceof Animal;
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name);
        console.log(this.name);
    }

    sayHi() {
        return 'Meow, ' + super.sayHi();
    }
}

let a = new Animal('Jack');
Animal.isAnimal(a);
