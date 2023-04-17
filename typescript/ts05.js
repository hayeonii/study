// Narrowing
// typeof
function 함수51(x) {
    if (typeof x === "string") {
        return x + "1";
    }
    else {
        return x + 1;
    }
}
function 함수52(x) {
    var arr = [];
    if (typeof x === "number")
        arr[0] = x;
}
// assertion
function 함수53(x) {
    var arr = [];
    arr[0] = x;
}
// 문제1)
function question51(x) {
    return x.map(function (v) { return (typeof v === "string" ? parseInt(v) : v); });
}
console.log("문제1:", question51(["1", 2, "3"]));
// 문제2)
var 철수쌤 = { subject: "math" };
var 영희쌤 = { subject: ["science", "english"] };
var 민수쌤 = { subject: ["science", "art", "korean"] };
function question52(x) {
    return Array.isArray(x.subject) ? x.subject[x.subject.length - 1] : x.subject;
}
console.log("문제2:", question52({ subject: "math" }));
console.log("문제2:", question52({ subject: ["science", "art", "korean"] }));
