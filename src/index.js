import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/App.js";

ReactDOM.render(<App />, document.getElementById("root"));

if (module.hot) {
  module.hot.accept();
}
