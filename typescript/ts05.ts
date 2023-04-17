// Narrowing

// typeof
function 함수51(x: number | string) {
  if (typeof x === "string") {
    return x + "1";
  } else {
    return x + 1;
  }
}

function 함수52(x: number | string) {
  let arr: number[] = [];

  if (typeof x === "number") arr[0] = x;
}

// assertion
function 함수53(x: number | string) {
  let arr: number[] = [];
  arr[0] = x as number;
}

// 문제1)
function question51(x: (string | number)[]) {
  return x.map((v) => (typeof v === "string" ? parseInt(v) : v));
}

console.log("문제1:", question51(["1", 2, "3"]));

// 문제2)
let 철수쌤 = { subject: "math" };
let 영희쌤 = { subject: ["science", "english"] };
let 민수쌤 = { subject: ["science", "art", "korean"] };

function question52(x: { subject: string | string[] }): string {
  return Array.isArray(x.subject) ? x.subject[x.subject.length - 1] : x.subject;
}

console.log("문제2:", question52({ subject: "math" }));
console.log("문제2:", question52({ subject: ["science", "art", "korean"] }));
