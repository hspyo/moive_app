import React, { useState } from "react";
import { HashRouter, Link, Route } from "react-router-dom";
import { IMAGE_BASE_URL } from "./Config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
import MovieHome from "./components/MovieHome/MovieHome";
import Navigation from "./components/Navbar/Navigation";
import MovieItem from "./components/MovieItem/MovieItem";
import NowPlaying from "./routers/NowPlaying";
import Popular from "./routers/Popular";
import Upcoming from "./routers/Upcoming";
import TopRated from "./routers/TopRated";
import styles from "./App.module.css";
import MovieList from "./components/MovieList/MovieList";

// 검색을 위한 searchApi를 받아온다.
export default function App({ searchApi }) {
  // 검색시 받아오는 영화 리스트
  const [movie, setMovie] = useState([]);
  const search = (query) => {
    searchApi.search(query).then((movie) => setMovie(movie));
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
      {isSearching && (
        <section className={styles.section}>
          <button
            className={styles.reloadBtn}
            onClick={() => reloadPage(false)}
          >
            <Link className={styles.reloadLink} to="/">
              Back <FontAwesomeIcon icon={faLongArrowAltLeft} />
            </Link>
          </button>
          {/* 검색 결과 유무 */}
          {!movie && <p className={styles.searchMsg}> 검색 결과가 없습니다. </p>}
          {movie && movie.length === 0 && <p className={styles.searchMsg}> 검색 결과가 없습니다. </p> }
          {movie && (
            <div className={styles.container}>
              <p className={styles.searchResult}>검색 결과 {movie.length} </p>
              {movie.map((movie) => (
                <MovieList
                  key={movie.id}
                  image={
                    movie.poster_path
                      ? `${IMAGE_BASE_URL}w500${movie.poster_path}`
                      : null
                  }
                  movieId={movie.id}
                  movieName={movie.title}
                  movieReleaseDate={movie.release_date}
                  movieLanguage={movie.original_language}
                  movieRate={movie.vote_average}
                />
              ))}
            </div>
          )}
        </section>
      )}
      {/* 검색 중이 아닌 경우 */}
      {!isSearching && <Route path="/" exact={true} component={MovieHome} />}
      {!isSearching && <Route path="/playing" component={NowPlaying} />}
      {!isSearching && <Route path="/popular" component={Popular} />}
      {!isSearching && <Route path="/Upcoming" component={Upcoming} />}
      {!isSearching && <Route path="/topRated" component={TopRated} />}
    </HashRouter>
  );
}
