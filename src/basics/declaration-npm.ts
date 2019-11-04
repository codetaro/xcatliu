import {name, getName, Options, foo} from 'foo';

console.log(name);
let myName = getName();
let options: Options = {
    data: {
        name: 'foo'
    }
};

console.log(foo.name);
foo.bar.baz();