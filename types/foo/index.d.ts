export = foo;

declare global {
    interface String {
        prependHello(): string;
    }
}

declare function foo(): string;

declare namespace foo {
    const bar: number;
}
