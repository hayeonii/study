import React, { useState } from "react";
import { connect } from "react-redux";
import ToDo from "../components/ToDo";
import { actionCreators } from "../store";

function Home({ toDos, addToDo }) {
  // console.log(toDos);
  const [text, setText] = useState("");

  function onChange(e) {
    setText(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    // console.log(text);
    addToDo(text);
    setText("");
    // dispatch(addToDo(text));
  }

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </>
  );
}

// store로부터 state를 가져다 줌
// redux state로부터 home(component)에 props로써 전달
function mapStateToProps(state) {
  // console.log(state, ownProps);
  // return { hello: true };
  return { toDos: state };
}

function mapDispatchToProps(dispatch) {
  return {
    addToDo: (text) => dispatch(actionCreators.addToDo(text)),
  };
}

// getCurrentState = state, Home = component의 props
export default connect(mapStateToProps, mapDispatchToProps)(Home);
