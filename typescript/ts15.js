var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// 튜플 타입
var dog = ["dog", true];
// 함수에서 쓰는 튜플
function 함수151() {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
    }
    console.log(x);
}
함수151(111, "222");
// 스프레드 문법 쓸 때의 타입 지정
var arr151 = [1, 2, 3];
var arr152 = __spreadArray([4, 5], arr151, true);
// 문제1)
var myFood = ["브라우니", 1000, true];
// 문제2)
var arr153 = [
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
function question153() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
}
question153("a", true, 6, 3, "1", 4);
// 문제4)
function question154() {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
    }
    var result = [[], []];
    x.map(function (v) { return (typeof v === "string" ? result[0].push(v) : result[1].push(v)); });
    return result;
}
