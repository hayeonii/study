// 제네릭 함수
// 파라미터로 타입을 입력하는 함수
function 함수141(x) {
    return x[0];
}
// number라는 type을 함수141의 mytype에 넣어 주세요~
var result = 함수141([4, 2]);
function 함수142(x) {
    return x.length;
}
var result2 = 함수142("100");
// 문제1)
function question141(x) {
    return x.length;
}
var data142 = '{"name" : "dog", "age" : 1 }';
function question142(x) {
    return JSON.parse(x);
}
var result142 = question142(data142);
// 문제3)
var Person143 = /** @class */ (function () {
    function Person143(a) {
        this.name = a;
    }
    return Person143;
}());
var a = new Person143("어쩌구");
