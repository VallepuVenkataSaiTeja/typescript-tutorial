type User = {
    name: string;
    age: number
}

let user: User = {
    name: 'ram',
    age: 21,
}

type ID = string | number;
let id: ID;
id = 'sam';
id = 21;

type Add = (a: number, b:number) => number
const add: Add = (a,b) =>{
   return a+b;
}

type Person = {
    name: string;
    address : {
        city : string;
        country: string
    }
}

// --------------------------------------------

let direction: 'left' | 'right';
direction = 'left';
// direction = 'up'

let role: 'ADMIN' | 'USER';
role = 'ADMIN';
// role = 'HACKER'

// --------------------------------------------

function mul(a: number,b: number):number {
   return a+b
}

function name(name: string): void{
    console.log(name)
}

function test(): never{
    throw new Error('Fail')
}

function person(name: string, age: number): void{
    console.log(name, age) 
}

function person1(name: string, age?: number): void{
    console.log(name) 
}

function gt(name: string = 'Guest'){
    console.log(name)
}

const div = (a: number,b: number): number => {
    return a/b
}

let multiply: (a: number,b: number) => number
multiply = (a,b) => {
    return a*b
}

function print(name: string | number){
    console.log(name)
}

function moving(direction:'left' | 'right'){
   console.log(direction)
}

function u1(obj : {name: string}){
    console.log(obj.name)
}
