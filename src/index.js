import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { API_KEY } from "./Config";
import SearchMovie from './service/searchMovie';

const searchMovie = new SearchMovie(API_KEY);
ReactDOM.render(
  <React.StrictMode>
    <App searchMovie={searchMovie} />
  </React.StrictMode>,
  document.getElementById("root")
);
