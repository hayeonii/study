import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const addToDo = (text) => {
  return { type: ADD_TODO, text };
};

const deleteTodo = (id) => {
  return { type: DELETE_TODO, id };
};

const reducer = (state = [], action) => {
  // console.log(action);
  switch (action.type) {
    case ADD_TODO:
      // 상태를 수정하는 것이 아닌 새로운 obejct를 return
      // 새로운 state를 create하고 새로운 state를 return
      const newTodo = { text: action.text, id: Date.now() };
      return [newTodo, ...state];
    case DELETE_TODO:
      // splice()가 아닌 filter() 메소드를 쓴 이유?
      // filter()는 새로운 배열을 반환시켜 주기 때문!
      const deleted = state.filter((toDo) => toDo.id !== action.id);
      return deleted;
    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

const dispatchAddToDo = (text) => {
  store.dispatch(addToDo(text));
};

const dispatchDeleteTodo = (e) => {
  const id = parseInt(e.target.parentNode.id);
  store.dispatch(deleteTodo(id));
};

const paintTodos = () => {
  const toDos = store.getState();
  ul.innerHTML = "";
  toDos.forEach((toDo) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");

    li.id = toDo.id;
    li.innerText = toDo.text;
    btn.innerText = "DEL";
    li.appendChild(btn);
    ul.appendChild(li);

    btn.addEventListener("click", dispatchDeleteTodo);
  });
};
store.subscribe(paintTodos);

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  dispatchAddToDo(toDo);
};

form.addEventListener("submit", onSubmit);
