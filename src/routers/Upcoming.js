import React, { useState } from "react";
import { API_URL, API_KEY, IMAGE_BASE_URL } from "../Config";
import MovieList from "../components/MovieList/MovieList";
import "./Container.css";
import useFetch from '../hooks/useFetch';
import MovieMoreBtn from '../components/MovieMoreBtn/MovieMoreBtn';

// 개봉예정 영화 목록 페이지
export default function Upcoming() {
  const [CurrentPage, setCurrentPage] = useState(1);

  // 개봉예정 영화 리스트 API를 호출한다.
  const movies = useFetch(`${API_URL}movie/upcoming?api_key=${API_KEY}&language=en-US&page=${CurrentPage}`);

  // 영화 리스트 더보기 버튼 함수.
  const showMoreMovies = (currentPage) => {
    const nextPage = currentPage + 1
    setCurrentPage(nextPage);
  };
  
  // 영화 리스트 로딩 후에 더보기 버튼을 보여주기 위한 boolean값
  let isListed = false;

  return (
    <section className="container">
      <h1 className="movie__section">개봉 예정작</h1>
      <div className="movie__container">
        {/* MovieList에 영화 정보에 관한 속성값들을 전달한다. */}
        {movies &&  
          movies.map((movie, index) => (
            <React.Fragment key={index}>
              <MovieList
                image={
                  movie.poster_path
                    ? `${IMAGE_BASE_URL}w500${movie.poster_path}`
                    : null
                }
                movieId={movie.id}
                movieName={movie.title}
                movieReleaseDate={movie.release_date}
                movieLanguage={movie.original_language}
              />
              {isListed = true}
            </React.Fragment>
          ))}
      </div>
      {/* 영화 리스트가 로딩된 후 더보기 버튼을 보여준다. */}
      {isListed &&
        <MovieMoreBtn showMoreMovies={showMoreMovies} currentPage={CurrentPage} />}
    </section>
  );
}
