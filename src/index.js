import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { API_KEY } from "./Config";
import SearchApi from "./service/searchApi";

const searchApi = new SearchApi(API_KEY);
ReactDOM.render(
  <React.StrictMode>
    <App searchApi={searchApi} />
  </React.StrictMode>,
  document.getElementById("root")
);
