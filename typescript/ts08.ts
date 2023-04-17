// 함수의 type alias

type 함수타입 = (a: string) => number;

let 함수81: 함수타입 = function (a) {
  return 123;
};

// object 안의 함수 타입 지정

type UserFunc = {
  name: string;
  age: number;
  plusOne: (x: number) => number;
  changeName: () => void;
};

let 회원정보: UserFunc = {
  name: "kim",
  age: 30,
  plusOne(x) {
    return x + 1;
  },
  changeName: () => {
    console.log("안녕");
  },
};

회원정보.plusOne(3);
회원정보.changeName();

// 문제1
type PhoneNumber = {
  cutZero: (x: string) => string;
  removeDash: (x: string) => number;
};

let phoneNumber: PhoneNumber = {
  cutZero: (x) => {
    return x.replace(/^0+/, "");
  },
  removeDash: (x) => {
    return parseInt(x.replace(/-/g, ""));
  },
};

console.log(phoneNumber.cutZero("012345"));
console.log(phoneNumber.removeDash("010-9894-5501"));
