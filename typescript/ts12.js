// && 연산자로 null & undefined 체크하기
function 함수121(a) {
    if (a && typeof a === "string") {
        console.log("type은 string");
    }
}
function 함수122(animal) {
    if ("swim" in animal) {
        console.log("Fish 타입인지 검사 가능", animal.swim);
    }
}
function 함수123(x) {
    if (x.wheel === "4개") {
        console.log("x 변수는 Car 타입");
    }
}
