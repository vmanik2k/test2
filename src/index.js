import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import List from "./List";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
    <List />
  </React.StrictMode>,
  rootElement
);
