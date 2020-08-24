import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./routes/Home";
import NowPlaying from "./routes/NowPlaying";
import Popular from "./routes/Popular";
import Upcoming from "./routes/Upcoming";
import TopRated from "./routes/TopRated";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/playing" component={NowPlaying} />
      <Route path="/popular" component={Popular} />
      <Route path="/Upcoming" component={Upcoming} />
      <Route path="/topRated" component={TopRated} />
     </HashRouter>
  );
}

export default App;
