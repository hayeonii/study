import React from "react";

export default function ToDo({ text }) {
  return (
    <li>
      {text}
      <button>DEL</button>
    </li>
  );
}
