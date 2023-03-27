import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

// const reducer = () => {};

// const store = createStore(reducer);

// 오타로 인해 오작동 하는 것을 방지 - 변수로 사용하기
const ADD = "ADD";
const MINUS = "MINUS";

// data를 수정하는 유일한 곳
// state = 0 : 초기값 설정
const countModifier = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
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
  countStore.dispatch({ type: ADD });
});
minus.addEventListener("click", () => {
  countStore.dispatch({ type: MINUS });
});
