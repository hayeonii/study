// 튜플 타입
let dog: [string, boolean] = ["dog", true];

// 함수에서 쓰는 튜플
function 함수151(...x: [number, string]) {
  console.log(x);
}

함수151(111, "222");

// 스프레드 문법 쓸 때의 타입 지정
let arr151 = [1, 2, 3];
let arr152: [number, number, ...number[]] = [4, 5, ...arr151];

// 문제1)
let myFood: [string, number, boolean] = ["브라우니", 1000, true];

// 문제2)
let arr153: [string, number, ...boolean[]] = [
  "동서녹차",
  4000,
  true,
  false,
  true,
  true,
  false,
  true,
];

// 문제3)
function question153(...rest: [string, boolean, ...(number | string)[]]) {}

question153("a", true, 6, 3, "1", 4);

// 문제4)
function question154(...x: [number | string]) {
  let result: [string[], number[]] = [[], []];

  x.map((v) => (typeof v === "string" ? result[0].push(v) : result[1].push(v)));

  return result;
}
