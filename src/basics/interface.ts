interface Person {
    readonly id: number;
    name: string;
    age?: number;

    [propName: string]: any;
}

/* let tom: Person = {
    id: 89757,
    name: 'Tom',
    // age: 25,
    gender: 'male'
}; */

// tom.id = 9527;