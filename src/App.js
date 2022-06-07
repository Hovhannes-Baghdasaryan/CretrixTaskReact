import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import BoxContainer from "./components/Box/BoxContainer";
import store from "./Redux/store";
import "./App.css";

function App() {
  return (
    <div className="appWrapper">
      <BoxContainer />
    </div>
  );
}

export default function SamuraiJS() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
}
