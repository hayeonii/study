// 함수의 타입 지정
function 함수41(x) {
    return x * 2;
}
// 함수에서 void 타입 활용 가능
function 함수42(x) {
    1 + 1;
}
// 파라미터가 옵션일 경우
function 함수43(x) {
    1 + 1;
}
함수43();
// 문제1)
function question41(x) {
    if (x) {
        console.log("\uC548\uB155\uD558\uC138\uC694 ".concat(x));
    }
    else {
        console.log("이름이 없습니다");
    }
}
// 문제2)
function question42(x) {
    return x.toString().length;
}
// 문제3)
function question43(money, house, charm) {
    var score = 0;
    score += money;
    if (house)
        score += 500;
    if (charm === "상")
        score += 100;
    if (score >= 600)
        return "결혼가능";
}
