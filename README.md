- official website : https://www.typescriptlang.org/

## Chapter 1 : Start Here

| Command                     | Purpose                                          |
| --------------------------- | ------------------------------------------------ |
| `npm install -D typescript` | Install TypeScript locally                       |
| `npm install -g typescript` | Install TypeScript globally                      |
| `tsc --version`             | Check TypeScript version                         |
| `tsc file.ts`               | Compile a TypeScript file                        |
| `tsc --init`                | Create a `tsconfig.json`                         |
| `tsc`                       | Compile the entire project using `tsconfig.json` |
| `tsc --watch`               | Automatically recompile when files change        |

- `npm i typescript -g`  (installs TypeScript globally on your computer using Node Package Manager (npm))
- `npm install -D typescript`   (download and install TypeScript into your current project and record it as a development dependency)


* To run a single .ts file :
- Create a file       (index.ts)
- Compile it          (npx tsc index.ts)
- This generates      (index.js)
- Run the JavaScript  (node index.js)

* Automatic mode (Watch Mode)
- Instead of compiling every time manually, TypeScript can auto-compile when you save changes.
- `npx tsc index.ts --watch`


- `tsc --init`   (creates a configuration file for your project called: `tsconfig.json`)
- `"rootDir": "./src"`   (All my TypeScript source files are inside the src folder)
- `"outDir": "./dist/js"`   (Put all the compiled JavaScript files inside the dist/js folder)
- `"target": "esnext"`   (Compile my code into the latest JavaScript version supported by modern engines)

| Target   | Meaning                   |
| -------- | ------------------------- |
| `ES5`    | Very old browsers support |
| `ES2016` | Medium compatibility      |
| `ES2020` | Modern apps               |
| `ESNext` | Latest possible JS        |


- `"module": "ES2020"`   (Convert my TypeScript modules into JavaScript using the ES2020 module system)

| Setting      | Output style           | Used for                |
| ------------ | ---------------------- | ----------------------- |
| `"CommonJS"` | `require()`            | old Node.js             |
| `"ES2020"`   | `import/export`        | modern JS (recommended) |
| `"ESNext"`   | latest experimental JS | cutting edge            |
| `"None"`     | no modules             | old scripts             |



* Compile the whole project :
- `npx tsc`      (This compiles ALL .ts files inside src/)
- `npx tsc -w`   (Watch mode (auto compile))

- `"include": ["src"]`     (Only look inside the src folder for files to compile)
- `"noEmitOnError": true`  (If there are any type errors, DO NOT generate JavaScript files)


## Chapter 2 : Basic Types

| Feature         | JavaScript (JS)                 | TypeScript (TS)                         |
| --------------- | ------------------------------- | --------------------------------------- |
| Type system     | Dynamic (no types)              | Static (with types)                     |
| Error checking  | At runtime (after running code) | At compile time (before running)        |
| File extension  | `.js`                           | `.ts`                                   |
| Compilation     | Not required                    | Must be compiled to JS (`tsc`)          |
| Learning curve  | Easier                          | Slightly harder                         |
| Tooling support | Good                            | Excellent (auto-complete, IntelliSense) |
| Bug detection   | Late (runtime errors)           | Early (compile-time errors)             |
| OOP support     | Basic                           | Strong (interfaces, generics, etc.)     |
| Browser support | Direct                          | Needs compilation                       |
| Code quality    | Flexible but error-prone        | Strict and structured                   |
| Large projects  | Harder to maintain              | Easier to scale                         |
| Example         | `let x = 10;`                   | `let x: number = 10;`                   |


| Type               | Meaning                                         | Example            |
| ------------------ | ----------------------------------------------- | ------------------ |
| **Static typing**  | Types are checked before running (compile-time) | TypeScript, Java   |
| **Dynamic typing** | Types are checked while running (runtime)       | JavaScript, Python |


| Type              | Meaning                                        | Example            |
| ----------------- | ---------------------------------------------- | ------------------ |
| **Strong typing** | Does NOT allow automatic confusing conversions | TypeScript, Python |
| **Weak typing**   | Allows automatic type conversion               | JavaScript         |


* `Inference` = TypeScript automatically guesses the type of a variable without you explicitly writing it.
- You don’t always need to write types like : number, : string.
- TypeScript can infer (figure out) the type itself.

```
let name = "alex";
// inferred as:
let name: string;
```

* `Data Types` : What kind of value a variable can hold

`1. Basic (Primitive) Types`

- `string` : Text values                          (let name: string = "alex";)
- `number` : All numbers (integer + decimal)      (let age: number = 25;)
- `boolean` : True or false                       (let isLoggedIn: boolean = true;)
- `null` : Intentional empty value                (let data: null = null;)
- `undefined` : Value not assigned                (let value: undefined = undefined;)
- `bigint` : Very large numbers                   (let big: bigint = 12345678901234567890n;)
- `symbol` : Unique identifiers                   (let sym: symbol = Symbol("id");)

`2. Reference Types`

- `Array` : List of values

```
let numbers: number[] = [1, 2, 3];
let names: string[] = ["a", "b"];
```

- `Object` : Structured data

```
let user: { name: string; age: number } = {
  name: "alex",
  age: 25
};
```

- `Function` : Function with types

```
function add(a: number, b: number): number {
  return a + b;
}
```

`3. Special Types`

- `any` (🚨 unsafe) : Disables type checking 
- Not recommended
- TypeScript stops checking this value completely. You can do anything → TypeScript gives up safety.

```
let value: any = 10;
value = "hello";   // ✅ allowed
value = true;      // ✅ allowed
value.toUpperCase(); // ❌ no error (dangerous)
```

- `unknown` (safer than any)
- You must check type before using it.
- You can store anything, BUT you cannot use it directly.

```
let value: unknown = 10;
value = "hello";   // ✅ allowed
value = true;      // ✅ allowed
value.toUpperCase(); // ❌ ERROR
```

| Feature                  | any        | unknown     |
| ------------------------ | ---------- | ----------- |
| Type checking            | ❌ Disabled | ✅ Required  |
| Safety                   | Unsafe     | Safe        |
| Can use methods directly | Yes        | No          |
| Best practice            | Avoid      | Recommended |


- `void` :Used in functions that return nothing
- Used when a function finishes normally but gives no result

```
function log(): void {
  console.log("hello");
}
```

- `never` : Function never returns
- Used when a function never finishes execution
- It either: throws an error, OR runs forever

```
function error(): never {
  throw new Error("fail");
}
```

| Feature          | void              | never                           |
| ---------------- | ----------------- | ------------------------------- |
| Function ends?   | Yes               | No                              |
| Returns value?   | No                | Impossible                      |
| Execution stops? | Normal stop       | Infinite / crash                |
| Used for         | logging functions | error handling / infinite logic |


`4. Advanced Types`
- Advanced types help you combine, reuse, and control types in flexible ways.

- union (string | number)
- intersection (A & B)
- interface
- type aliases
- generics


- `Union Types (|)` : A variable can have multiple possible types

```
let value: string | number;
value = "hello"; // ✅
value = 10;      // ✅
```

- `Intersection Types (&)` : Combine multiple types into one

```
type A = { name: string };
type B = { age: number };
type C = A & B;

let user: C = {
  name: "alex",
  age: 25
};
```

- `Type Aliases (type)` : Create custom type names
- Makes code cleaner and reusable

```
type ID = string | number;
let userId: ID;
```

- `Interfaces (interface)` : Used to define object structure

```
interface User {
  name: string;
  age: number;
}

let user: User = {
  name: "alex",
  age: 25
};
```

- `Literal Types` : Value must be EXACT

```
let direction: "left" | "right";
direction = "left";  // ✅
direction = "up";    // ❌
```

- `Generics (<T>)` : Reusable types (VERY IMPORTANT in real projects)
- Same function works for any type safely

```
function identity<T>(value: T): T {
  return value;
}

identity<string>("hello");
identity<number>(10);
```

- `Type Guards` : Check type before using it

```
function print(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}
```

| Feature            | Meaning                 |
| ------------------ | ------------------      |
| Union (`|`)        | multiple possible types |
| Intersection (`&`) | combine types           |
| type               | create custom type      |
| interface          | object structure        |
| literal            | exact values            |
| optional (`?`)     | not required field      |
| generics           | reusable types          |
| type guards        | safe checking           |


## Chapter 3 : Arrays & Objects

* `Array` : An array is a collection of values of the same type.

- Array of numbers        ( let numbers: number[] = [1, 2, 3, 4] )
- Array of strings        ( let names: string[] = ["alex", "john"] )
- Array of booleans       ( let flags: boolean[] = [true, false, true] )

- Alternative Syntax (Generic way) : Same thing but different style

```
let numbers: Array<number> = [1, 2, 3];
```

- Both are same:
    number[] ✔ (most common)
    Array<number> ✔ (generic style)

- Mixed Arrays (Union Types) : If you want multiple types ( let data: (number | string)[] = [1, "hello", 2] )
- Readonly Arrays : You cannot modify them

```
let nums: readonly number[] = [1, 2, 3];
// nums.push(4); ❌ Error
```

- Array of Objects : Very common in real projects

```
let users: { name: string; age: number }[] = [
  { name: "alex", age: 25 },
  { name: "john", age: 30 }
];
```

- Using Type Alias (clean way) :

```
type User = {
  name: string;
  age: number;
};

let users: User[] = [
  { name: "alex", age: 25 }
];
```

* `Objects` : a collection of key–value pairs.

- Basic Object Type : Object must match structure exactly

```
let user: { name: string; age: number } = {
  name: "alex",
  age: 25
};
```

- Object with Optional Properties : age is optional

```
let user: { name: string; age?: number } = {
  name: "alex"
};
```

- Nested Objects :

```
let user: {
  name: string;
  address: {
    city: string;
    country: string;
  };
} = {
  name: "alex",
  address: {
    city: "Mumbai",
    country: "India"
  }
};
```

- Object with Array :

```
let user: {
  name: string;
  hobbies: string[];
} = {
  name: "alex",
  hobbies: ["coding", "music"]
};
```

- Using Type Alias (Best Practice) : Instead of repeating types:

```
type User = {
  name: string;
  age: number;
};

let u1: User = {
  name: "alex",
  age: 25
};
```

- Using Interface (Very Common) : Interface is mostly used in real projects (React, APIs)

```
interface User {
  name: string;
  age: number;
}

let u2: User = {
  name: "john",
  age: 30
};
```

- Readonly Object : You cannot modify values

```
type User = {
  readonly name: string;
  age: number;
};

let user: User = {
  name: "alex",
  age: 25
};

// user.name = "john"; ❌ Error
```

- Object with Functions :

```
let user: {
  name: string;
  greet: () => void;
} = {
  name: "alex",
  greet() {
    console.log("Hello");
  }
};
```

* `enum` :
- An enum (short for enumeration) is used to define a set of named constants.
- Instead of using random values like "ADMIN" or 1, you give them meaningful names.

- Basic Enum :

```
enum Direction {
  Up,
  Down,
  Left,
  Right
}
```
TypeScript assigns numbers automatically:
```
Direction.Up = 0
Direction.Down = 1
Direction.Left = 2
Direction.Right = 3
```

- Using Enum :

```
let move: Direction = Direction.Up;
console.log(move); // 0
```

- Custom Values in Enum : You can assign your own values:

```
enum Status {
  Success = 200,
  NotFound = 404,
  Error = 500
}
```

- String Enum :

```
enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST"
}

let userRole: Role = Role.Admin;
console.log(userRole); // "ADMIN"
```

- Enum in Functions :

```
enum Direction {
  Up,
  Down
}

function move(dir: Direction) {
  console.log(dir);
}

move(Direction.Up);
```

* note :
- Enums are useful, but in modern TypeScript: Many developers also use union types instead of enums

```
type Role = "ADMIN" | "USER" | "GUEST";
```

## Chapter 4 : Functions

* `Type Alias` :
- A type alias lets you create a custom name for a type.
- You use type keyword to define it.

```
type User = {
  name: string;
  age: number;
};

let user: User = {
  name: "alex",
  age: 25
};
```
- Instead of writing object structure again and again, you reuse User

- Type Alias for Union Types :

```
type ID = string | number;

let userId: ID;

userId = "abc123"; // ✅
userId = 101;      // ✅
```

- Type Alias for Functions :

```
type Add = (a: number, b: number) => number;

const add: Add = (a, b) => {
  return a + b;
};
```

- Type Alias for Arrays :

```
type Numbers = number[];

let arr: Numbers = [1, 2, 3];
```

- Type Alias with Objects + Nested Data :

```
type User = {
  name: string;
  address: {
    city: string;
    country: string;
  };
};
```

* `Literal Types` :
- A variable can hold only exact specific values, not any value of that type.

- String Literal Types   (```let direction: "left" | "right";```)
- Number Literal Types   (```let status: 200 | 404 | 500;```)
- Boolean Literal Types  (```let isActive: true;```)

- Real-world Example :

- Without literal types ❌

```
let role: string;

role = "admin";
role = "randomValue"; // ❌ still allowed
```

- With literal types ✅

```
let role: "admin" | "user" | "guest";

role = "admin"; // ✅
role = "user";  // ✅
role = "hacker"; // ❌ Error
```

- Literal Types with Type Alias :

```
type Role = "admin" | "user" | "guest";

let userRole: Role = "admin";
```

* `Functions` :
- A function is a block of reusable code that performs a task.
- TypeScript adds types to functions, making them safer.

```
function add(a: number, b: number): number {
  return a + b;
}
```

- Function without return (void) :

```
function greet(name: string): void {
  console.log("Hello " + name);
}
```

- Function with Optional Parameters : age is optional

```
function user(name: string, age?: number) {
  console.log(name, age);
}
```

- Default Parameters :

```
function greet(name: string = "Guest") {
  console.log("Hello " + name);
}
```

- Arrow Functions :

```
const add = (a: number, b: number): number => {
  return a + b;
};
```

- Function Type :

```
let multiply: (a: number, b: number) => number;

multiply = (x, y) => {
  return x * y;
};
```

- Function with Union Types :

```
function print(value: string | number) {
  console.log(value);
}
```

- Function with Literal Types :

```
function move(direction: "left" | "right") {
  console.log(direction);
}
```

- Function with Objects :

```
function user(obj: { name: string; age: number }) {
  console.log(obj.name);
}
```

- Function Returning Object :

```
function createUser() {
  return {
    name: "alex",
    age: 25
  };
}
```

## Chapter 5 : Assertions
- Type Assertion means : You are telling TypeScript:
  👉 “Trust me, I know the type of this value better than you do.”
- It does NOT change the data , It only changes how TypeScript treats the value.

- Basic Syntax : There are 2 ways:

- 1. ✔ Angle-bracket syntax

```
let value: any = "hello";

let strLength: number = (<string>value).length;
```

- 2. ✔ as syntax (MOST USED)

```
let value: any = "hello";

let strLength: number = (value as string).length;
```

- Why we need Assertion : TypeScript may not know the exact type:

```
let data: any = "TypeScript";

let length = (data as string).length;
```
- TS says: “I don’t know what this is” But YOU know it is a string:

- Real DOM Example (Very Important) :

```
let input = document.getElementById("username");
```
- TypeScript thinks: HTMLElement | null
- So this may error: // input.value ❌ error

- Fix using assertion:

```
let input = document.getElementById("username") as HTMLInputElement;

console.log(input.value); // ✅ works
```

- Double Assertion (Advanced) : Rarely used, but possible

```
let value = "hello" as unknown as number;
```

- Important Rule : ❗ Assertion does NOT convert types

```
let value = "123" as number;
```
- 👉 This is WRONG logic
- It does NOT convert string → number
- It only tells TypeScript to “trust you”

| Benefit           | Meaning                    |
| ----------------- | -------------------------- |
| Fix unclear types | Helps TS understand better |
| DOM handling      | Very common in frontend    |
| API responses     | When you know structure    |
| Flexibility       | Override TS inference      |

- Danger of Assertions : If used wrongly:
```
let value = "hello" as number;
value.toFixed(); // ❌ runtime error
```
- 👉 TypeScript is “trusting you blindly”


## Chapter 6 : Classes

- A `class` is a blueprint for creating objects.
- Think of it like:
    Blueprint = Class
    Real object = Instance

```
class User {
  name: string = "alex";
  age: number = 25;
}

let user1 = new User();
console.log(user1.name);
```

- `Constructor` : Used to initialize values when object is created

```
class User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

let user1 = new User("alex", 25);
let user2 = new User("john", 30);
```

- `this` : this refers to the current object

```
this.name = name;  ( means Assign value to this object’s property )
```

- `Methods` : (Functions inside class)

```
class User {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet() {
    console.log("Hello " + this.name);
  }
}

let user = new User("alex");
user.greet();
```

- `Access Modifiers` :

- `public` (default) : Accessible everywhere

```
class User {
  public name: string = "alex";
}
```

- `private` : Accessible only inside class , Cannot access outside

```
class User {
  private password: string = "1234";
}
```

- `protected` : Accessible in class + child class

```
class User {
  protected age: number = 25;
}
```

- `Inheritance` : One class can reuse another class

```
class Animal {
  move() {
    console.log("Moving...");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Barking...");
  }
}

let d = new Dog();
d.move();
d.bark();
```

- `Super` Keyword : Used to call parent class

```
class Animal {
  constructor(public name: string) {}
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }
}
```

- `Getters and Setters`

```
class User {
  private _age: number = 25;

  get age() {
    return this._age;
  }

  set age(value: number) {
    this._age = value;
  }
}

let u = new User();
u.age = 30;
console.log(u.age);
```

- `Readonly Properties` : Cannot change after initialization

```
class User {
  readonly name: string = "alex";
}
```

- `Parameter Properties (Shortcut)` : No need to write this.name = name

```
class User {
  constructor(public name: string, public age: number) {}
}
```

- `Abstract Classes (Advanced)` : Cannot create object directly

```
abstract class Animal {
  abstract makeSound(): void;
}

class Dog extends Animal {
  makeSound() {
    console.log("Bark");
  }
}
```

## Chapter 7 : Index Signatures & Keyof Assertions

* `Index Signature` :
- An index signature lets you say:
“This object can have many properties, and I don’t know their names in advance, but I know their value type.”

```
let user: {
  [key: string]: string;
};
```
- Meaning:
    Any number of properties allowed
    Key must be a string
    Value must be a string

```
user = {
  name: "alex",
  city: "mumbai",
  country: "india"
};
```
- All values must be strings

- Numeric Index Signature :

```
let scores: {
  [index: number]: number;
};

scores = {
  1: 90,
  2: 85,
  3: 100
};
```

- Real-world Example :

```
type Config = {
  [key: string]: string;
};

let settings: Config = {
  theme: "dark",
  language: "en",
  timezone: "IST"
};
```

- Mixing Known + Dynamic Properties :

```
type User = {
  name: string;
  age: number;
  [key: string]: string | number;
};

let user: User = {
  name: "alex",
  age: 25,
  city: "mumbai",
  zip: 400001
};
```

- Important Rule :
If you add an index signature: All property types must match it

```
type User = {
  [key: string]: string;
  age: number; // ❌ Error
};
```
Because index signature says: everything must be string

* `keyof`
- keyof creates a union of all property names (keys) of a type.

```
type User = {
  name: string;
  age: number;
};
```
- Using keyof:
```
type UserKeys = keyof User;
```
- TypeScript becomes:
```
type UserKeys = "name" | "age";
```

```
type User = {
  name: string;
  age: number;
};

let key: keyof User;

key = "name"; // ✅
key = "age";  // ✅
key = "email"; // ❌ Error
```

- Real-world Example :

```
type User = {
  name: string;
  age: number;
};

function getValue(user: User, key: keyof User) {
  return user[key];
}

const user = {
  name: "alex",
  age: 25
};

getValue(user, "name"); // ✅
getValue(user, "age");  // ✅
getValue(user, "email"); // ❌
```

* `typeof`
typeof gets the type of a variable/value and lets you use it in TypeScript.

```
let user = {
  name: "alex",
  age: 25
};

type UserType = typeof user;
```
- TypeScript creates: 
```
type UserType = {
  name: string;
  age: number;
}
```
- So, typeof = "Take the type from this variable."

```
const person = {
  name: "Alex",
  age: 25
};

type Person = typeof person;

let p: Person = {
  name: "John",
  age: 30
};
```

- `typeof + keyof` Together : This is the most common pattern.

```
const user = {
  name: "alex",
  age: 25,
  city: "mumbai"
};
```

```
typeof user 

// gives

{
  name: string;
  age: number;
  city: string;
}

keyof typeof user

// gives

"name" | "age" | "city"
```

* `Tuples`
- A tuple is a fixed-length array where each position has a predefined type and order.
- A tuple is a special type of array where:
    ✅ Number of elements is fixed
    ✅ Order matters
    ✅ Each position can have a different type

```
let user: [string, number] = ["alex", 25];  // Valid
let user: [string, number] = [25, "alex"];  // Invalid - ❌ Order is wrong

let employee: [number, string, boolean] = [
  101,
  "alex",
  true
];

let user: [string, number] = ["alex", 25];

console.log(user[0]); // alex
console.log(user[1]); // 25
```

- Named Tuples (TS 4+) : Makes tuples more readable.

```
let user: [name: string, age: number] = [
  "alex",
  25
];
```

- Optional Tuple Elements :

```
let user: [string, number?];

user = ["alex"];
user = ["alex", 25];
```

- Readonly Tuple :

```
let user: readonly [string, number] = [
  "alex",
  25
];

user[0] = "john";  ❌ Error
```

| Feature         | Array      | Tuple |
| --------------- | ---------- | ----- |
| Length fixed    | ❌          | ✅     |
| Order matters   | ❌          | ✅     |
| Different types | Usually no | ✅     |
| Type safety     | Less       | More  |


## Chapter 8 : Generics

- Generics allow you to write reusable code that works with different types while still keeping type safety.
- "Instead of writing the same function for strings, numbers, booleans, etc., write it once and let TypeScript figure out the type."

- Problem Without Generics : Lots of duplicate code ❌

- For strings :
```
function getString(value: string): string {
  return value;
}
```

- For numbers :
```
function getNumber(value: number): number {
  return value;
}
```

- For booleans :
```
function getBoolean(value: boolean): boolean {
  return value;
}
```

- Solution: Generics 

```
function getValue<T>(value: T): T {
  return value;
}
```
- T is a type parameter.
- Think: "T will be replaced by whatever type is passed."

getValue<string>("alex");  // T = string
getValue<number>(25);      // T = number
getValue<boolean>(true);   // T = boolean

- Why T? T is just a name. You can write anything.

```
function getValue<MyType>(value: MyType): MyType {
  return value;
}
```
- But convention is: T = Type

- Type Inference : Usually you don't even need to specify T. TypeScript automatically infers:

- Generic Arrays :

```
let names: string[] = ["alex", "john"];       // Without generics
let names: Array<string> = ["alex", "john"];  // Generic syntax:
```

- Multiple Generic Types :

```
function pair<T, U>(
  first: T,
  second: U
) {
  return [first, second];
}

pair("alex", 25);
```

- Generic Interfaces :

```
interface User<T> {
  data: T;
}

const user: User<string> = {
  data: "alex"
};

const user2: User<number> = {
  data: 25
};
```

- Generic Type Alias :

```
type ApiResponse<T> = {
  success: boolean;
  data: T;
};


type User = {
  name: string;
};

const response: ApiResponse<User> = {
  success: true,
  data: {
    name: "alex"
  }
};
```

- Generic Class :

```
class Box<T> {
  constructor(public value: T) {}
}

const box1 = new Box<string>("hello");
const box2 = new Box<number>(100);
```

| Benefit   | Meaning                                |
| --------- | -------------------------------------- |
| Reusable  | Write once, use everywhere             |
| Type-safe | No `any` needed                        |
| Flexible  | Works with any type                    |
| Common    | Used heavily in React, APIs, libraries |

- Real-World Example

API Response:
```
type ApiResponse<T> = {
  success: boolean;
  data: T;
};
```

User API:
```
type User = {
  name: string;
};

const response: ApiResponse<User> = {
  success: true,
  data: {
    name: "alex"
  }
};
```

Product API:
```
type Product = {
  title: string;
};

const response2: ApiResponse<Product> = {
  success: true,
  data: {
    title: "Laptop"
  }
};
```

- One type works for everything ✅

## Chapter 9 : Utility Types

- Utility Types are built-in TypeScript types that help you transform existing types instead of writing new ones from scratch.

1. Partial<T> : Makes all properties optional.

```
type User = {
  name: string;
  age: number;
};

// Partial 
type PartialUser = Partial<User>;

// becomes
{
  name?: string;
  age?: number;
}

// usage
const user: Partial<User> = {
  name: "alex"
};
```

2. Required<T> : Makes all properties required.

```
type User = {
  name?: string;
  age?: number;
};

type UserRequired = Required<User>;

// becomes
{
  name: string;
  age: number;
}
```

3. Readonly<T> : Makes all properties read-only.

```
type User = {
  name: string;
  age: number;
};

const user: Readonly<User> = {
  name: "alex",
  age: 25
};

user.age = 30;  // ❌ Error
```

4. Pick<T, Keys> : Pick only specific properties.

```
type User = {
  id: number;
  name: string;
  age: number;
};

type UserInfo = Pick<User, "name" | "age">;

// becomes
{
  name: string;
  age: number;
}
```

5. Omit<T, Keys> : Remove specific properties.

```
type User = {
  id: number;
  name: string;
  age: number;
};

type UserWithoutId = Omit<User, "id">;

// becomes 
{
  name: string;
  age: number;
}
```

6. Record<K, T> : Create an object type from keys.

```
type Roles = Record<string, string>;

const roles: Roles = {
  admin: "Alex",
  user: "John"
};

// another example

type Status = Record<
  "success" | "error",
  string
>;

// becomes

{
  success: string;
  error: string;
}
```

- 7. Exclude<T, U> : Remove types from a union.

```
type Role =
  | "admin"
  | "user"
  | "guest";

  type NewRole =
  Exclude<Role, "guest">;

  // result
  "admin" | "user"
```

8. Extract<T, U> : Keep only matching types.

```
type Role =
  | "admin"
  | "user"
  | "guest";

type OnlyAdmin =
  Extract<Role, "admin">;

// result
"admin"
```

9. NonNullable<T> : Removes null and undefined.

```
type Value =
  string | null | undefined;

type SafeValue =
  NonNullable<Value>;

// result 
string
```

10. ReturnType<T> : Get function return type.

```
function getUser() {
  return {
    name: "alex",
    age: 25
  };
}

type User =
  ReturnType<typeof getUser>;

// result 
{
  name: string;
  age: number;
}
```

- Most Used in Real Projects :

| Utility Type    | Usage                          |
| --------------- | ------------------------------ |
| `Partial<T>`    | Update forms, PATCH APIs       |
| `Pick<T>`       | Select fields                  |
| `Omit<T>`       | Remove fields like password/id |
| `Readonly<T>`   | Immutable data                 |
| `Record<K,T>`   | Dictionaries/maps              |
| `ReturnType<T>` | Reuse function return types    |

| Utility       | Meaning                  |
| ------------- | ------------------------ |
| `Partial`     | Make optional            |
| `Required`    | Make required            |
| `Readonly`    | Cannot change            |
| `Pick`        | Take fields              |
| `Omit`        | Remove fields            |
| `Record`      | Build object             |
| `Exclude`     | Remove from union        |
| `Extract`     | Keep from union          |
| `NonNullable` | Remove null/undefined    |
| `ReturnType`  | Get function return type |


* `1. Advanced Generics` : Advanced generics add constraints and relationships.

- Generic Constraints :

```
function printLength<T extends { length: number }>(
  value: T
) {
  console.log(value.length);
}

// valid
printLength("hello");
printLength([1, 2, 3]);

printLength(100);  // invalid - because number has no length
```
- why ? You can restrict what types are allowed.

* `2. Type Guards & Narrowing` : When a variable can have multiple types:
- TypeScript doesn't know which type it is.

- Type Guard :

```
function print(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}
```

- Inside each block TypeScript "narrows" the type.

Common Guards :

```
typeof
instanceof
in
Array.isArray()
```

3. `Mapped Types` : Create a new type by transforming another type.

```
// original

type User = {
  name: string;
  age: number;
};

// Mapped Type

type OptionalUser = {
  [K in keyof User]?: User[K];
};

// result 

{
  name?: string;
  age?: number;
}
```
- Why important? Utility types are built using mapped types.

4. `Conditional Types` : TypeScript can make decisions.

```
T extends U ? X : Y

// think

if T extends U
   return X
else
   return Y

ex :

type IsString<T> =
  T extends string ? true : false;

type A = IsString<string>; // true

type B = IsString<number>; // false
```

5. `React + TypeScript Patterns` : If you build React apps, this is huge.

- Component Props :

```
type ButtonProps = {
  text: string;
};

function Button(props: ButtonProps) {
  return <button>{props.text}</button>;
}
```

-  Events :

```
const handleClick = (
  e: React.MouseEvent<HTMLButtonElement>
) => {
  console.log(e);
};
```

- State :

```
const [count, setCount] =
  useState<number>(0);
```

- API Response Types :

```
type User = {
  id: number;
  name: string;
};

const [users, setUsers] =
  useState<User[]>([]);
```

- Fetch Data :

```
async function getUsers(): Promise<User[]> {
  const res = await fetch("/users");

  return res.json();
}
```