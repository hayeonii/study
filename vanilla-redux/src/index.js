import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");
number.innerText = 0;

// const reducer = () => {};

// const store = createStore(reducer);

// data를 수정하는 유일한 곳
// state = 0 : 초기값 설정
const countModifier = (count = 0, action) => {
  console.log(count, action);
  if (action.type === "ADD") {
    return count + 1;
  } else if (action.type === "MINUS") {
    return count - 1;
  } else {
    return count;
  }
};

const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
};

// store에 변화가 있을 때마다 감지해서 불려짐
countStore.subscribe(onChange);

// eventListener의 두번째 인자는 익명함수 or 함수
add.addEventListener("click", () => {
  countStore.dispatch({ type: "ADD" });
});
minus.addEventListener("click", () => {
  countStore.dispatch({ type: "MINUS" });
});
