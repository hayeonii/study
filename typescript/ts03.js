var 회원 = 123;
// 문제) 숫자 or 문자가 가능한 배열/오브젝트 타입 지정은?
var 회원들3 = [1, "2", 3];
var 오브젝트 = { a: "123" };
// any 타입
var 이름8;
// unknown 타입
var 이름9;
// 문제1) 변수 타입 지정
var user = "kim";
var age = undefined;
var married = false;
var 철수 = [user, age, married];
// 문제2) 변수 타입 지정
var 학교 = {
    score: [100, 97, 84],
    teacher: "Phil",
    friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];
