class Person {
    name: string = 'rox';
    age: number = 22
}
const p1 = new Person();
console.log(p1.name)

class User {
    name: string;
    age: number;

    constructor(name :string, age: number){
        this.name = name;
        this.age = age
    }
}
const u1 = new User('ram', 22);
const u2 = new User('sam',21);

class Test {
    name: string;

    constructor(name: string){
        this.name = name
    }

    greet(){
        console.log(`Hello ${this.name}`)
    }
}
let t1 = new Test('alex');
t1.greet();

class A1 {
    public name: string = 'ram'
}
let a1 = new A1()
console.log(a1.name)


class A2 {
    private name: string = 'sam'

    getName(){
        console.log(`Hey ${this.name}`)
    }
}
let a2 = new A2()
a2.getName()
// console.log(a2.name)


class A3 {
    protected name: string = 'ram'
}
class A4 extends A3 {
    getName(){
        console.log(`Hey ${this.name}`)
    }
}
let a4 = new A4()
a4.getName()
// console.log(a3.name)
