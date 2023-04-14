// 간단한 변수 타입 지정
var 이름 = "kim"; // 이 변수엔 string만 들어올 수 있음
// array 타입 지정
var 이름2 = ["kim", "park"];
// object 타입 지정
var 이름3 = { name: "kim" };
var 이름4 = {}; // name 속성이 들어올수도 안들어올수도 (옵션)
var john2 = { name: "kim" };
// union Type - 다양한 타입 지정
var 이름5 = "kim";
var 이름6 = 123;
// 함수에 타입 지정 가능
function 함수(x) {
    // 변수 x 타입: number, return 타입: number
    return x * 2;
}
var john = [123, true];
