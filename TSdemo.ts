let str: string = "xsd";
let strlen: number = (str as string).length;
let num: number = 0o10;
let array: number[] = [];
enum Color {
  red,
  green,
  blue,
}
let c: Color = Color.green;
let value: any = null;
let v: void = null;
let n: null;
let ner: never;

console.log(str);
console.log(num);
console.log(array);
console.log(c);
console.log(value);
console.log(v);
console.log(n);
console.log(ner);
console.log(strlen);

console.log("------------------------------------------");

interface GenericIdentityFn<T> {
  (arg: T): T;
}

function identity<T>(arg: T): T {
  console.log(arg);
  return arg;
}

let myIdentity: GenericIdentityFn<string> = identity;
myIdentity('xsd')