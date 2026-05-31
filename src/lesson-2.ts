let name: string = 'dev';
let age: number = 21;
let isStudent: boolean = true;
let sum: undefined = undefined;
let a: null = null;
let b: bigint = 2n;
let c: symbol = Symbol('id')

// --------------------------------------------

let nums: number[] = [1,2,3];
let chars: string[] = ['a','b']

let user: {name: string, age: number} = {
    name: 'ram',
    age: 22
}

function multi(x: number,y: number): number {
    return x * y;
}

// --------------------------------------------

let one: any;
one = 'name';
one = 24;

let two: unknown;
two = 22;
two = 'age'

function greet(): void{
    console.log('hello')
}

function error(): never {
    throw new Error('fail')
}

// --------------------------------------------

let value: number | string;
value = 2;
value = 'age'
