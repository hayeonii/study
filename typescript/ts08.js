// 함수의 type alias
var 함수81 = function (a) {
    return 123;
};
var 회원정보 = {
    name: "kim",
    age: 30,
    plusOne: function (x) {
        return x + 1;
    },
    changeName: function () {
        console.log("안녕");
    },
};
회원정보.plusOne(3);
회원정보.changeName();
var phoneNumber = {
    cutZero: function (x) {
        return x.replace(/^0+/, "");
    },
    removeDash: function (x) {
        return parseInt(x.replace(/-/g, ""));
    },
};
console.log(phoneNumber.cutZero("012345"));
console.log(phoneNumber.removeDash("010-9894-5501"));
