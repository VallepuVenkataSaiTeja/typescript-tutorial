let numbers: number[] = [1,2,3];
let str: Array<string> = ['a','b']
let data: (string | number)[] = [1,'data',4]

let a: readonly number[] = [1,2,3];
// a.push(4)

let users: {name: string}[] = [
    {name: 'ram'},
    {name: 'sam'}
]

type user = {
    name: string,
    age: 22
}

const u1: user = {
   name: 'ram',
   age: 22
}

// --------------------------------------------

let person: {name: string, age: number} = {
    name: 'ram',
    age: 21
}

let p:{name: string, age?: number} = {
    name: 'leo',
    age: 21
}

let u: {name: string , address:{
    city: string,
    country: string
}} = {
    name: 'ram',
    address: {
        city: 'mumbai',
        country: 'india'
    }
}

let n: {name: string, hobbies: string[]} = {
    name: 'sam',
    hobbies: ['dance','sing']
}

type a1 = {
   name: string;
   age: number;
}
let aa1: a1 = {
    name: 'ram',
    age: 21
}

interface b1 {
    name: string;
    age?: Number;
}
let bb1: b1 = {
    name: 'sam'
}

type c1 = {
    readonly name: string;
    age?: number
}
const cc1: c1 = {
    name: 'same'
}
// cc1.name = 'test'; 

let d1: {name: string, greet(): void} = {
    name: 'ram',
    greet(){
        console.log('greet')
    }
}

// --------------------------------------------

enum Direction {
    up,
    down,
    right,
    left
}
let move: Direction = Direction.up;
console.log(move)
