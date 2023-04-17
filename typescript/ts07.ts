// Literal types
let 이름71: "kim"; // 이름이라는 변수에는 무조건 kim이라는 문자만 들어올 수 있음
let me: "단발" | "여자";

function 함수71(a: "hello"): 1 | 0 {
  return 1;
}

// 문제1)
function Question71(x: "가위" | "바위" | "보"): ("가위" | "바위" | "보")[] {
  return ["가위"];
}

// 리터럴 타입의 문제점
const 자료 = {
  name: "kim",
};

function 함수72(a: "kim") {}

// 함수72(자료.name) 에러
// 이유: 'kim'이라는 자료만 들어올 수 있다는 뜻이 아니라 'kim'이라는 '타입'만 들어올 수 있음

// 해결법

const 자료2 = {
  name: "kim",
} as const;
// obejct value 값을 그대로 타입으로 지정해 줌

function 함수73(a: "kim") {}

함수73(자료2.name);
