let value: any = 'hello';
let strLength: number = (<String>value).length;
let strLen: number = (value as string).length;

let input = document.getElementById('username') as HTMLInputElement;
console.log(input.value)

let val: any = 'hello';
let v: any = (val as number).toFixed()
