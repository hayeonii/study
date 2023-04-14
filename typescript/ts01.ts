// 간단한 변수 타입 지정
let 이름: string = "kim"; // 이 변수엔 string만 들어올 수 있음

// array 타입 지정
let 이름2: string[] = ["kim", "park"];

// object 타입 지정
let 이름3: { name: string } = { name: "kim" };
let 이름4: { name?: string } = {}; // name 속성이 들어올수도 안들어올수도 (옵션)

type Member = {
  [key: string]: string; // 글자로 된 모든 object 속성의 타입은 string
};

let john2: Member = { name: "kim" };

// union Type - 다양한 타입 지정
let 이름5: string | number = "kim";

// type alias - 타입을 변수에 담아 쓸 수 있음
// 대문자 작명을 많이 함
type Name = string | number;
let 이름6: Name = 123;

// 함수에 타입 지정 가능
function 함수(x: number): number {
  // 변수 x 타입: number, return 타입: number
  return x * 2;
}

// array에 쓸 수 있는 tuple 타입
type Member2 = [number, boolean];
let john: Member2 = [123, true];
