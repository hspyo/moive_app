import React from "react";
import { HashRouter, Route } from "react-router-dom";
import MovieHome from "./components/MovieHome/MovieHome";
import Navigation from "./components/Navbar/Navigation";
import MovieItem from "./components/MovieItem/MovieItem";
import NowPlaying from "./routers/NowPlaying";
import Popular from "./routers/Popular";
import Upcoming from "./routers/Upcoming";
import TopRated from "./routers/TopRated";
import "./App.css";

export default function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={MovieHome} />
      <Route path="/playing" component={NowPlaying} />
      <Route path="/popular" component={Popular} />
      <Route path="/Upcoming" component={Upcoming} />
      <Route path="/topRated" component={TopRated} />
      <Route path="/movie/:movieId" component={MovieItem} />
     </HashRouter>
  );
}
