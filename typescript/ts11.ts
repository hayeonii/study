// rest 파라미터의 타입 지정
function 함수111(...x: number[]) {
  console.log(x);
}

함수111(1, 2, 3, 4, 5);

// 구조분해할당에서 타입 지정하기
let { student, ages } = { student: true, ages: 20 };
let objects = { student: true, ages: 20 };

function 함수112({ student, ages }: { student: boolean; ages: number }) {
  console.log(student, ages);
}

함수112(objects);

// 문제1)
function question111(...x: number[]) {
  return x.sort()[x.length - 1];
}

console.log(question111(6, 3, 7, 2));

// 문제2)
function question112({
  user,
  comment,
  admin,
}: {
  user: string;
  comment: number[];
  admin: boolean;
}) {
  console.log(user, comment, admin);
}

question112({ user: "kim", comment: [3, 5, 4], admin: false });

// 문제3)

type Arr = (number | string | boolean)[];
function question113([a, b, c]: Arr) {
  console.log(a, b, c);
}

question113([40, "wine", false]);
