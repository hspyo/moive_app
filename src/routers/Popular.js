import React, { useState } from "react";
import { API_KEY, API_URL, IMAGE_BASE_URL } from "../Config";
import MovieList from "../components/MovieList/MovieList";
import "./Container.css";
import MovieMoreBtn from "../components/MovieMoreBtn/MovieMoreButton";
import useFetch from "../hooks/useFetch";

// 인기 영화 목록 페이지
export default function Popular() {
  const [currentPage, setCurrentPage] = useState(1);

  // 인기 영화 리스트 API를 호출한다.
  const [popularMovies, loading] = useFetch(
    `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${currentPage}`
  );

  // 영화 리스트 더보기 버튼 함수.
  const showMoreMovies = (currentPage) => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
  };

  return (
    <section className="container">
      <h1 className="movie__section">인기작</h1>
      <div className="movie__container">
        {/* 인기있는 영화리스트 */}
        {loading
          ? "Loading..."
          : popularMovies.map(movie => (
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
      {loading 
        ? "Loading..."
        : <MovieMoreBtn showMoreMovies={showMoreMovies} currentPage={currentPage}/>
      }
    </section>
  );
}
