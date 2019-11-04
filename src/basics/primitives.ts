let isDone: boolean = false;
let createdByBoolean: boolean = Boolean(1);

let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;
let notANumber: number = NaN;
let infinityNumber: number = Infinity;

let myName: string = 'Tom';
let myAge: number = 25;
let sentence: string = `Hello, my name is ${myName}.
I'll be ${myAge + 1} years old next month.`;

function alertName(): void {
    alert('My name is Tom');
}

let unusable: void = undefined;

let u: undefined = undefined;
let n: null = null;
let num: number = undefined;
