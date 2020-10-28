import React, { useState } from "react";
import { HashRouter, Route } from "react-router-dom";
import MovieHome from "./components/MovieHome/MovieHome";
import Navigation from "./components/Navbar/Navigation";
import MovieItem from "./components/MovieItem/MovieItem";
import NowPlaying from "./routers/NowPlaying";
import Popular from "./routers/Popular";
import Upcoming from "./routers/Upcoming";
import TopRated from "./routers/TopRated";
import Search from "./components/Search/Search";
import "./App.css";

// 검색을 위한 searchApi를 받아온다.
export default function App({ searchMovie }) {
  // 검색시 받아오는 영화 리스트
  const [movie, setMovie] = useState([]);
  const search = (query) => {
    searchMovie.search(query).then((movie) => setMovie(movie));
    setIsSearching(true);
  };

  // 검색 상태값 (검색 중 vs 검색 중 아님 )
  const [isSearching, setIsSearching] = useState(false);

  // 페이지 리프레쉬를 위한 함수.
   const reloadPage = (value) => {
    setIsSearching(value);
  };

  return (
    <HashRouter>
      {!isSearching && <Navigation onSearch={search} />}
      {/* 영화 상세페이지 */}
      <Route path="/movie/:movieId" component={MovieItem} />
      {/* 검색 중인 경우 */}
      {isSearching && <Search movie={movie} reloadPage={reloadPage}/>}
      {/* 검색 중이 아닌 경우 */}
      {!isSearching && <Route path="/" exact={true} component={MovieHome}></Route>}
      {!isSearching && <Route path="/playing" component={NowPlaying}></Route>}
      {!isSearching && <Route path="/popular" component={Popular}></Route>}
      {!isSearching && <Route path="/Upcoming" component={Upcoming}></Route>}
      {!isSearching && <Route path="/topRated" component={TopRated}></Route>}
    </HashRouter>
  );
}