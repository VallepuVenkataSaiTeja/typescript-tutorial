let user : {
    [key : string] : string;
}

user = {
    name: 'eam',
    city: 'delhi',
    country: 'india'
}

type Person = {
    [key: string] : string | number;
}
const p: Person = {
    name: 'sev',
    age: 21,
    // isStudent: false
}

// --------------------------------------------

type User = {
  name: string;
  age: number;
};

let key: keyof User;

key = "name"; // ✅
key = "age";  // ✅
// key = "email"; 

 // --------------------------------------------

let user1 = {
    name: 'ram',
    age: 21
}

type User1 = typeof user1;
const u: User1 = {
    name: 'sam',
    age: 21
}
