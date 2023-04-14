let 회원: number | string = 123;

// 문제) 숫자 or 문자가 가능한 배열/오브젝트 타입 지정은?
let 회원들3: (string | number)[] = [1, "2", 3];
let 오브젝트: { a: string | number } = { a: "123" };

// any 타입
let 이름8: any;

// unknown 타입
let 이름9: unknown;

// 문제1) 변수 타입 지정
let user: string = "kim";
let age: undefined | number = undefined;
let married: boolean = false;
let 철수: (string | undefined | number | boolean)[] = [user, age, married];

// 문제2) 변수 타입 지정
let 학교: {
  score: (number | boolean)[];
  teacher: string;
  friend: string | string[];
} = {
  score: [100, 97, 84],
  teacher: "Phil",
  friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];
