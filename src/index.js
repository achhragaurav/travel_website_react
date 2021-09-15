import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import { GlobalContextMain } from "./store/Context";

ReactDOM.render(
  <React.StrictMode>
    <GlobalContextMain>
      <App />
    </GlobalContextMain>
  </React.StrictMode>,
  document.getElementById("root")
);
