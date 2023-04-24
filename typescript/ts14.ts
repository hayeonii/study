// 제네릭 함수
// 파라미터로 타입을 입력하는 함수

function 함수141<MyType>(x: MyType[]): MyType {
  return x[0];
}

// number라는 type을 함수141의 mytype에 넣어 주세요~
let result = 함수141<number>([4, 2]);

interface Lengthcheck {
  length: number;
}

function 함수142<MyType extends Lengthcheck>(x: MyType) {
  return x.length;
}

let result2 = 함수142<string>("100");

// 문제1)
function question141<ArrType extends string | string[]>(x: ArrType) {
  return x.length;
}

// 문제2)
interface Animal142 {
  name: string;
  age: number;
}

let data142 = '{"name" : "dog", "age" : 1 }';

function question142<Type>(x: string): Type {
  return JSON.parse(x);
}

let result142 = question142<Animal142>(data142);

// 문제3)
class Person143<T> {
  name;
  constructor(a: T) {
    this.name = a;
  }
}
let a = new Person143<string>("어쩌구");
