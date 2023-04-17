var 제목 = document.querySelector("#title");
var 제목2 = document.querySelector("#title");
제목2.innerHTML = "반갑다";
// if(제목 !== null){
//   제목.innerHTML='반가워요'
// }
if (제목 instanceof Element) {
    제목.innerHTML = "반가워요";
}
var 제목3 = document.querySelector("#title");
if ((제목3 === null || 제목3 === void 0 ? void 0 : 제목3.innerHTML) !== undefined) {
    제목3.innerHTML = "ㅎㅇ";
}
var 링크 = document.querySelector(".link");
if (링크 instanceof HTMLAnchorElement) {
    링크.href = "https://kakao.com";
}
// 문제1)
var img = document.querySelector("#image");
if (img instanceof HTMLImageElement) {
    img.src = "new.jpg";
}
// 문제2)
var link = document.querySelectorAll(".naver");
link.forEach(function (link) {
    if (link instanceof HTMLAnchorElement) {
        link.href = "https://kakao.com";
    }
});
