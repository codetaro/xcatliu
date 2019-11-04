let fibonacci: number[] = [1, 1, 2, 3, 5];
// fibonacci.push('8');

let fib: Array<number> = [1, 1, 2, 3, 5];

interface NumberArray {
    [index: number]: number;
}

let fibo: NumberArray = [1, 1, 2, 3, 5];

/* function sum() {
    let args: {
        [index: number]: number;
        length: number;
        callee: Function;
    } = arguments;
    // let args: IArguments = arguments;
} */

let list: any[] = ['xcatliu', 25, {website: 'http://xcatliu.com'}];