import React, { useState } from "react";
import { API_URL, API_KEY, IMAGE_BASE_URL } from "../Config";
import MovieList from "../components/MovieList/MovieList";
import styles from "./Container.module.css";
import useFetchList from "../hooks/useFetchList";
import MovieMoreBtn from "../components/MovieMoreBtn/MovieMoreBtn";

// 현재상영중인 영화 목록 페이지
export default function NowPlaying() {
  // 현재페이지 상태값
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch 현재 상영중인 영화 리스트
  const url = `${API_URL}movie/now_playing?api_key=${API_KEY}&language=en-US&page=${currentPage}`
  const [nowPlayingMovies, loading] = useFetchList(url);

  // 영화 리스트 다음 페이지 보여주는 함수.
  const showMoreMovies = (currentPage) => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
  };

  return (
    <section className={styles.section}>
      <h1 className={styles.header}>현재 상영작</h1>
      <div className={styles.container}>
        {/* 현재상영중인 영화리스트 */}
        {loading && <p>Loading...</p>}
        {!loading &&
          nowPlayingMovies.map((movie) => (
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
          ))
        }
      </div>
      {/* 영화 리스트 더보기 버튼 */}
      {!loading &&
        <MovieMoreBtn showMoreMovies={showMoreMovies} currentPage={currentPage} />
      }
    </section>
  );
}
