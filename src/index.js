import React from "react";
import ReactDOM from "react-dom";
import Heading from "./components/Heading";
import App from "./App";
import List from "./components/List";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Heading />
    <App />
    <List />
  </React.StrictMode>,
  rootElement
);
