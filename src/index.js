import React from "react";
import ReactDOM from "react-dom";
// ---- ANT-DESIGN ---- //
import "antd/dist/antd.css";
import "./index.css";
import App from "./App";
// ---- REACT-ROUTER-DOM ---- //
import { BrowserRouter } from "react-router-dom";
// ---- REDUX AND REACT-REDUX---- //
import store from "./Redux/store";
import { Provider } from "react-redux";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
