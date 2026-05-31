function getString(value: string): string{
    return value
}

function getValue<T>(value: T): T{
    return value
}
getValue('hello');
getValue(23);
getValue(false);

let names: string[] = ['ram', 'sam'];
let peoples: Array<string> = ['ram','sam']

function pair<T,U>(one: T, two: U){
    return [one, two]
}
pair('sam',22)
pair(22,false)

type APIResponse<T> = {
    status: boolean;
    data : T
}

type User = {
    name: string
}

const response: APIResponse<User> = {
  status: true,
  data : {
    name: 'alex'
  }

}
