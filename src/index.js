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
import { PersistGate } from "redux-persist/es/integration/react";
import { persistStore } from "redux-persist";

const persistor = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
