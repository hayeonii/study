// 타입스크립트 기본 타입 정리

let 이름7: string = "kim";
let 나이: number = 50;
let 결혼여부: boolean = true;

let 회원들: string[] = ["kim", "park"];
let 회원들2: { member1: string; member2: string } = {
  member1: "kim",
  member2: "park",
};

// 문제1) 이름, 나이, 출생지역을 변수로 각각 저장
let myName: string = "임하연";
let myAge: number = 26;
let myCountry: string = "광주";

// 문제2) 가장 좋아하는 곡과 가수이름을 변수에 object 자료형으로 담아보기
let mySong: { title: string; singer: string } = { title: "I", singer: "태연" };

// 문제3) 타입 지정 연습
let project: {
  member: string[];
  days: number;
  started: boolean;
} = {
  member: ["kim", "park"],
  days: 30,
  started: true,
};
