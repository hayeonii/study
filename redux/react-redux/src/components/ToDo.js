import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actionCreators } from "../store-nomad";

function ToDo({ text, onBtnClick, id }) {
  return (
    <li>
      <Link to={`/${id}`}>
        {text}
        <button onClick={onBtnClick}>DEL</button>
      </Link>
    </li>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  // console.log(ownProps);
  return {
    onBtnClick: () => dispatch(actionCreators.deleteToDo(ownProps.id)),
  };
}

export default connect(null, mapDispatchToProps)(ToDo);
