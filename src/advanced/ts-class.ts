abstract class Animal {
    public name: string;

    public constructor(name: string) {
        this.name = name;
    }

    public abstract sayHi(): string;
}

class Cat extends Animal {
    public sayHi(): string {
        return 'Meow, My name is ' + this.name
    }
}

let cat: Animal = new Cat('Tom');
console.log(cat.sayHi());
