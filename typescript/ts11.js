// rest 파라미터의 타입 지정
function 함수111() {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
    }
    console.log(x);
}
함수111(1, 2, 3, 4, 5);
// 구조분해할당에서 타입 지정하기
var _a = { student: true, ages: 20 }, student = _a.student, ages = _a.ages;
var objects = { student: true, ages: 20 };
function 함수112(_a) {
    var student = _a.student, ages = _a.ages;
    console.log(student, ages);
}
함수112(objects);
// 문제1)
function question111() {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
    }
    return x.sort()[x.length - 1];
}
console.log(question111(6, 3, 7, 2));
// 문제2)
function question112(_a) {
    var user = _a.user, comment = _a.comment, admin = _a.admin;
    console.log(user, comment, admin);
}
question112({ user: "kim", comment: [3, 5, 4], admin: false });
function question113(_a) {
    var a = _a[0], b = _a[1], c = _a[2];
    console.log(a, b, c);
}
question113([40, "wine", false]);
