// type alias

type Animal = string | number | undefined;
let 동물: Animal = "cat";

type Person = { name: string; age: number };
let 사람: Person = { name: "kim", age: 20 };

// object 자료 수정 막기 (readonly)
type Girlfreind = {
  readonly name: string;
};

const 여친: Girlfreind = {
  name: "엠버",
};

// type 변수의 union type
type Name61 = string;
type Age61 = number;
type Person61 = Name61 | Age61;

// object type 합치기
type PositionX = { x: number };
type PositionY = { y: number };

type NewType = PositionX & PositionY; // {x: number, y: number}

// 문제1)
type QuestionType = {
  color?: string;
  size: number;
  readonly position: number[];
};

// 문제2)
type QuestionType2 = {
  name: string;
  phone: number;
  email?: string;
};

// 문제3)
type QuestionType3 = QuestionType2 & {
  children: boolean;
};

let 회원가입정보: QuestionType3 = {
  name: "kim",
  children: false,
  phone: 1234,
};
