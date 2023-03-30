import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

// redux관련 import
import { Provider } from "react-redux";
import store from "./store-nomad";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
